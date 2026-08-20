import React, { createContext, useContext, useState } from 'react';
import { BookingSelection, BookingGuest, Stay } from '../types/dsf';
import { STAYS } from '../data/dsfData';

interface BookingContextType {
  selection: BookingSelection;
  guest: BookingGuest;
  selectedStay: Stay | undefined;
  setStayId: (id: string) => void;
  setDates: (checkIn: string, checkOut: string) => void;
  setGuestsCount: (adults: number, children: number) => void;
  toggleAddOn: (addOn: string) => void;
  setGuestInfo: (guest: Partial<BookingGuest>) => void;
  calculateNights: () => number;
  calculateTotalUSD: () => {
    baseRate: number;
    nights: number;
    subtotal: number;
    serviceFee: number;
    taxes: number;
    addOnsTotal: number;
    total: number;
  };
  isBookingModalOpen: boolean;
  openBookingModal: (stayId?: string) => void;
  closeBookingModal: () => void;
  bookingSuccess: boolean;
  setBookingSuccess: (val: boolean) => void;
  resetBooking: () => void;
}

const ADDON_PRICES: Record<string, number> = {
  "Private Volcanic Mineral Onsen Ritual": 320,
  "Estate Sommelier Biodynamic Wine Tasting": 240,
  "Private Heli or EV Mountain Transfer": 450,
  "In-Suite Master Kaiseki / Tuscan Chef Dinner": 380,
  "Daily Guided Shinrin-Yoku Forest Meditation": 180
};

export { ADDON_PRICES };

const defaultSelection: BookingSelection = {
  stayId: 'stay-kyoto-onsen',
  checkInDate: '2026-09-10',
  checkOutDate: '2026-09-14',
  guests: {
    adults: 2,
    children: 0,
  },
  selectedAddOns: [],
};

const defaultGuest: BookingGuest = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  specialRequests: '',
  dietaryPreferences: 'None',
  arrivalTime: '15:00 - 17:00',
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selection, setSelection] = useState<BookingSelection>(defaultSelection);
  const [guest, setGuest] = useState<BookingGuest>(defaultGuest);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  const selectedStay = STAYS.find((s) => s.id === selection.stayId) || STAYS[0];

  const setStayId = (id: string) => {
    setSelection((prev) => ({ ...prev, stayId: id }));
  };

  const setDates = (checkIn: string, checkOut: string) => {
    setSelection((prev) => ({ ...prev, checkInDate: checkIn, checkOutDate: checkOut }));
  };

  const setGuestsCount = (adults: number, children: number) => {
    setSelection((prev) => ({
      ...prev,
      guests: { adults: Math.max(1, adults), children: Math.max(0, children) },
    }));
  };

  const toggleAddOn = (addOn: string) => {
    setSelection((prev) => {
      const exists = prev.selectedAddOns.includes(addOn);
      return {
        ...prev,
        selectedAddOns: exists
          ? prev.selectedAddOns.filter((item) => item !== addOn)
          : [...prev.selectedAddOns, addOn],
      };
    });
  };

  const setGuestInfo = (partial: Partial<BookingGuest>) => {
    setGuest((prev) => ({ ...prev, ...partial }));
  };

  const calculateNights = (): number => {
    try {
      const start = new Date(selection.checkInDate).getTime();
      const end = new Date(selection.checkOutDate).getTime();
      const diff = Math.round((end - start) / (1000 * 60 * 60 * 24));
      return diff > 0 ? diff : 1;
    } catch {
      return 1;
    }
  };

  const calculateTotalUSD = () => {
    const baseRate = selectedStay?.commercial.price || 1200;
    const nights = calculateNights();
    const subtotal = baseRate * nights;
    
    let addOnsTotal = 0;
    selection.selectedAddOns.forEach((addon) => {
      addOnsTotal += ADDON_PRICES[addon] || 200;
    });

    const serviceFee = Math.round(subtotal * 0.08); // 8% curator service
    const taxes = Math.round(subtotal * 0.07); // 7% hospitality tax
    const total = subtotal + addOnsTotal + serviceFee + taxes;

    return {
      baseRate,
      nights,
      subtotal,
      serviceFee,
      taxes,
      addOnsTotal,
      total,
    };
  };

  const openBookingModal = (stayId?: string) => {
    if (stayId) {
      setSelection((prev) => ({ ...prev, stayId }));
    }
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const resetBooking = () => {
    setSelection(defaultSelection);
    setGuest(defaultGuest);
    setBookingSuccess(false);
  };

  return (
    <BookingContext.Provider
      value={{
        selection,
        guest,
        selectedStay,
        setStayId,
        setDates,
        setGuestsCount,
        toggleAddOn,
        setGuestInfo,
        calculateNights,
        calculateTotalUSD,
        isBookingModalOpen,
        openBookingModal,
        closeBookingModal,
        bookingSuccess,
        setBookingSuccess,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
