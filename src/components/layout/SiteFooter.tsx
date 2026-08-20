import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { DESTINATIONS, BRAND_INFO } from '../../data/dsfData';
import { Compass, Sparkles } from 'lucide-react';

export const SiteFooter: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-surface-secondary text-text-primary pt-20 pb-12 border-t border-border-default transition-colors">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Top Brand Statement & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-border-subtle">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-accent-primary flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-accent-secondary" />
              </div>
              <span className="font-display text-heading-l tracking-[0.2em] font-semibold text-text-primary">
                AURELIA
              </span>
            </div>
            <p className="font-display text-heading-s sm:text-heading-m text-text-primary leading-snug max-w-xl font-medium">
              "We do not build walls to separate ourselves from nature, but to create a deliberate frame through which nature's quietude can be felt."
            </p>
            <p className="text-body-s text-text-secondary max-w-md font-normal leading-relaxed">
              {BRAND_INFO.short_description}
            </p>
          </div>

          {/* Newsletter / Journal Dispatch */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block flex items-center gap-1.5">
              <Sparkles size={14} className="text-accent-secondary" /> The AURELIA Journal Dispatch
            </span>
            <h4 className="font-display text-heading-s text-text-primary font-medium">
              Receive seasonal architectural essays and private sanctuary releases.
            </h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to the AURELIA Dispatch.');
              }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-surface-primary border border-border-default rounded-[2px] text-text-primary placeholder:text-text-muted text-body-s focus:outline-none focus:border-accent-primary transition-colors shadow-subtle"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent-primary text-text-inverse font-semibold text-body-s uppercase tracking-uppercase rounded-[2px] hover:bg-interactive-hover transition-colors cursor-pointer shadow-subtle"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[12px] text-text-muted">
              Zero algorithmic marketing. Unsubscribe at any moment.
            </p>
          </div>
        </div>

        {/* Links Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-border-subtle text-body-s">
          {/* Territories */}
          <div>
            <h5 className="text-label uppercase tracking-uppercase text-accent-secondary font-semibold mb-4">
              Sanctuary Territories
            </h5>
            <ul className="space-y-2.5">
              {DESTINATIONS.map((d) => (
                <li key={d.id}>
                  <button
                    onClick={() => navigate(`/destinations/${d.id}`)}
                    className="text-text-secondary hover:text-accent-primary transition-colors text-left cursor-pointer font-medium"
                  >
                    {d.name} ({d.country})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Stays & Living */}
          <div>
            <h5 className="text-label uppercase tracking-uppercase text-accent-secondary font-semibold mb-4">
              Stays & Living
            </h5>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => navigate('/stays')}
                  className="text-text-secondary hover:text-accent-primary transition-colors cursor-pointer font-medium"
                >
                  All Sanctuaries
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/experiences')}
                  className="text-text-secondary hover:text-accent-primary transition-colors cursor-pointer font-medium"
                >
                  Curated Experiences
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/booking')}
                  className="text-text-secondary hover:text-accent-primary transition-colors cursor-pointer font-medium"
                >
                  Reserve a Sanctuary
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/search')}
                  className="text-text-secondary hover:text-accent-primary transition-colors cursor-pointer font-medium"
                >
                  Availability Search
                </button>
              </li>
            </ul>
          </div>

          {/* Philosophy & Journal */}
          <div>
            <h5 className="text-label uppercase tracking-uppercase text-accent-secondary font-semibold mb-4">
              Journal & Ethics
            </h5>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => navigate('/journal')}
                  className="text-text-secondary hover:text-accent-primary transition-colors cursor-pointer font-medium"
                >
                  Architecture Essays
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/journal')}
                  className="text-text-secondary hover:text-accent-primary transition-colors cursor-pointer font-medium"
                >
                  Philosophy of Silence
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/journal')}
                  className="text-text-secondary hover:text-accent-primary transition-colors cursor-pointer font-medium"
                >
                  Artisan Collaborations
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/journal')}
                  className="text-text-secondary hover:text-accent-primary transition-colors cursor-pointer font-medium"
                >
                  Sustainability Manifesto
                </button>
              </li>
            </ul>
          </div>

          {/* Hospitality Concierge */}
          <div>
            <h5 className="text-label uppercase tracking-uppercase text-accent-secondary font-semibold mb-4">
              Private Concierge
            </h5>
            <div className="space-y-2.5 text-text-secondary font-medium">
              <p>sanctuary@aurelia-hospitality.com</p>
              <p>+41 (0) 22 819 9000</p>
              <p className="text-caption text-text-muted pt-2 font-normal">
                Curator desks available 24/7 in Kyoto, Florence, and Geneva.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-caption text-text-muted">
          <p>© {new Date().getFullYear()} AURELIA Hospitality Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-text-primary transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-text-primary transition-colors cursor-pointer">Terms of Stay</span>
            <span className="hover:text-text-primary transition-colors cursor-pointer">Accessibility (WCAG 2.1 AAA)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
