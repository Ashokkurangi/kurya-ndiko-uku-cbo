import type { Metadata } from "next";
import { ORG_NAME, ORG_SHORT_NAME, photos } from "@/content/site";

/**
 * Page metadata with matching Open Graph tags.
 * (A page's `openGraph` replaces the layout's rather than merging, so each page sets the full object.)
 */
export function pageMetadata({ title, description, path, image = photos.hero }: {
  title: string;
  description: string;
  path: string;
  image?: { src: string; alt: string };
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: ORG_NAME,
      locale: "en_GB",
      url: path,
      title: `${title} | ${ORG_SHORT_NAME}`,
      description,
      images: [{ url: image.src, alt: image.alt }],
    },
  };
}
