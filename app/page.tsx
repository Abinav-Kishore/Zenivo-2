import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PaymentBanner from "@/components/PaymentBanner";
import TravelSection from "@/components/TravelSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import BigCTA from "@/components/BigCTA";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <PaymentBanner />
      <TravelSection />
      <ActivitiesSection />
      <BigCTA />
      <FAQSection />
      <CTASection />
      <NewsletterSection />
      <Footer />
      <MobileBottomNav />
    </>
  );
}
