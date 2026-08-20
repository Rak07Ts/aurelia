import React from 'react';
import { EditorialArticle } from '../../types/dsf';
import { useNavigation } from '../../context/NavigationContext';
import { Clock, ArrowRight } from 'lucide-react';

interface EditorialCardProps {
  article: EditorialArticle;
  featured?: boolean;
  className?: string;
}

export const EditorialCard: React.FC<EditorialCardProps> = ({
  article,
  featured = false,
  className = '',
}) => {
  const { navigate } = useNavigation();

  if (featured) {
    return (
      <div
        onClick={() => navigate(`/journal/${article.id}`)}
        className={`group bg-surface-primary border border-border-subtle rounded-[2px] overflow-hidden hover:border-accent-primary transition-all duration-500 cursor-pointer grid grid-cols-1 lg:grid-cols-12 ${className}`}
      >
        <div className="lg:col-span-7 h-80 lg:h-auto relative overflow-hidden bg-palette-ivory_100">
          <img
            src={article.cover}
            alt={article.title}
            className="w-full h-full object-cover img-zoom"
          />
        </div>
        <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-caption uppercase tracking-uppercase font-medium text-accent-primary mb-3">
              <span>{article.category}</span>
              <span>•</span>
              <span className="text-text-muted">{article.read_time}</span>
            </div>
            <h3 className="font-display text-heading-m lg:text-heading-l text-text-primary group-hover:text-accent-primary transition-colors leading-tight">
              {article.title}
            </h3>
            <p className="text-body-m text-text-secondary mt-4 leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between">
            <div className="flex items-center gap-3">
              {article.author.avatar && (
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              <div>
                <p className="text-body-s font-medium text-text-primary">{article.author.name}</p>
                <p className="text-caption text-text-muted">{article.published_at}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-accent-primary font-medium text-body-s uppercase tracking-uppercase group-hover:translate-x-1 transition-transform">
              Read Essay <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => navigate(`/journal/${article.id}`)}
      className={`group bg-surface-primary border border-border-subtle rounded-[2px] overflow-hidden hover:border-accent-primary/60 hover:shadow-medium transition-all duration-500 cursor-pointer flex flex-col ${className}`}
    >
      <div className="relative h-60 w-full overflow-hidden bg-palette-ivory_100">
        <img
          src={article.cover}
          alt={article.title}
          className="w-full h-full object-cover img-zoom"
        />
        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-1 bg-surface-primary/90 backdrop-blur-sm text-text-primary text-label uppercase tracking-uppercase font-medium rounded-[2px] border border-border-subtle">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-caption text-text-muted mb-2">
            <Clock size={12} />
            <span>{article.read_time}</span>
            <span>•</span>
            <span>{article.published_at}</span>
          </div>
          <h3 className="font-display text-heading-s text-text-primary group-hover:text-accent-primary transition-colors leading-tight">
            {article.title}
          </h3>
          <p className="text-body-s text-text-secondary line-clamp-2 mt-2">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-border-subtle flex items-center justify-between text-caption text-text-muted">
          <span>By {article.author.name}</span>
          <span className="inline-flex items-center gap-1 text-accent-primary font-medium uppercase tracking-uppercase group-hover:translate-x-1 transition-transform">
            Read <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </div>
  );
};
