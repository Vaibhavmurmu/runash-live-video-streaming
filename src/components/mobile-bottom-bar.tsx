"use client";

import Link from "next/link";
import { Home, Play, Settings } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black/80 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-4">
        <Link href="/" className="p-2 rounded-full hover:bg-white/5">
          <Home className="w-5 h-5" />
        </Link>
        <Link href="/app" className="p-2 rounded-full hover:bg-white/5">
          <Play className="w-5 h-5" />
        </Link>
        <Link href="/login" className="p-2 rounded-full hover:bg-white/5">
          <Settings className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
