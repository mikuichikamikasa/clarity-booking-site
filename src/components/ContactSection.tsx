import { useState } from "react";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { useToast } from "../hooks/use-toast";
import { Mail, Phone } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";

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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const [serviceType, setServiceType] = useState<"psychotherapy" | "coaching" | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare data for Formspree
    const dataToSend = {
      ...formData,
      preferredConsultationDate: date ? format(date, "yyyy-MM-dd") : "Not specified",
      serviceType: serviceType,
      _subject: `New Contact Form Submission from ${formData.name}`,
    };

    try {
      const response = await fetch("https://formspree.io/f/xvgakoar", {
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
          variant: "default",
        });
        
        // Clear the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setDate(undefined);
        setServiceType(null);
      } else {
        // Handle server errors from Formspree
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: t("contact.error"),
        description: language === "tr" ? "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin." : "Failed to send message. Please try again.",
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
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  {t("contact.name")}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={language === "tr" ? "Adınız" : "Your name"}
                  className="w-full transition-all duration-300 focus:ring-2 focus:ring-therapy-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  {t("contact.email")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={language === "tr" ? "E-posta adresiniz" : "Your email"}
                  className="w-full transition-all duration-300 focus:ring-2 focus:ring-therapy-primary"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                  {t("contact.phone")}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder={language === "tr" ? "Telefon numaranız" : "Your phone number"}
                  className="w-full transition-all duration-300 focus:ring-2 focus:ring-therapy-primary"
                />
              </div>

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

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  {language === "tr" ? "Tercih Edilen Danışma Tarihi" : "Preferred Consultation Date"}
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start text-left font-normal ${!date && 'text-muted-foreground'}`}
                    >
                      {date ? format(date, "PPP") : <span>{language === "tr" ? "Bir tarih seçin" : "Pick a date"}</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={language === "tr" ? "Mesajınız" : "Your message"}
                  className="w-full h-32 transition-all duration-300 focus:ring-2 focus:ring-therapy-primary"
                />
              </div>
              
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
            
            <div className="bg-therapy-muted p-6 rounded-lg text-center">
              <p className="font-medium text-therapy-primary mb-3">
                {t("contact.consult")}
              </p>
              
              <div className="flex justify-center space-x-4 mt-4">
                <a 
                  href="https://instagram.com/psychotherapy.aygulTATLICI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-therapy-dark hover:text-therapy-primary transition-colors"
                  aria-label={language === "tr" ? "Instagram sayfamızı ziyaret edin" : "Visit our Instagram page"}
                >
                  Instagram
                </a>
                <a 
                  href="tel:+14376887521" 
                  className="text-therapy-dark hover:text-therapy-primary transition-colors"
                  aria-label={language === "tr" ? "Bizi telefonla arayın" : "Call us by phone"}
                >
                  {language === "tr" ? "Telefon" : "Phone"}: +1 (437) 688-7521
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
