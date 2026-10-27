import Image from "next/image";
import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { areas, brands, swatches } from "@/data/content";

export default function Store() {
  return (
    <section id="store" className="border-t border-champagne/40 bg-ivory px-5 py-20 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[3fr_6fr_3fr]">
        <Reveal>
          <p className="eyebrow text-brown">Our Store</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight lg:text-5xl">A Trusted Name in Fashion</h2>
          <p className="mt-5 text-sm leading-relaxed text-charcoal/75">Our fabrics support the collections of leading clothing brands, including Aarong, La Reve, RACE, and Twelve. We supply fabrics across Bangladesh.</p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-serif text-lg tracking-[0.12em]" aria-label="Brands we supply">
            {brands.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <div className="zoom relative aspect-[16/9] overflow-hidden"><Image src="/images/showroom.jpg" alt="Rajshahi Silk House showroom interior with wooden fixtures and colourful fabrics" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></div>
        </Reveal>
        <Reveal delay={200}>
          <h3 className="font-serif text-2xl">Our Supply Areas</h3>
          <p className="text-xs text-charcoal/60">Across Bangladesh</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs lg:grid-cols-1">
            {areas.map((a) => <li key={a} className="flex items-center gap-2"><MapPin size={13} className="text-gold" aria-hidden />{a}</li>)}
          </ul>
          <p className="mt-2 text-[0.65rem] italic text-charcoal/50">Locations are examples, to be confirmed.</p>
          <ul className="mt-5 flex h-14 overflow-hidden" aria-label="Fabric colour range">
            {swatches.map((c) => <li key={c} className="relative flex-1"><Image src={`/images/sw-${c}.webp`} alt="" fill sizes="40px" className="object-cover" /></li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
