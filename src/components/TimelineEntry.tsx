import Image from "next/image";
import type { TimelineEvent } from "@/lib/content";

const categoryColor: Record<TimelineEvent["category"], string> = {
  Exhibition: "text-rust",
  Music: "text-teal",
  Literary: "text-gold",
  Community: "text-ink-soft",
};

export default function TimelineEntry({ event }: { event: TimelineEvent }) {
  return (
    <article id={event.slug} className="relative scroll-mt-28 pl-10 md:pl-14">
      <span
        className="absolute left-[3px] top-2 h-3 w-3 rounded-full border-2 border-paper bg-rust md:left-[7px]"
        aria-hidden="true"
      />
      <p className={`text-xs uppercase tracking-[0.2em] ${categoryColor[event.category]}`}>
        {event.category} &middot; {event.dateRange}
      </p>
      <h2 className="mt-2 font-display text-2xl text-ink md:text-3xl">{event.title}</h2>
      {event.subtitle && (
        <p className="mt-1 text-sm text-ink-soft">{event.subtitle}</p>
      )}
      {event.description && (
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{event.description}</p>
      )}

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {event.images.map((img) => (
          <div
            key={img.src}
            className="relative aspect-square overflow-hidden border border-line bg-paper-dim"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 23vw, (min-width: 640px) 31vw, 47vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </article>
  );
}
