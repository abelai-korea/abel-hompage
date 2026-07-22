import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getPosts, getCategories, formatDate, stripHtml, demoteContentH1, fixContentLinks, decodeHtmlEntities } from '@/lib/wordpress';
import ArticleSidenav from '@/components/ArticleSidenav';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import Breadcrumb from '@/components/Breadcrumb';
import type { BreadcrumbEntry } from '@/lib/seo';

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
      images: [{ url: ogImage ?? '/og-image.png' }],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const [post, categories] = await Promise.all([getPostBySlug(slug), getCategories()]);

  if (!post) notFound();

  const category = post._embedded?.['wp:term']?.[0]?.[0];
  const date = formatDate(post.date);

  const relatedPosts = category
    ? (await getPosts({ categories: [category.id], per_page: 5 })).posts
        .filter((p) => p.id !== post.id)
        .slice(0, 4)
    : [];

  const breadcrumbItems: BreadcrumbEntry[] = [
    { name: '홈', url: 'https://abel-ai.com/' },
    { name: '블로그', url: 'https://abel-ai.com/blog' },
    { name: decodeHtmlEntities(stripHtml(post.title.rendered)) },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-white">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <div className="max-w-[1320px] mx-auto px-6 flex gap-10 items-start">
        <aside className="hidden min-[1300px]:block w-96 shrink-0 sticky top-52">
          <ArticleSidenav categories={categories} currentSlug={category?.slug} />
        </aside>
        <article className="max-w-3xl pt-10 min-w-0">
          <Breadcrumb tone="light" items={breadcrumbItems} className="mb-5" />
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
            dangerouslySetInnerHTML={{ __html: fixContentLinks(demoteContentH1(post.content.rendered)) }}
          />

          {/* JSON-LD 스키마 (Yoast SEO에서 자동 생성) */}
          {post.yoast_head && (
            <div dangerouslySetInnerHTML={{ __html: extractJsonLd(post.yoast_head) }} />
          )}

          {/* 관련 글 */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-10 border-t border-gray-100">
              <h2 className="text-lg font-black text-slate-950 mb-6">관련 글</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {relatedPosts.map((rp) => {
                  const rpSlug = new URL(rp.link).pathname.replace(/\//g, '');
                  const rpThumb = rp._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                  return (
                    <Link
                      key={rp.id}
                      href={`/${rpSlug}`}
                      className="group flex gap-4 items-start rounded-xl p-3 -m-3 hover:bg-gray-50 transition-colors"
                    >
                      {rpThumb ? (
                        <div className="relative w-24 aspect-video shrink-0 rounded-lg overflow-hidden bg-gray-100">
                          <Image
                            src={rpThumb}
                            alt={stripHtml(rp.title.rendered)}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </div>
                      ) : (
                        <div
                          className="w-24 aspect-video shrink-0 rounded-lg flex items-center justify-center text-white text-lg font-black"
                          style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #4338CA 100%)' }}
                        >
                          A
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3
                          className="text-sm font-bold text-slate-800 leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors"
                          dangerouslySetInnerHTML={{ __html: rp.title.rendered }}
                        />
                        <p className="text-xs text-gray-400 mt-1.5">{formatDate(rp.date)}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

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
