import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import translations from "./translations";

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    try {
      const storedLanguage = localStorage.getItem('language');
      return storedLanguage || 'en';
    } catch (error) {
      // In case localStorage is not available
      return 'en';
    }
  });

  // Persist language changes to localStorage
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
    // Fallback to English if translation is not found
    if (translations["en"] && translations["en"][key]) {
      return translations["en"][key];
    }
    // Return key as fallback if no translation found
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
