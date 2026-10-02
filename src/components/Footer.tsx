import Link from "next/link";
import { org } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-dim">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="font-display text-xl text-ink">{org.name}</div>
          <address className="mt-3 not-italic leading-relaxed text-ink-soft">
            {org.locations[0].address}
            <br />
            {org.locations[0].cityStateZip}
            <br />
            <a href={`tel:${org.phoneHref}`} className="hover:text-rust">
              {org.phone}
            </a>{" "}
            |{" "}
            <a href={`mailto:${org.email}`} className="hover:text-rust">
              {org.email}
            </a>
          </address>
        </div>

        <div>
          <div className="font-display text-xl text-ink">
            Wilmer Jennings Gallery
          </div>
          <address className="mt-3 not-italic leading-relaxed text-ink-soft">
            {org.locations[1].address}
            <br />
            {org.locations[1].cityStateZip}
          </address>
          <p className="mt-3 text-ink-soft">{org.hours}</p>
        </div>

        <nav aria-label="Footer">
          <div className="font-display text-xl text-ink">Explore</div>
          <ul className="mt-3 space-y-2 text-ink-soft">
            <li><Link href="/exhibitions" className="hover:text-rust">Exhibitions</Link></li>
            <li><Link href="/collection" className="hover:text-rust">Collection</Link></li>
            <li><Link href="/about" className="hover:text-rust">About &amp; History</Link></li>
            <li><Link href="/visit" className="hover:text-rust">Plan Your Visit</Link></li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-line px-6 py-6 text-center text-xs text-ink-soft">
        &copy; {year} Kenkeleba House and Wilmer Jennings Gallery. All rights reserved.
      </div>
    </footer>
  );
}
