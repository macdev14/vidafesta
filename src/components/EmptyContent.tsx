import Link from "next/link";

interface EmptyContentProps {
  title: string;
  description: string;
}

export function EmptyContent({ title, description }: EmptyContentProps) {
  return (
    <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 px-6 py-12 text-center">
      <p className="font-serif text-xl text-[#f5e6d3]">{title}</p>
      <p className="mx-auto mt-3 max-w-md text-sm text-[#f5e6d3]/60">{description}</p>
      <Link
        href="/studio"
        className="mt-6 inline-block rounded-full bg-[#d4a574] px-6 py-2.5 text-sm font-medium text-[#1a0f14] transition hover:bg-[#e8c49a]"
      >
        Abrir Studio
      </Link>
    </div>
  );
}
