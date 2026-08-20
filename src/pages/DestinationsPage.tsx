import React from 'react';
import { DESTINATIONS } from '../data/dsfData';
import { Container } from '../components/layout/Container';
import { DestinationCard } from '../components/cards/DestinationCard';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { MotionReveal } from '../components/motion/MotionReveal';

export const DestinationsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-28 space-y-16">
      <Container>
        <Breadcrumbs items={[{ label: 'Sanctuary Territories' }]} className="mb-6" />

        <div className="max-w-3xl space-y-4">
          <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block">
            Global Landscapes
          </span>
          <h1 className="font-display text-display-m sm:text-display-l text-text-primary font-normal leading-tight">
            Territories Shaped by Geology & Culture
          </h1>
          <p className="text-body-m text-text-secondary font-light leading-relaxed">
            From the misty cedar ridges of Kyoto to the travertine baths of Val d'Orcia and the Arctic fjords of Sunnmøre, each AURELIA destination is chosen for its profound spatial poetry and restorative isolation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {DESTINATIONS.map((dest, idx) => (
            <MotionReveal key={dest.id} variant="fade_up" delay={idx * 120}>
              <DestinationCard destination={dest} />
            </MotionReveal>
          ))}
        </div>
      </Container>
    </div>
  );
};
