import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "via.placeholder.com",
      "placehold.co", // Add new placeholder domain
    ],
  },
};

export default nextConfig;
