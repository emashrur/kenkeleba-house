import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kenkeleba.org"),
  title: {
    default: "Kenkeleba House | Art Gallery, East Village, NYC",
    template: "%s | Kenkeleba House",
  },
  description:
    "Kenkeleba House is a non-profit art gallery in New York's East Village presenting the work of African American artists and the broader African Diaspora since 1974.",
  openGraph: {
    title: "Kenkeleba House",
    description:
      "A non-profit art gallery in New York's East Village presenting the work of African American artists and the broader African Diaspora since 1974.",
    url: "https://kenkeleba.org",
    siteName: "Kenkeleba House",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
