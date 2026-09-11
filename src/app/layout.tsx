import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Festavida | Espaço para Festas e Eventos — Bragança Paulista",
  description:
    "Salão de festas e eventos em Bragança Paulista. Aniversários, casamentos, confraternizações e eventos corporativos. Agende sua visita!",
  openGraph: {
    title: "Festavida — Espaço para Festas e Eventos",
    description: "Onde cada celebração ganha vida. Bragança Paulista, SP.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${cormorant.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-[#1a0f14] font-sans antialiased">{children}</body>
    </html>
  );
}
