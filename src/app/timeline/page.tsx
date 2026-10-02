import type { Metadata } from "next";
import { timelineEvents } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import TimelineEntry from "@/components/TimelineEntry";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "A timeline of recent exhibitions, music, and community programs at Kenkeleba House and the Wilmer Jennings Gallery.",
};

const sorted = [...timelineEvents].reverse();

export default function TimelinePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        eyebrow="2024 – 2025"
        title="Timeline"
        description="A look back at recent exhibitions, performances, and community programs at Kenkeleba House and the Wilmer Jennings Gallery."
      />

      <div className="relative mt-14 space-y-16 border-l border-line pl-0">
        {sorted.map((event) => (
          <TimelineEntry key={event.slug} event={event} />
        ))}
      </div>
    </section>
  );
}
