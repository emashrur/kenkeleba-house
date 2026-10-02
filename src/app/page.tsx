import Image from "next/image";
import Link from "next/link";
import { org, about, currentExhibition } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-rust">
              On View Now
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
              {currentExhibition.title}
            </h1>
            <p className="mt-4 text-ink-soft">{currentExhibition.dateRange}</p>
            {currentExhibition.details && (
              <ul className="mt-4 space-y-1 text-sm text-ink-soft">
                {currentExhibition.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/exhibitions"
                className="bg-ink px-6 py-3 text-sm uppercase tracking-wide text-paper transition-colors hover:bg-rust"
              >
                View Exhibition
              </Link>
              <Link
                href="/visit"
                className="border border-ink px-6 py-3 text-sm uppercase tracking-wide text-ink transition-colors hover:border-rust hover:text-rust"
              >
                Plan Your Visit
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-line">
            <Image
              src={currentExhibition.image.src}
              alt={currentExhibition.image.alt}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper-dim">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 text-sm text-ink-soft md:grid-cols-3">
          <div>
            <p className="font-display text-lg text-ink">Gallery Hours</p>
            <p>{org.hours}</p>
          </div>
          <div>
            <p className="font-display text-lg text-ink">Kenkeleba House</p>
            <p>
              {org.locations[0].address}, {org.locations[0].cityStateZip}
            </p>
          </div>
          <div>
            <p className="font-display text-lg text-ink">Wilmer Jennings Gallery</p>
            <p>
              {org.locations[1].address}, {org.locations[1].cityStateZip}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <SectionHeading
              eyebrow="Since 1974"
              title="Five decades at the forefront of the East Village art scene"
              description={about.mission}
            />
            <Link
              href="/about"
              className="mt-6 inline-block border-b-2 border-rust text-sm uppercase tracking-wide text-ink hover:text-rust"
            >
              Read our story
            </Link>
          </div>
          <blockquote className="border-l-2 border-rust pl-6">
            <p className="font-display text-xl italic leading-snug text-ink">
              &ldquo;{about.press.quote}&rdquo;
            </p>
            <p className="mt-3 text-sm text-ink-soft">{about.press.source}</p>
          </blockquote>
        </div>
      </section>

      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto grid max-w-6xl gap-px bg-line px-6 py-px sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: "/exhibitions", label: "Exhibitions", desc: "Current & past shows" },
            { href: "/collection", label: "Collection", desc: "Prints & sculpture" },
            { href: "/about", label: "About", desc: "Mission & history" },
            { href: "/visit", label: "Visit", desc: "Hours & directions" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col justify-between bg-paper p-8 transition-colors hover:bg-ink"
            >
              <span className="font-display text-2xl text-ink group-hover:text-paper">
                {item.label}
              </span>
              <span className="mt-2 text-sm text-ink-soft group-hover:text-paper/70">
                {item.desc}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
