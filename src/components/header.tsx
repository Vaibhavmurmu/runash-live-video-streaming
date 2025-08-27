"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { SettingsIcon } from "lucide-react";
import { KeyDialog } from "@/components/key-dialog";
import { useEffect, useState } from "react";

export default function Header({
  openKeyDialog,
}: {
  openKeyDialog?: () => void;
}) {
  const [hasKey, setHasKey] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setHasKey(!!localStorage.getItem("falKey"));
  }, []);
  return (
    <header className="px-4 py-2 flex justify-between items-center border-b border-border">
      <h1 className="text-lg font-medium">
        <Logo />
      </h1>
      <nav className="flex flex-row items-center justify-end gap-1">
        <Button variant="ghost" size="sm" asChild>
          <a
            href="https://ai.runash.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            RunAsh AI
          </a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a
            href="https://github.com/runash-ai-community"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Button>
        {process.env.NEXT_PUBLIC_CUSTOM_KEY && openKeyDialog && (
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={openKeyDialog}
          >
            {hasKey !== null && !hasKey && (
              <span className="dark:bg-orange-400 bg-orange-600 w-2 h-2 rounded-full absolute top-1 right-1"></span>
            )}
            <SettingsIcon className="w-6 h-6" />
          </Button>
        )}
      </nav>
    </header>
  );
}
