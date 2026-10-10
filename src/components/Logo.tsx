export function Emblem({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M32 56V30" />
      <path d="M32 42c-9 0-14-6-14-13 8 0 14 5 14 13z" />
      <path d="M32 42c9 0 14-6 14-13-8 0-14 5-14 13z" />
      <path d="M32 31c-6-4-7-11-1-18 6 7 5 14 1 18z" />
      <path d="M22 50c4-2 7-3 10-3s6 1 10 3" />
    </svg>
  );
}

export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const c = tone === "dark" ? "text-forest" : "text-ivory";
  return (
    <a href="#home" className={`flex items-center gap-3 ${c}`} aria-label="Rajshahi Silk House — home">
      <Emblem />
      <span className="leading-none">
        <span className="block font-serif text-[1.45rem] tracking-[0.18em]">RAJSHAHI</span>
        <span className="mt-1 block text-[0.52rem] tracking-[0.42em] opacity-80">SILK HOUSE</span>
      </span>
    </a>
  );
}
