import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kenkeleba House was founded in 1974 by Joe Overstreet, Corrine Jennings, and Samuel C. Floyd to support African American culture and the broader African Diaspora.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading eyebrow="About" title="Mission & Vision" />
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <p className="leading-relaxed text-ink-soft">{about.mission}</p>
            <p className="leading-relaxed text-ink-soft">{about.vision}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Since 1974" title="History" />
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
          <p className="leading-relaxed text-ink-soft">{about.history}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden border border-line">
              <Image
                src={about.images.historic.src}
                alt={about.images.historic.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden border border-line">
              <Image
                src={about.images.current.src}
                alt={about.images.current.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <blockquote>
            <p className="font-display text-2xl italic leading-snug text-paper md:text-3xl">
              &ldquo;{about.press.quote}&rdquo;
            </p>
            <p className="mt-4 text-sm text-paper/70">{about.press.context}</p>
            <footer className="mt-4 text-xs uppercase tracking-[0.15em] text-paper/60">
              {about.press.source}
            </footer>
          </blockquote>
        </div>
      </section>
    </>
  );
}
