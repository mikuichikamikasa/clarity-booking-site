import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const title = language === "en" ? "Page Not Found" : "Sayfa Bulunamadı";
  const description = language === "en" 
    ? "The page you are looking for doesn't exist. Return to the home page."
    : "Aradığınız sayfa mevcut değil. Ana sayfaya dönün.";

  return (
    <>
      <SEO 
        title={title}
        description={description}
        pagePath="/404"
      />
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-20">
        <div className="text-center p-8 bg-white shadow-md rounded-lg max-w-md">
          <h1 className="text-6xl font-bold mb-4 text-therapy-primary">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 mb-8">{description}</p>
          <Button 
            onClick={() => window.location.href = "/"}
            className="bg-therapy-primary hover:bg-therapy-primary/90 text-white px-6 py-2"
          >
            {language === "en" ? "Return to Home" : "Ana Sayfaya Dön"}
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
