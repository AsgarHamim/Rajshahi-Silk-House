import Image from "next/image";
import { CheckCircle2, Leaf, Users } from "lucide-react";
import Reveal from "./Reveal";
import { principles } from "@/data/content";

const icons = { check: CheckCircle2, users: Users, leaf: Leaf };

export default function Factory() {
  return (
    <section id="factory" className="bg-cream">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[5fr_8fr_3fr]">
        <Reveal className="px-5 py-16 lg:px-12 lg:py-20">
          <p className="eyebrow text-brown">Our Factory</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight lg:text-5xl">Modern Production with Traditional Soul</h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-charcoal/75">We combine production expertise with skilled craftsmanship to create quality fabric, with careful attention to every stage of the process.</p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {principles.map((p) => {
              const Icon = icons[p.icon as keyof typeof icons];
              return (
                <li key={p.title}>
                  <Icon size={26} strokeWidth={1.2} className="text-brown" aria-hidden />
                  <p className="mt-2 text-xs font-medium">{p.title}</p>
                  <p className="mt-1 text-[0.7rem] leading-snug text-charcoal/65">{p.text}</p>
                </li>
              );
            })}
          </ul>
        </Reveal>
        <div className="zoom relative min-h-[320px] lg:min-h-[480px]">
          <Image src="/images/factory.jpg" alt="Production floor with weaving machinery and a worker" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          <span className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-cream to-transparent lg:block" />
        </div>
        <div className="grid grid-cols-2 gap-[3px] lg:grid-cols-1 lg:pl-[3px]">
          {[{ s: "/images/yarn-close.jpg", a: "Colourful yarn cones", l: "Premium Yarn" }, { s: "/images/finest.webp", a: "Close-up of finished printed fabric", l: "Finest Fabric" }].map((i) => (
            <div key={i.l} className="zoom relative min-h-[180px]">
              <Image src={i.s} alt={i.a} fill sizes="(min-width:1024px) 20vw, 50vw" className="object-cover" />
              <span className="absolute inset-x-0 bottom-0 bg-forest/85 px-3 py-2 text-xs font-medium text-ivory">{i.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
