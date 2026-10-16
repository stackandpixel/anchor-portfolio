export interface AnchorProfile {
  name: string;
  title: string;
  tagline: string;
  altTaglines: string[];
  primaryCities: string[];
  availabilityNotice: string;
  phone: string;
  email: string;
  whatsappNumber: string; // e.g. 919820012345
  instagramHandle: string;
  instagramUrl: string;
  youtubeUrl: string;
  linkedinUrl: string;
  languages: string[];
  hostingStyles: string[];
  bioLead: string;
  bioStory: string[];
  approachPoints: Array<{ title: string; desc: string }>;
  stats: Array<{ label: string; value: string; unit: string; context: string }>;
  customHeroImage?: string;
  customPortraitImage?: string;
}

export type EventCategory =
  | 'All'
  | 'Weddings'
  | 'Corporate'
  | 'College Festivals'
  | 'Brand Activations'
  | 'Private Celebrations'
  | 'Live Shows';

export interface ServiceItem {
  id: string;
  categoryKey: string;
  title: string;
  tagline: string;
  description: string;
  bulletPoints: string[];
  toneOfVoice: string;
  typicalDuration: string;
  audienceRange: string;
  themeTone: 'gold' | 'orange' | 'cyan' | 'purple' | 'emerald';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<EventCategory, 'All'>;
  city: string;
  venue: string;
  audienceSize: string;
  description: string;
  momentHighlight: string;
  tags: string[];
  visualVibe: {
    accent: string;
    stageType: string;
    ambientGradient: string;
  };
}

export interface ShowreelItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  previewVibe: string;
  description: string;
  chapters: Array<{ time: string; title: string; note: string }>;
  stageQuote: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  headline: string;
  description: string;
  organizerBenefit: string;
}

export interface BookingStepItem {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  turnaroundTime: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  designation: string;
  companyOrEvent: string;
  city: string;
  category: string;
  rating: number;
  verifiedLabel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Booking & Fees' | 'Event Types' | 'Logistics & Tech' | 'Scripting';
}

export interface SocialPostItem {
  id: string;
  caption: string;
  eventType: string;
  city: string;
  timestamp: string;
  likes: string;
  comments: string;
  stageNote: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  city: string;
  venueName: string;
  audienceSize: string;
  preferredLanguage: string;
  additionalRequirements: string;
}
