import type { MetadataRoute } from 'next';
import { getPosts } from '@/lib/wordpress';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE = 'https://abel-ai.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE}/geo-aeo-faq`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ];

  const { posts } = await getPosts({ per_page: 100 });
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => {
    const slug = new URL(post.link).pathname.replace(/\//g, '');
    return {
      url: `${BASE}/${slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...postRoutes];
}
