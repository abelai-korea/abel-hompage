'use client';

import Link from 'next/link';

interface Props {
  currentPage: number;
  totalPages: number;
}

export default function FaqPagination({ currentPage, totalPages }: Props) {
  const visiblePages = () => {
    const range = 2;
    const start = Math.max(1, currentPage - range);
    const end = Math.min(totalPages, currentPage + range);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pages = visiblePages();
  const btnBase =
    'px-4 py-2 rounded-xl text-sm font-bold transition-colors border';
  const inactive =
    'bg-white border-gray-200 text-gray-600 hover:border-indigo-400 hover:text-indigo-600';
  const active = 'bg-indigo-600 border-indigo-600 text-white';

  return (
    <nav className="flex items-center justify-center gap-2 mt-10 flex-wrap">
      {currentPage > 1 && (
        <Link href={`/geo-aeo-faq?page=${currentPage - 1}`} scroll={true} className={`${btnBase} ${inactive}`}>
          ← 이전
        </Link>
      )}

      {pages[0] > 1 && (
        <>
          <Link href="/geo-aeo-faq?page=1" scroll={true} className={`${btnBase} ${inactive}`}>1</Link>
          {pages[0] > 2 && <span className="text-gray-400 px-1">…</span>}
        </>
      )}

      {pages.map((p) => (
        <Link
          key={p}
          href={`/geo-aeo-faq?page=${p}`}
          scroll={true}
          className={`${btnBase} ${p === currentPage ? active : inactive}`}
        >
          {p}
        </Link>
      ))}

      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && (
            <span className="text-gray-400 px-1">…</span>
          )}
          <Link href={`/geo-aeo-faq?page=${totalPages}`} scroll={true} className={`${btnBase} ${inactive}`}>
            {totalPages}
          </Link>
        </>
      )}

      {currentPage < totalPages && (
        <Link href={`/geo-aeo-faq?page=${currentPage + 1}`} scroll={true} className={`${btnBase} ${inactive}`}>
          다음 →
        </Link>
      )}
    </nav>
  );
}
