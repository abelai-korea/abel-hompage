'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const SERVICE_MENU = [
  { href: '/service/structure', label: 'SEO·GEO 구조 구축' },
  { href: '/service/consulting', label: 'SEO·GEO 최적화 컨설팅' },
  { href: '/service/operation', label: 'SEO·GEO 운영 대행' },
  { href: '/service/education', label: 'SEO·GEO 실무 교육' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

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
          <Image
            src="/logo.png"
            alt="ABEL"
            width={168}
            height={112}
            priority
            style={{ height: '112px', width: 'auto', display: 'block' }}
          />
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <Link
              href="/service"
              className="text-sm font-semibold transition-colors text-white/65 hover:text-white flex items-center gap-1"
            >
              서비스 안내
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            {serviceOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                style={{ width: '240px' }}
              >
                <div
                  className="rounded-2xl border overflow-hidden shadow-2xl"
                  style={{ background: '#141018', borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  {SERVICE_MENU.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-3.5 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
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
            href="/contact"
            className="px-5 py-2 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
          >
            상담 신청
          </Link>
        </nav>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden flex flex-col items-center justify-center"
          style={{ color: 'rgba(255,255,255,0.7)', minWidth: '44px', minHeight: '44px' }}
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
            href="/service"
            className="text-sm font-semibold"
            style={{ color: 'rgba(255,255,255,0.7)' }}
            onClick={() => setMenuOpen(false)}
          >
            서비스 안내
          </Link>
          <div className="flex flex-col gap-3 pl-4 border-l" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            {SERVICE_MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium"
                style={{ color: 'rgba(255,255,255,0.55)' }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
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
            href="/contact"
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
