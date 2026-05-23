import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(siteConfig.lastModified),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
