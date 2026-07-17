import type { Metadata } from 'next';
import Link from 'next/link';
import SelfDiagnosisDemo from '@/components/SelfDiagnosisDemo';

export const metadata: Metadata = {
  title: 'SEO·GEO 구조 구축 | ABEL 서비스 안내',
  description:
    'AI가 인용하기 가장 좋은 데이터 구조로 홈페이지를 처음부터 다시 짓습니다. 정보 구조 설계부터 질문형 콘텐츠, E-E-A-T 신호 배치까지 아벨의 구조 구축 서비스를 소개합니다.',
  alternates: { canonical: 'https://abel-ai.com/service/seo-geo-structure' },
};

const PAIN_POINTS = [
  {
    title: '크롤러와 AI를 차단하는 ‘통이미지’ 도배',
    desc: '화려하게 제작된 치료 사례, 의료진 약력, 전문 칼럼들이 통짜 이미지 파일로 업로드되어 있습니다. 검색 로봇과 AI에게 이미지는 한 조각의 그림일 뿐, 그 안의 글씨를 해독할 수 없습니다.',
  },
  {
    title: '환자의 고민을 연결하지 못하는 구조',
    desc: '홈페이지는 거창하게 만들어 두었지만, 환자가 밤마다 절박하게 검색하는 질문(예: "어지럼증이 3일째 지속되는데 무슨 병인가요?")과 병원의 치료법을 이어주는 동선 설계가 없습니다.',
  },
  {
    title: '이탈률만 높이는 일방적인 정보 제공',
    desc: '유입된 환자가 참여할 만한 흥미로운 요소 없이 빽빽한 줄글과 약력만 나열되어 있어, 환자는 3초 만에 뒤로 가기를 누르고 이탈합니다.',
  },
];

const SOLUTIONS = [
  {
    num: '1',
    title: '이미지 뒤에 숨겨진 글씨를 읽게 만드는 AI 맞춤형 데이터 코딩',
    tag: '테크니컬 SEO',
    desc: '원장님의 독보적인 전문성과 임상 경력이 검색엔진과 AI에게 고스란히 읽히도록, 모든 콘텐츠를 텍스트 데이터화하여 코딩합니다. AI가 병원을 인용할 때 가장 먼저 우리 병원 홈페이지의 문장을 출처로 채택할 수 있는 ‘구조적 뼈대(Schema Markup)’를 기본으로 구축합니다.',
  },
  {
    num: '2',
    title: '환자의 의심을 제거하고 예약으로 이끄는 3~5단계 신뢰 안착 동선',
    tag: '전환율 최적화',
    desc: '고객(환자)은 홈페이지에 들어오자마자 예약을 누르지 않습니다. 최소 3~5개의 검증된 정보와 임상 사례를 소비한 뒤에야 비로소 의심을 걷어내고 예약을 결심합니다. 환자의 심리적 허들을 단계별로 무너뜨리는 최적의 정보 배치와 예약 동선(Internal Linking)을 홈페이지 설계 단계부터 이식합니다.',
  },
  {
    num: '3',
    title: '검색 로봇을 가장 빠르게 안내하는 고속도로 구조 설계',
    tag: '크롤러빌리티 개선',
    desc: '아무리 좋은 글을 써도 구글의 수집 로봇이 홈페이지에 들어오다가 길을 잃거나 시스템 에러를 만나 이탈하면 무용지물입니다. 메인 홈페이지(GNB)를 검색 로봇이 가장 중요하게 여기는 ‘뇌(Header)’ 영역 중심으로 명료하게 설계하고, 최신 글이 작성되는 즉시 AI와 검색 엔진에 1초 만에 알림을 보내는 고속 수집 엔진(RSS/ATOM 피드)을 탑재합니다.',
  },
  {
    num: '4',
    title: '환자의 참여율과 체류 시간을 폭발적으로 늘리는 자가진단 기능 결합',
    tag: 'CRO 자바스크립트',
    desc: '지루하게 읽기만 하는 페이지는 이탈을 부릅니다. 환자가 직접 자신의 통증이나 증상(예: 돌발성 난청, 어지럼증)을 가볍게 체크해 볼 수 있는 ‘반응형 자가진단 모듈’을 웹페이지 내에 탑재합니다. 환자의 참여 유도를 통해 페이지 체류 시간(Dwell Time)을 극대화하고, 자연스럽게 문의하기(CTA)로 전환되도록 이끕니다.',
  },
];

const WHY_ABEL = [
  {
    title: '감이 아닌 정량화된 가이드 문서 제공',
    desc: '아벨은 "예쁘게 만들어 드릴게요"라는 모호한 약속을 하지 않습니다. AI와 검색 로봇이 완벽하게 정보를 긁어갈 수 있는 코딩 규칙과 환자의 전환 설계가 반영된 ‘데이터 아키텍처 가이드라인 및 우선순위 수정 지시서’를 문서 형태로 투명하게 인도합니다.',
  },
  {
    title: '자산으로서의 홈페이지 구축',
    desc: '매달 광고비를 쏟아부어야만 유지되는 일시적인 홈페이지가 아닙니다. 시간이 흐르고 전문 칼럼이 쌓일수록 사이트 자체의 ‘신뢰 자산(E-E-A-T)’이 눈덩이처럼 불어나 오가닉 트래픽을 평생 통제할 수 있는 구조를 제공합니다.',
  },
];

const CARD_SHADOW = '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)';

function WarningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-red-400 flex-shrink-0">
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    </svg>
  );
}

export default function ServiceStructurePage() {
  return (
    <div className="pretendard min-h-screen bg-gray-50">
      {/* ─── HERO (다크, 입체감 레이어) ─────────────────────────────── */}
      <section
        className="relative pt-40 pb-28 overflow-hidden isolate"
        style={{ background: '#0d0020' }}
      >
        {/* 딥 베이스 + 비대칭 광원 2점 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(680px 460px at 82% -10%, rgba(124,58,237,0.42) 0%, transparent 62%), ' +
              'radial-gradient(560px 420px at -8% 108%, rgba(88,28,135,0.5) 0%, transparent 58%), ' +
              '#0d0020',
          }}
        />
        {/* 원근 그리드 */}
        <div className="hero-depth-grid" />
        {/* 그레인 노이즈 */}
        <div className="hero-grain" />

        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <div className="stagger">
            <p
              className="text-xs font-bold tracking-[0.4em] uppercase mb-6"
              style={{ color: 'rgba(196,181,253,0.85)' }}
            >
              SERVICE 01 · 홈페이지 제작
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-[3.1rem] font-black text-white leading-[1.32] mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              디자인만 예쁜 껍데기 홈페이지는 가라.
              <br className="hidden md:block" />
              AI와 검색엔진이 먼저 알아보고{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #c4b5fd 0%, #ffffff 100%)' }}
              >
                환자에게 추천하는 홈페이지
              </span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
              혹시 원장님의 홈페이지도 AI와 검색엔진 눈에는 ‘빈 화면’으로 보이고 있진 않나요?
            </p>
            <p className="text-sm leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.58)' }}>
              예쁘게 만드는 것만으로는 부족합니다. AI와 검색엔진이 먼저 알아보고
              환자에게 추천하는, ‘데이터 설계 기반’의 진짜 신환 유치 홈페이지를 만들어 드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full text-white font-bold text-sm transition-all hover:opacity-90 hover:scale-[1.02] shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.45)]"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
            >
              우리 병원 무료 정밀 진단 신청하기 ↗
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        {/* 문제 제기 */}
        <section className="mb-16 pt-20">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">PAIN POINT</p>
          <h2
            className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-snug"
            style={{ letterSpacing: '-0.02em' }}
          >
            혹시 원장님의 홈페이지도 AI와 검색엔진 눈에는
            <br className="hidden md:block" />
            ‘빈 화면’으로 보이고 있진 않나요?
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            대부분의 병원 홈페이지가 수백, 수천만 원을 들여 화려한 디자인으로 제작되지만
            정작 검색창이나 ChatGPT, Gemini 같은 AI 답변 엔진에는 전혀 인용되지 않습니다.
            그 이유는 무엇일까요?
          </p>
          <div
            className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100"
            style={{ boxShadow: CARD_SHADOW }}
          >
            {PAIN_POINTS.map((p) => (
              <div key={p.title} className="flex gap-3 p-6">
                <WarningIcon />
                <div>
                  <p className="font-bold text-gray-900 mb-1">{p.title}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 해결책 제시 */}
        <section className="mb-16">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">SOLUTION</p>
          <h2 className="text-2xl font-black text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
            아벨은 기술적 전문성을 ‘원장님의 언어’로 재설계합니다
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {SOLUTIONS.map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-2xl border-t-4 border-violet-600 p-7"
                style={{ boxShadow: CARD_SHADOW }}
              >
                <p className="text-xs font-black text-violet-600 mb-2 uppercase tracking-wider">
                  {item.num}. {item.tag}
                </p>
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
              <h2 className="text-2xl font-black mb-8" style={{ letterSpacing: '-0.02em' }}>
                우리는 단순한 ‘디자이너’가 아니라 ‘데이터 아키텍트’입니다
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {WHY_ABEL.map((w) => (
                  <div key={w.title}>
                    <p className="font-bold mb-2">{w.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                      {w.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 자가진단 인터랙션 데모 */}
        <section className="mb-16">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 text-center">
            INTERACTIVE DEMO
          </p>
          <h2 className="text-2xl font-black text-gray-900 mb-3 text-center" style={{ letterSpacing: '-0.02em' }}>
            체류 시간과 문의 전환율을 높이는 자가진단 인터랙션
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8 text-center max-w-xl mx-auto">
            글과 이미지만 나열된 페이지는 이탈이 빠릅니다. 환자가 직접 선택하며 참여하는
            인터랙션 장치를 홈페이지에 심어, 자연스럽게 관련 정보와 상담 신청으로 연결합니다.
            아래에서 직접 체험해 보세요.
          </p>
          <SelfDiagnosisDemo />
        </section>

        {/* CTA */}
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
            <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: '#a855f7' }}>
              FREE DIAGNOSIS
            </p>
            <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ letterSpacing: '-0.02em' }}>
              원장님의 현재 홈페이지, 과연 AI가 읽을 수 있을까요?
              <br className="hidden md:block" />
              5분 만에 진단해 드립니다.
            </h2>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.82)' }}>
              지금 바로 아벨의 정밀 진단을 신청하고, 우리 병원 사이트의 검색 수집 방해 요인과
              AI 인용 누락 문제를 전수 점검받으세요.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full text-white font-bold transition-all hover:opacity-90 hover:scale-[1.02] shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.45)]"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
            >
              지금 무료 정밀 진단 신청하고 예약 동선 개선하기 ↗
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
