import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { STAYS, DESTINATIONS, EXPERIENCES } from '../data/dsfData';
import { Container } from '../components/layout/Container';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { BookingBar } from '../components/ui/BookingBar';
import { ImageGallery } from '../components/ui/ImageGallery';
import { AmenityList } from '../components/ui/AmenityList';
import { StayCard } from '../components/cards/StayCard';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { MotionReveal } from '../components/motion/MotionReveal';
import {
  MapPin,
  Users,
  Bed,
  Bath,
  Maximize2,
  Calendar,
  Sparkles,
  ArrowRight,
  Compass,
  CheckCircle2,
} from 'lucide-react';

export const StayDetailPage: React.FC = () => {
  const { params, navigate } = useNavigation();
  const stayId = params.stayId;

  const stay = STAYS.find((s) => s.id === stayId || s.slug === stayId) || STAYS[0];
  const destination = DESTINATIONS.find((d) => d.id === stay.destination_id);
  const relatedExperiences = EXPERIENCES.filter((e) =>
    e.related_stay_ids.includes(stay.id)
  );
  const relatedStays = STAYS.filter((s) => s.id !== stay.id).slice(0, 2);

  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'architecture' | 'experiences'>('overview');

  return (
    <div className="pt-28 pb-32 space-y-16">
      <Container>
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Stays', path: '/stays' },
            { label: destination?.name || 'Destination', path: `/destinations/${destination?.id}` },
            { label: stay.name },
          ]}
          className="mb-6"
        />

        {/* 1. stay_hero Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge status={stay.availability.status}>{stay.availability.status}</Badge>
            <span className="flex items-center gap-1.5 text-caption uppercase tracking-uppercase text-accent-primary font-medium">
              <MapPin size={14} />
              {stay.location.city || stay.location.region}, {stay.location.country}
            </span>
          </div>

          <h1 className="font-display text-display-m sm:text-display-l text-text-primary leading-tight font-normal">
            {stay.name}
          </h1>

          <p className="text-body-l text-text-secondary font-light max-w-3xl">
            {stay.short_description}
          </p>

          {/* Quick Specs Strip */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border-subtle text-body-s text-text-secondary">
            <span className="flex items-center gap-2">
              <Users size={16} className="text-accent-primary" /> {stay.features.guests} Maximum Guests
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Bed size={16} className="text-accent-primary" /> {stay.features.bedrooms} Private Suites
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Bath size={16} className="text-accent-primary" /> {stay.features.bathrooms} Bathrooms
            </span>
            {stay.features.area_sqm && (
              <>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Maximize2 size={16} className="text-accent-primary" /> {stay.features.area_sqm} m² Interior Living
                </span>
              </>
            )}
          </div>
        </div>

        {/* 2. stay_gallery */}
        <ImageGallery images={stay.assets.gallery} title={stay.name} />

        {/* 3. Main Two-Column Layout: Details + Sticky Booking Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-start">
          {/* Left Main Content */}
          <div className="lg:col-span-7 space-y-12">
            {/* Navigation Tabs */}
            <div className="flex border-b border-border-subtle gap-6 text-body-s uppercase tracking-uppercase">
              {(['overview', 'amenities', 'architecture', 'experiences'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 font-medium transition-colors border-b-2 -mb-[1px] cursor-pointer ${
                    activeTab === tab
                      ? 'border-accent-primary text-text-primary'
                      : 'border-transparent text-text-muted hover:text-text-primary'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab: Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-in fade-in">
                <div>
                  <h3 className="font-display text-heading-m text-text-primary mb-4">
                    The Living Experience
                  </h3>
                  <p className="text-body-m text-text-secondary leading-relaxed font-light whitespace-pre-line">
                    {stay.description}
                  </p>
                </div>

                {stay.curation_notes && (
                  <div className="p-6 rounded-[2px] bg-surface-secondary border border-border-subtle space-y-2">
                    <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block flex items-center gap-1.5">
                      <Sparkles size={14} /> Curator's Distinction
                    </span>
                    <p className="text-body-s text-text-primary italic">
                      "{stay.curation_notes}"
                    </p>
                  </div>
                )}

                <div>
                  <h3 className="font-display text-heading-s text-text-primary mb-4">
                    Highlighted Sanctuary Amenities
                  </h3>
                  <AmenityList amenities={stay.features.amenities} columns={2} />
                </div>
              </div>
            )}

            {/* Tab: Amenities */}
            {activeTab === 'amenities' && (
              <div className="space-y-6 animate-in fade-in">
                <h3 className="font-display text-heading-m text-text-primary">
                  All Included Amenities & Services
                </h3>
                <AmenityList amenities={stay.features.amenities} columns={2} />
              </div>
            )}

            {/* Tab: Architecture */}
            {activeTab === 'architecture' && (
              <div className="space-y-6 animate-in fade-in">
                <h3 className="font-display text-heading-m text-text-primary">
                  Architectural Concept & Materiality
                </h3>
                <p className="text-body-m text-text-secondary leading-relaxed font-light">
                  {stay.architectural_concept ||
                    "Conceived with deep reverence for indigenous topography and vernacular masonry, this structure utilizes natural light as a primary building material."}
                </p>
                <div className="p-6 bg-surface-primary border border-border-subtle rounded space-y-3">
                  <h4 className="font-display text-heading-s text-text-primary">
                    Material Palette
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-body-s text-text-secondary">
                    <li>• Local Hinoki / Reclaimed Oak</li>
                    <li>• Hand-Cut Travertine Bedrock</li>
                    <li>• Unlacquered Brushed Bronze</li>
                    <li>• Natural Lime Plaster & Washed Linen</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Tab: Experiences */}
            {activeTab === 'experiences' && (
              <div className="space-y-6 animate-in fade-in">
                <h3 className="font-display text-heading-m text-text-primary">
                  Curated Local Rituals for This Sanctuary
                </h3>
                <div className="space-y-4">
                  {relatedExperiences.map((exp) => (
                    <div
                      key={exp.id}
                      onClick={() => navigate(`/experiences/${exp.id}`)}
                      className="p-5 rounded border border-border-subtle hover:border-accent-primary bg-surface-primary cursor-pointer transition-colors flex items-center justify-between"
                    >
                      <div>
                        <span className="text-label uppercase tracking-uppercase text-accent-primary font-medium">
                          {exp.category} • {exp.duration}
                        </span>
                        <h4 className="font-display text-heading-s text-text-primary">
                          {exp.name}
                        </h4>
                      </div>
                      <ArrowRight size={18} className="text-accent-primary" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location & Territory Context */}
            {destination && (
              <div className="pt-8 border-t border-border-subtle space-y-4">
                <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block">
                  Territory Context
                </span>
                <h3 className="font-display text-heading-m text-text-primary">
                  {destination.name}, {destination.country}
                </h3>
                <p className="text-body-s text-text-secondary font-light leading-relaxed">
                  {destination.description}
                </p>
                <Button
                  variant="text"
                  onClick={() => navigate(`/destinations/${destination.id}`)}
                  rightIcon={<ArrowRight size={14} />}
                >
                  Explore more about {destination.name}
                </Button>
              </div>
            )}
          </div>

          {/* Right Sticky Booking Box */}
          <div className="lg:col-span-5 sticky top-28">
            <BookingBar variant="card" stayPriceUSD={stay.commercial.price} />
          </div>
        </div>

        {/* 4. stay_related Stays Section */}
        <div className="pt-24 border-t border-border-subtle">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block mb-1">
                More Sanctuaries
              </span>
              <h2 className="font-display text-heading-l text-text-primary">
                Other Distinctive Places
              </h2>
            </div>
            <Button variant="secondary" size="sm" onClick={() => navigate('/stays')}>
              View All Stays
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedStays.map((s) => (
              <StayCard key={s.id} stay={s} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
