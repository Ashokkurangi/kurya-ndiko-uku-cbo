import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 is used by the hero photo so it stays crisp while it slowly zooms.
    qualities: [75, 90],
  },
};

export default nextConfig;
