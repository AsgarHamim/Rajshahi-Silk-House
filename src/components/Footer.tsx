import { Facebook, Instagram, Linkedin, MapPin, Phone, Youtube } from "lucide-react";
import Logo from "./Logo";
import { contact } from "@/data/content";
import { bulkHref } from "@/lib/contact";

const socials = [
  { k: "facebook", I: Facebook }, { k: "instagram", I: Instagram }, { k: "linkedin", I: Linkedin }, { k: "youtube", I: Youtube },
] as const;

function Loc({ title, address, map }: { title: string; address: string; map: string }) {
  return (
    <div className="flex gap-3">
      <MapPin size={18} className="mt-1 shrink-0 text-gold" aria-hidden />
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-ivory/75">{address}</p>
        {map && <a href={map} target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs text-champagne underline underline-offset-4">View on Google Maps</a>}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-forest text-ivory">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto] lg:px-12">
        <div>
          <Logo tone="light" />
          <p className="mt-5 text-xs tracking-wide text-champagne">Pure Fabric | Lasting Value</p>
          <p className="mt-2 text-xs text-ivory/70">Crafting silk for the next generation of fashion.</p>
        </div>
        <Loc title="Factory Location" address={contact.factoryAddress} map={contact.factoryMap} />
        <Loc title="Store Location" address={contact.storeAddress} map={contact.storeMap} />
        <div className="flex gap-3">
          <Phone size={18} className="mt-1 shrink-0 text-gold" aria-hidden />
          <div>
            <h3 className="text-sm font-medium">For Bulk Orders</h3>
            <p className="mt-2 text-xs text-ivory/75">{contact.phone || "[Insert verified business phone number]"}</p>
            <p className="text-xs text-ivory/75">{contact.email || "[Insert business email address]"}</p>
            <a href={bulkHref()} className="mt-4 inline-block rounded-full border border-champagne px-5 py-2.5 text-xs transition-colors hover:bg-champagne hover:text-forest">Contact for Bulk Order</a>
          </div>
        </div>
        <ul className="flex gap-4 lg:justify-end" aria-label="Social media">
          {socials.map(({ k, I }) => {
            const url = contact.social[k];
            return url ? <li key={k}><a href={url} target="_blank" rel="noreferrer" aria-label={k} className="hover:text-champagne"><I size={18} /></a></li> : <li key={k} className="opacity-40"><I size={18} aria-label={`${k} (not set)`} /></li>;
          })}
        </ul>
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 border-t border-ivory/15 px-5 py-5 text-[0.7rem] text-ivory/60 lg:px-12">
        <p>© 2026 Rajshahi Silk House. All rights reserved.</p>
        <p className="flex gap-5"><a href="#contact" className="hover:text-champagne">Privacy Policy</a><a href="#contact" className="hover:text-champagne">Terms &amp; Conditions</a></p>
      </div>
    </footer>
  );
}
