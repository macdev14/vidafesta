"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/lib/types";
import { EmptyContent } from "./EmptyContent";

export interface GalleryItemWithImage extends GalleryItem {
  imageUrl: string;
}

interface GalleryProps {
  items: GalleryItemWithImage[];
}

const categories = [
  { value: "all", label: "Todos" },
  { value: "decoracao", label: "Decoração" },
  { value: "espaco", label: "Espaço" },
  { value: "entrada", label: "Entrada" },
  { value: "eventos", label: "Eventos" },
];

export function Gallery({ items }: GalleryProps) {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? items : items.filter((item) => item.category === filter);

  return (
    <section id="galeria" className="bg-[#f5f0eb] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8b6914]">Galeria</p>
          <h2 className="mt-3 font-serif text-3xl font-light text-[#1a0f14] sm:text-4xl">
            Momentos que ganham vida
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#1a0f14]/70">
            Conheça nosso espaço, decorações e eventos realizados. Siga{" "}
            <a
              href="https://instagram.com/festavida"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b6914] underline underline-offset-2"
            >
              @festavida
            </a>{" "}
            no Instagram.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setFilter(cat.value)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                filter === cat.value
                  ? "bg-[#1a0f14] text-[#f5e6d3]"
                  : "bg-white text-[#1a0f14]/70 hover:bg-[#1a0f14]/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {items.length === 0 ? (
          <div className="mt-10">
            <EmptyContent
              title="Galeria vazia"
              description="Cadastre fotos em Studio → Galeria com imagem, título e categoria."
            />
          </div>
        ) : (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <figure
              key={item._id}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#1a0f14]/5"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1a0f14]/80 to-transparent p-4">
                <span className="text-sm font-medium text-[#f5e6d3]">{item.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
