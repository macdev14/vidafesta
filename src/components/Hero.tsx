import Link from "next/link";
import { MapPin, Users } from "lucide-react";

interface HeroProps {
  title: string;
  tagline: string;
  description: string;
  address: string;
  city: string;
  capacity: number;
  heroImageUrl?: string | null;
}

export function Hero({ title, tagline, description, address, city, capacity, heroImageUrl }: HeroProps) {
  const backgroundStyle = heroImageUrl
    ? {
        backgroundImage: `linear-gradient(to bottom, rgba(26,15,20,0.55), rgba(26,15,20,0.92)), url('${heroImageUrl}')`,
      }
    : undefined;

  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div
        className={`absolute inset-0 ${heroImageUrl ? "bg-cover bg-center" : "bg-[#1a0f14]"}`}
        style={backgroundStyle}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,165,116,0.15),transparent_50%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6">
        {tagline && (
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#d4a574]">{tagline}</p>
        )}
        <h1 className="font-serif text-4xl font-light leading-tight text-[#f5e6d3] sm:text-5xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#f5e6d3]/80">{description}</p>
        )}

        {(address || capacity > 0) && (
        <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#f5e6d3]/70">
          {address && (
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#d4a574]" />
              {address}{city ? `, ${city}` : ""}
            </span>
          )}
          {capacity > 0 && (
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4 text-[#d4a574]" />
              Até {capacity} convidados
            </span>
          )}
        </div>
        )}

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/agendar"
            className="rounded-full bg-[#d4a574] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#1a0f14] transition hover:bg-[#e8c49a] hover:shadow-lg hover:shadow-[#d4a574]/20"
          >
            Agendar seu evento
          </Link>
          <Link
            href="/#galeria"
            className="rounded-full border border-[#d4a574]/50 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#f5e6d3] transition hover:border-[#d4a574] hover:bg-[#d4a574]/10"
          >
            Ver galeria
          </Link>
        </div>
      </div>
    </section>
  );
}
