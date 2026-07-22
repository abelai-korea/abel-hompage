import Link from 'next/link';
import type { BreadcrumbEntry } from '@/lib/seo';

const TONES = {
  dark: { idle: 'text-white/40', hover: 'hover:text-white', current: 'text-white/70' },
  'dark-emerald': { idle: 'text-white/40', hover: 'hover:text-emerald-300', current: 'text-white/70' },
  light: { idle: 'text-gray-400', hover: 'hover:text-indigo-600', current: 'text-gray-600' },
} as const;

export default function Breadcrumb({
  items,
  tone = 'light',
  className = '',
}: {
  items: BreadcrumbEntry[];
  tone?: keyof typeof TONES;
  className?: string;
}) {
  // 홈만 있는 경로(홈페이지 자체)는 표시할 트레일이 없어 렌더링하지 않는다
  if (items.length < 2) return null;

  const { idle, hover, current } = TONES[tone];

  return (
    <nav
      aria-label="breadcrumb"
      className={`flex flex-wrap items-center gap-1.5 text-xs font-semibold ${idle} ${className}`}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        const path = item.url ? item.url.replace('https://abel-ai.com', '') || '/' : undefined;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <span aria-hidden="true" className="opacity-50">
                /
              </span>
            )}
            {path && !isLast ? (
              <Link href={path} className={`transition-colors ${hover}`}>
                {item.name}
              </Link>
            ) : (
              <span className={isLast ? current : ''} aria-current={isLast ? 'page' : undefined}>
                {item.name}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
