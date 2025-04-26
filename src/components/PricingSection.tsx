
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="pricing" className="py-16 bg-therapy-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-therapy-primary mb-8 text-center">
          {t("pricing.title")}
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center max-w-3xl mx-auto">
          <Card className="w-full md:w-1/2 border-therapy-accent/30">
            <CardHeader className="bg-therapy-primary text-white rounded-t-lg">
              <CardTitle className="text-center text-2xl">
                {t("pricing.individual")}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 text-center">
              <p className="text-3xl font-bold text-therapy-dark mb-4">
                {t("pricing.individual.price")}
              </p>
            </CardContent>
          </Card>
          
          <Card className="w-full md:w-1/2 border-therapy-accent/30">
            <CardHeader className="bg-therapy-primary text-white rounded-t-lg">
              <CardTitle className="text-center text-2xl">
                {t("pricing.couples")}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 text-center">
              <p className="text-3xl font-bold text-therapy-dark mb-4">
                {t("pricing.couples.price")}
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-therapy-dark mb-4">
            {t("pricing.note")}
          </p>
          <p className="text-therapy-dark mb-2">
            <span className="font-medium">{t("pricing.payment")}</span> {t("pricing.payment.methods")}
          </p>
          <p className="text-sm text-gray-500 mt-6">
            {t("pricing.insurance")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
