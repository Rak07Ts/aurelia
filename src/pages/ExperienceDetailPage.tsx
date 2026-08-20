import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { EXPERIENCES, DESTINATIONS, STAYS } from '../data/dsfData';
import { Container } from '../components/layout/Container';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { PriceDisplay } from '../components/ui/PriceDisplay';
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
          <img
            src={experience.hero}
            alt={experience.name}
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-palette-charcoal_950 via-palette-charcoal_950/40 to-transparent" />
        </div>

        <Container className="relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Experiences', path: '/experiences' },
              { label: experience.name },
            ]}
            className="mb-4 text-white/70"
          />
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/20 backdrop-blur-md text-white text-caption uppercase tracking-uppercase font-medium mb-4">
            {experience.category}
          </span>
          <h1 className="font-display text-display-m sm:text-display-l text-white font-normal leading-tight max-w-4xl">
            {experience.name}
          </h1>
          <p className="text-body-l text-palette-sand_200 font-light max-w-2xl mt-4">
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
              <h2 className="font-display text-heading-l text-text-primary">
                An Intimate Sensory Immersion
              </h2>
              <p className="text-body-m text-text-secondary leading-relaxed font-light whitespace-pre-line">
                {experience.long_description || experience.description}
              </p>
            </div>

            {/* Host Profile */}
            {experience.host && (
              <div className="p-8 rounded-[2px] bg-surface-primary border border-border-subtle shadow-subtle flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <img
                  src={experience.host.avatar}
                  alt={experience.host.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-accent-secondary"
                />
                <div className="space-y-1 flex-1">
                  <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block">
                    Your Master Host
                  </span>
                  <h3 className="font-display text-heading-s text-text-primary">
                    {experience.host.name}
                  </h3>
                  <p className="text-caption text-text-muted">{experience.host.role}</p>
                  <p className="text-body-s text-text-secondary font-light pt-2">
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
                <h3 className="font-display text-heading-m text-text-primary">
                  The Sequence of the Ritual
                </h3>
                <div className="space-y-6 border-l-2 border-border-subtle pl-6 ml-2">
                  {experience.itinerary.map((step, idx) => (
                    <div key={idx} className="relative space-y-1">
                      <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent-primary ring-4 ring-background-primary" />
                      {step.time && (
                        <span className="text-caption font-mono text-accent-primary font-medium">
                          {step.time}
                        </span>
                      )}
                      <h4 className="font-display text-heading-s text-text-primary">
                        {step.title}
                      </h4>
                      <p className="text-body-s text-text-secondary font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Action / Summary Sidebar */}
          <div className="lg:col-span-4 p-8 rounded-[2px] bg-surface-primary border border-border-subtle shadow-subtle space-y-6 sticky top-28">
            <div className="pb-4 border-b border-border-subtle space-y-1">
              <span className="text-caption uppercase tracking-uppercase text-text-muted block">
                Experience Investment
              </span>
              {experience.price ? (
                <PriceDisplay amountUSD={experience.price} unit="guest" size="xl" />
              ) : (
                <span className="font-display text-heading-m text-accent-primary">
                  Included with Stay
                </span>
              )}
            </div>

            <div className="space-y-4 text-body-s">
              <div className="flex items-center gap-3 text-text-secondary">
                <Clock size={18} className="text-accent-primary" />
                <div>
                  <span className="text-caption text-text-muted block uppercase">Duration</span>
                  <span className="font-medium text-text-primary">{experience.duration}</span>
                </div>
              </div>

              {experience.group_size && (
                <div className="flex items-center gap-3 text-text-secondary">
                  <Users size={18} className="text-accent-primary" />
                  <div>
                    <span className="text-caption text-text-muted block uppercase">Party Scale</span>
                    <span className="font-medium text-text-primary">{experience.group_size}</span>
                  </div>
                </div>
              )}

              {destination && (
                <div className="pt-2 border-t border-border-subtle">
                  <span className="text-caption text-text-muted block uppercase">Territory</span>
                  <span className="font-medium text-text-primary">
                    {destination.name}, {destination.country}
                  </span>
                </div>
              )}
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/booking')}
              className="w-full"
            >
              Inquire / Reserve Ritual
            </Button>

            <p className="text-caption text-text-muted text-center">
              Private ritual bookings are seamlessly linked to your stay reservation.
            </p>
          </div>
        </div>

        {/* Related Stays */}
        {relatedStays.length > 0 && (
          <div className="pt-20 border-t border-border-subtle mt-20">
            <h3 className="font-display text-heading-l text-text-primary mb-8">
              Sanctuaries Offering This Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedStays.map((stay) => (
                <StayCard key={stay.id} stay={stay} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};
