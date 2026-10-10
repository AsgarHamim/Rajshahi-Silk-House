import Image from "next/image";
import Reveal from "./Reveal";

const tiles = [
  { src: "/images/yarn.jpg", alt: "Silk yarn spools arranged by colour", label: "Yarn", cls: "col-span-2 row-span-2 aspect-[4/3] sm:aspect-auto" },
  { src: "/images/yarn-close.jpg", alt: "Close-up of coloured yarn cones", label: "Threads", cls: "aspect-[4/3]" },
  { src: "/images/fiber.jpg", alt: "Silk fabric folds in rose and gold", label: "Fiber", cls: "aspect-[4/3]" },
  { src: "/images/fabric.jpg", alt: "Finished golden silk fabric detail", label: "Finished fabric", cls: "col-span-2 aspect-[16/7]" },
];

export default function YarnFiber() {
  return (
    <section id="yarn-fiber" className="bg-cream px-5 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[4fr_7fr]">
        <Reveal>
          <p className="eyebrow text-brown">Yarn &amp; Fiber</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight lg:text-5xl">Every Great Fabric Begins with a Single Thread.</h2>
          <span className="mt-6 block h-px w-10 bg-gold" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-charcoal/75">Explore the materials and craftsmanship behind the fabrics we create.</p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="grid grid-cols-2 gap-[3px]">
            {tiles.map((t) => (
              <li key={t.src} className={`zoom relative overflow-hidden ${t.cls}`}>
                <Image src={t.src} alt={t.alt} fill sizes="(min-width:1024px) 40vw, 50vw" className="object-cover" />
                <span className="absolute bottom-0 left-0 bg-charcoal/65 px-3 py-1.5 text-[0.7rem] tracking-wide text-ivory">{t.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
