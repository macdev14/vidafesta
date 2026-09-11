export interface SiteSettings {
  title: string;
  tagline: string;
  description: string;
  address: string;
  city: string;
  whatsapp: string;
  instagram: string;
  capacity: number;
  heroImage?: { asset: { _ref: string } };
  features: string[];
  openingHours: string;
}

export interface EventPackage {
  _id: string;
  title: string;
  slug?: { current: string };
  description: string;
  price?: number;
  duration: string;
  includes: string[];
  icon: string;
  featured?: boolean;
}

export interface GalleryItem {
  _id: string;
  title: string;
  image?: { asset: { _ref: string } };
  category: string;
}

export interface BookingFormData {
  name: string;
  email?: string;
  phone: string;
  eventDate: string;
  eventType: string;
  guestCount?: number;
  packageId?: string;
  message?: string;
}
