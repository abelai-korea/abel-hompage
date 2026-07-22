import Link from 'next/link';

const STEPS = [
  { href: '/service/seo-geo-structure', label: 'SEO·GEO 구조 구축', step: 'STEP 1' },
  { href: '/service/seo-geo-consulting', label: 'SEO·GEO 최적화 컨설팅', step: 'STEP 2' },
  { href: '/service/seo-geo-management', label: 'SEO·GEO 운영 대행', step: 'STEP 3' },
  { href: '/service/seo-geo-education', label: 'SEO·GEO 1:1 교육', step: 'STEP 4' },
];

export default function ServiceStepper({ current }: { current: number }) {
  const prev = STEPS[current - 1];
  const next = STEPS[current + 1];

  return (
    <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6 text-center">
          아벨의 4단계 솔루션
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={prev.href}
              className="group flex items-center justify-between gap-4 bg-white rounded-2xl border border-gray-100 p-6 hover:-translate-y-0.5 transition-all"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)' }}
            >
              <div>
                <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-1">← {prev.step}</p>
                <p className="font-bold text-gray-900 group-hover:text-violet-700 transition-colors">{prev.label}</p>
              </div>
            </Link>
          ) : (
            <Link
              href="/service"
              className="group flex items-center justify-between gap-4 bg-white rounded-2xl border border-gray-100 p-6 hover:-translate-y-0.5 transition-all"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)' }}
            >
              <div>
                <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-1">← 전체 보기</p>
                <p className="font-bold text-gray-900 group-hover:text-violet-700 transition-colors">서비스 안내</p>
              </div>
            </Link>
          )}

          {next ? (
            <Link
              href={next.href}
              className="group flex items-center justify-between gap-4 bg-white rounded-2xl border-t-4 border-violet-600 p-6 hover:-translate-y-0.5 transition-all"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)' }}
            >
              <div>
                <p className="text-xs font-black text-violet-600 uppercase tracking-wider mb-1">{next.step} →</p>
                <p className="font-bold text-gray-900 group-hover:text-violet-700 transition-colors">{next.label}</p>
              </div>
            </Link>
          ) : (
            <Link
              href="/service"
              className="group flex items-center justify-between gap-4 bg-white rounded-2xl border-t-4 border-violet-600 p-6 hover:-translate-y-0.5 transition-all"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)' }}
            >
              <div>
                <p className="text-xs font-black text-violet-600 uppercase tracking-wider mb-1">전체 보기 →</p>
                <p className="font-bold text-gray-900 group-hover:text-violet-700 transition-colors">서비스 안내</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
