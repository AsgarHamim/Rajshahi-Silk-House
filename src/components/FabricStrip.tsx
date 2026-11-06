import Image from "next/image";

export default function FabricStrip({ ids, className = "h-16", label = "Fabric samples" }: { ids: string[]; className?: string; label?: string }) {
  return (
    <ul className={`flex overflow-hidden ${className}`} aria-label={label}>
      {ids.map((id) => (
        <li key={id} className="relative min-w-0 flex-1">
          <Image src={`/images/sw-${id}.webp`} alt="" fill sizes="120px" className="object-cover" />
        </li>
      ))}
    </ul>
  );
}
