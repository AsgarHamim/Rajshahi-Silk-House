"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/data/content";
import { bulkHref } from "@/lib/contact";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-champagne/50 bg-ivory/95 backdrop-blur">
      <nav className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between px-5 lg:px-12" aria-label="Primary">
        <Logo />
        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} className={`border-b pb-1 text-[0.8rem] tracking-wide transition-colors hover:text-gold ${i === 0 ? "border-forest" : "border-transparent"}`}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href={bulkHref()} className="hidden rounded-full bg-forest px-6 py-2.5 text-[0.75rem] tracking-wide text-ivory transition-colors hover:bg-brown sm:inline-block">Contact for Bulk Order</a>
          <button className="grid h-11 w-11 place-items-center lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      <div id="mobile-menu" className={`grid overflow-hidden bg-ivory transition-[grid-template-rows] duration-500 lg:hidden ${open ? "grid-rows-[1fr] border-t border-champagne/50" : "grid-rows-[0fr]"}`}>
        <ul className="min-h-0 px-5">
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="block border-b border-champagne/40 py-4 font-serif text-xl">{l.label}</a></li>
          ))}
          <li className="py-5"><a href={bulkHref()} tabIndex={open ? 0 : -1} className="block rounded-full bg-forest py-3.5 text-center text-sm text-ivory">Contact for Bulk Order</a></li>
        </ul>
      </div>
    </header>
  );
}
