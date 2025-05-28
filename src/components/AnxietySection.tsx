import { useLanguage } from "@/lib/i18n/LanguageContext";

const AnxietySection = () => {
  const { t } = useLanguage();

  return (
    <section id="anxiety" className="py-16 bg-therapy-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-therapy-primary mb-8 text-center">
          {t("anxiety.title")}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-gray-700">
            <p className="text-lg">{t("anxiety.message")}</p>
            <p className="text-lg">{t("anxiety.strength")}</p>
            <p className="text-lg">{t("anxiety.support")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnxietySection; 