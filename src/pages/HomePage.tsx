import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { STAYS, DESTINATIONS, EXPERIENCES, EDITORIAL_ARTICLES, BRAND_INFO } from '../data/dsfData';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { StayCard } from '../components/cards/StayCard';
import { DestinationCard } from '../components/cards/DestinationCard';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import { EditorialCard } from '../components/cards/EditorialCard';
import { SafeImage } from '../components/ui/SafeImage';
import { MotionReveal } from '../components/motion/MotionReveal';
import { ArrowRight, Compass, ShieldCheck, Sparkles, Wind } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      {/* 1. home_hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-palette-charcoal_950 text-white">
        {/* Background Image with Dark Vignette Gradient */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1800&auto=format&fit=crop"
            alt="AURELIA Sanctuary Landscape"
            className="w-full h-full object-cover object-center opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-palette-charcoal_950 via-palette-charcoal_950/60 to-palette-charcoal_950/80" />
        </div>

        <Container className="relative z-10 text-center flex flex-col items-center">
          <MotionReveal variant="fade" delay={100}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-caption uppercase tracking-[0.25em] font-semibold mb-6 border border-white/20 shadow-subtle">
              <Sparkles size={13} className="text-palette-bronze_500" /> Contemporary Luxury Hospitality
            </span>
          </MotionReveal>

          <MotionReveal variant="fade_up" delay={200}>
            <h1 className="font-display text-display-m sm:text-display-l md:text-display-xl font-normal text-white max-w-5xl tracking-tight leading-[0.95] text-balance text-shadow-editorial">
              Places Worth Remembering.
            </h1>
          </MotionReveal>

          <MotionReveal variant="fade_up" delay={300}>
            <p className="font-body text-body-m sm:text-body-l text-palette-sand_200 max-w-2xl mt-6 sm:mt-8 font-normal leading-relaxed text-shadow-subtle">
              A curated collection of distinctive sanctuaries shaped by raw topography, architectural silence, tactile craft, and restorative stillness.
            </p>
          </MotionReveal>

          {/* Hero Quick Search / Discovery Bar */}
          <MotionReveal variant="fade_up" delay={400} className="w-full max-w-4xl mt-10 sm:mt-12">
            <div className="bg-surface-primary text-text-primary p-3 sm:p-4 rounded-[4px] shadow-2xl border border-border-default flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 text-left">
              <div
                onClick={() => navigate('/stays')}
                className="flex-1 px-4 py-2 hover:bg-surface-secondary/80 rounded cursor-pointer transition-colors"
              >
                <span className="block text-[11px] uppercase tracking-uppercase font-semibold text-text-muted">
                  Sanctuaries
                </span>
                <span className="text-body-s font-semibold text-text-primary">
                  Explore 14 Global Sanctuaries
                </span>
              </div>

              <div className="hidden md:block h-8 w-[1px] bg-border-default" />

              <div
                onClick={() => navigate('/destinations')}
                className="flex-1 px-4 py-2 hover:bg-surface-secondary/80 rounded cursor-pointer transition-colors"
              >
                <span className="block text-[11px] uppercase tracking-uppercase font-semibold text-text-muted">
                  Territories
                </span>
                <span className="text-body-s font-semibold text-text-primary">
                  Kyoto, Tuscany, Norway, Namib...
                </span>
              </div>

              <div className="hidden md:block h-8 w-[1px] bg-border-default" />

              <div
                onClick={() => navigate('/experiences')}
                className="flex-1 px-4 py-2 hover:bg-surface-secondary/80 rounded cursor-pointer transition-colors"
              >
                <span className="block text-[11px] uppercase tracking-uppercase font-semibold text-text-muted">
                  Rituals & Craft
                </span>
                <span className="text-body-s font-semibold text-text-primary">
                  Onsens, Wine, Tea & Solitude
                </span>
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={() => navigate('/stays')}
                rightIcon={<ArrowRight size={16} />}
                className="w-full md:w-auto"
              >
                Discover
              </Button>
            </div>
          </MotionReveal>
        </Container>

        {/* Floating Bottom Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 text-caption tracking-widest uppercase font-medium">
          <span>Scroll to explore</span>
          <span className="w-[1px] h-6 bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* 2. Brand Ethos / Introduction */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <MotionReveal variant="fade_right" className="lg:col-span-6 space-y-6">
            <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block">
              The AURELIA Philosophy
            </span>
            <h2 className="font-display text-heading-l sm:text-heading-xl text-text-primary leading-tight font-medium">
              Hospitality as a deeper relationship between place, people, and time.
            </h2>
            <p className="text-body-m text-text-secondary leading-relaxed font-normal">
              Rather than treating accommodation as a transactional hotel room, AURELIA creates immersive sanctuaries where architecture, local heritage, wellbeing, and quiet hospitality come together in harmonious silence.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              {BRAND_INFO.stats.map((stat, idx) => (
                <div key={idx} className="border-l-2 border-accent-secondary pl-4">
                  <span className="font-display text-heading-m font-semibold text-text-primary block">
                    {stat.value}
                  </span>
                  <span className="text-caption text-text-muted font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal variant="fade_left" className="lg:col-span-6">
            <div className="relative rounded-[2px] overflow-hidden border border-border-default bg-surface-secondary shadow-medium">
              <SafeImage
                src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop"
                alt="Hinoki Wood Sanctuary"
                className="w-full h-[450px] object-cover"
              />
              <div className="p-6 bg-surface-primary/95 backdrop-blur-sm border-t border-border-default">
                <p className="font-display italic text-body-l text-text-primary font-medium">
                  "True luxury is not ornament; it is the rare privilege of uninterrupted stillness."
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </Container>

      {/* 3. home_featured_stays Section */}
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block mb-2">
              Curated Sanctuaries
            </span>
            <h2 className="font-display text-heading-l sm:text-heading-xl text-text-primary font-medium">
              Featured Stays Shaped by Nature
            </h2>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate('/stays')}
            rightIcon={<ArrowRight size={16} />}
          >
            View All Stays
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STAYS.slice(0, 3).map((stay, idx) => (
            <MotionReveal key={stay.id} variant="fade_up" delay={idx * 150}>
              <StayCard stay={stay} />
            </MotionReveal>
          ))}
        </div>
      </Container>

      {/* 4. home_destinations Section */}
      <section className="bg-surface-secondary/70 py-24 border-y border-border-default">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block mb-2">
                Sanctuary Territories
              </span>
              <h2 className="font-display text-heading-l sm:text-heading-xl text-text-primary font-medium">
                Distinctive Places with a Story
              </h2>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigate('/destinations')}
              rightIcon={<ArrowRight size={16} />}
            >
              Explore All Territories
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.slice(0, 3).map((dest, idx) => (
              <MotionReveal key={dest.id} variant="fade_up" delay={idx * 150}>
                <DestinationCard destination={dest} />
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. home_experiences Section */}
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block mb-2">
              Sensory Rituals
            </span>
            <h2 className="font-display text-heading-l sm:text-heading-xl text-text-primary font-medium">
              Curated Master Experiences
            </h2>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate('/experiences')}
            rightIcon={<ArrowRight size={16} />}
          >
            All Experiences
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERIENCES.slice(0, 3).map((exp, idx) => (
            <MotionReveal key={exp.id} variant="fade_up" delay={idx * 150}>
              <ExperienceCard experience={exp} />
            </MotionReveal>
          ))}
        </div>
      </Container>

      {/* 6. home_editorial Section */}
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block mb-2">
              The AURELIA Journal
            </span>
            <h2 className="font-display text-heading-l sm:text-heading-xl text-text-primary font-medium">
              Essays on Architecture & Stillness
            </h2>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate('/journal')}
            rightIcon={<ArrowRight size={16} />}
          >
            Read Journal
          </Button>
        </div>

        {EDITORIAL_ARTICLES.length > 0 && (
          <div className="space-y-8">
            <EditorialCard article={EDITORIAL_ARTICLES[0]} featured={true} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {EDITORIAL_ARTICLES.slice(1, 3).map((art) => (
                <EditorialCard key={art.id} article={art} />
              ))}
            </div>
          </div>
        )}
      </Container>

      {/* 7. Brand Values Grid */}
      <section className="bg-surface-primary py-20 border-t border-border-default">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block mb-2">
              Our Core Tenets
            </span>
            <h2 className="font-display text-heading-l text-text-primary font-medium">
              Guiding Principles of AURELIA
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BRAND_INFO.values.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[2px] border border-border-default bg-surface-secondary/50 space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-surface-primary border border-border-default flex items-center justify-center text-accent-primary font-display font-semibold">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-heading-s text-text-primary font-medium">
                  {val.title}
                </h3>
                <p className="text-body-s text-text-secondary leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Bottom Conversion Call to Action */}
      <Container>
        <div className="relative rounded-[4px] overflow-hidden bg-palette-charcoal_950 text-white p-10 sm:p-16 md:p-20 text-center flex flex-col items-center border border-border-strong">
          <div className="absolute inset-0 z-0">
            <SafeImage
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1600&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-palette-charcoal_950 via-palette-charcoal_950/70 to-palette-charcoal_950/90" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-label uppercase tracking-uppercase text-palette-sand_200 font-semibold block">
              Begin Your Journey
            </span>
            <h2 className="font-display text-heading-l sm:text-heading-xl text-white font-medium leading-tight text-shadow-editorial">
              Find your sanctuary of restorative solitude.
            </h2>
            <p className="text-body-m text-palette-stone_300 leading-relaxed font-normal text-shadow-subtle">
              Connect with our private concierges to plan unhurried stays, architectural explorations, and bespoke culinary journeys.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/stays')}
                rightIcon={<ArrowRight size={18} />}
                className="w-full sm:w-auto"
              >
                Explore All Sanctuaries
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/booking')}
                className="w-full sm:w-auto text-white border-white/40 bg-white/10 hover:bg-white/20 hover:text-white"
              >
                Direct Reservation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
