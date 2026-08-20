import React, { useState, useMemo } from 'react';
import { STAYS, DESTINATIONS, EXPERIENCES, EDITORIAL_ARTICLES } from '../data/dsfData';
import { Container } from '../components/layout/Container';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { StayCard } from '../components/cards/StayCard';
import { DestinationCard } from '../components/cards/DestinationCard';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import { EditorialCard } from '../components/cards/EditorialCard';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [activeType, setActiveType] = useState<'all' | 'stays' | 'destinations' | 'experiences' | 'journal'>('all');

  const matches = useMemo(() => {
    const q = query.toLowerCase().trim();

    const matchedStays = STAYS.filter(
      (s) =>
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.short_description.toLowerCase().includes(q) ||
        s.location.country.toLowerCase().includes(q) ||
        s.features.amenities.some((a) => a.toLowerCase().includes(q))
    );

    const matchedDestinations = DESTINATIONS.filter(
      (d) =>
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q)
    );

    const matchedExperiences = EXPERIENCES.filter(
      (e) =>
        !q ||
        e.name.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q)
    );

    const matchedArticles = EDITORIAL_ARTICLES.filter(
      (a) =>
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
    );

    return {
      stays: matchedStays,
      destinations: matchedDestinations,
      experiences: matchedExperiences,
      articles: matchedArticles,
      total:
        matchedStays.length +
        matchedDestinations.length +
        matchedExperiences.length +
        matchedArticles.length,
    };
  }, [query]);

  return (
    <div className="pt-28 pb-32 space-y-12">
      <Container>
        <Breadcrumbs items={[{ label: 'Discovery Search' }]} className="mb-6" />

        <div className="max-w-2xl space-y-3">
          <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block">
            Global Search
          </span>
          <h1 className="font-display text-display-m sm:text-display-l text-text-primary font-normal leading-tight">
            Find Your Sanctuary
          </h1>
          <p className="text-body-m text-text-secondary font-light">
            Search across all our accommodations, destinations, bespoke rituals, and architectural essays.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="relative mt-8">
          <Search size={22} className="absolute left-5 top-1/2 -translate-y-1/2 text-accent-primary" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search onsens, Kyoto, Tuscan vineyards, travertine baths, architecture essays..."
            className="w-full pl-14 pr-6 py-4 rounded-[2px] border border-border-default bg-surface-primary text-text-primary text-body-l placeholder:text-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary shadow-subtle transition-all"
            autoFocus
          />
        </div>

        {/* Entity Tabs */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-b border-border-subtle pb-4">
          <button
            onClick={() => setActiveType('all')}
            className={`px-4 py-1.5 text-body-s rounded-[2px] border transition-colors cursor-pointer ${
              activeType === 'all'
                ? 'bg-accent-primary text-white border-accent-primary font-medium'
                : 'bg-surface-primary text-text-secondary border-border-subtle hover:border-border-default'
            }`}
          >
            All Results ({matches.total})
          </button>
          <button
            onClick={() => setActiveType('stays')}
            className={`px-4 py-1.5 text-body-s rounded-[2px] border transition-colors cursor-pointer ${
              activeType === 'stays'
                ? 'bg-accent-primary text-white border-accent-primary font-medium'
                : 'bg-surface-primary text-text-secondary border-border-subtle hover:border-border-default'
            }`}
          >
            Sanctuaries ({matches.stays.length})
          </button>
          <button
            onClick={() => setActiveType('destinations')}
            className={`px-4 py-1.5 text-body-s rounded-[2px] border transition-colors cursor-pointer ${
              activeType === 'destinations'
                ? 'bg-accent-primary text-white border-accent-primary font-medium'
                : 'bg-surface-primary text-text-secondary border-border-subtle hover:border-border-default'
            }`}
          >
            Territories ({matches.destinations.length})
          </button>
          <button
            onClick={() => setActiveType('experiences')}
            className={`px-4 py-1.5 text-body-s rounded-[2px] border transition-colors cursor-pointer ${
              activeType === 'experiences'
                ? 'bg-accent-primary text-white border-accent-primary font-medium'
                : 'bg-surface-primary text-text-secondary border-border-subtle hover:border-border-default'
            }`}
          >
            Rituals ({matches.experiences.length})
          </button>
          <button
            onClick={() => setActiveType('journal')}
            className={`px-4 py-1.5 text-body-s rounded-[2px] border transition-colors cursor-pointer ${
              activeType === 'journal'
                ? 'bg-accent-primary text-white border-accent-primary font-medium'
                : 'bg-surface-primary text-text-secondary border-border-subtle hover:border-border-default'
            }`}
          >
            Journal ({matches.articles.length})
          </button>
        </div>

        {/* Results Sections */}
        <div className="space-y-16 pt-6">
          {/* Stays */}
          {(activeType === 'all' || activeType === 'stays') && matches.stays.length > 0 && (
            <div className="space-y-6">
              <h3 className="font-display text-heading-m text-text-primary flex items-center justify-between">
                <span>Sanctuaries & Stays ({matches.stays.length})</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {matches.stays.map((stay) => (
                  <StayCard key={stay.id} stay={stay} />
                ))}
              </div>
            </div>
          )}

          {/* Destinations */}
          {(activeType === 'all' || activeType === 'destinations') &&
            matches.destinations.length > 0 && (
              <div className="space-y-6">
                <h3 className="font-display text-heading-m text-text-primary">
                  Territories ({matches.destinations.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {matches.destinations.map((dest) => (
                    <DestinationCard key={dest.id} destination={dest} />
                  ))}
                </div>
              </div>
            )}

          {/* Experiences */}
          {(activeType === 'all' || activeType === 'experiences') &&
            matches.experiences.length > 0 && (
              <div className="space-y-6">
                <h3 className="font-display text-heading-m text-text-primary">
                  Curated Rituals ({matches.experiences.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {matches.experiences.map((exp) => (
                    <ExperienceCard key={exp.id} experience={exp} />
                  ))}
                </div>
              </div>
            )}

          {/* Articles */}
          {(activeType === 'all' || activeType === 'journal') && matches.articles.length > 0 && (
            <div className="space-y-6">
              <h3 className="font-display text-heading-m text-text-primary">
                Journal Essays ({matches.articles.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {matches.articles.map((art) => (
                  <EditorialCard key={art.id} article={art} />
                ))}
              </div>
            </div>
          )}

          {/* No results */}
          {matches.total === 0 && (
            <div className="py-20 text-center border border-dashed border-border-default rounded-[2px] bg-surface-secondary/40 space-y-4">
              <Sparkles size={32} className="mx-auto text-accent-secondary" />
              <h3 className="font-display text-heading-m text-text-primary">
                No matching results for "{query}"
              </h3>
              <p className="text-body-s text-text-secondary max-w-md mx-auto font-light">
                Try searching for broader keywords such as "Japan", "Onsen", "Italy", "Sauna", "Architecture", or "Wine".
              </p>
              <button
                onClick={() => setQuery('')}
                className="px-6 py-2.5 bg-accent-primary text-text-inverse text-body-s uppercase tracking-uppercase rounded-[2px] font-semibold hover:bg-interactive-hover transition-colors cursor-pointer shadow-subtle"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
