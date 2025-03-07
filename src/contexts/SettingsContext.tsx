import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define all possible settings types that can be managed
export interface SiteSettings {
  // Home page settings
  homeHeroTitle: string;
  homeHeroSubtitle: string;
  premiumMatchDate: string;
  premiumMatchOdd: number;
  premiumMatchPrice: number;
  
  // Prediction categories
  freePredictionsTitle: string;
  underOverPredictionsTitle: string;
  correctScorePredictionsTitle: string;
  
  // About page
  aboutPageTitle: string;
  aboutPageContent: string;
  aboutPageMission: string;
  
  // SEO settings
  siteName: string;
  metaDescription: string;
  keywords: string;

  // Other settings can be added as needed
}

// Default settings
const defaultSettings: SiteSettings = {
  // Home page
  homeHeroTitle: "Expert Football Predictions & Analysis",
  homeHeroSubtitle: "Get winning insights with our match predictions, betting tips, and exclusive analysis from football experts.",
  premiumMatchDate: "06.06.2025",
  premiumMatchOdd: 13.2,
  premiumMatchPrice: 340,
  
  // Prediction categories
  freePredictionsTitle: "Free Football Predictions",
  underOverPredictionsTitle: "Under/Over Predictions",
  correctScorePredictionsTitle: "Correct Score Predictions",
  
  // About page
  aboutPageTitle: "About Us",
  aboutPageContent: "Welcome to our football prediction service. We provide expert analysis and predictions for football matches across major leagues. Our team of experts analyzes statistics, form, and other factors to bring you the most accurate predictions possible.",
  aboutPageMission: "To provide reliable and accurate football predictions to help our users make informed decisions.",
  
  // SEO settings
  siteName: "RichPredict - Football Predictions & Betting Tips",
  metaDescription: "Get expert football predictions, betting tips and analysis for matches from all major leagues. Free and premium predictions available.",
  keywords: "football predictions, betting tips, soccer predictions, football betting",
};

interface SettingsContextType {
  settings: SiteSettings;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  resetSettings: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('siteSettings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(prevSettings => ({
          ...prevSettings,
          ...parsedSettings
        }));
      } catch (error) {
        console.error('Failed to parse saved settings:', error);
      }
    }
  }, []);

  // Update settings
  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings(prevSettings => {
      const updatedSettings = { ...prevSettings, ...newSettings };
      // Save to localStorage
      localStorage.setItem('siteSettings', JSON.stringify(updatedSettings));
      return updatedSettings;
    });
  };

  // Reset settings to default
  const resetSettings = () => {
    setSettings(defaultSettings);
    localStorage.setItem('siteSettings', JSON.stringify(defaultSettings));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
