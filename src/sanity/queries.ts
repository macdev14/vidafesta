import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    tagline,
    description,
    address,
    city,
    whatsapp,
    instagram,
    capacity,
    heroImage,
    features,
    openingHours
  }
`;

export const packagesQuery = groq`
  *[_type == "eventPackage"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    price,
    duration,
    includes,
    icon,
    featured
  }
`;

export const galleryQuery = groq`
  *[_type == "galleryImage"] | order(order asc) {
    _id,
    title,
    image,
    category
  }
`;

export const bookedDatesQuery = groq`
  *[_type == "booking" && status != "cancelled" && eventDate >= $fromDate] {
    eventDate
  }
`;
