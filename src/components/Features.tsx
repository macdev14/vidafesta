import { CheckCircle2 } from "lucide-react";

interface FeaturesProps {
  features: string[];
}

export function Features({ features }: FeaturesProps) {
  return (
    <section id="sobre" className="bg-[#f5f0eb] py-20 text-[#1a0f14]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#8b6914]">Sobre o espaço</p>
            <h2 className="mt-3 font-serif text-3xl font-light sm:text-4xl">
              Um salão acolhedor no coração de Bragança Paulista
            </h2>
            <p className="mt-6 leading-relaxed text-[#1a0f14]/70">
              O Festavida é um salão de festas e eventos com ótimo acesso, ambiente climatizado e
              decoração encantadora. Ideal para aniversários, casamentos, confraternizações e
              eventos corporativos.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d4a574]" />
                <span className="text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
