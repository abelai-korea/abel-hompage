import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'abel-ai.com',
      },
      {
        protocol: 'https',
        hostname: 'cms.abel-ai.com',
      },
    ],
  },
};

export default nextConfig;
