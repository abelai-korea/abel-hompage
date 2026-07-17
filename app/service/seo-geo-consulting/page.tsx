import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEO·GEO 최적화 컨설팅 | ABEL 서비스 안내',
  description:
    '지금 병원 홈페이지가 AI에게 어떻게 보이는지 진단하고, 문제점과 개선 로드맵을 처방합니다. 아벨의 SEO·GEO 최적화 컨설팅을 소개합니다.',
  alternates: { canonical: 'https://abel-ai.com/service/seo-geo-consulting' },
};

export default function ServiceConsultingPage() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* 헤더 */}
        <div className="text-center mb-16 pt-8">
          <p className="text-xs font-black text-violet-600 uppercase tracking-widest mb-2">
            SERVICE 02 · 진단 및 처방
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-950 mb-4">
            SEO·GEO 최적화 컨설팅
          </h1>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            지금 우리 병원 홈페이지가 AI에게 어떻게 보이는지 진단하고,
            문제점과 개선 로드맵을 처방합니다.
          </p>
        </div>

        {/* 문제 제기 */}
        <section className="mb-16">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">PROBLEM</p>
          <h2 className="text-2xl font-black text-gray-900 mb-6">이런 고민, 있으신가요?</h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
            {[
              '홈페이지는 만들었는데, 지금 상태가 좋은지 나쁜지 판단이 서지 않는다.',
              '경쟁 병원은 AI 답변에 나오는데, 우리 병원이 빠지는 이유를 모른다.',
              '문제가 있는 건 알겠는데, 무엇부터 고쳐야 할지 우선순위가 없다.',
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
          <h2 className="text-2xl font-black text-gray-900 mb-6">아벨의 진단 프로세스</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { num: '1', title: '크롤링 환경 점검', desc: 'AI 크롤러의 접근성, 색인 상태, 기술적 오류 여부를 점검합니다.' },
              { num: '2', title: 'E-E-A-T 신호 분석', desc: '전문성·신뢰 신호가 AI가 읽을 수 있는 형태로 존재하는지 분석합니다.' },
              { num: '3', title: '질문형 콘텐츠 커버리지 분석', desc: '환자가 실제로 묻는 질문에 답이 준비되어 있는지 항목별로 확인합니다.' },
              { num: '4', title: '개선 로드맵 처방', desc: '발견된 문제를 우선순위별 실행 계획으로 정리해 처방합니다.' },
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
              <h2 className="text-2xl font-black mb-6">감이 아니라, 체크리스트로 진단합니다</h2>
              <div className="space-y-4">
                {[
                  '약 100여개 항목 기준 진단: 크롤링 환경, E-E-A-T 신호 등을 정해진 기준으로 전수 확인합니다.',
                  '나열이 아니라 순서: 무엇을 먼저 고쳐야 효과가 큰지, 실행 순서가 있는 로드맵으로 제공합니다.',
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
