import React from 'react';
import { DateSelector } from './DateSelector';
import { GuestSelector } from './GuestSelector';
import { Button } from './Button';
import { PriceDisplay } from './PriceDisplay';
import { useBooking } from '../../context/BookingContext';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowRight, Sparkles } from 'lucide-react';

interface BookingBarProps {
  variant?: 'inline' | 'floating' | 'card';
  stayPriceUSD?: number;
  className?: string;
}

export const BookingBar: React.FC<BookingBarProps> = ({
  variant = 'inline',
  stayPriceUSD,
  className = '',
}) => {
  const { selectedStay, calculateTotalUSD, calculateNights } = useBooking();
  const { navigate } = useNavigation();

  const price = stayPriceUSD || selectedStay?.commercial.price || 1200;
  const nights = calculateNights();
  const totals = calculateTotalUSD();

  const handleProceedToBooking = () => {
    navigate('/booking');
  };

  if (variant === 'floating') {
    return (
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-40 bg-surface-primary/95 backdrop-blur-md border border-border-default p-4 rounded-[4px] shadow-large transition-all duration-300 ${className}`}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div>
              <span className="text-caption text-text-muted block uppercase tracking-uppercase">From</span>
              <PriceDisplay amountUSD={price} size="lg" />
            </div>
            <div className="hidden sm:block h-8 w-[1px] bg-border-subtle" />
            <div className="hidden sm:block">
              <span className="text-caption text-text-muted block uppercase tracking-uppercase">Stay Period</span>
              <span className="text-body-s font-medium text-text-primary">{nights} Nights Selected</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
            <Button
              variant="primary"
              size="md"
              onClick={handleProceedToBooking}
              rightIcon={<ArrowRight size={16} />}
              className="w-full lg:w-auto"
            >
              Reserve Sanctuary
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 bg-surface-primary border border-border-subtle rounded-[2px] shadow-subtle ${className}`}>
      <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-border-subtle">
        <div>
          <span className="text-caption text-text-muted uppercase tracking-uppercase block">Price per Night</span>
          <PriceDisplay amountUSD={price} size="xl" />
        </div>
        <div className="text-right">
          <span className="inline-flex items-center gap-1 text-label uppercase tracking-uppercase font-medium text-[#526B55] bg-[#526B55]/10 px-2 py-0.5 rounded">
            <Sparkles size={12} /> Curated Sanctuary
          </span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-label uppercase tracking-uppercase font-medium text-text-muted mb-1.5">
            Select Travel Dates
          </label>
          <DateSelector />
        </div>

        <div>
          <label className="block text-label uppercase tracking-uppercase font-medium text-text-muted mb-1.5">
            Traveling Party
          </label>
          <GuestSelector />
        </div>
      </div>

      {/* Summary Breakdown */}
      <div className="space-y-2 py-4 border-t border-b border-border-subtle text-body-s mb-6">
        <div className="flex justify-between text-text-secondary">
          <span>{price.toLocaleString()} USD × {nights} {nights === 1 ? 'Night' : 'Nights'}</span>
          <span>${(price * nights).toLocaleString()} USD</span>
        </div>
        <div className="flex justify-between text-text-secondary">
          <span>Curator Service Fee (8%)</span>
          <span>${totals.serviceFee.toLocaleString()} USD</span>
        </div>
        <div className="flex justify-between text-text-secondary">
          <span>Hospitality & Ecological Tax (7%)</span>
          <span>${totals.taxes.toLocaleString()} USD</span>
        </div>
        <div className="flex justify-between text-text-primary font-medium pt-2 border-t border-border-subtle text-body-m">
          <span>Estimated Total</span>
          <PriceDisplay amountUSD={totals.total} showLabel={false} size="md" />
        </div>
      </div>

      <Button
        variant="primary"
        size="lg"
        onClick={handleProceedToBooking}
        rightIcon={<ArrowRight size={18} />}
        className="w-full"
      >
        Request Reservation
      </Button>

      <p className="text-caption text-text-muted text-center mt-3">
        Complimentary cancellation up to 14 days prior to arrival.
      </p>
    </div>
  );
};
