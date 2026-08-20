import React, { useState, useMemo } from 'react';
import { STAYS, DESTINATIONS } from '../data/dsfData';
import { Container } from '../components/layout/Container';
import { StayCard } from '../components/cards/StayCard';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { FilterGroup } from '../components/ui/FilterGroup';
import { MotionReveal } from '../components/motion/MotionReveal';
import { LayoutGrid, List, SlidersHorizontal, Search } from 'lucide-react';

export const StaysPage: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [minBedrooms, setMinBedrooms] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const destinationOptions = [
    { id: 'all', label: 'All Territories', count: STAYS.length },
    ...DESTINATIONS.map((d) => ({
      id: d.id,
      label: `${d.name}`,
      count: STAYS.filter((s) => s.destination_id === d.id).length,
    })),
  ];

  const priceRangeOptions = [
    { id: 'all', label: 'All Investments' },
    { id: 'under-1200', label: 'Under $1,200 / night' },
    { id: '1200-1500', label: '$1,200 - $1,500 / night' },
    { id: 'above-1500', label: '$1,500+ / night' },
  ];

  const filteredStays = useMemo(() => {
    return STAYS.filter((stay) => {
      // Destination filter
      if (selectedDestination !== 'all' && stay.destination_id !== selectedDestination) {
        return false;
      }
      // Price range filter
      if (selectedPriceRange === 'under-1200' && stay.commercial.price >= 1200) return false;
      if (
        selectedPriceRange === '1200-1500' &&
        (stay.commercial.price < 1200 || stay.commercial.price > 1500)
      )
        return false;
      if (selectedPriceRange === 'above-1500' && stay.commercial.price <= 1500) return false;

      // Bedrooms filter
      if (minBedrooms > 0 && stay.features.bedrooms < minBedrooms) return false;

      // Search keyword filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = stay.name.toLowerCase().includes(q);
        const matchLoc = `${stay.location.country} ${stay.location.region} ${stay.location.city || ''}`
          .toLowerCase()
          .includes(q);
        const matchDesc = stay.short_description.toLowerCase().includes(q);
        const matchAmenity = stay.features.amenities.some((a) => a.toLowerCase().includes(q));
        if (!matchName && !matchLoc && !matchDesc && !matchAmenity) return false;
      }

      return true;
    });
  }, [selectedDestination, selectedPriceRange, minBedrooms, searchQuery]);

  const handleReset = () => {
    setSelectedDestination('all');
    setSelectedPriceRange('all');
    setMinBedrooms(0);
    setSearchQuery('');
  };

  return (
    <div className="pt-28 pb-24 space-y-12">
      <Container>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: 'Sanctuaries & Stays' }]} className="mb-6" />

        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block">
            Distinctive Accommodations
          </span>
          <h1 className="font-display text-display-m sm:text-display-l text-text-primary font-normal leading-tight">
            Curated Sanctuaries of Stillness
          </h1>
          <p className="text-body-m text-text-secondary font-light leading-relaxed">
            Every stay is a bespoke architectural dialogue with its territory—crafted from organic local materials, offering private thermal rituals, deep acoustics, and unhurried natural light.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-12 p-6 bg-surface-primary rounded-[2px] border border-border-subtle shadow-subtle space-y-6">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by sanctuary name, onsen, travertine, location..."
                className="w-full pl-10 pr-4 py-2.5 bg-surface-secondary/60 border border-border-subtle rounded-[2px] text-body-s text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary"
              />
            </div>

            {/* View Mode & Count */}
            <div className="flex items-center justify-between lg:justify-end gap-6 text-caption text-text-muted">
              <span>Showing {filteredStays.length} Sanctuaries</span>
              <div className="flex items-center border border-border-subtle rounded-[2px] p-0.5 bg-surface-secondary">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-[2px] transition-colors cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-surface-primary text-text-primary shadow-subtle'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                  aria-label="Grid view"
                >
                  <LayoutGrid size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-[2px] transition-colors cursor-pointer ${
                    viewMode === 'list'
                      ? 'bg-surface-primary text-text-primary shadow-subtle'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                  aria-label="List view"
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          <FilterGroup
            categories={destinationOptions}
            activeCategory={selectedDestination}
            onSelectCategory={setSelectedDestination}
            priceRanges={priceRangeOptions}
            activePriceRange={selectedPriceRange}
            onSelectPriceRange={setSelectedPriceRange}
            onReset={handleReset}
          />
        </div>

        {/* Results Grid / List */}
        {filteredStays.length > 0 ? (
          <div
            className={`mt-10 ${
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
            }`}
          >
            {filteredStays.map((stay, idx) => (
              <MotionReveal key={stay.id} variant="fade_up" delay={idx * 100}>
                <StayCard stay={stay} layout={viewMode === 'list' ? 'horizontal' : 'vertical'} />
              </MotionReveal>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-20 text-center border border-dashed border-border-default rounded-[2px] bg-surface-secondary/30 mt-10 space-y-4">
            <h3 className="font-display text-heading-m text-text-primary">
              No matching sanctuaries found
            </h3>
            <p className="text-body-s text-text-secondary max-w-md mx-auto">
              We could not find any stays matching your current criteria. Try adjusting your filters or resetting to view all sanctuaries.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-accent-primary text-text-inverse text-body-s uppercase tracking-uppercase font-semibold rounded-[2px] hover:bg-interactive-hover transition-colors cursor-pointer shadow-subtle"
            >
              Reset Filters
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};
