import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://gagotax.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/client-service", "/client-service/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
