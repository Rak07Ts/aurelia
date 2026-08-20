import React, { useState } from 'react';
import { EXPERIENCES } from '../data/dsfData';
import { Container } from '../components/layout/Container';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { FilterGroup } from '../components/ui/FilterGroup';
import { MotionReveal } from '../components/motion/MotionReveal';

export const ExperiencesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Rituals', count: EXPERIENCES.length },
    { id: 'Wellness & Thermal', label: 'Wellness & Thermal', count: EXPERIENCES.filter((e) => e.category === 'Wellness & Thermal').length },
    { id: 'Gastronomy & Wine', label: 'Gastronomy & Wine', count: EXPERIENCES.filter((e) => e.category === 'Gastronomy & Wine').length },
    { id: 'Craft & Architecture', label: 'Craft & Architecture', count: EXPERIENCES.filter((e) => e.category === 'Craft & Architecture').length },
    { id: 'Nature & Solitude', label: 'Nature & Solitude', count: EXPERIENCES.filter((e) => e.category === 'Nature & Solitude').length },
    { id: 'Cultural Rituals', label: 'Cultural Rituals', count: EXPERIENCES.filter((e) => e.category === 'Cultural Rituals').length },
  ];

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (selectedCategory !== 'all' && exp.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="pt-28 pb-28 space-y-16">
      <Container>
        <Breadcrumbs items={[{ label: 'Curated Experiences' }]} className="mb-6" />

        <div className="max-w-3xl space-y-4">
          <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block">
            Sensory Rituals
          </span>
          <h1 className="font-display text-display-m sm:text-display-l text-text-primary font-normal leading-tight">
            Curated Immersions & Living Craft
          </h1>
          <p className="text-body-m text-text-secondary font-light leading-relaxed">
            Hosted exclusively by master tea practitioners, biodynamic vignerons, astrophotographers, and historic stone masons. Designed to awaken sensory awareness and deep presence.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="p-6 bg-surface-primary rounded-[2px] border border-border-subtle mt-10">
          <FilterGroup
            categories={categories}
            activeCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onReset={() => setSelectedCategory('all')}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredExperiences.map((exp, idx) => (
            <MotionReveal key={exp.id} variant="fade_up" delay={idx * 120}>
              <ExperienceCard experience={exp} />
            </MotionReveal>
          ))}
        </div>
      </Container>
    </div>
  );
};
