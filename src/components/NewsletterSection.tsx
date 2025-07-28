import React, { useState, useEffect } from "react";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

interface NewsletterContent {
  title: string;
  subtitle: string;
  subscriptionText: string;
  privacyText: string;
}

const NewsletterSection = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterData, setNewsletterData] = useState<NewsletterContent | null>(null);

  useEffect(() => {
    const loadNewsletterContent = async () => {
      try {
        const response = await fetch('/newsletter-content.json');
        if (response.ok) {
          const data = await response.json();
          setNewsletterData(data);
        }
      } catch (error) {
        console.error('Failed to load newsletter content:', error);
        // Fallback content
        setNewsletterData({
          title: "Newsletter",
          subtitle: "Your source for insights on mental wellness and personal growth.",
          subscriptionText: "Subscribe for monthly updates",
          privacyText: "We respect your privacy. Unsubscribe at any time."
        });
      }
    };

    loadNewsletterContent();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you can add your newsletter signup logic
      // For now, we'll just show a success message
      
      toast({
        title: language === "en" ? "Success!" : "Başarılı!",
        description: language === "en" 
          ? "Thank you for subscribing to our newsletter!" 
          : "Bültenimize abone olduğunuz için teşekkürler!",
        variant: "default",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: language === "en" ? "Error" : "Hata",
        description: language === "en" 
          ? "Failed to subscribe. Please try again." 
          : "Abone olamadık. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!newsletterData) {
    return (
      <section id="newsletter" className="py-16 bg-gradient-to-br from-therapy-muted to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-pulse">Loading newsletter content...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="newsletter" className="py-16 bg-gradient-to-br from-therapy-muted to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in">
          {/* Main Title and Subtitle */}
          <h2 className="text-3xl md:text-4xl font-bold text-therapy-primary mb-4">
            {language === "en" ? newsletterData.title : "Bülten"}
          </h2>
          <p className="text-lg text-therapy-dark/80 mb-8">
            {language === "en" 
              ? newsletterData.subtitle 
              : "Ruhsal sağlık ve kişisel gelişim konularında içgörüler için kaynak."}
          </p>

          {/* Subscription Form */}
          <div className="mb-6">
            <p className="text-base text-therapy-dark/70 mb-4">
              {language === "en" ? newsletterData.subscriptionText : "Aylık güncellemeler için abone olun"}
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={language === "en" ? "Enter your email" : "E-posta adresinizi girin"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 text-center sm:text-left"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-therapy-primary hover:bg-therapy-primary/90 text-white px-8 py-3 transition-transform transform hover:scale-105"
              >
                {isSubmitting 
                  ? (language === "en" ? "Subscribing..." : "Abone oluyor...") 
                  : (language === "en" ? "Subscribe" : "Abone Ol")
                }
              </Button>
            </form>
          </div>
          
          <p className="text-xs text-therapy-dark/60">
            {language === "en"
              ? newsletterData.privacyText
              : "Gizliliğinize saygı duyuyoruz. İstediğiniz zaman abonelikten çıkabilirsiniz."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection; 