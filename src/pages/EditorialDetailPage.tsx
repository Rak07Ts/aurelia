import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { EDITORIAL_ARTICLES, STAYS } from '../data/dsfData';
import { Container } from '../components/layout/Container';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { StayCard } from '../components/cards/StayCard';
import { EditorialCard } from '../components/cards/EditorialCard';
import { SafeImage } from '../components/ui/SafeImage';
import { Clock, Calendar, Share2 } from 'lucide-react';

export const EditorialDetailPage: React.FC = () => {
  const { params } = useNavigation();
  const articleId = params.articleId;

  const article =
    EDITORIAL_ARTICLES.find((a) => a.id === articleId || a.slug === articleId) ||
    EDITORIAL_ARTICLES[0];

  const relatedStays = STAYS.filter((s) => article.related_stay_ids?.includes(s.id));
  const relatedArticles = EDITORIAL_ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="pt-28 pb-32 space-y-16">
      <Container size="reading">
        <Breadcrumbs
          items={[
            { label: 'Journal', path: '/journal' },
            { label: article.category, path: '/journal' },
            { label: article.title },
          ]}
          className="mb-8"
        />

        {/* Article Header */}
        <header className="space-y-6 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-caption uppercase tracking-uppercase text-accent-primary font-semibold">
            <span>{article.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {article.read_time}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Calendar size={12} /> {article.published_at}</span>
          </div>

          <h1 className="font-display text-display-m sm:text-display-l text-text-primary font-medium leading-[1.05]">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="font-display italic text-heading-s sm:text-heading-m text-text-secondary font-normal">
              "{article.subtitle}"
            </p>
          )}

          {/* Author Badge */}
          <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              {article.author.avatar && (
                <SafeImage
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-11 h-11 rounded-full object-cover border border-border-default"
                />
              )}
              <div>
                <p className="font-semibold text-body-s text-text-primary">{article.author.name}</p>
                <p className="text-caption text-text-muted font-medium">{article.author.role}</p>
              </div>
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Article URL copied to clipboard.');
              }}
              className="p-2 rounded-full border border-border-default hover:border-accent-primary text-text-muted hover:text-text-primary transition-colors cursor-pointer"
              title="Share Essay"
            >
              <Share2 size={16} />
            </button>
          </div>
        </header>
      </Container>

      {/* Hero Cover Image (Wide) */}
      <Container size="wide">
        <div className="h-[420px] sm:h-[540px] rounded-[2px] overflow-hidden bg-palette-ivory_100 border border-border-default">
          <SafeImage
            src={article.cover}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </Container>

      {/* Article Content Body (Reading Width) */}
      <Container size="reading">
        <article className="space-y-8 text-body-l text-text-secondary font-normal leading-relaxed dropcap">
          {article.content.map((block, idx) => {
            if (block.type === 'paragraph') {
              return <p key={idx}>{block.text}</p>;
            }
            if (block.type === 'heading') {
              return (
                <h2 key={idx} className="font-display text-heading-m sm:text-heading-l text-text-primary pt-6 font-medium">
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote key={idx} className="p-8 my-8 border-l-2 border-accent-secondary bg-surface-secondary/70 rounded-[2px] space-y-2">
                  <p className="font-display italic text-heading-s text-text-primary font-medium">
                    "{block.text}"
                  </p>
                  {block.author && (
                    <cite className="block text-caption uppercase tracking-uppercase text-accent-primary font-semibold not-italic">
                      — {block.author}
                    </cite>
                  )}
                </blockquote>
              );
            }
            if (block.type === 'image' && block.src) {
              return (
                <figure key={idx} className="my-10 space-y-3">
                  <div className="rounded-[2px] overflow-hidden border border-border-default">
                    <SafeImage src={block.src} alt={block.caption || ''} className="w-full h-auto" />
                  </div>
                  {block.caption && (
                    <figcaption className="text-caption text-text-muted text-center font-medium">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }
            return null;
          })}
        </article>
      </Container>

      {/* Linked Stays */}
      {relatedStays.length > 0 && (
        <Container>
          <div className="pt-16 border-t border-border-default">
            <div className="mb-8">
              <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block mb-1">
                Referenced In This Essay
              </span>
              <h3 className="font-display text-heading-l text-text-primary font-medium">
                Related Sanctuaries
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedStays.map((s) => (
                <StayCard key={s.id} stay={s} />
              ))}
            </div>
          </div>
        </Container>
      )}

      {/* More Editorial Articles */}
      {relatedArticles.length > 0 && (
        <Container>
          <div className="pt-16 border-t border-border-default">
            <div className="mb-8">
              <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block mb-1">
                Further Dispatches
              </span>
              <h3 className="font-display text-heading-l text-text-primary font-medium">
                More Essays from AURELIA Journal
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((art) => (
                <EditorialCard key={art.id} article={art} />
              ))}
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};
