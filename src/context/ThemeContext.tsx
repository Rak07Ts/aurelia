import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeMode } from '../types/dsf';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  themeName: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('aurelia_theme') as ThemeMode;
    return saved || 'default';
  });

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('aurelia_theme', newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, [theme]);

  const themeName =
    theme === 'immersive_dark'
      ? 'Immersive Dark'
      : theme === 'earth_retreat'
      ? 'Earth Retreat'
      : 'Editorial Light';

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
