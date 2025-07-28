import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import AnxietySection from "../components/AnxietySection";
import ExpertiseSection from "../components/ExpertiseSection";
import PricingSection from "../components/PricingSection";
import NewsletterSection from "../components/NewsletterSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AnxietySection />
        <ExpertiseSection />
        <PricingSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
