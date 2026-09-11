import { Contact } from "@/components/Contact";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Packages } from "@/components/Packages";
import {
  getGallery,
  getGalleryImageUrl,
  getHeroImageUrl,
  getPackages,
  getSiteSettings,
} from "@/lib/data";
import { withSiteDefaults } from "@/lib/site-defaults";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [rawSettings, packages, galleryItems] = await Promise.all([
    getSiteSettings(),
    getPackages(),
    getGallery(),
  ]);

  const settings = withSiteDefaults(rawSettings);

  const gallery = galleryItems
    .map((item) => {
      const imageUrl = getGalleryImageUrl(item);
      return imageUrl ? { ...item, imageUrl } : null;
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <>
      <Header title={settings.title} instagram={settings.instagram} />
      <main>
        <Hero
          title={settings.title}
          tagline={settings.tagline}
          description={settings.description}
          address={settings.address}
          city={settings.city}
          capacity={settings.capacity}
          heroImageUrl={getHeroImageUrl(rawSettings?.heroImage)}
        />
        <Features features={settings.features} />
        <Packages packages={packages} />
        <Gallery items={gallery} />
        <Contact
          address={settings.address}
          city={settings.city}
          whatsapp={settings.whatsapp}
          instagram={settings.instagram}
          openingHours={settings.openingHours}
        />
      </main>
      <Footer title={settings.title} instagram={settings.instagram} />
    </>
  );
}
