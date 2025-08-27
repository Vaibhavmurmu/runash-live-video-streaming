"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: uid(), role: "user", content: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    // Start assistant placeholder
    const assistantId = uid();
    setMessages((m) => [...m, { id: assistantId, role: "assistant", content: "" }]);
    setIsStreaming(true);

    try {
      // Use EventSource-like streaming via fetch and ReadableStream if available
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) {
        throw new Error("Chat API error");
      }

      const reader = res.body?.getReader();
      if (!reader) {
        const text = await res.text();
        setMessages((m) => m.map((x) => (x.id === assistantId ? { ...x, content: x.content + text } : x)));
        setIsStreaming(false);
        return;
      }

      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        setMessages((m) => m.map((x) => (x.id === assistantId ? { ...x, content: x.content + chunk } : x)));
      }
    } catch (err) {
      setMessages((m) => [...m, { id: uid(), role: "assistant", content: "Error: " + String(err) }]);
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div className="bg-white/5 rounded-lg p-4 h-[70vh] flex flex-col">
      <div className="flex-1 overflow-auto mb-4" ref={ref}>
        {messages.length === 0 && (
          <div className="text-center text-gray-400 mt-12">Start a conversation</div>
        )}
        <div className="flex flex-col gap-4">
          {messages.map((m) => (
            <div key={m.id} className={m.role === "user" ? "self-end bg-white/10 p-3 rounded-lg max-w-[70%]" : "self-start bg-white/3 p-3 rounded-lg max-w-[70%]"}>
              <div className="whitespace-pre-wrap">{m.content}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <textarea
          className="flex-1 bg-white/3 rounded-md p-2 outline-none resize-none h-10"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
          placeholder="Type a message..."
          rows={1}
        />
        <button className="bg-white text-black px-4 py-2 rounded-md" onClick={send} disabled={isStreaming}>
          Send
        </button>
      </div>
    </div>
  );
}
