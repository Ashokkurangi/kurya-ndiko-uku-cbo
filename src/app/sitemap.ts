import type { MetadataRoute } from "next";
import { SITE_URL, navItems } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...navItems.map((item) => item.href), "/donate"];
  return paths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
