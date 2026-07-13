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
  async redirects() {
    return [
      {
        source: '/geo-aeo-faq',
        destination: '/seo-geo-faq',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
