import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEO·GEO 실무 교육 | ABEL 서비스 안내',
  description:
    '우리 병원만의 정답 데이터를 만드는 법, 원장님과 실무자가 직접 실행할 수 있도록 돕습니다. 아벨의 SEO·GEO 실무 교육 서비스를 소개합니다.',
  alternates: { canonical: 'https://abel-ai.com/service/education' },
};

export default function ServiceEducationPage() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* 헤더 */}
        <div className="text-center mb-16 pt-8">
          <p className="text-xs font-black text-violet-600 uppercase tracking-widest mb-2">
            SERVICE 04 · 내부 역량 강화
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-950 mb-4">
            SEO·GEO 실무 교육
          </h1>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            우리 병원만의 정답 데이터를 만드는 법, 원장님과 실무자가 직접 실행하게 합니다.
          </p>
        </div>

        {/* 문제 제기 */}
        <section className="mb-16">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">PROBLEM</p>
          <h2 className="text-2xl font-black text-gray-900 mb-6">이런 고민, 있으신가요?</h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
            {[
              '외부 대행에만 의존하면, 병원 내부에는 노하우가 남지 않는다.',
              '원장님과 실무자가 SEO·GEO를 이해하지 못해 의사결정이 느리다.',
              '교육이라고 하면 이론 위주라, 실무에 바로 적용하기 어렵다.',
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
          <h2 className="text-2xl font-black text-gray-900 mb-6">아벨의 교육 방식</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { num: '1', title: '우리 병원 데이터로 실습', desc: '일반론이 아니라, 실제 우리 병원 홈페이지와 콘텐츠를 소재로 진행합니다.' },
              { num: '2', title: '질문형 콘텐츠 작성법', desc: '실무자가 직접 질문형 콘텐츠를 기획하고 작성할 수 있도록 훈련합니다.' },
              { num: '3', title: '진단 항목 이해', desc: '원장님이 직접 홈페이지 상태를 판단할 수 있는 기준을 제공합니다.' },
              { num: '4', title: '실행 가능한 가이드 제공', desc: '교육 후에도 참고할 수 있는 체크리스트와 가이드 문서를 남깁니다.' },
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
              <h2 className="text-2xl font-black mb-6">일반론이 아니라, 우리 병원 기준으로 가르칩니다</h2>
              <div className="space-y-4">
                {[
                  '추상적인 SEO 이론이 아니라, 실제 우리 병원 데이터로 직접 실습합니다.',
                  '원장님도 이해할 수 있는 눈높이로 설명해, 의사결정 속도를 높입니다.',
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
