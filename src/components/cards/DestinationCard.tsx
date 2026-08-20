import React from 'react';
import { Destination } from '../../types/dsf';
import { useNavigation } from '../../context/NavigationContext';
import { SafeImage } from '../ui/SafeImage';
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
      className={`group relative overflow-hidden rounded-[2px] border border-border-default bg-palette-charcoal_950 cursor-pointer hover:border-accent-primary transition-all duration-500 shadow-subtle hover:shadow-medium ${className}`}
    >
      <div className="relative h-96 w-full overflow-hidden">
        <SafeImage
          src={destination.hero}
          alt={destination.name}
          className="w-full h-full object-cover img-zoom opacity-90"
        />
        {/* High contrast gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/30" />
      </div>

      <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/40 backdrop-blur-md text-white text-caption uppercase tracking-uppercase font-semibold border border-white/20">
            <Compass size={12} className="text-palette-bronze_500" /> {destination.country}
          </span>
          <span className="text-caption text-palette-sand_200 font-semibold uppercase tracking-uppercase text-shadow-subtle">
            {destination.stay_ids.length} Sanctuaries
          </span>
        </div>

        <div>
          <h3 className="font-display text-heading-m md:text-heading-l text-white font-medium group-hover:translate-x-1 transition-transform text-shadow-editorial">
            {destination.name}
          </h3>
          <p className="text-body-s text-palette-sand_200 line-clamp-2 mt-2 font-light text-shadow-subtle">
            {destination.tagline || destination.description}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-caption uppercase tracking-uppercase font-semibold text-palette-sand_200 group-hover:text-white transition-colors">
            <span>Explore Territory</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
