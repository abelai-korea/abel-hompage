'use client';

import { useState } from 'react';

export interface FaqCard {
  category: string;
  question: string;
  answer: string;
}

const ALL = '전체';
const PER_PAGE = 10;
const CARD_SHADOW = '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)';

interface Props {
  items: FaqCard[];
  categories: string[];
}

export default function FaqClient({ items, categories }: Props) {
  const [activeCat, setActiveCat] = useState(ALL);
  const [currentPage, setCurrentPage] = useState(1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [query, setQuery] = useState('');

  const isSearching = query.trim().length > 0;

  // 정확한 문구 매칭 대신, 입력한 단어들이 질문/답변/카테고리 어딘가에
  // 흩어져 있어도 걸리도록 — 토큰 단위 부분일치로 느슨하게 찾는다.
  const searchTokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const searched = isSearching
    ? items.filter((i) => {
        const haystack = `${i.category} ${i.question} ${i.answer}`.toLowerCase();
        return searchTokens.every((t) => haystack.includes(t));
      })
    : items;

  const filtered = isSearching
    ? searched
    : activeCat === ALL
      ? items
      : items.filter((i) => i.category === activeCat);
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
      {/* 검색 */}
      <div className="relative mb-6">
        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 text-lg pointer-events-none">
          🔍
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCurrentPage(1);
            setOpenIndex(null);
          }}
          placeholder="궁금한 내용을 입력해보세요 (예: AI 검색 노출, 병원 후기)"
          className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-100 bg-white text-sm font-medium text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-300"
          style={{ boxShadow: CARD_SHADOW }}
        />
        {isSearching && (
          <button
            onClick={() => { setQuery(''); setCurrentPage(1); setOpenIndex(null); }}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 text-sm font-bold"
            aria-label="검색어 지우기"
          >
            ✕
          </button>
        )}
      </div>

      {/* 카테고리 필터 — 검색 중에는 숨김(검색은 전체 카테고리 대상) */}
      {!isSearching && (
        <div className="flex flex-wrap gap-2 mb-8">
          {[ALL, ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCat(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${
                activeCat === cat
                  ? 'text-white border-transparent'
                  : 'bg-white text-slate-600 border-violet-100 hover:border-violet-400 hover:text-violet-600'
              }`}
              style={
                activeCat === cat
                  ? { background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }
                  : { boxShadow: CARD_SHADOW }
              }
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
      )}

      {/* 결과 건수 */}
      <p className="text-sm text-gray-400 mb-4">
        {isSearching
          ? `"${query}" 검색 결과 ${filtered.length}개`
          : `${filtered.length}개 질문 · ${currentPage}/${totalPages || 1} 페이지`}
      </p>

      {isSearching && filtered.length === 0 && (
        <p className="text-sm text-gray-400 py-10 text-center">
          검색 결과가 없습니다. 다른 단어로 다시 검색해보세요.
        </p>
      )}

      {/* 아코디언 */}
      <div className="space-y-3">
        {pageItems.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:-translate-y-0.5 transition-all duration-300"
            style={{ boxShadow: CARD_SHADOW }}
          >
            <button
              className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex flex-col gap-1.5 min-w-0">
                <span className="text-xs font-black text-violet-600 bg-violet-50 px-2 py-0.5 rounded-md self-start">
                  {item.category}
                </span>
                <span className="font-bold text-slate-900 leading-snug text-sm">
                  {item.question}
                </span>
              </div>
              <span
                className={`flex-shrink-0 text-violet-500 text-base mt-1 transition-transform duration-200 ${
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
              className="px-4 py-2 rounded-xl text-sm font-bold border bg-white border-gray-200 text-gray-600 hover:border-violet-400 hover:text-violet-600 transition-colors"
            >
              ← 이전
            </button>
          )}

          {visiblePages()[0] > 1 && (
            <>
              <button
                onClick={() => handlePage(1)}
                className="px-4 py-2 rounded-xl text-sm font-bold border bg-white border-gray-200 text-gray-600 hover:border-violet-400 transition-colors"
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
                  ? 'bg-violet-600 text-white border-violet-600'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-violet-400 hover:text-violet-600'
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
                className="px-4 py-2 rounded-xl text-sm font-bold border bg-white border-gray-200 text-gray-600 hover:border-violet-400 transition-colors"
              >
                {totalPages}
              </button>
            </>
          )}

          {currentPage < totalPages && (
            <button
              onClick={() => handlePage(currentPage + 1)}
              className="px-4 py-2 rounded-xl text-sm font-bold border bg-white border-gray-200 text-gray-600 hover:border-violet-400 hover:text-violet-600 transition-colors"
            >
              다음 →
            </button>
          )}
        </nav>
      )}
    </>
  );
}
