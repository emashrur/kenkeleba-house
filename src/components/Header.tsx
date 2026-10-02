"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/exhibitions", label: "Exhibitions" },
  { href: "/collection", label: "Collection" },
  { href: "/timeline", label: "Timeline" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="group" onClick={() => setOpen(false)}>
          <div className="font-display text-xl uppercase tracking-[0.12em] text-ink sm:text-2xl sm:tracking-[0.15em]">
            Kenkeleba House
          </div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">
            &amp; the Wilmer Jennings Gallery
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm uppercase tracking-wide">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`border-b-2 pb-1 transition-colors ${
                      active
                        ? "border-rust text-rust"
                        : "border-transparent text-ink hover:border-ink-soft"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="flex items-center gap-2 text-sm uppercase tracking-wide md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span>Menu</span>
          <span className="relative block h-4 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-ink transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-6 bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-6 bg-ink transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-line bg-paper md:hidden"
        >
          <ul className="flex flex-col px-6 py-4 text-sm uppercase tracking-wide">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line/70 py-3 last:border-none">
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
