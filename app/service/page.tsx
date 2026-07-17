import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '서비스 안내 | ABEL',
  description:
    'ABEL은 AI 답변 엔진이 병원을 정답으로 인용하도록 구조 구축, 컨설팅, 운영 대행, 실무 교육 4가지 솔루션으로 SEO·GEO를 설계합니다.',
  alternates: { canonical: 'https://abel-ai.com/service' },
};

const SERVICES = [
  {
    href: '/service/structure',
    num: '01',
    title: 'SEO·GEO 구조 구축',
    sub: '홈페이지 제작',
    desc: 'AI가 인용하기 가장 좋은 데이터 구조로 처음부터 다시 짓습니다.',
  },
  {
    href: '/service/consulting',
    num: '02',
    title: 'SEO·GEO 최적화 컨설팅',
    sub: '진단 및 처방',
    desc: '지금 우리 병원 홈페이지가 AI에게 어떻게 보이는지 진단하고, 문제점과 개선 로드맵을 처방합니다.',
  },
  {
    href: '/service/operation',
    num: '03',
    title: 'SEO·GEO 운영 대행',
    sub: '콘텐츠 관리',
    desc: '질문에 답하는 콘텐츠로 AI 내 병원의 권위를 지속적으로 쌓습니다.',
  },
  {
    href: '/service/education',
    num: '04',
    title: 'SEO·GEO 실무 교육',
    sub: '내부 역량 강화',
    desc: '우리 병원만의 정답 데이터를 만드는 법, 원장님과 실무자가 직접 실행하게 합니다.',
  },
];

export default function ServicePage() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 pt-8">
          <p className="text-xs font-black text-violet-600 uppercase tracking-widest mb-2">
            ABEL SERVICE
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-950 mb-3">
            서비스 안내
          </h1>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            AI 답변 엔진이 병원을 정답으로 인용하도록, 아벨은 4가지 핵심 솔루션으로 구조를 설계합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-black text-violet-600">{s.num}</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{s.sub}</span>
              </div>
              <h2 className="text-xl font-black text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                {s.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">{s.desc}</p>
              <span className="text-sm font-bold text-violet-600 inline-flex items-center gap-1">
                자세히 보기 →
              </span>
            </Link>
          ))}
        </div>

        {/* 진단 안내 다크 박스 */}
        <div
          className="rounded-3xl p-10 md:p-14 text-white relative overflow-hidden mb-16"
          style={{ background: '#0f0f0f' }}
        >
          <div
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              width: '450px', height: '300px',
              background: 'radial-gradient(circle, rgba(109,40,217,0.3) 0%, transparent 65%)',
            }}
          />
          <div className="relative z-10">
            <p
              className="text-xs font-bold tracking-[0.4em] uppercase mb-4"
              style={{ color: '#a855f7' }}
            >
              GEO DIAGNOSIS
            </p>
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              약 100여개 항목의 정밀 진단으로 시작합니다
            </h2>
            <p className="mb-2" style={{ color: 'rgba(255,255,255,0.82)' }}>
              병원 홈페이지의 크롤링 환경, E-E-A-T 신호 등을 정밀 분석해 AI 답변 엔진이
              가장 먼저 인용하는 구조로 재설계합니다. 진단 항목은 다국어 여부 등
              홈페이지 특성에 따라 달라질 수 있습니다.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full text-white font-bold transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
          >
            상담 문의하기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
