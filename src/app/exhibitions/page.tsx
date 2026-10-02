import type { Metadata } from "next";
import Image from "next/image";
import { currentExhibition, pastExhibitions } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import ExhibitionCard from "@/components/ExhibitionCard";

export const metadata: Metadata = {
  title: "Exhibitions",
  description:
    "Current and past exhibitions at Kenkeleba House and the Wilmer Jennings Gallery in New York's East Village.",
};

export default function ExhibitionsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.2em] text-rust">On View Now</p>
          <h1 className="mt-2 font-display text-4xl text-ink md:text-5xl">
            {currentExhibition.title}
          </h1>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-line">
              <Image
                src={currentExhibition.image.src}
                alt={currentExhibition.image.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 text-ink-soft">
              <p className="text-ink">{currentExhibition.dateRange}</p>
              {currentExhibition.location && <p>{currentExhibition.location}</p>}
              {currentExhibition.curators && (
                <p>
                  <span className="text-ink">Curated by</span> {currentExhibition.curators}
                </p>
              )}
              {currentExhibition.artists && (
                <div>
                  <p className="text-ink">Featured Artists</p>
                  <p>{currentExhibition.artists.join(", ")}</p>
                </div>
              )}
              {currentExhibition.details && (
                <ul className="space-y-1 border-t border-line pt-4">
                  {currentExhibition.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          eyebrow="Archive"
          title="Past Exhibitions"
          description="A selection of exhibitions presented over our 50-year history. Our full archive spans more than 7,000 exhibiting artists."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pastExhibitions.map((exhibition) => (
            <ExhibitionCard key={exhibition.slug} exhibition={exhibition} />
          ))}
        </div>
      </section>
    </>
  );
}
