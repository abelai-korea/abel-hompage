import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getPosts, formatDate, stripHtml, demoteContentH1, decodeHtmlEntities } from '@/lib/wordpress';
import ArticleSidenav from '@/components/ArticleSidenav';

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { posts } = await getPosts({ per_page: 50 });
  return posts.map((post) => ({
    slug: new URL(post.link).pathname.replace(/\//g, ''),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: '페이지를 찾을 수 없습니다' };

  const yoast = post.yoast_head_json;
  const ogImage = yoast?.og_image?.[0]?.url;
  const description =
    yoast?.description || stripHtml(post.excerpt.rendered).slice(0, 150);

  return {
    title: yoast?.title ?? `${post.title.rendered} | ABEL`,
    description,
    alternates: { canonical: `https://abel-ai.com/${slug}` },
    openGraph: {
      type: 'article',
      locale: 'ko_KR',
      siteName: 'ABEL AI',
      url: `https://abel-ai.com/${slug}`,
      title: yoast?.title ?? `${post.title.rendered} | ABEL`,
      description,
      images: [{ url: ogImage ?? '/logo.png' }],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const category = post._embedded?.['wp:term']?.[0]?.[0];
  const date = formatDate(post.date);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: 'https://abel-ai.com/' },
      { '@type': 'ListItem', position: 2, name: '블로그', item: 'https://abel-ai.com/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: decodeHtmlEntities(stripHtml(post.title.rendered)),
      },
    ],
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-[1040px] mx-auto px-6 flex gap-10 items-start">
        <aside className="hidden min-[1180px]:block w-48 shrink-0 sticky top-52">
          <ArticleSidenav category={category ? { name: category.name, slug: category.slug } : undefined} />
        </aside>
        <article className="max-w-3xl pt-10 min-w-0">
          {/* 카테고리 & 날짜 */}
          <div className="flex items-center gap-3 mb-6">
            {category && (
              <Link
                href={`/blog?blog_cat=${category.slug}`}
                className="text-xs font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full"
              >
                {category.name}
              </Link>
            )}
            <span className="text-xs text-gray-400">{date}</span>
          </div>

          {/* 제목 */}
          <h1
            className="text-3xl md:text-4xl font-black text-slate-950 leading-tight mb-6"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* 본문 */}
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: demoteContentH1(post.content.rendered) }}
          />

          {/* JSON-LD 스키마 (Yoast SEO에서 자동 생성) */}
          {post.yoast_head && (
            <div dangerouslySetInnerHTML={{ __html: extractJsonLd(post.yoast_head) }} />
          )}

          {/* 탐색경로(BreadcrumbList) 스키마 */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c'),
            }}
          />

          {/* 하단 CTA */}
          <div className="mt-16 bg-slate-950 rounded-3xl p-10 text-white text-center">
            <p className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-3">
              ABEL GEO 진단
            </p>
            <h2 className="text-2xl font-black mb-4">
              귀하의 병원도 AI 추천 목록에 오를 수 있습니다
            </h2>
            <Link
              href="/contact"
              className="inline-block mt-2 px-8 py-4 rounded-full text-white font-black transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #4338CA 0%, #6528F7 100%)' }}
            >
              GEO 진단 신청하기 →
            </Link>
          </div>

          {/* 칼럼 목록으로 */}
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-sm text-gray-400 hover:text-indigo-600 transition-colors">
              ← 칼럼 목록으로 돌아가기
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

function extractJsonLd(yoastHead: string): string {
  const match = yoastHead.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
  return match ? match.join('') : '';
}
