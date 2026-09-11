import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import {
  bookedDatesQuery,
  galleryQuery,
  packagesQuery,
  siteSettingsQuery,
} from "@/sanity/queries";
import type { EventPackage, GalleryItem, SiteSettings } from "./types";
import {
  galleryPlaceholderImages,
  mockGallery,
  mockPackages,
  mockSiteSettings,
} from "./mock-data";

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!client) return mockSiteSettings;
  try {
    const data = await client.fetch<SiteSettings | null>(siteSettingsQuery);
    return data ?? mockSiteSettings;
  } catch {
    return mockSiteSettings;
  }
}

export async function getPackages(): Promise<EventPackage[]> {
  if (!client) return mockPackages;
  try {
    const data = await client.fetch<EventPackage[]>(packagesQuery);
    return data?.length ? data : mockPackages;
  } catch {
    return mockPackages;
  }
}

export async function getGallery(): Promise<GalleryItem[]> {
  if (!client) return mockGallery;
  try {
    const data = await client.fetch<GalleryItem[]>(galleryQuery);
    return data?.length ? data : mockGallery;
  } catch {
    return mockGallery;
  }
}

export async function getBookedDates(fromDate: string): Promise<string[]> {
  if (!client) return [];
  try {
    const data = await client.fetch<{ eventDate: string }[]>(bookedDatesQuery, {
      fromDate,
    });
    return data.map((item) => item.eventDate);
  } catch {
    return [];
  }
}

export function getGalleryImageUrl(item: GalleryItem, index: number): string {
  if (item.image && client) {
    try {
      return urlFor(item.image).width(800).height(600).url();
    } catch {
      // fall through to placeholder
    }
  }
  return galleryPlaceholderImages[index % galleryPlaceholderImages.length];
}

export function whatsappLink(phone: string, message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}
