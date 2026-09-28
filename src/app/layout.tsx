import type { Metadata, Viewport } from "next";
import { ORG_NAME, ORG_SHORT_NAME, SITE_URL } from "@/content/site";
import "./globals.css";

const description =
  "Kurya Ndiko Uku Community Based Organisation supports children, caregivers and communities across 17 villages in Malawi through nutrition, education, healthcare and essential needs.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${ORG_SHORT_NAME}`,
    default: `${ORG_SHORT_NAME} | Supporting Children in Malawi`,
  },
  description,
  applicationName: ORG_SHORT_NAME,
  openGraph: {
    type: "website",
    siteName: ORG_NAME,
    locale: "en_GB",
    title: `${ORG_SHORT_NAME} | Supporting Children in Malawi`,
    description,
    images: [{ url: "/images/Hero.png", alt: "Nursery children in blue uniforms raising their hands outside the Bana Mbatose breakfast and lunch building" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#2f6b21",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="font-sans antialiased">
        <a href="#main" className="sr-only z-[100] rounded-md bg-white px-4 py-2 font-bold text-brand-green focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
