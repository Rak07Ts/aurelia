import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { DESTINATIONS, STAYS, EXPERIENCES, EDITORIAL_ARTICLES } from '../data/dsfData';
import { Container } from '../components/layout/Container';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { StayCard } from '../components/cards/StayCard';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import { EditorialCard } from '../components/cards/EditorialCard';
import { SafeImage } from '../components/ui/SafeImage';
import { Button } from '../components/ui/Button';
import { MotionReveal } from '../components/motion/MotionReveal';
import { MapPin, Compass, Sun, Wind, ArrowRight } from 'lucide-react';

export const DestinationDetailPage: React.FC = () => {
  const { params, navigate } = useNavigation();
  const destId = params.destinationId;

  const destination =
    DESTINATIONS.find((d) => d.id === destId || d.slug === destId) || DESTINATIONS[0];

  const destinationStays = STAYS.filter((s) => s.destination_id === destination.id);
  const destinationExperiences = EXPERIENCES.filter((e) => e.destination_id === destination.id);
  const destinationArticles = EDITORIAL_ARTICLES.filter((a) => a.destination_id === destination.id);

  return (
    <div className="pt-24 pb-32 space-y-24">
      {/* 1. destination_hero */}
      <section className="relative min-h-[70vh] flex items-end pb-16 bg-palette-charcoal_950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={destination.hero}
            alt={destination.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-palette-charcoal_950 via-palette-charcoal_950/65 to-black/40" />
        </div>

        <Container className="relative z-10">
          <Breadcrumbs
            items={[{ label: 'Territories', path: '/destinations' }, { label: destination.name }]}
            className="mb-4 text-white/80"
          />
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/50 backdrop-blur-md text-white text-caption uppercase tracking-uppercase font-semibold mb-4 border border-white/20">
            <Compass size={13} className="text-palette-bronze_500" /> {destination.country} • {destination.region}
          </span>
          <h1 className="font-display text-display-m sm:text-display-l md:text-display-xl font-medium text-white leading-tight text-shadow-editorial">
            {destination.name}
          </h1>
          <p className="text-body-l text-palette-sand_200 font-normal max-w-2xl mt-4 text-shadow-subtle">
            {destination.tagline}
          </p>
        </Container>
      </section>

      {/* 2. destination_story & Territory Details */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block">
              Territory Narrative
            </span>
            <h2 className="font-display text-heading-l sm:text-heading-xl text-text-primary leading-tight font-medium">
              {destination.story.title}
            </h2>

            <div className="space-y-4 text-body-m text-text-secondary leading-relaxed font-normal">
              {destination.story.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {destination.story.quote && (
              <blockquote className="p-8 border-l-2 border-accent-secondary bg-surface-secondary/70 rounded-[2px] my-8 space-y-2">
                <p className="font-display italic text-heading-s sm:text-heading-m text-text-primary font-medium">
                  "{destination.story.quote}"
                </p>
                {destination.story.quote_author && (
                  <cite className="block text-caption uppercase tracking-uppercase text-accent-primary font-semibold not-italic">
                    — {destination.story.quote_author}
                  </cite>
                )}
              </blockquote>
            )}

            {/* Highlights */}
            {destination.highlights && (
              <div className="pt-6 space-y-4">
                <h3 className="font-display text-heading-s text-text-primary font-medium">
                  Territory Hallmarks
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {destination.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded bg-surface-primary border border-border-default text-body-s font-semibold text-text-primary flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent-secondary" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Territory Side Metadata Card */}
          <div className="lg:col-span-4 p-8 rounded-[2px] bg-surface-primary border border-border-default space-y-6 sticky top-28 shadow-subtle">
            <h3 className="font-display text-heading-s text-text-primary font-medium border-b border-border-subtle pb-4">
              Territory Almanac
            </h3>

            <div className="space-y-4 text-body-s">
              <div>
                <span className="text-caption uppercase tracking-uppercase text-text-muted font-semibold block mb-1">
                  Climate & Atmosphere
                </span>
                <span className="text-text-primary font-medium">{destination.climate}</span>
              </div>

              <div>
                <span className="text-caption uppercase tracking-uppercase text-text-muted font-semibold block mb-1">
                  Optimal Seasonality
                </span>
                <span className="text-text-primary font-medium">{destination.seasonality}</span>
              </div>

              <div>
                <span className="text-caption uppercase tracking-uppercase text-text-muted font-semibold block mb-1">
                  Cultural Ethos
                </span>
                <p className="text-text-secondary leading-relaxed font-normal">{destination.culture_note}</p>
              </div>
            </div>

            <Button
              variant="primary"
              size="md"
              onClick={() => navigate('/booking')}
              className="w-full"
            >
              Reserve in {destination.name}
            </Button>
          </div>
        </div>
      </Container>

      {/* 3. Sanctuaries in This Destination */}
      {destinationStays.length > 0 && (
        <Container>
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block mb-1">
                Sanctuaries
              </span>
              <h2 className="font-display text-heading-l text-text-primary font-medium">
                Distinctive Stays in {destination.name}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinationStays.map((stay) => (
              <StayCard key={stay.id} stay={stay} />
            ))}
          </div>
        </Container>
      )}

      {/* 4. Experiences in This Destination */}
      {destinationExperiences.length > 0 && (
        <section className="bg-surface-secondary/70 py-20 border-y border-border-default">
          <Container>
            <div className="mb-10">
              <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block mb-1">
                Territory Rituals
              </span>
              <h2 className="font-display text-heading-l text-text-primary font-medium">
                Experiences Hosted in {destination.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinationExperiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 5. Editorial Articles for This Destination */}
      {destinationArticles.length > 0 && (
        <Container>
          <div className="mb-10">
            <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block mb-1">
              Field Notes
            </span>
            <h2 className="font-display text-heading-l text-text-primary font-medium">
              Essays from {destination.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinationArticles.map((art) => (
              <EditorialCard key={art.id} article={art} />
            ))}
          </div>
        </Container>
      )}
    </div>
  );
};
