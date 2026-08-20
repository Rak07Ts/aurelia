import React, { useState } from 'react';
import { useBooking, ADDON_PRICES } from '../context/BookingContext';
import { useNavigation } from '../context/NavigationContext';
import { useCurrency } from '../context/CurrencyContext';
import { STAYS } from '../data/dsfData';
import { Container } from '../components/layout/Container';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { FormField } from '../components/ui/FormField';
import { DateSelector } from '../components/ui/DateSelector';
import { GuestSelector } from '../components/ui/GuestSelector';
import { Button } from '../components/ui/Button';
import { PriceDisplay } from '../components/ui/PriceDisplay';
import { Badge } from '../components/ui/Badge';
import { SafeImage } from '../components/ui/SafeImage';
import {
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Download,
  Calendar,
  Lock,
} from 'lucide-react';

export const BookingPage: React.FC = () => {
  const {
    selection,
    guest,
    selectedStay,
    setStayId,
    setGuestInfo,
    toggleAddOn,
    calculateNights,
    calculateTotalUSD,
    bookingSuccess,
    setBookingSuccess,
    resetBooking,
  } = useBooking();
  const { navigate } = useNavigation();
  const { formatPrice } = useCurrency();

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef] = useState(`AUR-${Math.floor(100000 + Math.random() * 900000)}`);

  const nights = calculateNights();
  const totals = calculateTotalUSD();

  const handleGuestChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setGuestInfo({ [e.target.name]: e.target.value });
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  if (bookingSuccess) {
    return (
      <div className="pt-28 pb-32">
        <Container size="reading">
          <div className="p-8 sm:p-12 rounded-[2px] bg-surface-primary border border-border-default shadow-medium text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#526B55]/10 text-[#526B55] flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>

            <div>
              <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block mb-1">
                Reservation Confirmed
              </span>
              <h1 className="font-display text-display-s sm:text-display-m text-text-primary">
                Your Sanctuary Awaits
              </h1>
              <p className="text-body-m text-text-secondary mt-2 font-light">
                Reference Code: <span className="font-mono font-medium text-text-primary">{bookingRef}</span>
              </p>
            </div>

            <div className="p-6 bg-surface-secondary/60 rounded text-left space-y-4 border border-border-subtle text-body-s">
              <div className="flex justify-between border-b border-border-subtle pb-3">
                <span className="text-text-muted">Sanctuary</span>
                <span className="font-medium text-text-primary">{selectedStay?.name}</span>
              </div>
              <div className="flex justify-between border-b border-border-subtle pb-3">
                <span className="text-text-muted">Stay Dates</span>
                <span className="font-medium text-text-primary">
                  {selection.checkInDate} → {selection.checkOutDate} ({nights} Nights)
                </span>
              </div>
              <div className="flex justify-between border-b border-border-subtle pb-3">
                <span className="text-text-muted">Party</span>
                <span className="font-medium text-text-primary">
                  {selection.guests.adults} Adults{selection.guests.children > 0 ? `, ${selection.guests.children} Children` : ''}
                </span>
              </div>
              <div className="flex justify-between border-b border-border-subtle pb-3">
                <span className="text-text-muted">Guest Name</span>
                <span className="font-medium text-text-primary">
                  {guest.firstName} {guest.lastName} ({guest.email})
                </span>
              </div>
              {selection.selectedAddOns.length > 0 && (
                <div className="border-b border-border-subtle pb-3">
                  <span className="text-text-muted block mb-1">Curated Add-Ons</span>
                  <ul className="text-caption text-text-primary space-y-1">
                    {selection.selectedAddOns.map((addon) => (
                      <li key={addon}>• {addon}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex justify-between pt-1 text-body-m font-medium text-text-primary">
                <span>Total Reserved Investment</span>
                <span>{formatPrice(totals.total)}</span>
              </div>
            </div>

            <p className="text-caption text-text-muted max-w-md mx-auto">
              A comprehensive itinerary dispatch along with private concierge contact details has been sent to {guest.email || 'your email'}.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                onClick={() => {
                  resetBooking();
                  navigate('/');
                }}
              >
                Return to Sanctuaries
              </Button>
              <Button
                variant="secondary"
                onClick={() => window.print()}
                leftIcon={<Download size={16} />}
              >
                Print / Save Itinerary
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-32 space-y-12">
      <Container>
        <Breadcrumbs items={[{ label: 'Reserve Sanctuary' }]} className="mb-6" />

        <div className="max-w-2xl space-y-3">
          <span className="text-label uppercase tracking-uppercase text-accent-primary font-semibold block">
            Direct Reservation
          </span>
          <h1 className="font-display text-display-m sm:text-display-l text-text-primary font-normal leading-tight">
            Reserve Your Sanctuary
          </h1>
          <p className="text-body-m text-text-secondary font-light">
            Complete your reservation with transparent pricing and personalized curator care.
          </p>
        </div>

        {/* Step Indicators */}
        <div className="grid grid-cols-3 gap-4 border-b border-border-subtle pb-6 max-w-3xl">
          <div
            className={`pb-2 border-b-2 transition-colors ${
              currentStep >= 1 ? 'border-accent-primary text-text-primary font-medium' : 'border-transparent text-text-muted'
            }`}
          >
            <span className="text-label uppercase tracking-uppercase block text-caption">Step 01</span>
            <span className="text-body-s">Sanctuary & Dates</span>
          </div>
          <div
            className={`pb-2 border-b-2 transition-colors ${
              currentStep >= 2 ? 'border-accent-primary text-text-primary font-medium' : 'border-transparent text-text-muted'
            }`}
          >
            <span className="text-label uppercase tracking-uppercase block text-caption">Step 02</span>
            <span className="text-body-s">Guest Details</span>
          </div>
          <div
            className={`pb-2 border-b-2 transition-colors ${
              currentStep === 3 ? 'border-accent-primary text-text-primary font-medium' : 'border-transparent text-text-muted'
            }`}
          >
            <span className="text-label uppercase tracking-uppercase block text-caption">Step 03</span>
            <span className="text-body-s">Confirmation</span>
          </div>
        </div>

        {/* Main Grid: Form Steps + Summary Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            {/* STEP 1 */}
            {currentStep === 1 && (
              <div className="p-8 rounded-[2px] bg-surface-primary border border-border-subtle shadow-subtle space-y-8 animate-in fade-in">
                <div>
                  <h3 className="font-display text-heading-s text-text-primary mb-4">
                    1. Select Sanctuary
                  </h3>
                  <select
                    value={selection.stayId}
                    onChange={(e) => setStayId(e.target.value)}
                    className="w-full px-4 py-3 rounded border border-border-default bg-surface-secondary text-text-primary text-body-m focus:outline-none focus:border-accent-primary"
                  >
                    {STAYS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.location.country}) — ${s.commercial.price}/night
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <h3 className="font-display text-heading-s text-text-primary mb-3">
                    2. Travel Dates
                  </h3>
                  <DateSelector />
                </div>

                <div>
                  <h3 className="font-display text-heading-s text-text-primary mb-3">
                    3. Traveling Party
                  </h3>
                  <GuestSelector />
                </div>

                {/* Curated Add-ons */}
                <div>
                  <h3 className="font-display text-heading-s text-text-primary mb-3">
                    4. Curated Add-On Experiences (Optional)
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(ADDON_PRICES).map(([name, price]) => {
                      const isSelected = selection.selectedAddOns.includes(name);
                      return (
                        <div
                          key={name}
                          onClick={() => toggleAddOn(name)}
                          className={`p-4 rounded border flex items-center justify-between cursor-pointer transition-colors ${
                            isSelected
                              ? 'border-accent-primary bg-accent-primary/5'
                              : 'border-border-subtle bg-surface-secondary/40 hover:border-border-default'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => {}}
                              className="w-4 h-4 text-accent-primary rounded"
                            />
                            <span className="text-body-s font-medium text-text-primary">{name}</span>
                          </div>
                          <span className="text-body-s text-accent-primary font-medium">
                            +{formatPrice(price)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setCurrentStep(2)}
                  rightIcon={<ArrowRight size={18} />}
                  className="w-full"
                >
                  Continue to Guest Details
                </Button>
              </div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <div className="p-8 rounded-[2px] bg-surface-primary border border-border-subtle shadow-subtle space-y-6 animate-in fade-in">
                <h3 className="font-display text-heading-s text-text-primary border-b border-border-subtle pb-3">
                  Guest Information & Preferences
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="First Name"
                    name="firstName"
                    value={guest.firstName}
                    onChange={handleGuestChange}
                    required
                    placeholder="e.g. Eleanor"
                  />
                  <FormField
                    label="Last Name"
                    name="lastName"
                    value={guest.lastName}
                    onChange={handleGuestChange}
                    required
                    placeholder="e.g. Sterling"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={guest.email}
                    onChange={handleGuestChange}
                    required
                    placeholder="e.g. eleanor@example.com"
                  />
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={guest.phone}
                    onChange={handleGuestChange}
                    required
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="Estimated Arrival Window"
                    name="arrivalTime"
                    type="select"
                    value={guest.arrivalTime || '15:00 - 17:00'}
                    onChange={handleGuestChange}
                    options={[
                      { value: '14:00 - 16:00', label: '14:00 - 16:00 (Afternoon)' },
                      { value: '16:00 - 18:00', label: '16:00 - 18:00 (Dusk)' },
                      { value: '18:00 - 21:00', label: '18:00 - 21:00 (Evening)' },
                      { value: 'Custom', label: 'Private EV Transfer Window' },
                    ]}
                  />
                  <FormField
                    label="Dietary Regimen"
                    name="dietaryPreferences"
                    value={guest.dietaryPreferences || 'None'}
                    onChange={handleGuestChange}
                    placeholder="e.g. Pescatarian, Gluten-free, Organic"
                  />
                </div>

                <FormField
                  label="Special Ritual Requests or Notes"
                  name="specialRequests"
                  type="textarea"
                  value={guest.specialRequests || ''}
                  onChange={handleGuestChange}
                  placeholder="Tell us about special occasions, preferred pillows, quietude requirements, or mobility considerations..."
                />

                <div className="flex items-center gap-4 pt-4">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => setCurrentStep(1)}
                    leftIcon={<ArrowLeft size={18} />}
                  >
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      if (!guest.firstName || !guest.email) {
                        alert('Please fill in your first name and email address.');
                        return;
                      }
                      setCurrentStep(3);
                    }}
                    rightIcon={<ArrowRight size={18} />}
                    className="flex-1"
                  >
                    Proceed to Review
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <form
                onSubmit={handleConfirmReservation}
                className="p-8 rounded-[2px] bg-surface-primary border border-border-subtle shadow-subtle space-y-6 animate-in fade-in"
              >
                <h3 className="font-display text-heading-s text-text-primary border-b border-border-subtle pb-3">
                  Final Review & Guarantee
                </h3>

                <div className="p-4 bg-surface-secondary/70 rounded text-body-s space-y-2 border border-border-subtle">
                  <p>
                    <strong className="font-medium text-text-primary">Primary Guest:</strong>{' '}
                    {guest.firstName} {guest.lastName} ({guest.email}, {guest.phone})
                  </p>
                  <p>
                    <strong className="font-medium text-text-primary">Arrival Time:</strong>{' '}
                    {guest.arrivalTime}
                  </p>
                  {guest.specialRequests && (
                    <p>
                      <strong className="font-medium text-text-primary">Special Requests:</strong>{' '}
                      {guest.specialRequests}
                    </p>
                  )}
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="font-display text-heading-s text-text-primary flex items-center gap-2">
                    <Lock size={16} className="text-accent-primary" /> Guarantee Payment Method
                  </h4>
                  <p className="text-caption text-text-secondary">
                    Your card will only be pre-authorized. Full settlement occurs at the sanctuary.
                  </p>
                  <input
                    type="text"
                    required
                    placeholder="Card Number •••• •••• •••• ••••"
                    className="w-full px-4 py-3 bg-surface-secondary border border-border-default rounded text-body-m"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="MM / YY"
                      className="w-full px-4 py-3 bg-surface-secondary border border-border-default rounded text-body-m"
                    />
                    <input
                      type="text"
                      required
                      placeholder="CVC"
                      className="w-full px-4 py-3 bg-surface-secondary border border-border-default rounded text-body-m"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => setCurrentStep(2)}
                    leftIcon={<ArrowLeft size={18} />}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={<CheckCircle2 size={18} />}
                    className="flex-1"
                  >
                    Confirm & Reserve Sanctuary
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Summary Box */}
          <div className="lg:col-span-5 p-8 rounded-[2px] bg-surface-primary border border-border-subtle shadow-subtle space-y-6 sticky top-28">
            <div className="flex items-center gap-4 border-b border-border-subtle pb-6">
              <SafeImage
                src={selectedStay?.assets.cover}
                alt={selectedStay?.name}
                className="w-24 h-20 rounded-[2px] object-cover border border-border-default"
              />
              <div>
                <span className="text-caption uppercase tracking-uppercase text-accent-primary font-medium block">
                  {selectedStay?.location.country}
                </span>
                <h4 className="font-display text-heading-s text-text-primary leading-tight">
                  {selectedStay?.name}
                </h4>
                <span className="text-caption text-text-muted block mt-1">
                  {selectedStay?.features.bedrooms} Suites • Max {selectedStay?.features.guests} Guests
                </span>
              </div>
            </div>

            <div className="space-y-3 text-body-s border-b border-border-subtle pb-6">
              <div className="flex justify-between text-text-secondary">
                <span>
                  {formatPrice(totals.baseRate)} × {nights} {nights === 1 ? 'Night' : 'Nights'}
                </span>
                <span>{formatPrice(totals.subtotal)}</span>
              </div>

              {totals.addOnsTotal > 0 && (
                <div className="flex justify-between text-text-secondary">
                  <span>Selected Rituals & Add-Ons</span>
                  <span>+{formatPrice(totals.addOnsTotal)}</span>
                </div>
              )}

              <div className="flex justify-between text-text-secondary">
                <span>Curator Hospitality Service (8%)</span>
                <span>+{formatPrice(totals.serviceFee)}</span>
              </div>

              <div className="flex justify-between text-text-secondary">
                <span>Regional Ecological & Tourism Tax (7%)</span>
                <span>+{formatPrice(totals.taxes)}</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline pt-2">
              <span className="font-display text-heading-s text-text-primary font-medium">
                Total Investment
              </span>
              <span className="font-display text-heading-m font-semibold text-accent-primary">
                {formatPrice(totals.total)}
              </span>
            </div>

            <div className="pt-2 flex items-center gap-2 text-caption text-text-muted">
              <ShieldCheck size={16} className="text-[#526B55]" />
              <span>Complimentary changes & cancellation up to 14 days prior.</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
