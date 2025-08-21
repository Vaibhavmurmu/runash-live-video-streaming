import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AuthProvider } from "@/components/auth/auth-provider"

export const metadata: Metadata = {
  title: "AI Live Video Streaming Generation Model  | By RunAsh AI Research Lab",
  description: "AI live video streaming generator .",
  generator: RunAsh AI
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased dark">
        {children}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AuthProvider>
            {/* <SidebarProvider defaultOpen={true}>{children}</SidebarProvider> */}
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
