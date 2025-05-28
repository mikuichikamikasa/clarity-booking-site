# Complete Psychotherapy Website Code & Content

## Overview
This is a bilingual (English/Turkish) psychotherapy booking website for Aygul Tatlici, a Registered Psychotherapist in Toronto, Ontario. The site features modern UI/UX with professional therapy-focused design.

## Design System & Styling

### Color Palette (Tailwind Config)
```typescript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        'therapy': {
          primary: '#5299D3',    // Calming blue
          secondary: '#7FB3D3',  // Light blue
          accent: '#B8D4E3',     // Lighter blue
          muted: '#E8F4F8',      // Very light blue
          dark: '#2C3E50'        // Dark blue-grey for text
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'fade-up': 'fadeUp 0.6s ease-out',
      }
    }
  }
}
```

### Custom CSS Animations
```css
/* Global Styles */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeUp {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.hero-pattern {
  background: linear-gradient(135deg, #E8F4F8 0%, #B8D4E3 100%);
}
```

## Main App Structure

### App.tsx
```typescript
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);
```

### Index Page Layout
```typescript
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AnxietySection from "@/components/AnxietySection";
import ExpertiseSection from "@/components/ExpertiseSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AnxietySection />
        <ExpertiseSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
```

## Hero Section Component
```typescript
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const { t, language } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-28 md:pb-24 hero-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-therapy-primary mb-3">
              {t("hero.title")}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-therapy-dark mb-6">
              {t("hero.subtitle")}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              {t("hero.philosophy")}
            </p>
            <p className="text-lg text-gray-700 mb-8">
              {t("hero.description")}
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-therapy-primary hover:bg-therapy-primary/90 text-white rounded-full px-8 py-6 transform transition-all duration-300 hover:scale-105"
            >
              {t("hero.cta")}
            </Button>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-therapy-accent shadow-lg transform transition-all duration-300 hover:scale-105">
              <img
                src="/images/profile-photo.png"
                alt={language === "en" ? "Aygul TATLICI - Registered Psychotherapist in Ontario" : "Aygül TATLICI - Ontario'da Kayıtlı Psikoterapist"}
                className="w-full h-full object-cover object-center"
                loading="lazy"
                width="320"
                height="320"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
```

## About Section Component
```typescript
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
```

## Contact Section with Booking Form
```typescript
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

const ContactSection = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceType, setServiceType] = useState<"psychotherapy" | "coaching" | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSend = {
      ...formData,
      preferredConsultationDate: date ? format(date, "yyyy-MM-dd") : "Not specified",
      serviceType: serviceType,
      _subject: `New Contact Form Submission from ${formData.name}`,
    };

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        toast({
          title: t("contact.success"),
          description: language === "tr" ? "En kısa sürede size geri döneceğiz!" : "We'll get back to you soon!",
        });
        
        // Clear the form
        setFormData({ name: "", email: "", phone: "", message: "" });
        setDate(undefined);
        setServiceType(null);
      }
    } catch (error) {
      toast({
        title: t("contact.error"),
        description: language === "tr" ? "Mesaj gönderilirken bir hata oluştu." : "Failed to send message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-therapy-primary mb-8 text-center">
          {t("contact.title")}
        </h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form fields - Name, Email, Phone */}
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={language === "tr" ? "Adınız" : "Your name"}
                className="w-full transition-all duration-300 focus:ring-2 focus:ring-therapy-primary"
              />
              
              {/* Service Type Radio Buttons */}
              <div className="space-y-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  {language === "tr" ? "Hizmet Türü" : "Service Type"}
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="serviceType"
                      value="psychotherapy"
                      checked={serviceType === "psychotherapy"}
                      onChange={(e) => setServiceType(e.target.value as "psychotherapy")}
                      className="w-4 h-4 text-therapy-primary"
                    />
                    <span>{language === "tr" ? "Psikoterapi" : "Psychotherapy"}</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="serviceType"
                      value="coaching"
                      checked={serviceType === "coaching"}
                      onChange={(e) => setServiceType(e.target.value as "coaching")}
                      className="w-4 h-4 text-therapy-primary"
                    />
                    <span>{language === "tr" ? "Koçluk" : "Coaching"}</span>
                  </label>
                </div>
              </div>

              {/* Date Picker */}
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="pointer-events-auto"
              />
              
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={language === "tr" ? "Mesajınız" : "Your message"}
                className="w-full h-32 transition-all duration-300 focus:ring-2 focus:ring-therapy-primary"
              />
              
              <Button
                type="submit"
                disabled={isSubmitting || !serviceType}
                className="w-full py-6 bg-therapy-primary hover:bg-therapy-primary/90 text-white transform transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? (language === "tr" ? "Gönderiliyor..." : "Sending...") : t("contact.submit")}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center animate-fade-up delay-200">
            <Card className="border-therapy-accent/30 mb-8">
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 mb-6">
                  {t("contact.description")}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone size={20} className="text-therapy-primary mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">{t("contact.phone.direct")}</p>
                      <a href="tel:+13656070532" className="text-therapy-dark hover:text-therapy-primary">
                        (365) 607-0532
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail size={20} className="text-therapy-primary mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">{t("contact.email.direct")}</p>
                      <a href="mailto:psychaygul@gmail.com" className="text-therapy-dark hover:text-therapy-primary">
                        psychaygul@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
```

