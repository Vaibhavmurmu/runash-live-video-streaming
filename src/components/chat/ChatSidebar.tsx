"use client";

import { useState } from "react";

export default function ChatSidebar() {
  const [convos, setConvos] = useState<string[]>(["General"]);

  return (
    <div className="bg-white/5 rounded-lg p-4 h-full">
      <h3 className="font-semibold mb-4">Conversations</h3>
      <ul className="flex flex-col gap-2">
        {convos.map((c) => (
          <li key={c} className="px-3 py-2 bg-white/2 rounded-md">
            {c}
          </li>
        ))}
      </ul>
      <button
        className="mt-4 w-full bg-white/10 py-2 rounded-md"
        onClick={() => setConvos((s) => [...s, `New ${s.length + 1}`])}
      >
        + New
      </button>
    </div>
  );
}
