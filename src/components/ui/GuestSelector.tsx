import React, { useState } from 'react';
import { Users, Plus, Minus, ChevronDown } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

interface GuestSelectorProps {
  className?: string;
}

export const GuestSelector: React.FC<GuestSelectorProps> = ({ className = '' }) => {
  const { selection, setGuestsCount } = useBooking();
  const [isOpen, setIsOpen] = useState(false);

  const totalGuests = selection.guests.adults + selection.guests.children;

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-3 p-3 rounded-[2px] border border-border-subtle bg-surface-primary text-left hover:border-border-default transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <Users size={18} className="text-accent-primary" />
          <div>
            <label className="block text-[11px] font-medium uppercase tracking-uppercase text-text-muted">
              Guests
            </label>
            <span className="text-body-s font-medium text-text-primary">
              {totalGuests} {totalGuests === 1 ? 'Guest' : 'Guests'} ({selection.guests.adults} Adults{selection.guests.children > 0 ? `, ${selection.guests.children} Children` : ''})
            </span>
          </div>
        </div>
        <ChevronDown size={16} className={`text-text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-surface-primary border border-border-default rounded-[2px] shadow-medium z-50 animate-in fade-in slide-in-from-top-2">
          {/* Adults */}
          <div className="flex items-center justify-between py-2 border-b border-border-subtle">
            <div>
              <p className="text-body-s font-medium text-text-primary">Adults</p>
              <p className="text-caption text-text-muted">Ages 13 and above</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={selection.guests.adults <= 1}
                onClick={() => setGuestsCount(selection.guests.adults - 1, selection.guests.children)}
                className="w-8 h-8 rounded border border-border-default flex items-center justify-center text-text-primary hover:border-accent-primary disabled:opacity-30 cursor-pointer"
              >
                <Minus size={14} />
              </button>
              <span className="w-5 text-center font-medium text-body-s">{selection.guests.adults}</span>
              <button
                type="button"
                onClick={() => setGuestsCount(selection.guests.adults + 1, selection.guests.children)}
                className="w-8 h-8 rounded border border-border-default flex items-center justify-center text-text-primary hover:border-accent-primary cursor-pointer"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Children */}
          <div className="flex items-center justify-between py-2 pt-3">
            <div>
              <p className="text-body-s font-medium text-text-primary">Children</p>
              <p className="text-caption text-text-muted">Ages 0 to 12</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={selection.guests.children <= 0}
                onClick={() => setGuestsCount(selection.guests.adults, selection.guests.children - 1)}
                className="w-8 h-8 rounded border border-border-default flex items-center justify-center text-text-primary hover:border-accent-primary disabled:opacity-30 cursor-pointer"
              >
                <Minus size={14} />
              </button>
              <span className="w-5 text-center font-medium text-body-s">{selection.guests.children}</span>
              <button
                type="button"
                onClick={() => setGuestsCount(selection.guests.adults, selection.guests.children + 1)}
                className="w-8 h-8 rounded border border-border-default flex items-center justify-center text-text-primary hover:border-accent-primary cursor-pointer"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-full mt-4 py-2 text-label uppercase tracking-uppercase font-medium bg-accent-primary text-white rounded-[2px] hover:bg-palette-olive_900 transition-colors"
          >
            Apply Guests
          </button>
        </div>
      )}
    </div>
  );
};
