import React, { useState, useEffect } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { useCurrency } from '../../context/CurrencyContext';
import { useBooking } from '../../context/BookingContext';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';
import { Button } from '../ui/Button';
import { Search, Menu, Globe } from 'lucide-react';
import { Currency } from '../../types/dsf';

export const SiteHeader: React.FC = () => {
  const { currentPath, navigate, openMobileMenu } = useNavigation();
  const { currency, setCurrency } = useCurrency();
  const { openBookingModal } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Stays', path: '/stays' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Experiences', path: '/experiences' },
    { label: 'Journal', path: '/journal' },
  ];

  const currencies: Currency[] = ['USD', 'EUR', 'GBP', 'JPY'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'glass-header border-b border-border-subtle/80 py-3 shadow-subtle'
          : 'bg-background-primary/60 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => navigate('/')}
            className="text-left group flex items-center gap-3 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border-2 border-accent-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-3 h-3 rounded-full bg-accent-secondary" />
            </div>
            <div>
              <span className="font-display text-heading-m md:text-heading-l tracking-[0.2em] font-semibold text-text-primary block leading-none">
                AURELIA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-text-muted hidden sm:block mt-0.5">
                Places Worth Remembering
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-body-s uppercase tracking-uppercase">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className={`py-1 relative font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent-primary animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Trigger */}
          <button
            onClick={() => navigate('/search')}
            className="p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-surface-secondary transition-colors cursor-pointer"
            aria-label="Search sanctuaries"
            title="Search sanctuaries & stories"
          >
            <Search size={19} />
          </button>

          {/* Currency Selector */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-caption uppercase tracking-uppercase text-text-secondary hover:text-text-primary hover:bg-surface-secondary transition-colors cursor-pointer"
            >
              <Globe size={14} />
              <span>{currency}</span>
            </button>

            {isCurrencyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 p-1 bg-surface-primary border border-border-default rounded shadow-large z-50 animate-in fade-in">
                {currencies.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCurrency(c);
                      setIsCurrencyDropdownOpen(false);
                    }}
                    className={`w-full px-3 py-1.5 text-body-s text-left rounded cursor-pointer ${
                      currency === c
                        ? 'bg-accent-primary text-white font-medium'
                        : 'text-text-primary hover:bg-surface-secondary'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Switcher */}
          <ThemeSwitcher className="hidden sm:block" />

          {/* Book Now Button */}
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate('/stays')}
            className="hidden sm:inline-flex"
          >
            Explore Stays
          </Button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={openMobileMenu}
            className="lg:hidden p-2 rounded text-text-primary hover:bg-surface-secondary transition-colors cursor-pointer"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
};
