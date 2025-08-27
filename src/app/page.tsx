import Header from "@/components/landing-header";
import Hero from "@/components/landing-hero";
import Features from "@/components/landing-features";
import Community from "@/components/landing-community";
import Footer from "@/components/landing-footer";
import MobileBottomBar from "@/components/mobile-bottom-bar";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header />
      <main className="lg:pt-48">
        <Hero />
        <Features />
        <Community />
      </main>
      <Footer />
  <MobileBottomBar />
    </div>
  );
}
