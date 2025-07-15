import { Button } from "@/components/ui/button";
import { Github, Twitter, DiscIcon as Discord } from "lucide-react";
import Link from "next/link";

export default function Community() {
  return (
    <section id="community" className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join our community</h2>
          <p className="text-gray-400 mb-8">
            AI live video streaming platform is built by RunAsh, for creater.
            Join our growing community and help shape the future of video
            generation and editing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="https://github.com/runash-ai-community">
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </Link>
            <Link href="https://discord.gg/runash-ai">
              <Button variant="outline" className="w-full">
                <Discord className="mr-2 h-5 w-5" />
                Discord
              </Button>
            </Link>
            <Link href="https://x.com/runash.ai">
              <Button variant="outline" className="w-full">
                <Twitter className="mr-2 h-5 w-5" />
                Twitter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
