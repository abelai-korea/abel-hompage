'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="ABEL" width={100} height={36} priority />
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#problem"
            className="text-sm font-semibold text-gray-600 hover:text-indigo-700 transition-colors"
          >
            AI 검색최적화
          </Link>
          <Link
            href="/geo-aeo-faq"
            className="text-sm font-semibold text-gray-600 hover:text-indigo-700 transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold text-gray-600 hover:text-indigo-700 transition-colors"
          >
            칼럼
          </Link>
          <Link
            href="/#contact"
            className="px-5 py-2 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #4338CA 0%, #6528F7 100%)' }}
          >
            상담 신청
          </Link>
        </nav>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current" />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <Link
            href="/#problem"
            className="text-sm font-semibold text-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            AI 검색최적화
          </Link>
          <Link
            href="/geo-aeo-faq"
            className="text-sm font-semibold text-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold text-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            칼럼
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-bold text-indigo-700"
            onClick={() => setMenuOpen(false)}
          >
            상담 신청 →
          </Link>
        </div>
      )}
    </header>
  );
}
