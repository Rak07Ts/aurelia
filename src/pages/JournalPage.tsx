import React, { useState } from 'react';
import { EDITORIAL_ARTICLES } from '../data/dsfData';
import { Container } from '../components/layout/Container';
import { EditorialCard } from '../components/cards/EditorialCard';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { MotionReveal } from '../components/motion/MotionReveal';

export const JournalPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Essays' },
    { id: 'Architecture', label: 'Architecture' },
    { id: 'Slow Living', label: 'Slow Living' },
    { id: 'Artisans', label: 'Living Craft & Materials' },
    { id: 'Gastronomy', label: 'Gastronomy' },
  ];

  const filteredArticles = EDITORIAL_ARTICLES.filter((art) => {
    if (selectedCategory !== 'all' && art.category !== selectedCategory) return false;
    return true;
  });

  const featured = filteredArticles[0];
  const rest = filteredArticles.slice(1);

  return (
    <div className="pt-28 pb-32 space-y-16">
      <Container>
        <Breadcrumbs items={[{ label: 'The AURELIA Journal' }]} className="mb-6" />

        <div className="max-w-3xl space-y-4">
          <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block">
            Publication & Essays
          </span>
          <h1 className="font-display text-display-m sm:text-display-l text-text-primary font-normal leading-tight">
            Reflections on Architecture, Craft & Stillness
          </h1>
          <p className="text-body-m text-text-secondary font-light leading-relaxed">
            Exploring the philosophies of negative space, historical masonry, natural lighting, and unhurried living.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-6 border-b border-border-subtle pb-6">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 py-2 text-body-s rounded-[2px] border transition-colors cursor-pointer ${
                selectedCategory === c.id
                  ? 'bg-accent-primary text-white border-accent-primary font-medium'
                  : 'bg-surface-primary text-text-secondary border-border-subtle hover:border-border-default'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {featured && (
          <MotionReveal variant="fade_up">
            <EditorialCard article={featured} featured={true} />
          </MotionReveal>
        )}

        {/* Rest of Articles */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {rest.map((art, idx) => (
              <MotionReveal key={art.id} variant="fade_up" delay={idx * 150}>
                <EditorialCard article={art} />
              </MotionReveal>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};
