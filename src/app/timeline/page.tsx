import type { Metadata } from "next";
import { timelineEvents } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import TimelineEntry from "@/components/TimelineEntry";
import HorizontalTimeline from "@/components/HorizontalTimeline";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "A timeline of recent exhibitions, music, and community programs at Kenkeleba House and the Wilmer Jennings Gallery.",
};

export default function TimelinePage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-16">
        <SectionHeading
          eyebrow="2024 – 2025"
          title="Timeline"
          description="A look back at recent exhibitions, performances, and community programs at Kenkeleba House and the Wilmer Jennings Gallery. Select an event below to jump to its photos."
        />
      </section>

      <section className="mt-10 border-y border-line bg-paper-dim py-10">
        <HorizontalTimeline events={timelineEvents} />
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="relative space-y-16 border-l border-line pl-0">
          {timelineEvents.map((event) => (
            <TimelineEntry key={event.slug} event={event} />
          ))}
        </div>
      </section>
    </>
  );
}
