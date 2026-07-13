'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        background: 'rgba(0, 0, 0, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderColor: 'rgba(255, 255, 255, 0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="ABEL"
            style={{ height: '112px', width: 'auto', display: 'block' }}
          />
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#problem"
            className="text-sm font-semibold transition-colors text-white/65 hover:text-white"
          >
            AI 검색최적화
          </Link>
          <Link
            href="/seo-geo-faq"
            className="text-sm font-semibold transition-colors text-white/65 hover:text-white"
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold transition-colors text-white/65 hover:text-white"
          >
            칼럼
          </Link>
          <Link
            href="/#contact"
            className="px-5 py-2 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
          >
            상담 신청
          </Link>
        </nav>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden p-2"
          style={{ color: 'rgba(255,255,255,0.7)' }}
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
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{
            background: '#000000',
            borderColor: 'rgba(255,255,255,0.06)',
          }}
        >
          <Link
            href="/#problem"
            className="text-sm font-semibold"
            style={{ color: 'rgba(255,255,255,0.7)' }}
            onClick={() => setMenuOpen(false)}
          >
            AI 검색최적화
          </Link>
          <Link
            href="/seo-geo-faq"
            className="text-sm font-semibold"
            style={{ color: 'rgba(255,255,255,0.7)' }}
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold"
            style={{ color: 'rgba(255,255,255,0.7)' }}
            onClick={() => setMenuOpen(false)}
          >
            칼럼
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-bold"
            style={{ color: '#a855f7' }}
            onClick={() => setMenuOpen(false)}
          >
            상담 신청 →
          </Link>
        </div>
      )}
    </header>
  );
}
