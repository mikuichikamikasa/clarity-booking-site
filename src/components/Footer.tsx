import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-therapy-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-playfair text-xl font-semibold">Aygul TATLICI</h3>
            <p className="text-white/80 text-sm">
              Registered Psychotherapist(Qualifying)
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-white/80">
              &copy; {currentYear} Aygul TATLICI. {t("footer.rights")}.
            </p>
            <div className="flex justify-center md:justify-end space-x-4 mt-2 items-center">
              <a 
                href="https://instagram.com/psychotherapy.aygulTATLICI" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.youtube.com/channel/UChjZVJe2wdTi46rpmiEfPdQ" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="mailto:psychaygul@gmail.com" 
                aria-label="Email"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <h4 className="font-semibold mb-2">{t("footer.disclaimer.title")}</h4>
          <p className="text-xs text-white/70 max-w-3xl mx-auto">
            {t("footer.disclaimer.text")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
