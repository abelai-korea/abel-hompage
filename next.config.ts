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
        destination: '/geo-hospital-85',
        permanent: true,
      },
      {
        source: '/abel-column-85-new-hospital-geo-90days',
        destination: '/geo-hospital-85',
        permanent: true,
      },
      {
        source: '/abel-column-26-dental-marketing-geo-strategy',
        destination: '/marketing-26',
        permanent: true,
      },
      {
        source: '/abel-column-89-dermatology-marketing-geo-case',
        destination: '/geo-marketing-89',
        permanent: true,
      },
      {
        source: '/geo-content',
        destination: '/abel-column-67-geo-content-diy-vs-agency-1',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
