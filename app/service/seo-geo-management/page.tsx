import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEO·GEO 운영 대행 | ABEL 서비스 안내',
  description:
    '질문에 답하는 콘텐츠로 AI 안에서 병원의 권위를 지속적으로 쌓습니다. 아벨의 SEO·GEO 운영 대행(콘텐츠 관리) 서비스를 소개합니다.',
  alternates: { canonical: 'https://abel-ai.com/service/seo-geo-management' },
};

export default function ServiceOperationPage() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* 헤더 */}
        <div className="text-center mb-16 pt-8">
          <p className="text-xs font-black text-violet-600 uppercase tracking-widest mb-2">
            SERVICE 03 · 콘텐츠 관리
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-950 mb-4">
            SEO·GEO 운영 대행
          </h1>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            질문에 답하는 콘텐츠로, AI 안에서 병원의 권위를 지속적으로 쌓습니다.
          </p>
        </div>

        {/* 문제 제기 */}
        <section className="mb-16">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">PROBLEM</p>
          <h2 className="text-2xl font-black text-gray-900 mb-6">이런 고민, 있으신가요?</h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
            {[
              '홈페이지는 만들었지만, 이후로 콘텐츠가 업데이트되지 않고 방치돼 있다.',
              '칼럼을 꾸준히 써야 하는 건 알지만, 무엇을 어떤 기준으로 써야 할지 모른다.',
              '내부에 전담 인력이 없어서 꾸준히 운영하기가 현실적으로 어렵다.',
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
          <h2 className="text-2xl font-black text-gray-900 mb-6">아벨의 운영 방식</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { num: '1', title: '질문형 칼럼 기획·발행', desc: '환자가 실제로 묻는 질문을 기준으로 콘텐츠를 기획하고 주기적으로 발행합니다.' },
              { num: '2', title: 'AI 인용 데이터 누적', desc: '발행된 콘텐츠가 AI 학습·인용 데이터로 쌓이도록 구조화해 작성합니다.' },
              { num: '3', title: '성과 모니터링', desc: '콘텐츠의 인용 여부, 유입 성과를 주기적으로 확인하고 방향을 조정합니다.' },
              { num: '4', title: '구조 유지·보수', desc: '홈페이지 구조가 최신 SEO·GEO 기준에 맞게 유지되도록 관리합니다.' },
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
              <h2 className="text-2xl font-black mb-6">일회성 제작이 아니라, 지속되는 파트너십입니다</h2>
              <div className="space-y-4">
                {[
                  '콘텐츠 하나하나가 AI 학습·인용 데이터로 축적되도록 설계된 구조 위에서 운영합니다.',
                  '만들고 끝나는 것이 아니라, 병원의 권위가 시간이 지날수록 쌓이도록 관리합니다.',
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
