import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language] = useState('he');

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', 'he');
    // Update HTML lang attribute
    document.documentElement.lang = 'he';
    // Update HTML dir attribute for RTL
    document.documentElement.dir = 'rtl';
  }, []);

  const value = {
    language,
    setLanguage: () => { },
    toggleLanguage: () => { },
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

