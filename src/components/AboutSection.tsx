import { useLanguage } from "@/lib/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-therapy-primary mb-8 text-center">
          {t("about.title")}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-therapy-dark font-medium mb-6">
            {t("about.credentials")}
          </p>
          
          <div className="space-y-6 text-gray-700">
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
            
            <div className="p-8 rounded-xl shadow-sm my-8">
              <p className="text-blue-800 text-xl md:text-2xl font-semibold text-center leading-relaxed tracking-wide">
                Healing and transformation begin with authentic care and connection, and change becomes powerful when someone believes in your potential and ability to grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
