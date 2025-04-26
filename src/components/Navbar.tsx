
import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-playfair font-semibold text-therapy-primary">
            Aygul Tatlici
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection("home")} 
            className="text-therapy-dark hover:text-therapy-primary transition-colors"
          >
            {t("nav.home")}
          </button>
          <button 
            onClick={() => scrollToSection("about")} 
            className="text-therapy-dark hover:text-therapy-primary transition-colors"
          >
            {t("nav.about")}
          </button>
          <button 
            onClick={() => scrollToSection("expertise")} 
            className="text-therapy-dark hover:text-therapy-primary transition-colors"
          >
            {t("nav.services")}
          </button>
          <button 
            onClick={() => scrollToSection("pricing")} 
            className="text-therapy-dark hover:text-therapy-primary transition-colors"
          >
            {t("nav.pricing")}
          </button>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="text-therapy-dark hover:text-therapy-primary transition-colors"
          >
            {t("nav.contact")}
          </button>
        </div>

        <div className="flex items-center">
          <Button 
            onClick={toggleLanguage}
            variant="ghost" 
            size="sm" 
            className="mr-2 text-therapy-primary hover:text-therapy-primary hover:bg-therapy-muted"
          >
            <Globe size={16} className="mr-1" />
            {t("nav.language")}
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 focus:outline-none"
          >
            <div className="w-6 flex flex-col gap-1">
              <span className={`bg-therapy-primary h-0.5 w-full block transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`bg-therapy-primary h-0.5 w-full block transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-therapy-primary h-0.5 w-full block transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <button 
              onClick={() => scrollToSection("home")}
              className="py-2 text-left text-therapy-dark hover:text-therapy-primary transition-colors"
            >
              {t("nav.home")}
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="py-2 text-left text-therapy-dark hover:text-therapy-primary transition-colors"
            >
              {t("nav.about")}
            </button>
            <button 
              onClick={() => scrollToSection("expertise")} 
              className="py-2 text-left text-therapy-dark hover:text-therapy-primary transition-colors"
            >
              {t("nav.services")}
            </button>
            <button 
              onClick={() => scrollToSection("pricing")} 
              className="py-2 text-left text-therapy-dark hover:text-therapy-primary transition-colors"
            >
              {t("nav.pricing")}
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="py-2 text-left text-therapy-dark hover:text-therapy-primary transition-colors"
            >
              {t("nav.contact")}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
