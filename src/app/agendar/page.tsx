import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getBookedDates, getPackages, getSiteSettings } from "@/lib/data";
import { withSiteDefaults } from "@/lib/site-defaults";
import { format } from "date-fns";

interface AgendarPageProps {
  searchParams: Promise<{ pacote?: string }>;
}

export default async function AgendarPage({ searchParams }: AgendarPageProps) {
  const params = await searchParams;
  const fromDate = format(new Date(), "yyyy-MM-dd");

  const [rawSettings, packages, bookedDates] = await Promise.all([
    getSiteSettings(),
    getPackages(),
    getBookedDates(fromDate),
  ]);

  const settings = withSiteDefaults(rawSettings);

  return (
    <>
      <Header title={settings.title} instagram={settings.instagram} />
      <main className="min-h-screen bg-[#1a0f14] pt-28 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[#f5e6d3]/60 transition hover:text-[#d4a574]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>

          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a574]">Agendamento</p>
            <h1 className="mt-2 font-serif text-3xl font-light text-[#f5e6d3] sm:text-4xl">
              Reserve seu evento
            </h1>
            <p className="mt-3 max-w-2xl text-[#f5e6d3]/70">
              Selecione a data desejada e preencha seus dados. Nossa equipe entrará em contato para
              confirmar disponibilidade e enviar o orçamento.
            </p>
          </div>

          <BookingForm
            packages={packages}
            bookedDates={bookedDates}
            whatsapp={settings.whatsapp}
            initialPackageId={params.pacote}
          />
        </div>
      </main>
      <Footer title={settings.title} instagram={settings.instagram} />
    </>
  );
}
