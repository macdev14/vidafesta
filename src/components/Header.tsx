"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  title: string;
  instagram?: string;
  showPackages?: boolean;
}

const baseNavLinks = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#pacotes", label: "Pacotes", requiresPackages: true },
  { href: "/#galeria", label: "Galeria" },
  { href: "/#contato", label: "Contato" },
];

export function Header({ title, instagram, showPackages = false }: HeaderProps) {
  const navLinks = baseNavLinks.filter(
    (link) => !link.requiresPackages || showPackages,
  );
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#1a0f14]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl font-semibold tracking-wide text-[#f5e6d3] transition group-hover:text-[#d4a574]">
            Festavida
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#c9a87c]/70 sm:block">
            {title.split(" ").slice(0, 2).join(" ")}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-wider text-[#f5e6d3]/80 transition hover:text-[#d4a574]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/agendar"
            className="rounded-full bg-[#d4a574] px-5 py-2 text-sm font-medium text-[#1a0f14] transition hover:bg-[#e8c49a]"
          >
            Agendar
          </Link>
          {instagram && (
            <a
              href={`https://instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5e6d3]/70 transition hover:text-[#d4a574]"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          )}
        </nav>

        <button
          type="button"
          className="text-[#f5e6d3] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#1a0f14] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-wider text-[#f5e6d3]/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/agendar"
              className="rounded-full bg-[#d4a574] px-5 py-3 text-center text-sm font-medium text-[#1a0f14]"
              onClick={() => setOpen(false)}
            >
              Agendar visita
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
