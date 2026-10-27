"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Reveal from "./Reveal";
import { fabrics, fabricFilters, type Fabric } from "@/data/fabrics";
import { bulkHref } from "@/lib/contact";

type Filter = (typeof fabricFilters)[number];

function Lightbox({ items, index, onClose, onIndex }: { items: Fabric[]; index: number; onClose: () => void; onIndex: (i: number) => void }) {
  const f = items[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const touch = useRef(0);
  const prev = useCallback(() => onIndex((index - 1 + items.length) % items.length), [index, items.length, onIndex]);
  const next = useCallback(() => onIndex((index + 1) % items.length), [index, items.length, onIndex]);

  useEffect(() => {
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prevOverflow; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Tab") {
        const els = Array.from(document.querySelectorAll<HTMLElement>("[data-lb] button, [data-lb] a"));
        if (!els.length) return;
        const first = els[0], last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  return (
    <div data-lb role="dialog" aria-modal="true" aria-label={`Fabric ${f.id}`} className="fixed inset-0 z-[100] flex flex-col bg-charcoal/90 backdrop-blur-sm" onClick={onClose}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => { const d = e.changedTouches[0].clientX - touch.current; if (Math.abs(d) > 60) (d > 0 ? prev() : next()); }}>
      <div className="flex items-center justify-between px-5 py-4 text-ivory" onClick={(e) => e.stopPropagation()}>
        <p className="text-sm tracking-wide"><span className="font-serif text-xl">Fabric {f.id}</span><span className="ml-3 text-xs opacity-70">{f.category} · {index + 1} / {items.length}</span></p>
        <button ref={closeRef} onClick={onClose} aria-label="Close" className="grid h-11 w-11 place-items-center rounded-full hover:bg-ivory/10"><X size={22} /></button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 sm:px-16" >
        <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous fabric" className="absolute left-2 z-10 grid h-11 w-11 place-items-center rounded-full bg-ivory/15 text-ivory hover:bg-ivory/30 sm:left-5"><ArrowLeft size={20} /></button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img key={f.id} src={f.full} alt={f.alt} onClick={(e) => e.stopPropagation()} className="max-h-full max-w-full rounded-sm bg-white object-contain shadow-2xl" />
        <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next fabric" className="absolute right-2 z-10 grid h-11 w-11 place-items-center rounded-full bg-ivory/15 text-ivory hover:bg-ivory/30 sm:right-5"><ArrowRight size={20} /></button>
      </div>
      <div className="flex justify-center px-5 py-4" onClick={(e) => e.stopPropagation()}>
        <a href={bulkHref()} onClick={onClose} className="rounded-full bg-ivory px-6 py-3 text-xs tracking-wide text-charcoal transition-colors hover:bg-champagne">Enquire about Fabric {f.id}</a>
      </div>
    </div>
  );
}

export default function Collection() {
  const [filter, setFilter] = useState<Filter>("All");
  const [open, setOpen] = useState<number | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const items = useMemo(() => (filter === "All" ? fabrics : fabrics.filter((f) => f.category === filter)), [filter]);
  const count = (c: Filter) => (c === "All" ? fabrics.length : fabrics.filter((f) => f.category === c).length);
  const close = useCallback(() => { setOpen(null); trigger.current?.focus(); }, []);

  return (
    <section id="collection" className="bg-cream/60 px-5 py-20 lg:px-12 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow text-brown">The Collection</p>
        <h2 className="mt-4 font-serif text-4xl lg:text-5xl">Every Fabric, Every Colour</h2>
        <span className="mx-auto mt-5 block h-px w-10 bg-gold" />
        <p className="mt-5 text-sm leading-relaxed text-charcoal/75">Browse the fabrics we supply. Contact us for availability and bulk orders.</p>
      </Reveal>

      <div role="tablist" aria-label="Filter fabrics" className="mx-auto mt-10 flex max-w-[1400px] flex-wrap justify-center gap-2">
        {fabricFilters.map((c) => (
          <button key={c} role="tab" aria-selected={filter === c} onClick={() => setFilter(c)}
            className={`rounded-full border px-5 py-2.5 text-xs tracking-wide transition-colors ${filter === c ? "border-forest bg-forest text-ivory" : "border-champagne bg-ivory hover:border-gold"}`}>
            {c} <span className="opacity-60">{count(c)}</span>
          </button>
        ))}
      </div>

      <ul className="mx-auto mt-10 grid max-w-[1400px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6">
        {items.map((f, i) => (
          <li key={f.id}>
            <button onClick={(e) => { trigger.current = e.currentTarget; setOpen(i); }} aria-label={`View fabric ${f.id}, ${f.category}`}
              className="zoom group relative block aspect-square w-full overflow-hidden border border-champagne/60 bg-white transition-shadow hover:shadow-[0_16px_32px_-18px_rgba(36,35,31,0.45)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={f.thumb} alt={f.alt} width={720} height={720} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-charcoal/60 to-transparent px-3 pb-2 pt-6 text-[0.68rem] tracking-wide text-ivory opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                <span>{f.id}</span><span>{f.category}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open !== null && <Lightbox items={items} index={open} onClose={close} onIndex={setOpen} />}
    </section>
  );
}
