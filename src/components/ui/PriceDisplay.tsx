import React from 'react';
import { useCurrency } from '../../context/CurrencyContext';

interface PriceDisplayProps {
  amountUSD: number;
  unit?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLabel?: boolean;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  amountUSD,
  unit = 'night',
  className = '',
  size = 'md',
  showLabel = true,
}) => {
  const { formatPrice } = useCurrency();

  const sizeClasses = {
    sm: "text-body-m font-medium",
    md: "text-heading-s font-semibold",
    lg: "text-heading-m font-display font-medium",
    xl: "text-heading-l font-display font-medium",
  };

  return (
    <div className={`inline-flex items-baseline gap-1.5 ${className}`}>
      <span className={`${sizeClasses[size]} text-text-primary tracking-tight`}>
        {formatPrice(amountUSD)}
      </span>
      {showLabel && (
        <span className="text-body-s text-text-secondary font-normal">
          / {unit}
        </span>
      )}
    </div>
  );
};
