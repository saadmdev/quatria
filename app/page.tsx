import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutStatementSection from "@/components/AboutStatementSection";
import FourSeasonsSection from "@/components/FourSeasonsSection";
import BrandIntroduction from "@/components/BrandIntroduction";
import SignatureCollection from "@/components/SignatureCollection";
import FragrancePhilosophy from "@/components/FragrancePhilosophy";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FragranceModal from "@/components/FragranceModal";
import ScentFinderModal from "@/components/ScentFinderModal";
import { CartProvider } from "@/context/CartContext";

export default function Home() {
  return (
    <CartProvider>
      <main className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#141312] selection:bg-[#C8A97E]/25 selection:text-[#141312]">
        {/* 1. Existing Navigation & Hero Section */}
        <Navbar />
        <HeroSection />
        <AboutStatementSection />

        {/* 2. Four Seasons — The Main Immersive Seasonal Experience */}
        <FourSeasonsSection />

        {/* 3. Brand Story — The Philosophy Behind Quatréa */}
        <BrandIntroduction />

        {/* 4. The Collection — Four Perfume Products Displayed Together */}
        <SignatureCollection />

        {/* 5. Signature Experience — The Atelier Craft & Haute Parfumerie */}
        <FragrancePhilosophy />

        {/* 6. Final CTA — Find Your Season (Interactive Concierge Quiz & Dispatch) */}
        <NewsletterSection />

        {/* 7. Premium Footer */}
        <Footer />

        {/* Modals & Cart Drawer */}
        <CartDrawer />
        <FragranceModal />
        <ScentFinderModal />
      </main>
    </CartProvider>
  );
}
