import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { DESTINATIONS, STAYS, EXPERIENCES, EDITORIAL_ARTICLES } from '../data/dsfData';
import { Container } from '../components/layout/Container';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { StayCard } from '../components/cards/StayCard';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import { EditorialCard } from '../components/cards/EditorialCard';
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
          <img
            src={destination.hero}
            alt={destination.name}
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-palette-charcoal_950 via-palette-charcoal_950/40 to-transparent" />
        </div>

        <Container className="relative z-10">
          <Breadcrumbs
            items={[{ label: 'Territories', path: '/destinations' }, { label: destination.name }]}
            className="mb-4 text-white/70"
          />
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/20 backdrop-blur-md text-white text-caption uppercase tracking-uppercase font-medium mb-4">
            <Compass size={13} /> {destination.country} • {destination.region}
          </span>
          <h1 className="font-display text-display-m sm:text-display-l md:text-display-xl font-normal text-white leading-tight">
            {destination.name}
          </h1>
          <p className="text-body-l text-palette-sand_200 font-light max-w-2xl mt-4">
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
            <h2 className="font-display text-heading-l sm:text-heading-xl text-text-primary leading-tight">
              {destination.story.title}
            </h2>

            <div className="space-y-4 text-body-m text-text-secondary leading-relaxed font-light">
              {destination.story.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {destination.story.quote && (
              <blockquote className="p-8 border-l-2 border-accent-secondary bg-surface-secondary/50 rounded-[2px] my-8 space-y-2">
                <p className="font-display italic text-heading-s sm:text-heading-m text-text-primary">
                  "{destination.story.quote}"
                </p>
                {destination.story.quote_author && (
                  <cite className="block text-caption uppercase tracking-uppercase text-accent-primary font-medium not-italic">
                    — {destination.story.quote_author}
                  </cite>
                )}
              </blockquote>
            )}

            {/* Highlights */}
            {destination.highlights && (
              <div className="pt-6 space-y-4">
                <h3 className="font-display text-heading-s text-text-primary">
                  Territory Hallmarks
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {destination.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded bg-surface-primary border border-border-subtle text-body-s font-medium text-text-primary flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar Info Card */}
          <div className="lg:col-span-4 p-8 rounded-[2px] bg-surface-primary border border-border-subtle shadow-subtle space-y-6">
            <h3 className="font-display text-heading-s text-text-primary border-b border-border-subtle pb-3">
              Territory Information
            </h3>

            <div className="space-y-4 text-body-s">
              <div>
                <span className="text-caption uppercase tracking-uppercase text-text-muted block">
                  Best Seasonality
                </span>
                <span className="font-medium text-text-primary">{destination.seasonality || 'Year-Round'}</span>
              </div>
              <div>
                <span className="text-caption uppercase tracking-uppercase text-text-muted block">
                  Climate Character
                </span>
                <span className="font-medium text-text-primary">{destination.climate || 'Temperate'}</span>
              </div>
              <div>
                <span className="text-caption uppercase tracking-uppercase text-text-muted block">
                  Cultural Roots
                </span>
                <span className="font-light text-text-secondary">{destination.culture_note || 'Vernacular architecture and slow living.'}</span>
              </div>
            </div>

            <Button
              variant="primary"
              size="md"
              onClick={() => navigate('/stays')}
              className="w-full"
            >
              View Sanctuaries Here
            </Button>
          </div>
        </div>
      </Container>

      {/* 3. destination_stays Section */}
      <section className="bg-surface-secondary/40 py-20 border-y border-border-subtle">
        <Container>
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block mb-1">
                Accommodations
              </span>
              <h2 className="font-display text-heading-l text-text-primary">
                Sanctuaries in {destination.name}
              </h2>
            </div>
            <Button variant="secondary" size="sm" onClick={() => navigate('/stays')}>
              All Stays
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationStays.map((stay) => (
              <StayCard key={stay.id} stay={stay} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. destination_experiences Section */}
      {destinationExperiences.length > 0 && (
        <Container>
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block mb-1">
                Sensory Journeys
              </span>
              <h2 className="font-display text-heading-l text-text-primary">
                Experiences Curated for {destination.name}
              </h2>
            </div>
            <Button variant="secondary" size="sm" onClick={() => navigate('/experiences')}>
              All Experiences
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinationExperiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </Container>
      )}

      {/* 5. destination_journal Section */}
      {destinationArticles.length > 0 && (
        <Container>
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block mb-1">
                Editorial
              </span>
              <h2 className="font-display text-heading-l text-text-primary">
                Stories from {destination.name}
              </h2>
            </div>
            <Button variant="secondary" size="sm" onClick={() => navigate('/journal')}>
              Read Journal
            </Button>
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
