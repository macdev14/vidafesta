import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import {
  bookedDatesQuery,
  galleryQuery,
  packagesQuery,
  siteSettingsQuery,
} from "@/sanity/queries";
import type { EventPackage, GalleryItem, SiteSettings } from "./types";

export async function getSiteSettings(): Promise<SiteSettings | null> {
  if (!client) return null;
  try {
    return await client.fetch<SiteSettings | null>(siteSettingsQuery);
  } catch {
    return null;
  }
}

export async function getPackages(): Promise<EventPackage[]> {
  if (!client) return [];
  try {
    return (await client.fetch<EventPackage[]>(packagesQuery)) ?? [];
  } catch {
    return [];
  }
}

export async function getGallery(): Promise<GalleryItem[]> {
  if (!client) return [];
  try {
    return (await client.fetch<GalleryItem[]>(galleryQuery)) ?? [];
  } catch {
    return [];
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

export function getGalleryImageUrl(item: GalleryItem): string | null {
  if (!item.image) return null;
  return buildImageUrl(item.image, 800, 600);
}

export function getHeroImageUrl(
  image: SiteSettings["heroImage"],
): string | null {
  if (!image) return null;
  return buildImageUrl(image, 1920, 1080);
}

function buildImageUrl(
  image: NonNullable<GalleryItem["image"]>,
  width: number,
  height: number,
): string | null {
  if (!client) return null;
  try {
    return urlFor(image).width(width).height(height).url();
  } catch {
    return null;
  }
}

export function whatsappLink(phone: string, message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}
