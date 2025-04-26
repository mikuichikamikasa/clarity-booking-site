
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-therapy-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-playfair text-xl font-semibold">Aygul Tatlici</h3>
            <p className="text-white/80 text-sm">
              Registered Psychotherapist
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-white/80">
              &copy; {currentYear} Aygul Tatlici. {t("footer.rights")}.
            </p>
            <div className="flex justify-center md:justify-end space-x-4 mt-2">
              <a 
                href="https://instagram.com/psychotherapy.aygultatlici" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a 
                href="mailto:psychaygul@gmail.com" 
                className="text-white/80 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
