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

const HTML_ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  '#039': "'",
  '#8216': '‘',
  '#8217': '’',
  '#8220': '“',
  '#8221': '”',
  '#8211': '–',
  '#8212': '—',
  '#8230': '…',
};

export function decodeHtmlEntities(text: string): string {
  return text.replace(/&(#?\w+);/g, (match, entity) => {
    if (HTML_ENTITIES[entity]) return HTML_ENTITIES[entity];
    if (entity.startsWith('#')) {
      const code = parseInt(entity.slice(1), 10);
      return Number.isNaN(code) ? match : String.fromCharCode(code);
    }
    return match;
  });
}

// post.content.rendered에 제목을 반복하는 <h1>이 포함된 경우가 있어(WP 원고 이슈),
// 페이지의 실제 h1(post.title.rendered)과 중복되지 않도록 h2로 낮춘다.
export function demoteContentH1(html: string): string {
  return html.replace(/<(\/?)h1(\s[^>]*)?>/gi, '<$1h2$2>');
}

// WP 원고 본문에 하드코딩된 두 링크를 고친다(64개 칼럼 전수조사로 확인한 패턴들):
// 1) 하단 CTA 버튼(class="cta-btn")이 "#contact"(글 자체엔 없는 앵커라 아무 반응 없음) 또는
//    "abel-ai.com/#contact"(홈 앵커, 잘못된 위치)로 가던 것을 실제 문의 페이지로 통일.
//    이미 "abel-ai.com/contact"로 맞게 박혀 있는 원고는 아래 치환에 안 걸려 그대로 유지된다.
// 2) "관련 글 보러가기" 목록이 노출용이 아닌 cms.abel-ai.com(헤드리스 백엔드) 도메인을
//    그대로 링크하고 있어, 실서비스 도메인으로 바꿔준다.
export function fixContentLinks(html: string): string {
  return html
    .replace(/href="#contact"/g, 'href="https://abel-ai.com/contact"')
    .replace(/href="https:\/\/abel-ai\.com\/#contact"/g, 'href="https://abel-ai.com/contact"')
    .replace(/https:\/\/cms\.abel-ai\.com\//g, 'https://abel-ai.com/');
}
