'use client';

import { useState } from 'react';

export interface FaqCard {
  category: string;
  question: string;
  answer: string;
}

const ALL = '전체';
const PER_PAGE = 10;

interface Props {
  items: FaqCard[];
  categories: string[];
}

export default function FaqClient({ items, categories }: Props) {
  const [activeCat, setActiveCat] = useState(ALL);
  const [currentPage, setCurrentPage] = useState(1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered =
    activeCat === ALL ? items : items.filter((i) => i.category === activeCat);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const pageItems = filtered.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  const handleCat = (cat: string) => {
    setActiveCat(cat);
    setCurrentPage(1);
    setOpenIndex(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePage = (p: number) => {
    setCurrentPage(p);
    setOpenIndex(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const visiblePages = () => {
    const range = 2;
    const start = Math.max(1, currentPage - range);
    const end = Math.min(totalPages, currentPage + range);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <>
      {/* 카테고리 필터 */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[ALL, ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCat(cat)}
            className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
              activeCat === cat
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-600 border-indigo-100 hover:border-indigo-400 hover:text-indigo-600'
            }`}
          >
            {cat}
            {cat !== ALL && (
              <span className="ml-1.5 text-xs opacity-70">
                {items.filter((i) => i.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* 결과 건수 */}
      <p className="text-sm text-gray-400 mb-4">
        {filtered.length}개 질문 · {currentPage}/{totalPages} 페이지
      </p>

      {/* 아코디언 */}
      <div className="space-y-3">
        {pageItems.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex flex-col gap-1.5 min-w-0">
                <span className="text-xs font-black text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded-md self-start">
                  {item.category}
                </span>
                <span className="font-bold text-slate-900 leading-snug text-sm">
                  {item.question}
                </span>
              </div>
              <span
                className={`flex-shrink-0 text-indigo-500 text-base mt-1 transition-transform duration-200 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              >
                ↓
              </span>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-6 pt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <nav className="flex items-center justify-center gap-2 mt-10 flex-wrap">
          {currentPage > 1 && (
            <button
              onClick={() => handlePage(currentPage - 1)}
              className="px-4 py-2 rounded-xl text-sm font-bold border bg-white border-gray-200 text-gray-600 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
            >
              ← 이전
            </button>
          )}

          {visiblePages()[0] > 1 && (
            <>
              <button
                onClick={() => handlePage(1)}
                className="px-4 py-2 rounded-xl text-sm font-bold border bg-white border-gray-200 text-gray-600 hover:border-indigo-400 transition-colors"
              >
                1
              </button>
              {visiblePages()[0] > 2 && (
                <span className="text-gray-400 px-1">…</span>
              )}
            </>
          )}

          {visiblePages().map((p) => (
            <button
              key={p}
              onClick={() => handlePage(p)}
              className={`px-4 py-2 rounded-xl text-sm font-bold border transition-colors ${
                p === currentPage
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-indigo-400 hover:text-indigo-600'
              }`}
            >
              {p}
            </button>
          ))}

          {visiblePages()[visiblePages().length - 1] < totalPages && (
            <>
              {visiblePages()[visiblePages().length - 1] < totalPages - 1 && (
                <span className="text-gray-400 px-1">…</span>
              )}
              <button
                onClick={() => handlePage(totalPages)}
                className="px-4 py-2 rounded-xl text-sm font-bold border bg-white border-gray-200 text-gray-600 hover:border-indigo-400 transition-colors"
              >
                {totalPages}
              </button>
            </>
          )}

          {currentPage < totalPages && (
            <button
              onClick={() => handlePage(currentPage + 1)}
              className="px-4 py-2 rounded-xl text-sm font-bold border bg-white border-gray-200 text-gray-600 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
            >
              다음 →
            </button>
          )}
        </nav>
      )}
    </>
  );
}
