
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

const ExpertiseSection = () => {
  const { t } = useLanguage();
  
  const expertiseItems = [
    { key: "expertise.item1", icon: "🧠" },
    { key: "expertise.item2", icon: "😰" },
    { key: "expertise.item3", icon: "😔" },
    { key: "expertise.item4", icon: "🔄" },
    { key: "expertise.item5", icon: "🔥" },
    { key: "expertise.item6", icon: "😨" },
    { key: "expertise.item7", icon: "👪" },
    { key: "expertise.item8", icon: "🛤️" },
    { key: "expertise.item9", icon: "🩺" },
  ];

  return (
    <section id="expertise" className="py-16 bg-therapy-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-therapy-primary mb-8 text-center">
          {t("expertise.title")}
        </h2>
        
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          {t("expertise.description")}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {expertiseItems.map((item, index) => (
            <Card key={index} className="border-therapy-accent/30 hover:border-therapy-accent transition-colors">
              <CardContent className="flex items-center p-6">
                <span className="text-2xl mr-3">{item.icon}</span>
                <span className="text-therapy-dark">{t(item.key)}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm max-w-3xl mx-auto">
          <p className="text-gray-700 italic">
            {t("expertise.approach")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
