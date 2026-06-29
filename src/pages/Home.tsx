/*
 * MORIKA — Home Page
 * Assembles all sections: Navbar · Hero · Collection · Story · Contact · Footer
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionSection from "@/components/CollectionSection";
import StorySection from "@/components/StorySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-cream)" }}>
      <Navbar />
      <main>
        <HeroSection />

        {/* Subtle divider between sections */}
        <div
          className="container"
          style={{ borderTop: "1px solid var(--color-line)", opacity: 0.5 }}
        />

        <CollectionSection />
        <StorySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
