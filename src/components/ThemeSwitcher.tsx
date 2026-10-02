"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "kh-theme-preview";

const themes = [
  { key: "heritage", label: "Heritage Terracotta (current)", swatch: "#b1472c" },
  { key: "noir", label: "Noir Gallery", swatch: "#e0943f" },
  { key: "crisp-red", label: "Crisp White & Red", swatch: "#b3261e" },
  { key: "sunlit-berry", label: "Sunlit / Berry", swatch: "#c0265c" },
  { key: "kente", label: "Kente Jewel Tones", swatch: "#d4a017" },
  { key: "slate-orange", label: "Slate & Burnt Orange", swatch: "#d2531e" },
  { key: "monochrome", label: "Monochrome", swatch: "#1a1a1a" },
] as const;

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  // Starts at "heritage" to match server-rendered markup exactly, then syncs
  // to the stored preview choice once mounted (the inline script in layout.tsx
  // already applies the real data-theme attribute before paint, so there's no
  // visible flash — this only affects this panel's own highlighted state).
  const [active, setActive] = useState<string>("heritage");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setActive(saved); // eslint-disable-line react-hooks/set-state-in-effect
    } catch {
      // ignore
    }
  }, []);

  function applyTheme(key: string) {
    setActive(key);
    document.documentElement.setAttribute("data-theme", key);
    try {
      window.localStorage.setItem(STORAGE_KEY, key);
    } catch {
      // ignore
    }
  }

  const activeSwatch = themes.find((t) => t.key === active)?.swatch ?? themes[0].swatch;

  return (
    <div className="fixed bottom-4 right-4 z-[100] font-sans">
      {open && (
        <div className="mb-3 max-h-[70vh] w-72 overflow-y-auto border border-line bg-paper p-4 shadow-xl">
          <p className="text-xs uppercase tracking-[0.15em] text-ink-soft">
            Theme Preview
          </p>
          <div className="mt-3 space-y-1">
            {themes.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => applyTheme(t.key)}
                aria-pressed={active === t.key}
                className={`flex w-full items-center gap-3 px-2 py-2 text-left text-sm transition-colors ${
                  active === t.key ? "bg-paper-dim" : "hover:bg-paper-dim"
                }`}
              >
                <span
                  className="h-4 w-4 shrink-0 rounded-full border border-line"
                  style={{ backgroundColor: t.swatch }}
                  aria-hidden="true"
                />
                <span className="text-ink">{t.label}</span>
                {active === t.key && (
                  <span className="ml-auto text-xs text-rust" aria-hidden="true">
                    &#10003;
                  </span>
                )}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs leading-snug text-ink-soft">
            Internal testing tool — visible on this preview link only, not on
            the final site.
          </p>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-2 border border-line bg-ink px-4 py-3 text-xs uppercase tracking-wide text-paper shadow-lg transition-colors"
      >
        <span
          className="h-3 w-3 rounded-full border border-paper/40"
          style={{ backgroundColor: activeSwatch }}
          aria-hidden="true"
        />
        Theme
      </button>
    </div>
  );
}
