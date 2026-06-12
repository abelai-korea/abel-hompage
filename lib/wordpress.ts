const WP_API = process.env.NEXT_PUBLIC_WP_API_URL || 'https://abel-ai.com/wp-json/wp/v2';

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  link: string;
  yoast_head?: string;
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_image?: { url: string }[];
  };
  _embedded?: {
    'wp:featuredmedia'?: { source_url: string; alt_text: string }[];
    'wp:term'?: { id: number; name: string; slug: string }[][];
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export async function getPosts(params: {
  per_page?: number;
  page?: number;
  categories?: number[];
  slug?: string;
} = {}): Promise<{ posts: WPPost[]; total: number; totalPages: number }> {
  const searchParams = new URLSearchParams({
    per_page: String(params.per_page ?? 12),
    page: String(params.page ?? 1),
    _embed: '1',
  });
  if (params.categories?.length) {
    searchParams.set('categories', params.categories.join(','));
  }
  if (params.slug) {
    searchParams.set('slug', params.slug);
  }

  const res = await fetch(`${WP_API}/posts?${searchParams}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return { posts: [], total: 0, totalPages: 0 };

  const posts: WPPost[] = await res.json();
  const total = parseInt(res.headers.get('X-WP-Total') ?? '0');
  const totalPages = parseInt(res.headers.get('X-WP-TotalPages') ?? '1');

  return { posts, total, totalPages };
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const { posts } = await getPosts({ slug, per_page: 1 });
  return posts[0] ?? null;
}

export async function getCategories(): Promise<WPCategory[]> {
  const res = await fetch(`${WP_API}/categories?per_page=20`, {
    next: { revalidate: 86400 },
  });
  if (!res.ok) return [];
  return res.json();
}

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  yoast_head?: string;
  yoast_head_json?: {
    title?: string;
    description?: string;
  };
}

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const res = await fetch(`${WP_API}/pages?slug=${slug}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  const pages: WPPage[] = await res.json();
  return pages[0] ?? null;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}
