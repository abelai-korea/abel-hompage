'use client';

import Link from 'next/link';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConsultFloatingButton() {
  const handleClick = () => {
    window.gtag?.('event', 'consult_floating_click', {
      event_category: 'engagement',
      event_label: 'floating_button',
    });
  };

  return (
    <Link
      href="/contact"
      onClick={handleClick}
      aria-label="상담 문의 페이지로 이동"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full text-white shadow-2xl transition-transform hover:scale-105 active:scale-95 w-14 h-14 justify-center md:w-auto md:h-auto md:px-6 md:py-4"
      style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8l-4.5 4V6a1 1 0 0 1 1-1z"
          fill="white"
        />
      </svg>
      <span className="hidden md:inline text-sm font-black whitespace-nowrap">
        상담 문의
      </span>
    </Link>
  );
}
