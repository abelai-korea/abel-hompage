import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts, getCategories, formatDate } from '@/lib/wordpress';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import Breadcrumb from '@/components/Breadcrumb';
import BlogFeaturedHero from './BlogFeaturedHero';

export const metadata: Metadata = {
  title: '칼럼 | ABEL',
  description: 'SEO·GEO 전략에 관한 아벨의 칼럼 모음',
  alternates: { canonical: 'https://abel-ai.com/blog' },
};

export const revalidate = 3600;

interface Props {
  searchParams: Promise<{ blog_cat?: string; page?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const params = await searchParams;
  const currentPage = parseInt(params.page ?? '1');

  const [{ posts, total, totalPages }, categories] = await Promise.all([
    getPosts({ per_page: 12, page: currentPage }),
    getCategories(),
  ]);

  const blogCategories = categories.filter((c) => c.count > 0);

  const featuredPosts =
    currentPage === 1
      ? posts.slice(0, 5).map((post) => ({
          id: post.id,
          slug: new URL(post.link).pathname.replace(/\//g, ''),
          titleHtml: post.title.rendered,
          titleText: post.title.rendered.replace(/<[^>]+>/g, ''),
          category: post._embedded?.['wp:term']?.[0]?.[0]?.name,
          date: formatDate(post.date),
          thumbnail: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
        }))
      : [];

  const breadcrumbItems = [
    { name: '홈', url: 'https://abel-ai.com/' },
    { name: '블로그' },
  ];

  return (
    <>
    <div className="pretendard pt-24 pb-20 min-h-screen bg-gray-50">
      <BreadcrumbJsonLd
        items={[
          { name: '홈', url: 'https://abel-ai.com/' },
          { name: '블로그', url: 'https://abel-ai.com/blog' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-6 pt-8">
        {/* 헤더 */}
        <div className="mb-12">
          <p className="text-xs font-black tracking-widest uppercase text-indigo-600 mb-3">
            ABEL INSIGHT
          </p>
          <h1 className="text-4xl font-black text-slate-950 mb-4">최신 인사이트</h1>
          <p className="text-gray-500">
            SEO·GEO 전략에 관한 최신 칼럼 {total}편
          </p>
        </div>

        {featuredPosts.length > 0 && <BlogFeaturedHero posts={featuredPosts} />}

        <div className="flex flex-col lg:flex-row gap-10">
          {/* 사이드바: 카테고리 */}
          <aside className="lg:w-52 flex-shrink-0">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">카테고리</p>
            <nav className="flex flex-col gap-1">
              <Link
                href="/blog"
                className="px-4 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
              >
                전체 보기
              </Link>
              {blogCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/blog?blog_cat=${cat.slug}`}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
          </aside>

          {/* 포스트 그리드 */}
          <div className="flex-1">
            {posts.length === 0 ? (
              <p className="text-gray-400">아직 칼럼이 없습니다.</p>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post) => {
                    const category = post._embedded?.['wp:term']?.[0]?.[0];
                    const date = formatDate(post.date);
                    const slug = new URL(post.link).pathname.replace(/\//g, '');
                    const thumbnail = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

                    return (
                      <Link
                        key={post.id}
                        href={`/${slug}`}
                        className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                      >
                        {/* 썸네일 (16:9) */}
                        {thumbnail ? (
                          <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                            <Image
                              src={thumbnail}
                              alt={post.title.rendered}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 640px) 100vw, 50vw"
                            />
                          </div>
                        ) : (
                          <div
                            className="w-full aspect-video flex items-center justify-center text-white text-4xl font-black"
                            style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #4338CA 100%)' }}
                          >
                            A
                          </div>
                        )}

                        <div className="p-5">
                          <h2
                            className="text-base font-bold text-slate-900 leading-snug line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                          />
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                            {category && <span className="font-medium text-gray-500">{category.name}</span>}
                            {category && <span>·</span>}
                            <span>{date}</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* 페이지네이션 */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-2 mt-12">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Link
                        key={page}
                        href={`/blog?page=${page}`}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-colors ${
                          page === currentPage
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white text-gray-500 border border-gray-200 hover:bg-indigo-50 hover:text-indigo-700'
                        }`}
                      >
                        {page}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    <div className="border-t" style={{ background: '#09090b', borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Breadcrumb tone="dark" items={breadcrumbItems} />
      </div>
    </div>
    </>
  );
}
