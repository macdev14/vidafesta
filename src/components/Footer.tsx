import Link from "next/link";

interface FooterProps {
  title: string;
  instagram?: string;
}

export function Footer({ title, instagram }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#120a0e] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
        <div>
          <p className="font-serif text-lg text-[#f5e6d3]">Festavida</p>
          <p className="mt-1 text-xs text-[#f5e6d3]/50">{title}</p>
        </div>
        <div className="flex gap-6 text-sm text-[#f5e6d3]/60">
          <Link href="/agendar" className="hover:text-[#d4a574]">
            Agendar
          </Link>
          {instagram && (
            <a
              href={`https://instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4a574]"
            >
              Instagram
            </a>
          )}
        </div>
        <p className="text-xs text-[#f5e6d3]/40">
          © {new Date().getFullYear()} Festavida. Bragança Paulista, SP.
        </p>
      </div>
    </footer>
  );
}
