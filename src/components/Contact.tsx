import { Clock, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

interface ContactProps {
  address: string;
  city: string;
  whatsapp: string;
  instagram: string;
  openingHours: string;
}

export function Contact({ address, city, whatsapp, instagram, openingHours }: ContactProps) {
  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de saber mais sobre o Festavida e agendar uma visita.",
  )}`;

  return (
    <section id="contato" className="bg-[#1a0f14] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a574]">Contato</p>
            <h2 className="mt-3 font-serif text-3xl font-light text-[#f5e6d3] sm:text-4xl">
              Venha conhecer o espaço
            </h2>
            <p className="mt-4 text-[#f5e6d3]/70">
              Agende uma visita presencial ou fale conosco pelo WhatsApp. Estamos prontos para
              tornar seu evento inesquecível.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3 text-[#f5e6d3]/80">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#d4a574]" />
                <span>
                  {address}
                  <br />
                  {city}
                </span>
              </li>
              <li className="flex items-start gap-3 text-[#f5e6d3]/80">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#d4a574]" />
                <span>{openingHours}</span>
              </li>
              <li className="flex items-start gap-3 text-[#f5e6d3]/80">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#d4a574]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <a
                  href={`https://instagram.com/${instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4a574]"
                >
                  @{instagram}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-5 text-lg font-semibold text-white transition hover:bg-[#20bd5a]"
            >
              <MessageCircle className="h-6 w-6" />
              Falar no WhatsApp
            </a>
            <Link
              href="/agendar"
              className="flex items-center justify-center rounded-2xl border border-[#d4a574]/50 px-8 py-5 text-lg font-semibold text-[#d4a574] transition hover:bg-[#d4a574]/10"
            >
              Agendar online
            </Link>

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Localização Festavida"
                src="https://maps.google.com/maps?q=Av.+Jos%C3%A9+Gomes+da+Rocha+Leal+1451,+Bragan%C3%A7a+Paulista,+SP&output=embed"
                className="h-56 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
