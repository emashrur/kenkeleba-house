import type { Metadata } from "next";
import Image from "next/image";
import { prints, sculptures, sculptureGardenImage } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";
import CollectionCard from "@/components/CollectionCard";

export const metadata: Metadata = {
  title: "Collection",
  description:
    "The Kenkeleba House collection includes works on paper and outdoor sculpture by artists of the African Diaspora.",
};

export default function CollectionPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="The Collection"
            title="Prints & Sculpture"
            description="Kenkeleba House has shown the work of more than 7,000 exhibitors over its history, including Edward Mitchell Bannister and Rose Piper. The collection below highlights selected prints held by the gallery and sculpture on view in the Kenkeleba Sculpture Garden."
          />
        </div>
      </section>

      <section id="prints" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl text-ink">Prints</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {prints.map((item) => (
            <CollectionCard key={`${item.artist}-${item.title}`} item={item} />
          ))}
        </div>
      </section>

      <section id="sculpture" className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl text-ink">Sculpture Garden</h2>
          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden border border-line">
            <Image
              src={sculptureGardenImage.src}
              alt={sculptureGardenImage.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sculptures.map((item) => (
              <CollectionCard key={`${item.artist}-${item.title}`} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