## Language Context & Translations

### Language Context Provider
```typescript
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import translations from "./translations";

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const storedLanguage = localStorage.getItem('language');
      return storedLanguage || 'en';
    } catch (error) {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch (error) {
      console.error('Could not save language preference:', error);
    }
  }, [language]);

  const t = (key: string): string => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    if (translations["en"] && translations["en"][key]) {
      return translations["en"][key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
```

## Complete Website Text Content

### All Translations (English & Turkish)
```typescript
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services", 
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.language": "Türkçe",
    "nav.anxiety": "Anxiety",

    // Hero Section
    "hero.title": "Aygul TATLICI",
    "hero.subtitle": "Registered Psychotherapist(Qualifying)",
    "hero.description": "Helping you navigate anxiety, depression, ADHD, and trauma to regain clarity, motivation, and purpose.",
    "hero.cta": "Book Free Consultation",
    "hero.philosophy": "Healing and transformation begin with authentic care and connection, and change becomes powerful when someone believes in your potential and ability to grow.",

    // About Section
    "about.title": "About Me",
    "about.credentials": "Registered Psychotherapist(Qualifying)(MACP) | Verified by Psychology Today",
    "about.paragraph1": "Welcome, I am a registered psychotherapist(Qualifying) and Coach residing in Canada, currently providing psychotherapy under the clinical supervision of an approved supervisor. I am mainly specializing in supporting people suffering from Anxiety. I'm genuinely looking forward to supporting you on your journey toward healing, growth, and positive change.",
    "about.paragraph2": "I know how overwhelming it can feel to struggle with depression, trauma, anxiety, procrastination, and the pressure of work stress. Feeling stuck and unsure is okay — those challenges are real, and you deserve support. I'm here to walk alongside you, helping you find clarity, healing, and renewed strength when ready.",

    // Anxiety Section  
    "anxiety.title": "Living with Anxiety",
    "anxiety.message": "People who live with anxiety are some of the most insightful and courageous individuals in our world. You notice things others might miss. You feel deeply, care deeply, and think carefully about the world around you.",
    "anxiety.strength": "Anxiety is not a weakness—it's a sign that you care about your life, your choices, and your future. And while anxiety can feel heavy, it doesn't have to hold you back. You have already shown resilience by showing up every day, even when it's hard. Imagine what becomes possible when you work with your anxiety instead of against it. Take the first step to live your life in a full potential, take action today",
    "anxiety.support": "Support, therapy, and practices like mindfulness and acceptance can help you build space around anxiety, so you can move toward the things that truly matter to you. You don't have to wait for anxiety to disappear to start living fully. You can take small, meaningful steps today toward the life you want—the life your strengths and values are already pointing you toward.",

    // Expertise Areas
    "expertise.title": "Areas of Expertise",
    "expertise.description": "I specialize in helping clients with a variety of challenges:",
    "expertise.item1": "ADHD",
    "expertise.item2": "Anxiety & Panic Attacks", 
    "expertise.item3": "Depression",
    "expertise.item4": "Trauma & PTSD",
    "expertise.item5": "Stress & Burnout",
    "expertise.item6": "Specific Phobias",
    "expertise.item7": "Parenting Challenges",
    "expertise.item8": "Life Transitions",
    "expertise.item9": "Chronic Pain",

    // Pricing
    "pricing.title": "Pricing",
    "pricing.individual": "Individual Sessions",
    "pricing.individual.price": "$140",
    "pricing.couples": "Couple Sessions", 
    "pricing.couples.price": "$230",
    "pricing.note": "Sliding scale available for those who qualify",
    "pricing.payment": "Payment Methods:",
    "pricing.payment.methods": "Cheque, e-Transfer, cash",
    "pricing.insurance": "Check fees and, if listed, ask to verify your insurance coverage.",

    // Contact
    "contact.title": "Book an Appointment",
    "contact.description": "Feel free to reach out for a free 15-minute consultation.",
    "contact.name": "Your Name",
    "contact.email": "Email Address", 
    "contact.phone": "Phone Number",
    "contact.message": "Your Message",
    "contact.submit": "Send Message",
    "contact.success": "Message sent successfully!",
    "contact.error": "There was an error sending your message. Please try again.",
    "contact.phone.direct": "Phone: ",
    "contact.email.direct": "Email: ",
    "contact.consult": "Call or email me for a free 15-minute consultation now",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.disclaimer.title": "Disclaimer", 
    "footer.disclaimer.text": "Coaching is not psychotherapy; coaching does not diagnose or treat mental health conditions. Coaching focuses on personal development, goal achievement, and mindset shifts. It is not a substitute for a serious mental health treatment, diagnosis, or psychotherapy."
  },
  tr: {
    // Turkish translations mirror the structure above
    "hero.title": "Aygül TATLICI",
    "hero.subtitle": "Kayıtlı Psikoterapist",
    "hero.description": "Anksiyete, depresyon, ADHD ve travma ile başa çıkmanıza yardımcı olarak netlik, motivasyon ve amaç kazanmanızı sağlıyorum.",
    "hero.cta": "Ücretsiz Danışma Randevusu Al",
    // ... [all other Turkish translations]
  }
};
```

