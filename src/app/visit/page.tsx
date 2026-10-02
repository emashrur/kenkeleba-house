import type { Metadata } from "next";
import { org } from "@/lib/content";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Plan your visit to Kenkeleba House and the Wilmer Jennings Gallery in New York's East Village. Hours, address, and directions.",
};

export default function VisitPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        eyebrow="Plan Your Visit"
        title="Visit"
        description="Please call ahead to schedule a visit at Kenkeleba House or the Wilmer Jennings Gallery."
      />

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-8">
          {org.locations.map((location) => (
            <div key={location.name} className="border border-line p-6">
              <h2 className="font-display text-xl text-ink">{location.name}</h2>
              <p className="mt-2 text-ink-soft">
                {location.address}
                <br />
                {location.cityStateZip}
              </p>
            </div>
          ))}

          <div className="border border-line p-6">
            <h2 className="font-display text-xl text-ink">Hours &amp; Contact</h2>
            <p className="mt-2 text-ink-soft">{org.hours}</p>
            <p className="mt-2 text-ink-soft">
              <a href={`tel:${org.phoneHref}`} className="hover:text-rust">
                {org.phone}
              </a>
              {" | "}
              <a href={`mailto:${org.email}`} className="hover:text-rust">
                {org.email}
              </a>
            </p>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden border border-line">
          <iframe
            title="Map showing the location of Kenkeleba House at 214 East 2nd Street, New York, NY"
            src="https://maps.google.com/maps?q=214+East+2nd+Street%2C+New+York%2C+NY+10009&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
