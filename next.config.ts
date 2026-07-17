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
      {
        source: '/dental-geo-ai-recommendation',
        destination: '/dental-geo-v2',
        permanent: true,
      },
      {
        source: '/topic9-ai-hospital-recommendation-structure',
        destination: '/ai-hospital-recommendation-structure',
        permanent: true,
      },
      {
        source: '/abel-column-85-new-hospital-geo-90days-2',
        destination: '/abel-column-85-new-hospital-geo-90days',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
