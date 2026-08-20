import React from 'react';
import { Experience } from '../../types/dsf';
import { useNavigation } from '../../context/NavigationContext';
import { PriceDisplay } from '../ui/PriceDisplay';
import { SafeImage } from '../ui/SafeImage';
import { Clock, Users, ArrowRight } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  className = '',
}) => {
  const { navigate } = useNavigation();

  return (
    <div
      onClick={() => navigate(`/experiences/${experience.id}`)}
      className={`group bg-surface-primary border border-border-default rounded-[2px] overflow-hidden hover:border-accent-primary hover:shadow-medium transition-all duration-500 cursor-pointer flex flex-col ${className}`}
    >
      <div className="relative h-64 w-full overflow-hidden bg-palette-ivory_100">
        <SafeImage
          src={experience.hero}
          alt={experience.name}
          className="w-full h-full object-cover img-zoom"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-surface-primary/95 backdrop-blur-md text-text-primary text-label uppercase tracking-uppercase font-semibold rounded-[2px] border border-border-default shadow-subtle">
            {experience.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-caption text-text-muted font-medium mb-2">
            <span className="flex items-center gap-1"><Clock size={13} className="text-accent-primary" /> {experience.duration}</span>
            {experience.group_size && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1"><Users size={13} className="text-accent-primary" /> {experience.group_size}</span>
              </>
            )}
          </div>
          <h3 className="font-display text-heading-s text-text-primary font-medium group-hover:text-accent-primary transition-colors leading-tight">
            {experience.name}
          </h3>
          <p className="text-body-s text-text-secondary line-clamp-2 mt-2 font-normal leading-relaxed">
            {experience.tagline || experience.description}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-border-subtle flex items-center justify-between">
          <div>
            {experience.price ? (
              <PriceDisplay amountUSD={experience.price} unit="guest" size="sm" />
            ) : (
              <span className="text-body-s text-accent-primary font-semibold">Included with Stay</span>
            )}
          </div>
          <span className="text-caption uppercase tracking-uppercase text-accent-primary font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            View Details <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </div>
  );
};
