import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterGroupProps {
  title?: string;
  categories: FilterOption[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  priceRanges?: FilterOption[];
  activePriceRange?: string;
  onSelectPriceRange?: (id: string) => void;
  onReset?: () => void;
  className?: string;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  categories,
  activeCategory,
  onSelectCategory,
  priceRanges,
  activePriceRange,
  onSelectPriceRange,
  onReset,
  className = '',
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {title && (
        <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
          <div className="flex items-center gap-2 text-text-primary font-medium text-body-s uppercase tracking-uppercase">
            <Filter size={16} className="text-accent-primary" />
            <span>{title}</span>
          </div>
          {onReset && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1.5 text-caption text-text-muted hover:text-accent-primary transition-colors cursor-pointer"
            >
              <RotateCcw size={12} /> Reset
            </button>
          )}
        </div>
      )}

      {/* Categories / Destinations Pill List */}
      <div>
        <label className="block text-label uppercase tracking-uppercase font-medium text-text-muted mb-3">
          Curated Regions & Sanctums
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3.5 py-1.5 text-body-s rounded-[2px] border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-accent-primary text-text-inverse border-accent-primary shadow-subtle font-semibold'
                  : 'bg-surface-primary text-text-secondary border-border-default hover:border-accent-primary hover:text-text-primary font-medium'
              }`}
            >
              <span>{cat.label}</span>
              {cat.count !== undefined && (
                <span className={`ml-1.5 text-[11px] opacity-70`}>({cat.count})</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter if present */}
      {priceRanges && onSelectPriceRange && (
        <div>
          <label className="block text-label uppercase tracking-uppercase font-medium text-text-muted mb-3">
            Nightly Investment
          </label>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => onSelectPriceRange(range.id)}
                className={`px-3.5 py-1.5 text-body-s rounded-[2px] border transition-all cursor-pointer ${
                  activePriceRange === range.id
                    ? 'bg-accent-primary text-text-inverse border-accent-primary shadow-subtle font-semibold'
                    : 'bg-surface-primary text-text-secondary border-border-default hover:border-accent-primary hover:text-text-primary font-medium'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
