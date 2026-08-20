import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { EXPERIENCES, DESTINATIONS, STAYS } from '../data/dsfData';
import { Container } from '../components/layout/Container';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { PriceDisplay } from '../components/ui/PriceDisplay';
import { SafeImage } from '../components/ui/SafeImage';
import { Button } from '../components/ui/Button';
import { StayCard } from '../components/cards/StayCard';
import { Clock, Users, ArrowRight, CheckCircle2, UserCheck } from 'lucide-react';

export const ExperienceDetailPage: React.FC = () => {
  const { params, navigate } = useNavigation();
  const expId = params.experienceId;

  const experience =
    EXPERIENCES.find((e) => e.id === expId || e.slug === expId) || EXPERIENCES[0];
  const destination = DESTINATIONS.find((d) => d.id === experience.destination_id);
  const relatedStays = STAYS.filter((s) => experience.related_stay_ids.includes(s.id));

  return (
    <div className="pt-24 pb-32 space-y-20">
      {/* Hero Header */}
      <section className="relative min-h-[65vh] flex items-end pb-16 bg-palette-charcoal_950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={experience.hero}
            alt={experience.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-palette-charcoal_950 via-palette-charcoal_950/65 to-black/40" />
        </div>

        <Container className="relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Experiences', path: '/experiences' },
              { label: experience.name },
            ]}
            className="mb-4 text-white/80"
          />
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/50 backdrop-blur-md text-white text-caption uppercase tracking-uppercase font-semibold mb-4 border border-white/20">
            {experience.category}
          </span>
          <h1 className="font-display text-display-m sm:text-display-l text-white font-medium leading-tight max-w-4xl text-shadow-editorial">
            {experience.name}
          </h1>
          <p className="text-body-l text-palette-sand_200 font-normal max-w-2xl mt-4 text-shadow-subtle">
            {experience.tagline}
          </p>
        </Container>
      </section>

      {/* Main Details Grid */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="space-y-4">
              <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block">
                The Experience Narrative
              </span>
              <h2 className="font-display text-heading-l text-text-primary font-medium">
                An Intimate Sensory Immersion
              </h2>
              <p className="text-body-m text-text-secondary leading-relaxed font-normal whitespace-pre-line">
                {experience.long_description || experience.description}
              </p>
            </div>

            {/* Host Profile */}
            {experience.host && (
              <div className="p-8 rounded-[2px] bg-surface-primary border border-border-default shadow-subtle flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <SafeImage
                  src={experience.host.avatar}
                  alt={experience.host.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-accent-secondary"
                />
                <div className="space-y-1 flex-1">
                  <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block">
                    Your Master Host
                  </span>
                  <h3 className="font-display text-heading-s text-text-primary font-medium">
                    {experience.host.name}
                  </h3>
                  <p className="text-caption text-text-muted font-medium">{experience.host.role}</p>
                  <p className="text-body-s text-text-secondary font-normal pt-2">
                    {experience.host.bio}
                  </p>
                </div>
              </div>
            )}

            {/* Itinerary Timeline */}
            {experience.itinerary && (
              <div className="space-y-6 pt-4">
                <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block">
                  Curated Flow
                </span>
                <h3 className="font-display text-heading-m text-text-primary font-medium">
                  The Sequence of the Ritual
                </h3>
                <div className="space-y-6 border-l-2 border-accent-primary/40 pl-6 ml-2">
                  {experience.itinerary.map((step, idx) => (
                    <div key={idx} className="space-y-1 relative">
                      <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent-primary border-2 border-surface-primary" />
                      <span className="text-caption uppercase tracking-uppercase text-accent-primary font-semibold">
                        {step.time}
                      </span>
                      <h4 className="font-display text-heading-s text-text-primary font-medium">
                        {step.title}
                      </h4>
                      <p className="text-body-s text-text-secondary font-normal">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Included Hallmarks */}
            {experience.included && (
              <div className="space-y-4 pt-4 border-t border-border-subtle">
                <h3 className="font-display text-heading-s text-text-primary font-medium">
                  Included Amenities & Provisions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {experience.included.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-body-s text-text-secondary">
                      <CheckCircle2 size={16} className="text-accent-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Booking / Inquire Box */}
          <div className="lg:col-span-4 p-8 rounded-[2px] bg-surface-primary border border-border-default space-y-6 sticky top-28 shadow-subtle">
            <div>
              <span className="text-caption uppercase tracking-uppercase text-text-muted font-semibold block mb-1">
                Experience Investment
              </span>
              {experience.price ? (
                <PriceDisplay amountUSD={experience.price} unit="guest" size="lg" />
              ) : (
                <span className="font-display text-heading-m text-text-primary font-medium">
                  Complimentary for Sanctuary Guests
                </span>
              )}
            </div>

            <div className="space-y-4 border-y border-border-subtle py-6 text-body-s">
              <div className="flex items-center justify-between">
                <span className="text-text-muted font-medium flex items-center gap-2">
                  <Clock size={15} /> Duration
                </span>
                <span className="font-semibold text-text-primary">{experience.duration}</span>
              </div>
              {experience.group_size && (
                <div className="flex items-center justify-between">
                  <span className="text-text-muted font-medium flex items-center gap-2">
                    <Users size={15} /> Group Scale
                  </span>
                  <span className="font-semibold text-text-primary">{experience.group_size}</span>
                </div>
              )}
              {destination && (
                <div className="flex items-center justify-between">
                  <span className="text-text-muted font-medium">Location</span>
                  <span className="font-semibold text-text-primary">{destination.name}</span>
                </div>
              )}
            </div>

            <Button
              variant="primary"
              size="md"
              onClick={() => navigate('/booking')}
              className="w-full"
            >
              Reserve Experience
            </Button>
          </div>
        </div>
      </Container>

      {/* Linked Stays */}
      {relatedStays.length > 0 && (
        <Container>
          <div className="mb-10">
            <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block mb-1">
              Sanctuaries
            </span>
            <h2 className="font-display text-heading-l text-text-primary font-medium">
              Stays Where This Experience is Hosted
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedStays.map((stay) => (
              <StayCard key={stay.id} stay={stay} />
            ))}
          </div>
        </Container>
      )}
    </div>
  );
};
