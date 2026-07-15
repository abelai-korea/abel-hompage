import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FaqClient, { type FaqCard } from './FaqClient';

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
    title: 'AI 마케팅 FAQ 백과사전 | ABEL',
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
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10 pt-8">
          <p className="text-xs font-black text-indigo-500 uppercase tracking-widest mb-2">
            ABEL FAQ
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-slate-950 mb-3">
            자주 묻는 질문
          </h1>
          <p className="text-gray-500 text-sm">
            SEO·GEO에 대한 궁금증 <strong>{allItems.length}개</strong> 수록
          </p>
        </div>

        <FaqClient items={allItems} categories={categories} />
      </div>
    </div>
  );
}