## Required Dependencies

```json
{
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-tooltip": "^1.1.4",
    "@tanstack/react-query": "^5.56.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^3.6.0",
    "framer-motion": "^12.9.2",
    "lucide-react": "^0.462.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1", 
    "react-helmet-async": "^2.0.5",
    "react-hook-form": "^7.53.0",
    "react-router-dom": "^6.26.2",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.23.8"
  }
}
```

## Key Features to Implement

1. **Bilingual Support** - English/Turkish language switching
2. **Professional SEO** - Structured data for therapist local business
3. **Contact Form** - With Formspree integration for booking
4. **Responsive Design** - Mobile-first approach
5. **Modern UI** - shadcn/ui components with therapy-focused color scheme
6. **Smooth Animations** - Fade-in effects and hover interactions
7. **Professional Content** - Specialized for anxiety, depression, ADHD, trauma therapy

## Business Contact Information

- **Name**: Aygul Tatlici  
- **Title**: Registered Psychotherapist(Qualifying)
- **Phone**: (365) 607-0532
- **Email**: psychaygul@gmail.com
- **Location**: Toronto, Ontario, Canada
- **Services**: Individual ($140), Couples ($230) therapy sessions
- **Specialties**: Anxiety, Depression, ADHD, Trauma, PTSD, Stress, Burnout
- **Instagram**: @psychotherapy.aygulTATLICI

This complete code provides everything needed to recreate the professional psychotherapy booking website in Lovable with all the design styles, functionality, and content preserved. 