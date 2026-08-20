import React from 'react';
import { Stay } from '../../types/dsf';
import { useNavigation } from '../../context/NavigationContext';
import { PriceDisplay } from '../ui/PriceDisplay';
import { Badge } from '../ui/Badge';
import { Users, Bed, MapPin, ArrowRight } from 'lucide-react';

interface StayCardProps {
  stay: Stay;
  layout?: 'vertical' | 'horizontal';
  className?: string;
}

export const StayCard: React.FC<StayCardProps> = ({
  stay,
  layout = 'vertical',
  className = '',
}) => {
  const { navigate } = useNavigation();

  const handleCardClick = () => {
    navigate(`/stays/${stay.id}`);
  };

  if (layout === 'horizontal') {
    return (
      <div
        onClick={handleCardClick}
        className={`group bg-surface-primary border border-border-subtle rounded-[2px] overflow-hidden hover:border-accent-primary/60 hover:shadow-medium transition-all duration-500 cursor-pointer flex flex-col md:flex-row ${className}`}
      >
        {/* Image */}
        <div className="relative md:w-5/12 h-64 md:h-auto overflow-hidden bg-palette-ivory_100">
          <img
            src={stay.assets.cover}
            alt={stay.name}
            className="w-full h-full object-cover img-zoom"
          />
          <div className="absolute top-4 left-4">
            <Badge status={stay.availability.status}>
              {stay.availability.status}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 md:w-7/12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-caption text-accent-primary uppercase tracking-uppercase font-medium mb-1.5">
              <MapPin size={13} />
              <span>{stay.location.city || stay.location.region}, {stay.location.country}</span>
            </div>
            <h3 className="font-display text-heading-s md:text-heading-m text-text-primary group-hover:text-accent-primary transition-colors">
              {stay.name}
            </h3>
            <p className="text-body-s text-text-secondary line-clamp-2 mt-2">
              {stay.short_description}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between">
            <div className="flex items-center gap-4 text-caption text-text-muted">
              <span className="flex items-center gap-1"><Users size={14} /> {stay.features.guests} Guests</span>
              <span className="flex items-center gap-1"><Bed size={14} /> {stay.features.bedrooms} Suites</span>
            </div>
            <PriceDisplay amountUSD={stay.commercial.price} size="md" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={handleCardClick}
      className={`group bg-surface-primary border border-border-subtle rounded-[2px] overflow-hidden hover:border-accent-primary/60 hover:shadow-medium transition-all duration-500 cursor-pointer flex flex-col ${className}`}
    >
      {/* Image with Tag & Status */}
      <div className="relative h-72 w-full overflow-hidden bg-palette-ivory_100">
        <img
          src={stay.assets.cover}
          alt={stay.name}
          className="w-full h-full object-cover img-zoom"
        />
        <div className="absolute top-4 left-4">
          <Badge status={stay.availability.status}>
            {stay.availability.status}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <span className="inline-flex items-center gap-1.5 text-white text-caption uppercase tracking-uppercase font-medium">
            Explore Sanctuary <ArrowRight size={14} />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-caption text-accent-primary uppercase tracking-uppercase font-medium mb-1.5">
            <MapPin size={13} />
            <span>{stay.location.city || stay.location.region}, {stay.location.country}</span>
          </div>
          <h3 className="font-display text-heading-s text-text-primary group-hover:text-accent-primary transition-colors leading-tight">
            {stay.name}
          </h3>
          <p className="text-body-s text-text-secondary line-clamp-2 mt-2">
            {stay.short_description}
          </p>
        </div>

        {/* Footer specs & price */}
        <div className="pt-5 mt-5 border-t border-border-subtle flex items-center justify-between">
          <div className="flex items-center gap-3 text-caption text-text-muted">
            <span className="flex items-center gap-1"><Users size={13} /> {stay.features.guests}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Bed size={13} /> {stay.features.bedrooms} Bed</span>
          </div>
          <PriceDisplay amountUSD={stay.commercial.price} size="md" />
        </div>
      </div>
    </div>
  );
};
