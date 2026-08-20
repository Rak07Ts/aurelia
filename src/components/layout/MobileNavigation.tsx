import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { useCurrency } from '../../context/CurrencyContext';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';
import { Button } from '../ui/Button';
import { X, Search, Globe, ChevronRight } from 'lucide-react';
import { Currency } from '../../types/dsf';

export const MobileNavigation: React.FC = () => {
  const { isMobileMenuOpen, closeMobileMenu, currentPath, navigate } = useNavigation();
  const { currency, setCurrency } = useCurrency();

  if (!isMobileMenuOpen) return null;

  const links = [
    { label: 'Sanctuaries & Stays', path: '/stays', desc: 'Distinctive architecture & private onsens' },
    { label: 'Destinations', path: '/destinations', desc: 'Kyoto, Tuscany, Norway, Namib & Cyclades' },
    { label: 'Experiences', path: '/experiences', desc: 'Curated sensory & cultural rituals' },
    { label: 'Journal', path: '/journal', desc: 'Essays on architecture, craft & slow living' },
    { label: 'Search All', path: '/search', desc: 'Find stays, locations, and articles' },
  ];

  const currencies: Currency[] = ['USD', 'EUR', 'GBP', 'JPY'];

  return (
    <div className="fixed inset-0 z-50 bg-background-primary flex flex-col justify-between animate-in fade-in duration-300 overflow-y-auto">
      {/* Top Header */}
      <div className="px-6 py-5 flex items-center justify-between border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full border-2 border-accent-primary flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-secondary" />
          </div>
          <span className="font-display text-heading-s tracking-[0.2em] font-semibold text-text-primary">
            AURELIA
          </span>
        </div>

        <button
          onClick={closeMobileMenu}
          className="p-2 rounded-full hover:bg-surface-secondary text-text-primary transition-colors cursor-pointer"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      {/* Menu Links */}
      <div className="px-6 py-8 space-y-6 flex-1">
        {links.map((link) => {
          const isActive = currentPath.startsWith(link.path);
          return (
            <button
              key={link.path}
              onClick={() => {
                navigate(link.path);
                closeMobileMenu();
              }}
              className="w-full text-left flex items-center justify-between group py-2 border-b border-border-subtle/50 cursor-pointer"
            >
              <div>
                <span
                  className={`block font-display text-heading-m tracking-tight transition-colors ${
                    isActive ? 'text-accent-primary font-medium' : 'text-text-primary group-hover:text-accent-primary'
                  }`}
                >
                  {link.label}
                </span>
                <span className="text-caption text-text-muted">{link.desc}</span>
              </div>
              <ChevronRight
                size={18}
                className="text-text-muted group-hover:text-accent-primary transition-transform group-hover:translate-x-1"
              />
            </button>
          );
        })}

        {/* Currency & Theme Selection on Mobile */}
        <div className="pt-4 space-y-4">
          <div>
            <label className="block text-label uppercase tracking-uppercase text-text-muted mb-2">
              Currency
            </label>
            <div className="grid grid-cols-4 gap-2">
              {currencies.map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`py-2 text-center text-body-s rounded border cursor-pointer ${
                    currency === c
                      ? 'bg-accent-primary text-text-inverse border-accent-primary font-semibold'
                      : 'bg-surface-primary text-text-secondary border-border-default font-medium'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-label uppercase tracking-uppercase text-text-muted mb-2">
              Appearance
            </label>
            <ThemeSwitcher className="w-full" />
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-6 border-t border-border-subtle bg-surface-secondary/40">
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            navigate('/stays');
            closeMobileMenu();
          }}
          className="w-full"
        >
          Explore All Stays
        </Button>
      </div>
    </div>
  );
};
