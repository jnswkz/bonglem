import React from "react";

export type Language = "vi" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const STORAGE_KEY = "bonglem-language";

const LanguageContext = React.createContext<LanguageContextValue | undefined>(
  undefined
);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "vi";

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "vi" || saved === "en") return saved;

  const browser = window.navigator.language.toLowerCase();
  return browser.startsWith("vi") ? "vi" : "en";
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = React.useState<Language>(getInitialLanguage);

  React.useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = React.useCallback(() => {
    setLanguage((current) => (current === "vi" ? "en" : "vi"));
  }, []);

  const value = React.useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider.");
  }
  return ctx;
}

