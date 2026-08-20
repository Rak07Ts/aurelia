import React from 'react';

interface DividerProps {
  className?: string;
  withOrnament?: boolean;
}

export const Divider: React.FC<DividerProps> = ({ className = '', withOrnament = false }) => {
  if (withOrnament) {
    return (
      <div className={`flex items-center gap-4 my-12 ${className}`}>
        <div className="flex-1 h-[1px] bg-border-subtle" />
        <span className="w-2 h-2 rounded-full border border-accent-secondary" />
        <div className="flex-1 h-[1px] bg-border-subtle" />
      </div>
    );
  }

  return <hr className={`border-t border-border-subtle my-8 ${className}`} />;
};
