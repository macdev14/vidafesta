import { Briefcase, Cake, GraduationCap, Heart, Users } from "lucide-react";
import Link from "next/link";
import type { EventPackage } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  cake: Cake,
  heart: Heart,
  briefcase: Briefcase,
  users: Users,
  graduation: GraduationCap,
};

interface PackagesProps {
  packages: EventPackage[];
}

export function Packages({ packages }: PackagesProps) {
  return (
    <section id="pacotes" className="bg-[#1a0f14] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4a574]">Pacotes</p>
          <h2 className="mt-3 font-serif text-3xl font-light text-[#f5e6d3] sm:text-4xl">
            Para cada tipo de celebração
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#f5e6d3]/70">
            Escolha o pacote ideal ou entre em contato para montar uma proposta personalizada.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => {
            const Icon = iconMap[pkg.icon] || Cake;
            return (
              <article
                key={pkg._id}
                className={`group relative flex flex-col rounded-2xl border p-6 transition ${
                  pkg.featured
                    ? "border-[#d4a574] bg-[#d4a574]/10"
                    : "border-white/10 bg-white/5 hover:border-[#d4a574]/40"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#d4a574] px-3 py-0.5 text-xs font-medium text-[#1a0f14]">
                    Mais popular
                  </span>
                )}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#d4a574]/20">
                  <Icon className="h-6 w-6 text-[#d4a574]" />
                </div>
                <h3 className="font-serif text-xl text-[#f5e6d3]">{pkg.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#f5e6d3]/65">
                  {pkg.description}
                </p>
                <p className="mt-3 text-xs uppercase tracking-wider text-[#d4a574]">
                  {pkg.duration}
                </p>
                {pkg.includes?.length > 0 && (
                  <ul className="mt-4 space-y-1 border-t border-white/10 pt-4">
                    {pkg.includes.slice(0, 3).map((item) => (
                      <li key={item} className="text-xs text-[#f5e6d3]/55">
                        · {item}
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href={`/agendar?pacote=${pkg._id}`}
                  className="mt-6 block rounded-full border border-[#d4a574]/50 py-2.5 text-center text-sm text-[#d4a574] transition group-hover:bg-[#d4a574] group-hover:text-[#1a0f14]"
                >
                  Solicitar orçamento
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
