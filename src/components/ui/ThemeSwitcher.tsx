import React, { useState } from 'react';
import { Sun, Moon, Mountain, Palette } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { ThemeMode } from '../../types/dsf';

export const ThemeSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, setTheme, themeName } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes: { id: ThemeMode; label: string; icon: React.ReactNode; previewBg: string }[] = [
    { id: 'default', label: 'Editorial Light', icon: <Sun size={15} />, previewBg: '#F9F7F2' },
    { id: 'immersive_dark', label: 'Immersive Dark', icon: <Moon size={15} />, previewBg: '#111410' },
    { id: 'earth_retreat', label: 'Earth Retreat', icon: <Mountain size={15} />, previewBg: '#EBE6D9' },
  ];

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-[2px] border border-border-default hover:border-accent-primary bg-surface-primary text-text-primary text-body-s transition-all cursor-pointer shadow-subtle"
        title="Switch atmospheric theme"
      >
        <Palette size={14} className="text-accent-primary" />
        <span className="hidden sm:inline font-medium text-caption">{themeName}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 p-2 rounded-[2px] bg-surface-primary border border-border-default shadow-large z-50 animate-in fade-in slide-in-from-top-1">
          <p className="px-2 py-1 text-[10px] font-semibold uppercase tracking-uppercase text-text-muted">
            Atmospheric Theme
          </p>
          <div className="space-y-1 mt-1">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-2 text-body-s rounded-[2px] text-left transition-colors cursor-pointer ${
                  theme === t.id
                    ? 'bg-accent-primary text-text-inverse font-semibold'
                    : 'text-text-primary hover:bg-surface-secondary font-medium'
                }`}
              >
                <span className="flex items-center gap-2">
                  {t.icon}
                  <span>{t.label}</span>
                </span>
                <span
                  className="w-3 h-3 rounded-full border border-border-default"
                  style={{ backgroundColor: t.previewBg }}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
