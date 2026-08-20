import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { DESTINATIONS, BRAND_INFO } from '../../data/dsfData';
import { ArrowUpRight, Compass, Heart } from 'lucide-react';

export const SiteFooter: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <footer className="bg-surface-inverse text-text-inverse pt-20 pb-12 border-t border-palette-olive_700/30 transition-colors">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Top Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-palette-sand_200 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-palette-bronze_500" />
              </div>
              <span className="font-display text-heading-l tracking-[0.2em] font-semibold text-white">
                AURELIA
              </span>
            </div>
            <p className="font-display text-heading-s sm:text-heading-m text-palette-sand_200 leading-snug max-w-xl">
              "We do not build walls to separate ourselves from nature, but to create a deliberate frame through which nature's quietude can be felt."
            </p>
            <p className="text-body-s text-palette-stone_300 max-w-md">
              {BRAND_INFO.short_description}
            </p>
          </div>

          {/* Newsletter / Journal Dispatch */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-label uppercase tracking-uppercase text-palette-bronze_500 font-medium block">
              The AURELIA Journal Dispatch
            </span>
            <h4 className="font-display text-heading-s text-white">
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
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-[2px] text-white placeholder:text-white/40 text-body-s focus:outline-none focus:border-palette-sand_200 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-palette-sand_200 text-palette-charcoal_950 font-medium text-body-s uppercase tracking-uppercase rounded-[2px] hover:bg-white transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[12px] text-palette-stone_500">
              Zero algorithmic marketing. Unsubscribe at any moment.
            </p>
          </div>
        </div>

        {/* Links Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-white/10 text-body-s">
          {/* Territories */}
          <div>
            <h5 className="text-label uppercase tracking-uppercase text-palette-bronze_500 font-semibold mb-4">
              Sanctuary Territories
            </h5>
            <ul className="space-y-2.5">
              {DESTINATIONS.map((d) => (
                <li key={d.id}>
                  <button
                    onClick={() => navigate(`/destinations/${d.id}`)}
                    className="text-palette-stone_300 hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {d.name} ({d.country})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Stays & Booking */}
          <div>
            <h5 className="text-label uppercase tracking-uppercase text-palette-bronze_500 font-semibold mb-4">
              Stays & Living
            </h5>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => navigate('/stays')}
                  className="text-palette-stone_300 hover:text-white transition-colors cursor-pointer"
                >
                  All Sanctuaries
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/experiences')}
                  className="text-palette-stone_300 hover:text-white transition-colors cursor-pointer"
                >
                  Curated Experiences
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/booking')}
                  className="text-palette-stone_300 hover:text-white transition-colors cursor-pointer"
                >
                  Reserve a Sanctuary
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/search')}
                  className="text-palette-stone_300 hover:text-white transition-colors cursor-pointer"
                >
                  Availability Search
                </button>
              </li>
            </ul>
          </div>

          {/* Philosophy & Journal */}
          <div>
            <h5 className="text-label uppercase tracking-uppercase text-palette-bronze_500 font-semibold mb-4">
              Journal & Ethics
            </h5>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => navigate('/journal')}
                  className="text-palette-stone_300 hover:text-white transition-colors cursor-pointer"
                >
                  Architecture Essays
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/journal')}
                  className="text-palette-stone_300 hover:text-white transition-colors cursor-pointer"
                >
                  Philosophy of Silence
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/journal')}
                  className="text-palette-stone_300 hover:text-white transition-colors cursor-pointer"
                >
                  Artisan Collaborations
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/journal')}
                  className="text-palette-stone_300 hover:text-white transition-colors cursor-pointer"
                >
                  Sustainability Manifesto
                </button>
              </li>
            </ul>
          </div>

          {/* Hospitality Concierge */}
          <div>
            <h5 className="text-label uppercase tracking-uppercase text-palette-bronze_500 font-semibold mb-4">
              Private Concierge
            </h5>
            <div className="space-y-2.5 text-palette-stone_300">
              <p>sanctuary@aurelia-hospitality.com</p>
              <p>+41 (0) 22 819 9000</p>
              <p className="text-caption text-palette-stone_500 pt-2">
                Curator desks available 24/7 in Kyoto, Florence, and Geneva.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-caption text-palette-stone_500">
          <p>© {new Date().getFullYear()} AURELIA Hospitality Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Stay</span>
            <span>Accessibility (WCAG 2.1 AA)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
