import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { products } from "@/data/content";

export default function Products() {
  return (
    <section id="products" className="bg-ivory px-5 py-20 lg:px-12 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow text-brown">Our Finest Silk Products</p>
        <h2 className="mt-4 font-serif text-4xl lg:text-5xl">Crafted by Our Own Hands</h2>
        <span className="mx-auto mt-5 block h-px w-10 bg-gold" />
        <p className="mt-5 text-sm leading-relaxed text-charcoal/75">From yarn to fabric, we create premium silk that defines elegance, quality, and tradition.</p>
      </Reveal>
      <ul className="mx-auto mt-14 grid max-w-[1180px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <li key={p.name}>
            <Reveal delay={i * 90} className="h-full">
              <a href="#contact" className="zoom group flex h-full flex-col border border-champagne/70 bg-ivory transition-shadow hover:shadow-[0_18px_40px_-20px_rgba(36,35,31,0.35)]">
                <span className="relative block aspect-[16/10] overflow-hidden"><Image src={p.image} alt={p.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" /></span>
                <span className="flex flex-1 flex-col p-5">
                  <span className="font-serif text-2xl">{p.name}</span>
                  <span className="mt-2 flex-1 text-[0.8rem] leading-relaxed text-charcoal/70">{p.text}</span>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs">Discover More <ArrowRight size={14} className="arrow" /></span>
                </span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
