import React from 'react';
import { Calendar as CalendarIcon, ArrowRight } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

interface DateSelectorProps {
  className?: string;
  compact?: boolean;
}

export const DateSelector: React.FC<DateSelectorProps> = ({ className = '', compact = false }) => {
  const { selection, setDates, calculateNights } = useBooking();
  const nights = calculateNights();

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkIn = e.target.value;
    // ensure checkOut is after checkIn
    if (new Date(selection.checkOutDate) <= new Date(checkIn)) {
      const nextDay = new Date(new Date(checkIn).getTime() + 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0];
      setDates(checkIn, nextDay);
    } else {
      setDates(checkIn, selection.checkOutDate);
    }
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkOut = e.target.value;
    if (new Date(checkOut) > new Date(selection.checkInDate)) {
      setDates(selection.checkInDate, checkOut);
    }
  };

  return (
    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2.5 rounded-[2px] border border-border-subtle bg-surface-primary ${className}`}>
      <div className="flex-1 flex items-center gap-3 px-3 py-1.5">
        <CalendarIcon size={18} className="text-accent-primary flex-shrink-0" />
        <div className="flex-1">
          <label className="block text-[11px] font-medium uppercase tracking-uppercase text-text-muted">
            Check-In
          </label>
          <input
            type="date"
            value={selection.checkInDate}
            min={new Date().toISOString().split('T')[0]}
            onChange={handleCheckInChange}
            className="w-full bg-transparent text-body-s font-medium text-text-primary focus:outline-none cursor-pointer"
          />
        </div>
      </div>

      <div className="hidden sm:flex items-center text-text-muted">
        <ArrowRight size={16} />
      </div>

      <div className="flex-1 flex items-center gap-3 px-3 py-1.5">
        <CalendarIcon size={18} className="text-accent-primary flex-shrink-0" />
        <div className="flex-1">
          <label className="block text-[11px] font-medium uppercase tracking-uppercase text-text-muted">
            Check-Out
          </label>
          <input
            type="date"
            value={selection.checkOutDate}
            min={selection.checkInDate}
            onChange={handleCheckOutChange}
            className="w-full bg-transparent text-body-s font-medium text-text-primary focus:outline-none cursor-pointer"
          />
        </div>
      </div>

      {!compact && (
        <div className="px-3 py-1.5 border-t sm:border-t-0 sm:border-l border-border-subtle text-center sm:text-right">
          <span className="text-caption text-text-muted block">Duration</span>
          <span className="text-body-s font-medium text-accent-primary">{nights} {nights === 1 ? 'Night' : 'Nights'}</span>
        </div>
      )}
    </div>
  );
};
