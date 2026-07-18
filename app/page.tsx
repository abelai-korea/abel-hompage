import type { Metadata } from 'next';
import Link from 'next/link';
import ChatAnimation from '@/components/ChatAnimation';

export const metadata: Metadata = {
  title: 'ABEL | AI 에이전시 — SEO·GEO 구조 설계',
  description:
    'SEO·GEO 구조 설계로 병원과 브랜드가 ChatGPT·Gemini·Perplexity 답변에 인용되도록 만드는 AI 에이전시 아벨(ABEL). 권역별 쿼터제로 상권을 보호합니다.',
  alternates: { canonical: 'https://abel-ai.com/' },
};

const CARD_SHADOW = '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)';

export default function HomePage() {
  return (
    <>
      {/* ─── HERO (다크) ──────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center pt-36 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(150deg, #0d0020 0%, #060010 50%, #000000 100%)' }}
      >
        {/* 보라 글로우 — 우상단 메인 */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-250px', right: '-200px',
            width: '900px', height: '900px',
            background: 'radial-gradient(circle, rgba(109,40,217,0.55) 0%, transparent 60%)',
            borderRadius: '50%',
          }}
        />
        {/* 보라 글로우 — 좌하단 보조 */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '-80px', left: '-80px',
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 65%)',
            borderRadius: '50%',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          {/* 2컬럼: 텍스트 왼쪽 / 채팅 애니메이션 오른쪽 */}
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* 왼쪽: 텍스트 */}
            <div>
              <p
                className="text-xs font-bold tracking-[0.4em] uppercase mb-6"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                HOSPITAL SEO·GEO STRATEGY
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-black text-white leading-[1.1] mb-6">
                AI가 추천하는 병원을 만드는<br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(135deg, #c4b5fd 0%, #ffffff 100%)' }}
                >
                  SEO·GEO AI 에이전시
                </span>
              </h1>

              <p className="text-base lg:text-lg leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.88)' }}>
                네이버 상위 노출에 매달려도, ChatGPT에 우리 병원이 안 나오는 진짜 이유.
                이제 AI 답변 엔진이 가장 먼저 인용하는 &lsquo;정답 병원&rsquo;으로 권위를 독점하십시오.
              </p>

              <Link
                href="/service"
                className="inline-block px-8 py-4 rounded-full text-white font-bold text-sm transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
              >
                서비스 안내 →
              </Link>

              {/* 스탯 행 */}
              <div
                className="grid grid-cols-4 gap-4 mt-12 pt-10 border-t"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                {[
                  { num: '100+', label: '진단 항목' },
                  { num: '1', label: '구별 계약' },
                  { num: '300+', label: 'FAQ 수록' },
                  { num: '3', label: '핵심 구조' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-white mb-0.5">{stat.num}</div>
                    <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.72)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 오른쪽: 채팅 애니메이션 */}
            <div className="w-full">
              <ChatAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE SHIFT (화이트) ───────────────────────────────── */}
      <section id="problem" className="py-24 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 text-center">
            THE SHIFT
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-4 leading-snug"
            style={{ letterSpacing: '-0.02em' }}
          >
            이제 병원은<br />네이버 안에서만 경쟁하지 않습니다
          </h2>
          <p className="text-gray-500 text-base md:text-lg text-center mb-14 max-w-xl mx-auto leading-relaxed">
            환자들은 검색 결과만 보는 것이 아니라,<br />
            AI 답변, 지도, 후기, 블로그, 유튜브까지 함께 참고합니다.
          </p>

          {/* Before / 지금 */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
            <div
              className="bg-white rounded-2xl p-8 border border-gray-100"
              style={{ boxShadow: CARD_SHADOW }}
            >
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">이전</p>
              <div className="text-gray-700 font-medium space-y-2">
                {['네이버 검색', '홈페이지 방문', '상담'].map((item, i) => (
                  <p key={item} className="flex items-center gap-2">
                    <span className="text-gray-300">0{i + 1}</span> {item}
                  </p>
                ))}
              </div>
            </div>
            <div
              className="rounded-2xl p-8 text-white"
              style={{
                background: 'linear-gradient(135deg, #3b0764 0%, #7c3aed 100%)',
                boxShadow: '0 8px 24px rgba(124,58,237,0.25)',
              }}
            >
              <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: '#c084fc' }}>지금</p>
              <div className="space-y-2 font-medium">
                <p>검색 + AI 질문 + 지도</p>
                <p>후기 + 비교 콘텐츠</p>
                <p className="text-sm mt-3 text-purple-200">
                  병원이 보이는 채널이 많아질수록<br />홈페이지 구조의 중요성도 함께 커집니다
                </p>
              </div>
            </div>
          </div>

          {/* 3가지 변화 */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '1',
                title: '검색에서 질문으로',
                desc: '환자들은 이제 짧은 키워드보다 "어디가 좋나요?" "어떤 차이가 있나요?"처럼 질문합니다.',
              },
              {
                num: '2',
                title: '클릭 전에 비교가 시작됩니다',
                desc: '환자들은 홈페이지에 들어오기 전부터 AI 요약과 후기, 지도 정보로 이미 후보를 추립니다.',
              },
              {
                num: '3',
                title: '먼저 보이는 병원이 유리합니다',
                desc: 'AI가 이해하기 쉬운 구조를 먼저 만든 병원이 추천과 비교의 출발점이 될 가능성이 커집니다.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: CARD_SHADOW }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm mb-4"
                  style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
                >
                  {item.num}
                </div>
                <h3 className="font-black text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY NOW (라이트 그레이) ──────────────────────────── */}
      <section id="why-now" className="py-24 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 text-center">WHY NOW</p>
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-4 leading-snug"
            style={{ letterSpacing: '-0.02em' }}
          >
            왜 지금 SEO,GEO를 선점해야 할까요?
          </h2>
          <p className="text-gray-500 text-base md:text-lg text-center mb-14 max-w-xl mx-auto leading-relaxed">
            고객의 질문 방식과 AI의 답변 방식이 동시에 바뀌고 있습니다.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '1',
                title: '질문이 길어졌습니다',
                desc: '환자들은 이제 "치과 추천"처럼 짧게 검색하지 않습니다. "강남에서 임플란트 잘하는 치과 추천해줘"처럼 더 길고 구체적으로 질문합니다.',
              },
              {
                num: '2',
                title: 'AI는 관련 질문까지 함께 봅니다',
                desc: 'AI는 질문 하나만 보는 것이 아니라, 치료법, 비교 포인트, 병원 선택 기준 같은 연관 질문까지 함께 탐색하며 답을 만듭니다.',
              },
              {
                num: '3',
                title: '클릭 전에 이미 비교가 시작됩니다',
                desc: '고객은 홈페이지에 들어오기 전에 AI 답변, 지도, 후기, 리뷰를 먼저 봅니다. 먼저 보이는 병원이 더 유리해질 수 있습니다.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-2xl border-t-4 border-violet-600 p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: CARD_SHADOW }}
              >
                <div className="text-4xl font-black text-violet-100 mb-4">{item.num}.</div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-base font-bold text-gray-800 bg-violet-50 inline-block px-8 py-4 rounded-2xl border border-violet-100">
              먼저 구조를 잡은 병원이 AI 답변 안에서 더 유리한 출발점을 만들 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHY HOMEPAGE FIRST (바이올렛 틴트) ─────────────── */}
      <section id="homepage-first" className="py-24 md:py-28" style={{ background: '#f5f3ff' }}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-black text-violet-600 uppercase tracking-widest mb-3 text-center">
            WHY HOMEPAGE FIRST
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-4 leading-snug"
            style={{ letterSpacing: '-0.02em' }}
          >
            SEO,GEO는 왜 홈페이지부터 시작할까요?
          </h2>
          <p className="text-gray-500 text-base md:text-lg text-center mb-14 max-w-xl mx-auto leading-relaxed">
            홈페이지는 AI가 병원을 이해하는 가장 중요한 기준점입니다.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="bg-white rounded-3xl p-10 border border-gray-100"
              style={{ boxShadow: CARD_SHADOW }}
            >
              <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">😔</span> 지금 대부분의 병원 홈페이지
              </h3>
              <ul className="space-y-3">
                {[
                  '병원 소개는 있지만 질문에 대한 답이 부족합니다',
                  '진료 항목은 있지만 비교 설명이 약합니다',
                  '후기와 사례가 흩어져 있어 AI가 읽기 어렵습니다',
                  'FAQ와 핵심 정보 구조가 부족해 인용 기회가 줄어듭니다',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-3xl p-10 text-white"
              style={{
                background: 'linear-gradient(135deg, #3b0764 0%, #7c3aed 100%)',
                boxShadow: '0 8px 24px rgba(124,58,237,0.25)',
              }}
            >
              <h3 className="text-lg font-black mb-6 flex items-center gap-2">
                <span className="text-2xl">✨</span> SEO,GEO 구조를 먼저 잡으면
              </h3>
              <ul className="space-y-3">
                {[
                  '질문에 바로 답하는 병원으로 보일 수 있습니다',
                  'AI가 인용하기 쉬운 설명 구조를 만듭니다',
                  '후기와 사례가 신뢰 자산이 됩니다',
                  '비교와 추천 질문에서 더 유리해질 수 있습니다',
                  '환자 선택 직전 질문에 미리 답할 준비를 하게 됩니다',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-purple-100">
                    <span className="text-purple-300 flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-2xl md:text-3xl font-black text-gray-800 mt-14 leading-snug">
            광고보다 먼저 필요한 것은,<br />
            병원을 AI가 이해할 수 있게 정리하는 일입니다.
          </p>
        </div>
      </section>

      {/* ─── WHAT ABEL DOES (화이트) ──────────────────────────── */}
      <section id="what-abel" className="py-24 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 text-center">
            WHAT ABEL DOES
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-4 leading-snug"
            style={{ letterSpacing: '-0.02em' }}
          >
            아벨은 무엇을 정리하나요?
          </h2>
          <p className="text-gray-500 text-base md:text-lg text-center mb-14 max-w-xl mx-auto leading-relaxed">
            아벨은 병원과 브랜드가 AI 안에서 더 잘 이해되도록 구조를 설계합니다.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                num: '1',
                title: '홈페이지 구조',
                desc: '메인 메시지, 핵심 포지션, 카테고리 흐름, 비교 구조를 정리합니다.',
              },
              {
                num: '2',
                title: '질문형 콘텐츠',
                desc: '환자가 실제로 묻는 질문을 증상형, 추천형, 비교형으로 나눠 설계합니다.',
              },
              {
                num: '3',
                title: 'FAQ·사례·신뢰 구조',
                desc: '후기, 사례, 선택 기준, 자주 묻는 질문을 하나의 설명 구조로 묶습니다.',
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-2xl border-t-4 border-violet-600 p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: CARD_SHADOW }}
              >
                <p className="text-sm font-black text-violet-600 mb-2">{item.num}.</p>
                <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Market Gap — 다크 강조 박스 */}
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
              <p
                className="text-xs font-bold tracking-[0.4em] uppercase mb-4"
                style={{ color: '#a855f7' }}
              >
                MARKET GAP
              </p>
              <h3 className="text-2xl md:text-3xl font-black mb-4 leading-snug" style={{ letterSpacing: '-0.02em' }}>
                현재 시장 공백: 경쟁사들은 아직 구조를 제대로 못 잡았습니다
              </h3>
              <p className="mb-8 text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.82)' }}>
                많은 병원이 아직도 SEO 중심 사고에 머물러 있습니다.
                SEO,GEO는 지금 선점 가치가 큰 영역입니다.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-full text-white font-bold transition-all hover:opacity-90 hover:scale-[1.02] shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.45)]"
                style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
              >
                지금 선점 신청하기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA 배너 (라이트 그레이) ──────────────────── */}
      <section id="contact" className="py-24 md:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="rounded-[40px] p-12 lg:p-20 text-white text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1e0a3c 0%, #4c1d95 100%)' }}
          >
            <div
              className="absolute top-0 right-0 pointer-events-none"
              style={{
                width: '450px', height: '300px',
                background: 'radial-gradient(circle, rgba(168,85,247,0.35) 0%, transparent 65%)',
              }}
            />
            <div className="relative z-10">
              <span
                className="font-black text-sm uppercase tracking-wider block mb-4"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                ABEL GEO REGISTRATION
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                아벨의 GEO 정밀 진단, 지금 신청하세요
              </h2>
              <p className="text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.88)' }}>
                AI 전문가가 원장님의 홈페이지 크롤링 환경, E-E-A-T 신호 등{' '}
                <span className="font-bold text-white">약 100여개 항목을 전수 분석</span>합니다.
                권역별 쿼터제로 각 구(시)별 진료과당 딱 1개 병원만 계약합니다.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-full text-white font-black transition-all hover:opacity-90 hover:scale-[1.02] shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.45)]"
                style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
              >
                상담 문의 페이지로 이동 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
