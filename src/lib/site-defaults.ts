import type { SiteSettings } from "./types";

/** Valores mínimos só para o layout não quebrar quando o CMS está vazio. */
export function withSiteDefaults(settings: SiteSettings | null): SiteSettings {
  return {
    title: settings?.title || "Festavida",
    tagline: settings?.tagline || "",
    description: settings?.description || "",
    address: settings?.address || "",
    city: settings?.city || "",
    whatsapp: settings?.whatsapp || "",
    instagram: settings?.instagram || "",
    capacity: settings?.capacity || 0,
    heroImage: settings?.heroImage,
    features: settings?.features || [],
    openingHours: settings?.openingHours || "",
  };
}
