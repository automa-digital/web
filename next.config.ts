import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio estático en out/ para publicarlo en Cloudflare Pages.
  output: "export",
  images: {
    unoptimized: true,
  },
  // Sin cacheComponents ni partialPrefetching: Next no permite PPR con output: "export".
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
