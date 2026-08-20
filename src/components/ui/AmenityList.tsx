import React from 'react';
import {
  Sparkles,
  Bath,
  Utensils,
  Flame,
  Trees,
  Car,
  Wifi,
  Waves,
  Coffee,
  Compass,
  Bed,
  Tv,
  Wine,
  Wind
} from 'lucide-react';

interface AmenityListProps {
  amenities: string[];
  columns?: 1 | 2 | 3;
  className?: string;
  limit?: number;
}

const getAmenityIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('onsen') || lower.includes('bath') || lower.includes('spa') || lower.includes('tub')) return Bath;
  if (lower.includes('chef') || lower.includes('dinner') || lower.includes('cook') || lower.includes('kitchen')) return Utensils;
  if (lower.includes('pool') || lower.includes('sea') || lower.includes('water') || lower.includes('fjord')) return Waves;
  if (lower.includes('fire') || lower.includes('stove') || lower.includes('sauna')) return Flame;
  if (lower.includes('garden') || lower.includes('forest') || lower.includes('tree') || lower.includes('cedar')) return Trees;
  if (lower.includes('car') || lower.includes('transfer') || lower.includes('vehicle')) return Car;
  if (lower.includes('wifi') || lower.includes('fiber')) return Wifi;
  if (lower.includes('tea') || lower.includes('coffee')) return Coffee;
  if (lower.includes('wine') || lower.includes('vineyard') || lower.includes('cellar')) return Wine;
  if (lower.includes('bed') || lower.includes('linen')) return Bed;
  if (lower.includes('cinema') || lower.includes('tv') || lower.includes('sound')) return Tv;
  if (lower.includes('guide') || lower.includes('kayak') || lower.includes('walk')) return Compass;
  return Wind;
};

export const AmenityList: React.FC<AmenityListProps> = ({
  amenities,
  columns = 2,
  className = '',
  limit,
}) => {
  const displayAmenities = limit ? amenities.slice(0, limit) : amenities;

  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <div className={`grid ${colClasses[columns]} gap-4 ${className}`}>
      {displayAmenities.map((amenity, idx) => {
        const IconComponent = getAmenityIcon(amenity);
        return (
          <div
            key={idx}
            className="flex items-start gap-3.5 p-3.5 rounded-[2px] bg-surface-secondary/50 border border-border-subtle/50 text-text-primary hover:border-border-default transition-colors"
          >
            <div className="p-2 rounded bg-surface-primary text-accent-primary border border-border-subtle">
              <IconComponent size={18} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-body-s font-medium leading-relaxed">{amenity}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
