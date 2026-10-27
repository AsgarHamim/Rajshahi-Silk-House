import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { brands } from "@/data/content";

function Panel({ href, src, alt, title, sub, className, imgClass = "" }: { href: string; src: string; alt: string; title: string; sub: string; className: string; imgClass?: string }) {
  return (
    <a href={href} className={`zoom group relative block overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes="(min-width:1024px) 40vw, 100vw" className={`object-cover ${imgClass}`} />
      <span className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-ivory lg:p-5">
        <span>
          <span className="block font-serif text-xl lg:text-2xl">{title}</span>
          <span className="block text-[0.7rem] opacity-90 lg:text-xs">{sub}</span>
        </span>
        <ArrowRight size={18} className="arrow shrink-0" />
      </span>
    </a>
  );
}

export default function Hero() {
  return (
    <section id="home" aria-label="Rajshahi Silk House" className="grid grid-cols-2 gap-[3px] bg-ivory lg:h-[calc(100vh-72px)] lg:max-h-[860px] lg:min-h-[560px] lg:grid-cols-[60fr_40fr] lg:grid-rows-[56fr_44fr]">
      <div className="hero-store relative col-span-2 min-h-[470px] overflow-hidden lg:col-span-1 lg:row-span-2">
        <Image src="/images/showroom.jpg" alt="Rajshahi Silk House showroom with wooden tables, folded silks and hanging garments" fill priority sizes="(min-width:1024px) 60vw, 100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/35 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 py-10 text-ivory lg:px-14">
          <p className="eyebrow">From Yarn to Timeless Fabric</p>
          <h1 className="mt-5 max-w-[11ch] font-serif text-[3.3rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem]">Crafting Silk for Leading Brands</h1>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/90">Premium silk fabrics for leading fashion brands across Bangladesh and beyond.</p>
          <a href="#products" className="mt-8 inline-flex w-fit items-center rounded-full bg-ivory px-7 py-3.5 text-xs tracking-wide text-charcoal transition-colors hover:bg-champagne">Explore Our Journey</a>
        </div>
        <ul className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-x-6 gap-y-1 px-6 pb-5 text-[0.7rem] tracking-[0.22em] text-ivory lg:px-14" aria-label="Brands we supply">
          {brands.map((b, i) => (<li key={b} className="flex items-center gap-6">{i > 0 && <span className="hidden h-3 w-px bg-ivory/60 sm:block" aria-hidden />}{b}</li>))}
        </ul>
      </div>
      <Panel href="#factory" src="/images/factory-hero.jpg" alt="Textile production floor with weaving machinery and workers" title="Our Factory" sub="Precision. Quality. Tradition." className="hero-factory col-span-2 min-h-[220px] lg:col-span-1" imgClass="object-[50%_40%]" />
      <div className="col-span-2 grid grid-cols-2 gap-[3px] lg:col-span-1">
        <Panel href="#yarn-fiber" src="/images/yarn.jpg" alt="Spools of silk yarn in ivory, green and terracotta" title="Our Yarn" sub="The foundation of fine fabric." className="hero-yarn min-h-[190px]" />
        <Panel href="#yarn-fiber" src="/images/fiber.webp" alt="Close-up of printed fabric weave texture" title="Our Fiber" sub="Natural. Pure. Premium." className="min-h-[190px]" />
      </div>
    </section>
  );
}
