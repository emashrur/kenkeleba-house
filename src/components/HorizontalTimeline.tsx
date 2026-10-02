import Image from "next/image";
import Link from "next/link";
import type { TimelineEvent } from "@/lib/content";

const categoryColor: Record<TimelineEvent["category"], string> = {
  Exhibition: "bg-rust",
  Music: "bg-teal",
  Literary: "bg-gold",
  Community: "bg-ink-soft",
};

export default function HorizontalTimeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="relative flex min-w-max px-4">
        {events.map((event, i) => {
          const above = i % 2 === 0;
          const [first, second] = event.images;
          return (
            <Link
              key={event.slug}
              href={`#${event.slug}`}
              className="group flex w-[200px] shrink-0 flex-col items-center focus:outline-none"
            >
              {/* top half */}
              <div className="flex h-[168px] w-full flex-col items-center justify-end">
                {above && <Branch event={event} first={first} second={second} />}
              </div>

              {/* axis row */}
              <div className="relative h-10 w-full">
                <span className="absolute inset-x-0 top-1/2 h-px bg-line" aria-hidden="true" />
                {i === 0 && (
                  <span className="absolute left-0 top-1/2 h-px w-1/2 bg-paper" aria-hidden="true" />
                )}
                {i === events.length - 1 && (
                  <span className="absolute right-0 top-1/2 h-px w-1/2 bg-paper" aria-hidden="true" />
                )}
                <span
                  className={`absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-paper transition-transform group-hover:scale-125 ${categoryColor[event.category]}`}
                  aria-hidden="true"
                />
                <span
                  className={`absolute left-1/2 top-1/2 w-px bg-line ${
                    above ? "h-5 -translate-x-1/2 -translate-y-full" : "h-5 -translate-x-1/2"
                  }`}
                  aria-hidden="true"
                />
              </div>

              {/* bottom half */}
              <div className="flex h-[168px] w-full flex-col items-center justify-start">
                {!above && <Branch event={event} first={first} second={second} />}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Branch({
  event,
  first,
  second,
}: {
  event: TimelineEvent;
  first?: TimelineEvent["images"][number];
  second?: TimelineEvent["images"][number];
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="relative h-20 w-24">
        {second && (
          <div className="absolute right-0 top-1 h-16 w-16 rotate-6 overflow-hidden border-2 border-paper bg-paper-dim shadow-sm">
            <Image src={second.src} alt="" fill sizes="64px" className="object-cover" />
          </div>
        )}
        {first && (
          <div className="absolute left-0 top-0 h-16 w-16 -rotate-6 overflow-hidden border-2 border-paper bg-paper-dim shadow-md">
            <Image src={first.src} alt="" fill sizes="64px" className="object-cover" />
          </div>
        )}
      </div>
      <p className="text-[10px] uppercase tracking-[0.15em] text-rust">{event.dateRange}</p>
      <p className="font-display text-sm leading-tight text-ink group-hover:text-rust">
        {event.title}
      </p>
    </div>
  );
}
