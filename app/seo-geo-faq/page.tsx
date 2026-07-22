import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FaqClient, { type FaqCard } from './FaqClient';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import Breadcrumb from '@/components/Breadcrumb';

const WP_API = process.env.NEXT_PUBLIC_WP_API_URL || 'https://cms.abel-ai.com/wp-json/wp/v2';

async function getFaqCards(): Promise<FaqCard[]> {
  const res = await fetch(`${WP_API}/pages?slug=geo-aeo-faq`, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const pages = await res.json();
  const content: string = pages[0]?.content?.rendered ?? '';

  // Extract HTML after JSON-LD block
  const scriptEnd = content.indexOf('</script>');
  const html = scriptEnd >= 0 ? content.slice(scriptEnd + '</script>'.length) : content;

  // Parse abel-card blocks
  const cardRegex =
    /<div class="abel-card"[^>]*>\s*<span class="abel-card-cat">([\s\S]*?)<\/span>\s*<p class="abel-card-q">([\s\S]*?)<\/p>\s*<p class="abel-card-a">([\s\S]*?)<\/p>/g;

  const cards: FaqCard[] = [];
  let m: RegExpExecArray | null;
  while ((m = cardRegex.exec(html)) !== null) {
    cards.push({
      category: m[1].trim(),
      question: m[2].trim(),
      answer: m[3].trim(),
    });
  }
  return cards;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'SEO·GEO FAQ 백과사전 | ABEL',
    description: 'SEO·GEO 관련 자주 묻는 질문 모음. 아벨이 직접 답변합니다.',
    alternates: { canonical: 'https://abel-ai.com/seo-geo-faq' },
  };
}

export default async function FaqPage() {
  const allItems = await getFaqCards();
  if (allItems.length === 0) notFound();

  // Unique categories preserving order of first appearance
  const categories = Array.from(new Set(allItems.map((i) => i.category)));

  return (
    <div className="pretendard min-h-screen bg-gray-50">
      <BreadcrumbJsonLd
        items={[
          { name: '홈', url: 'https://abel-ai.com/' },
          { name: 'SEO·GEO FAQ', url: 'https://abel-ai.com/seo-geo-faq' },
        ]}
      />
      {/* ─── HERO (다크, 입체감 레이어 — /service와 동일 톤) ─────────────── */}
      <section
        className="relative pt-40 pb-24 overflow-hidden isolate"
        style={{ background: '#0d0020' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(680px 460px at 82% -10%, rgba(124,58,237,0.42) 0%, transparent 62%), ' +
              'radial-gradient(560px 420px at -8% 108%, rgba(88,28,135,0.5) 0%, transparent 58%), ' +
              '#0d0020',
          }}
        />
        <div className="hero-depth-grid" />
        <div className="hero-grain" />

        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <div className="stagger">
            <p
              className="text-xs font-bold tracking-[0.4em] uppercase mb-6"
              style={{ color: 'rgba(196,181,253,0.85)' }}
            >
              ABEL FAQ
            </p>
            <h1
              className="text-4xl md:text-5xl font-black text-white leading-[1.32] mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              자주 묻는{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #c4b5fd 0%, #ffffff 100%)' }}
              >
                SEO·GEO
              </span>{' '}
              질문
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
              병원 원장님들이 가장 궁금해하시는 질문에 아벨이 직접 답합니다.
              <br className="hidden md:block" />
              총 <strong className="text-white">{allItems.length}개</strong>의 질문이 수록되어 있습니다.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <FaqClient items={allItems} categories={categories} />
      </div>

      <div className="border-t" style={{ background: '#09090b', borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Breadcrumb
            tone="dark"
            items={[
              { name: '홈', url: 'https://abel-ai.com/' },
              { name: 'SEO·GEO FAQ' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
