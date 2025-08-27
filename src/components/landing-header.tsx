"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Video, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Video className="w-6 h-6" /> */}
            <span className="font-semibold">RunAsh AI</span>
          </Link>

          {/* Mobile menu button */}
          <button
            aria-label="Open menu"
            className="md:hidden p-2 rounded-md hover:bg-white/5"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 hidden md:flex items-center justify-center space-x-8">
          <Link
            href="#features"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="#community"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Community
          </Link>
          <Link
            href="https://github.com/runash-ai-community"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="/chat"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Chat
          </Link>
        </nav>

        <div className="flex flex-1 justify-end items-center space-x-4">
          <Link href="/get-started">
            <Button className="bg-white text-black hover:bg-gray-200">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile overlay menu */}
        {open && (
          <div className="fixed inset-0 z-60 bg-black/80 flex flex-col p-6 md:hidden">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2 text-lg">
                <Video className="w-6 h-6" />
                <span className="font-semibold">RunAsh AI</span>
              </Link>
              <button
                aria-label="Close menu"
                className="p-2 rounded-md hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-4">
              <Link href="#features" onClick={() => setOpen(false)}>
                <span className="text-xl">Features</span>
              </Link>
              <Link href="#community" onClick={() => setOpen(false)}>
                <span className="text-xl">Community</span>
              </Link>
              <Link href="/chat" onClick={() => setOpen(false)}>
                <span className="text-xl">Chat</span>
              </Link>
              <Link
                href="https://github.com/runash-ai-community"
                onClick={() => setOpen(false)}
              >
                <span className="text-xl">GitHub</span>
              </Link>
              <Link href="/app" onClick={() => setOpen(false)}>
                <Button className="mt-4">Open App</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
