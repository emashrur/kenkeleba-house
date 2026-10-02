import Image from "next/image";
import type { Exhibition } from "@/lib/content";

export default function ExhibitionCard({ exhibition }: { exhibition: Exhibition }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-line bg-paper transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-paper-dim">
        <Image
          src={exhibition.image.src}
          alt={exhibition.image.alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <p className="text-xs uppercase tracking-[0.15em] text-rust">{exhibition.dateRange}</p>
        <h3 className="font-display text-xl text-ink">{exhibition.title}</h3>
        {exhibition.artists && (
          <p className="text-sm text-ink-soft">{exhibition.artists.join(", ")}</p>
        )}
      </div>
    </article>
  );
}
