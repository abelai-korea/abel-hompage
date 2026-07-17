import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEO·GEO 구조 구축 | ABEL 서비스 안내',
  description:
    'AI가 인용하기 가장 좋은 데이터 구조로 홈페이지를 처음부터 다시 짓습니다. 정보 구조 설계부터 질문형 콘텐츠, E-E-A-T 신호 배치까지 아벨의 구조 구축 서비스를 소개합니다.',
  alternates: { canonical: 'https://abel-ai.com/service/structure' },
};

export default function ServiceStructurePage() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* 헤더 */}
        <div className="text-center mb-16 pt-8">
          <p className="text-xs font-black text-violet-600 uppercase tracking-widest mb-2">
            SERVICE 01 · 홈페이지 제작
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-950 mb-4">
            SEO·GEO 구조 구축
          </h1>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            AI가 인용하기 가장 좋은 데이터 구조로, 홈페이지를 처음부터 다시 짓습니다.
          </p>
        </div>

        {/* 문제 제기 */}
        <section className="mb-16">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">PROBLEM</p>
          <h2 className="text-2xl font-black text-gray-900 mb-6">이런 고민, 있으신가요?</h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
            {[
              '홈페이지는 있지만 ChatGPT·Gemini에 우리 병원이 인용되지 않는다.',
              '메인 메시지와 진료 항목은 있는데, 질문과 답을 연결하는 구조가 없다.',
              '디자인은 만족스럽지만, 크롤링과 정보 구조 관점에서는 정리된 적이 없다.',
            ].map((t) => (
              <div key={t} className="flex gap-3 p-6">
                <span className="text-red-400 font-bold flex-shrink-0">✕</span>
                <p className="text-gray-600 leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 해결책 제시 */}
        <section className="mb-16">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">SOLUTION</p>
          <h2 className="text-2xl font-black text-gray-900 mb-6">아벨의 접근 방식</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { num: '1', title: '정보 구조(IA) 설계', desc: '메인 메시지, 핵심 포지션, 카테고리 흐름, 비교 구조부터 먼저 설계합니다.' },
              { num: '2', title: '질문형 콘텐츠 아키텍처', desc: '환자가 실제로 묻는 질문을 증상형·추천형·비교형으로 나눠 페이지를 구성합니다.' },
              { num: '3', title: 'E-E-A-T 신호 배치', desc: '전문성·신뢰 신호를 AI가 읽기 쉬운 형태로 홈페이지 곳곳에 배치합니다.' },
              { num: '4', title: '크롤링 환경 최적화', desc: 'AI 크롤러가 콘텐츠를 정확히 이해할 수 있도록 마크업과 구조를 정리합니다.' },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-2xl border-t-4 border-violet-600 p-6 shadow-sm">
                <p className="text-sm font-black text-violet-600 mb-2">{item.num}.</p>
                <h3 className="text-lg font-black text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 차별점 */}
        <section className="mb-16">
          <div
            className="rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
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
              <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: '#a855f7' }}>
                WHY ABEL
              </p>
              <h2 className="text-2xl font-black mb-6">디자인이 아니라, 데이터 설계가 출발점입니다</h2>
              <div className="space-y-4">
                {[
                  '감이 아니라 구조: 모든 페이지 구성은 AI 인용 가능성에 대한 논리적 근거로 결정됩니다.',
                  '제작으로 끝나지 않는 시스템: 구조가 유지·확장될 수 있도록 설계 원칙을 문서로 남깁니다.',
                ].map((t) => (
                  <p key={t} style={{ color: 'rgba(255,255,255,0.82)' }}>{t}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full text-white font-bold transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
          >
            정밀 진단 신청하기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
