import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  const { navigate } = useNavigation();

  return (
    <nav aria-label="Breadcrumbs" className={`flex items-center gap-2 text-caption ${className}`}>
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-1 text-text-muted hover:text-text-primary transition-colors cursor-pointer"
        aria-label="Home"
      >
        <Home size={13} />
        <span className="hidden sm:inline">Home</span>
      </button>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight size={12} className="text-text-muted/60" />
            {isLast || !item.path ? (
              <span className="text-text-primary font-medium truncate max-w-[220px]">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => navigate(item.path!)}
                className="text-text-muted hover:text-text-primary transition-colors truncate max-w-[160px] cursor-pointer"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
