import type { MetadataRoute } from 'next';
import { getPosts } from '@/lib/wordpress';

export const revalidate = 3600;

// 정적 페이지의 lastModified는 실제로 해당 페이지 파일을 수정한 날짜로 유지해야 함.
// new Date()(요청 시각)를 쓰면 매 갱신마다 "오늘"로 찍혀 구글이 lastmod 신호를
// 신뢰할 수 없다고 판단해 무시하게 됨 — 페이지를 실제로 고칠 때만 아래 날짜를 갱신할 것.
const LAST_MODIFIED: Record<string, string> = {
  '': '2026-07-22',
  '/about': '2026-07-22',
  '/service': '2026-07-22',
  '/service/seo-geo-structure': '2026-07-22',
  '/service/seo-geo-consulting': '2026-07-22',
  '/service/seo-geo-management': '2026-07-22',
  '/service/seo-geo-education': '2026-07-22',
  '/seo-geo-faq': '2026-07-22',
  '/contact': '2026-07-22',
  '/blog': '2026-07-22',
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE = 'https://abel-ai.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: LAST_MODIFIED[''], changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: LAST_MODIFIED['/about'], changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/service`, lastModified: LAST_MODIFIED['/service'], changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service/seo-geo-structure`, lastModified: LAST_MODIFIED['/service/seo-geo-structure'], changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/service/seo-geo-consulting`, lastModified: LAST_MODIFIED['/service/seo-geo-consulting'], changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/service/seo-geo-management`, lastModified: LAST_MODIFIED['/service/seo-geo-management'], changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/service/seo-geo-education`, lastModified: LAST_MODIFIED['/service/seo-geo-education'], changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/seo-geo-faq`, lastModified: LAST_MODIFIED['/seo-geo-faq'], changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: LAST_MODIFIED['/contact'], changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog`, lastModified: LAST_MODIFIED['/blog'], changeFrequency: 'daily', priority: 0.8 },
  ];

  const { posts } = await getPosts({ per_page: 100 });
  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => {
    const slug = new URL(post.link).pathname.replace(/\//g, '');
    return {
      url: `${BASE}/${slug}`,
      lastModified: new Date(post.modified ?? post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...postRoutes];
}
