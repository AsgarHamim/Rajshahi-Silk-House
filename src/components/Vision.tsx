import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Vision() {
  return (
    <section id="vision" className="relative overflow-hidden bg-[#f1e4cf]">
      <Image src="/images/muslin.jpg" alt="White muslin fabric flowing in soft natural light" fill sizes="100vw" className="object-cover object-center lg:object-[60%_50%]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f3e6d0] via-[#f3e6d0]/60 to-transparent lg:via-[#f3e6d0]/30" />
      <div className="relative mx-auto flex min-h-[420px] max-w-[1400px] flex-col justify-center gap-8 px-5 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <Reveal className="max-w-md">
          <p className="eyebrow text-brown">Our Vision</p>
          <h2 className="mt-3 font-serif text-4xl lg:text-5xl">One Day, Pure Matchbox Moslin.</h2>
          <p className="mt-3 font-serif text-xl italic">Our next chapter, a dream in progress.</p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/80">We aspire to create exceptionally fine muslin fabric and, one day, produce pure Moslin sarees that celebrate the extraordinary textile heritage of Bengal.</p>
          <a href="#home" className="link-arrow mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-xs text-ivory transition-colors hover:bg-brown">Our Journey <ArrowRight size={14} className="arrow" /></a>
        </Reveal>
        <div className="flex items-center gap-10 lg:mr-6">
          <p className="-rotate-6 whitespace-nowrap font-script text-5xl text-brown lg:text-6xl" aria-hidden>Pure Moslin,<br />One Day...</p>
          <div className="relative hidden h-48 w-40 shrink-0 rotate-3 border-[6px] border-ivory shadow-xl xl:block"><Image src="/images/vision-fabric.webp" alt="White floral printed fabric" fill sizes="160px" className="object-cover" /></div>
        </div>
      </div>
    </section>
  );
}
