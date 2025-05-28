import React, { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    console.log(`Switching language from ${language} to ${newLanguage}`);
    setLanguage(newLanguage);
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
            Aygul TATLICI
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
            onClick={() => scrollToSection("anxiety")} 
            className="text-therapy-dark hover:text-therapy-primary transition-colors"
          >
            {t("nav.anxiety")}
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

          {/* Language Toggle Button */}
          <Button
            variant="ghost"
            onClick={toggleLanguage}
            className="flex items-center text-therapy-dark hover:text-therapy-primary"
          >
            <Globe className="mr-1 h-4 w-4" />
            {t("nav.language")}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu} className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
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
              onClick={() => scrollToSection("anxiety")} 
              className="py-2 text-left text-therapy-dark hover:text-therapy-primary transition-colors"
            >
              {t("nav.anxiety")}
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
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="flex items-center justify-start py-2 text-therapy-dark hover:text-therapy-primary"
            >
              <Globe className="mr-1 h-4 w-4" />
              {t("nav.language")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
