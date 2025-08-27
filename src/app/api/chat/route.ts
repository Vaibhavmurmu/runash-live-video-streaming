import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json().catch(() => ({}));

  // If a server-side FAL proxy/credentials exist, you could call it here.
  // For now, provide a simple streaming echo fallback for demo.

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      if (!message) {
        controller.enqueue(encoder.encode("No message provided."));
        controller.close();
        return;
      }

      const reply = `Echo: ${message}`;
      // Stream the reply in small chunks to simulate real-time streaming
      for (let i = 0; i < reply.length; i += 8) {
        const chunk = reply.slice(i, i + 8);
        controller.enqueue(encoder.encode(chunk));
        // small delay to mimic streaming
        await new Promise((r) => setTimeout(r, 30));
      }

      controller.close();
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
