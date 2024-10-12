import { createContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  // Get the initial language from local storage or default to English
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en-US";
  });

  // Update local storage whenever the language changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Function to change the language
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };
