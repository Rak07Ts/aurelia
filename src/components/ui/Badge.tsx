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
  const statusStyles: Record<AvailabilityStatus, string> = {
    available: "bg-[#526B55]/10 text-[#526B55] border-[#526B55]/20",
    limited: "bg-[#A47E42]/10 text-[#A47E42] border-[#A47E42]/20",
    unavailable: "bg-[#9A5148]/10 text-[#9A5148] border-[#9A5148]/20",
    seasonal: "bg-[#596F78]/10 text-[#596F78] border-[#596F78]/20",
  };

  const variantStyles = {
    default: "bg-surface-secondary text-text-secondary border-border-subtle",
    outline: "border border-border-default text-text-primary bg-transparent",
    pill: "rounded-full bg-accent-primary/10 text-accent-primary border-transparent",
    subtle: "bg-transparent text-text-muted border-none",
  };

  const selectedStyle = status ? statusStyles[status] : variantStyles[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-label uppercase tracking-uppercase font-medium border rounded-[2px] ${selectedStyle} ${className}`}
    >
      {status === 'available' && <span className="w-1.5 h-1.5 rounded-full bg-[#526B55] animate-pulse" />}
      {status === 'limited' && <span className="w-1.5 h-1.5 rounded-full bg-[#A47E42]" />}
      {children}
    </span>
  );
};
