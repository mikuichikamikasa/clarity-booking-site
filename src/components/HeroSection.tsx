import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import aygulImage from "/public/lovable-uploads/5a82a45e-8dae-47f5-96bb-e4fbc3aaca10.png";

const HeroSection = () => {
  const { t, language } = useLanguage();
  
  // For debugging
  console.log(`HeroSection rendering with language: ${language}`);
  console.log(`hero.philosophy translation: ${t("hero.philosophy")}`);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-28 md:pb-24 hero-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-therapy-primary mb-3">
              {t("hero.title")}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-therapy-dark mb-6">
              {t("hero.subtitle")}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              {t("hero.philosophy")}
            </p>
            <p className="text-lg text-gray-700 mb-8">
              {t("hero.description")}
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-therapy-primary hover:bg-therapy-primary/90 text-white rounded-full px-8 py-6 transform transition-all duration-300 hover:scale-105"
            >
              {t("hero.cta")}
            </Button>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-therapy-accent shadow-lg transform transition-all duration-300 hover:scale-105">
              <img
                src={aygulImage}
                alt="Aygul TATLICI"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
