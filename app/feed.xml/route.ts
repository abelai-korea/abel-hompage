import { getPosts } from '@/lib/wordpress';

export const revalidate = 3600;

function toPlainText(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&hellip;/g, '...')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8230;/g, '...')
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#\d+;/g, '')
    .replace(/\]\]>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function xmlEscape(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function GET() {
  const BASE = 'https://abel-ai.com';
  const { posts } = await getPosts({ per_page: 50 });

  const items = posts
    .map((post) => {
      const slug = new URL(post.link).pathname.replace(/\//g, '');
      const url = `${BASE}/${slug}`;
      const title = xmlEscape(toPlainText(post.title.rendered));
      const description = xmlEscape(
        toPlainText(post.excerpt?.rendered ?? '').slice(0, 200),
      );
      const pubDate = new Date(post.date).toUTCString();

      return `  <item>
    <title>${title}</title>
    <link>${url}</link>
    <description><![CDATA[${toPlainText(post.excerpt?.rendered ?? '').slice(0, 200)}]]></description>
    <pubDate>${pubDate}</pubDate>
    <guid>${url}</guid>
  </item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>ABEL | AI 마케팅 에이전시 칼럼</title>
  <link>${BASE}</link>
  <description>SEO, GEO 관련 최신 칼럼</description>
  <language>ko</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
