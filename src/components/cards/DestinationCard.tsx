import React from 'react';
import { Destination } from '../../types/dsf';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowRight, Compass } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  className = '',
}) => {
  const { navigate } = useNavigation();

  return (
    <div
      onClick={() => navigate(`/destinations/${destination.id}`)}
      className={`group relative overflow-hidden rounded-[2px] border border-border-subtle bg-surface-primary cursor-pointer hover:border-accent-primary transition-all duration-500 ${className}`}
    >
      <div className="relative h-96 w-full overflow-hidden bg-palette-ivory_100">
        <img
          src={destination.hero}
          alt={destination.name}
          className="w-full h-full object-cover img-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/20 backdrop-blur-md text-white text-caption uppercase tracking-uppercase font-medium">
            <Compass size={12} /> {destination.country}
          </span>
          <span className="text-caption opacity-80 uppercase tracking-uppercase">
            {destination.stay_ids.length} Sanctuaries
          </span>
        </div>

        <div>
          <h3 className="font-display text-heading-m md:text-heading-l text-white group-hover:translate-x-1 transition-transform">
            {destination.name}
          </h3>
          <p className="text-body-s text-white/80 line-clamp-2 mt-2">
            {destination.tagline || destination.description}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-caption uppercase tracking-uppercase font-medium text-palette-sand_200 group-hover:text-white transition-colors">
            <span>Explore Territory</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
