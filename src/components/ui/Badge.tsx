import React from 'react';
import { AvailabilityStatus } from '../../types/dsf';

interface BadgeProps {
  status?: AvailabilityStatus;
  variant?: 'default' | 'outline' | 'pill' | 'subtle';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  status,
  variant = 'default',
  children,
  className = '',
}) => {
  // High contrast colors across light and dark backgrounds
  const statusStyles: Record<AvailabilityStatus, string> = {
    available: "bg-[#2D4530]/15 dark:bg-[#526B55]/30 text-[#1E3B22] dark:text-[#88B88E] border-[#2D4530]/40 font-semibold",
    limited: "bg-[#7A541A]/15 dark:bg-[#A47E42]/30 text-[#61400E] dark:text-[#E2B774] border-[#7A541A]/40 font-semibold",
    unavailable: "bg-[#7A2A20]/15 dark:bg-[#9A5148]/30 text-[#6B1F16] dark:text-[#E88C83] border-[#7A2A20]/40 font-semibold",
    seasonal: "bg-[#254B5A]/15 dark:bg-[#596F78]/30 text-[#183946] dark:text-[#96C0CE] border-[#254B5A]/40 font-semibold",
  };

  const variantStyles = {
    default: "bg-surface-secondary text-text-primary border-border-default font-medium",
    outline: "border border-border-strong text-text-primary bg-surface-primary/80 font-medium",
    pill: "rounded-full bg-accent-primary/15 text-accent-primary border-accent-primary/30 font-medium",
    subtle: "bg-transparent text-text-secondary border-none font-medium",
  };

  const selectedStyle = status ? statusStyles[status] : variantStyles[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-[11px] uppercase tracking-uppercase border rounded-[2px] backdrop-blur-sm shadow-subtle ${selectedStyle} ${className}`}
    >
      {status === 'available' && <span className="w-1.5 h-1.5 rounded-full bg-[#1E3B22] dark:bg-[#88B88E] animate-pulse" />}
      {status === 'limited' && <span className="w-1.5 h-1.5 rounded-full bg-[#61400E] dark:bg-[#E2B774]" />}
      {children}
    </span>
  );
};
