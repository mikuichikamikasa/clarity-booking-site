import React, { useState, useEffect } from "react";
import { useLanguage } from "../lib/i18n/LanguageContext";

interface NewsletterContent {
  title: string;
  subtitle: string;
  subscriptionText: string;
  privacyText: string;
}

const NewsletterSection = () => {
  const { language } = useLanguage();
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
            
            {/* Google Forms Integration - Completely FREE & Unlimited */}
            <div className="max-w-md mx-auto">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdI-gcxuk75e4T3xodo0rbdveouQUEwTfId4Nd0IjIrq7LKnw/viewform?embedded=true"
                width="100%" 
                height="300"
                style={{ border: 'none' }}
                title="Newsletter Subscription"
                className="hidden"
                id="google-form-iframe"
              >
                Loading…
              </iframe>
              
              {/* Custom styled form that submits to Google Forms */}
              <form 
                action="https://docs.google.com/forms/d/e/1FAIpQLSdI-gcxuk75e4T3xodo0rbdveouQUEwTfId4Nd0IjIrq7LKnw/formResponse"
                method="post"
                target="hidden_iframe"
                className="flex flex-col sm:flex-row gap-4"
                onSubmit={() => {
                  setTimeout(() => {
                    alert(language === "en" ? "Thank you for subscribing!" : "Abone olduğunuz için teşekkürler!");
                  }, 500);
                }}
              >
                <input
                  type="email"
                  name="entry.1520451405"
                  placeholder={language === "en" ? "Enter your email" : "E-posta adresinizi girin"}
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-therapy-primary focus:border-transparent text-center sm:text-left"
                />
                <button 
                  type="submit" 
                  className="bg-therapy-primary hover:bg-therapy-primary/90 text-white px-8 py-3 rounded-lg transition-transform transform hover:scale-105"
                >
                  {language === "en" ? "Subscribe" : "Abone Ol"}
                </button>
              </form>
              
              {/* Hidden iframe to handle form submission */}
              <iframe 
                name="hidden_iframe" 
                id="hidden_iframe" 
                style={{ display: 'none' }}
                title="Hidden form handler"
              ></iframe>
            </div>
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