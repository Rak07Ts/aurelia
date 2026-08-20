export type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY';

export type AvailabilityStatus = 'available' | 'limited' | 'unavailable' | 'seasonal';

export type ThemeMode = 'default' | 'immersive_dark' | 'earth_retreat';

export interface Location {
  country: string;
  region: string;
  city?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  climate?: string;
  bestSeason?: string;
}

export interface Stay {
  id: string;
  slug: string;
  name: string;
  short_description: string;
  description: string;
  architectural_concept?: string;
  location: Location;
  commercial: {
    price: number; // base in USD
    currency: string;
    price_unit: 'night' | 'week' | 'month' | 'stay';
  };
  availability: {
    status: AvailabilityStatus;
    availableDates?: string[];
  };
  features: {
    guests: number;
    bedrooms: number;
    bathrooms: number;
    area_sqm?: number;
    amenities: string[];
    highlight_amenities?: string[];
  };
  assets: {
    cover: string;
    gallery: string[];
  };
  destination_id: string;
  curation_notes?: string;
  rating?: number;
  reviews_count?: number;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  region?: string;
  tagline?: string;
  description: string;
  story: {
    title: string;
    paragraphs: string[];
    quote?: string;
    quote_author?: string;
  };
  hero: string;
  gallery?: string[];
  highlights?: string[];
  seasonality?: string;
  climate?: string;
  culture_note?: string;
  map_coordinates?: {
    lat: number;
    lng: number;
    zoom: number;
  };
  stay_ids: string[];
  experience_ids: string[];
  article_ids?: string[];
}

export interface Experience {
  id: string;
  slug: string;
  name: string;
  tagline?: string;
  description: string;
  long_description?: string;
  category: 'Wellness & Thermal' | 'Gastronomy & Wine' | 'Craft & Architecture' | 'Nature & Solitude' | 'Cultural Rituals';
  duration: string; // e.g. "3 hours", "Full Day", "2 Days"
  group_size?: string;
  price?: number; // base USD
  currency?: string;
  hero: string;
  gallery?: string[];
  host?: {
    name: string;
    role: string;
    bio: string;
    avatar: string;
  };
  itinerary?: {
    time?: string;
    title: string;
    description: string;
  }[];
  included?: string[];
  destination_id: string;
  related_stay_ids: string[];
}

export interface EditorialArticle {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  category: 'Architecture' | 'Slow Living' | 'Gastronomy' | 'Artisans' | 'Sanctuaries';
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  published_at: string;
  read_time: string;
  cover: string;
  gallery?: string[];
  content: {
    type: 'paragraph' | 'heading' | 'quote' | 'image' | 'callout';
    text?: string;
    src?: string;
    caption?: string;
    author?: string;
  }[];
  destination_id?: string;
  related_stay_ids?: string[];
  related_article_ids?: string[];
}

export interface BookingGuest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests?: string;
  dietaryPreferences?: string;
  arrivalTime?: string;
}

export interface BookingSelection {
  stayId: string;
  checkInDate: string;
  checkOutDate: string;
  guests: {
    adults: number;
    children: number;
  };
  roomType?: string;
  selectedAddOns: string[];
}

export interface SearchQuery {
  term: string;
  destination?: string;
  type?: 'all' | 'stays' | 'destinations' | 'experiences' | 'journal';
  minPrice?: number;
  maxPrice?: number;
  guests?: number;
}
