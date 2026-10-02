import Image from "next/image";
import type { CollectionItem } from "@/lib/content";

export default function CollectionCard({ item }: { item: CollectionItem }) {
  return (
    <figure className="group flex flex-col overflow-hidden border border-line bg-paper">
      <div className="relative aspect-square overflow-hidden bg-paper-dim">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="p-4">
        <p className="font-display text-lg text-ink">{item.title}</p>
        <p className="text-sm text-ink-soft">{item.artist}</p>
        {item.medium && <p className="text-xs text-ink-soft">{item.medium}</p>}
      </figcaption>
    </figure>
  );
}
