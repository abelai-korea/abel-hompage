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
    title: '통이미지 기반 제작의 맹점',
    desc: '많은 병원 사이트가 화려한 상세 정보를 통이미지 하나로 배치합니다. 구글과 AI 크롤러에게 이 이미지는 무의미한 파일일 뿐이며, 원장님의 독보적인 의학적 전문성이 검색 필터에서 완전히 소외되는 주범입니다.',
  },
  {
    title: '크롤링 환경의 병목',
    desc: '홈페이지 내 링크 구조와 메뉴(GNB)가 무질서하게 꼬여 있으면, 검색 로봇이 읽다가 길을 잃고 중도 이탈해 버립니다. 정보 수집이 차단된 페이지는 색인(Indexing) 자체가 되지 않아 세상에 존재하지 않는 페이지가 됩니다.',
  },
  {
    title: '메시지와 질문의 연결 유실',
    desc: '환자들은 구글에 "울세라 부작용", "임플란트 뼈이식 통증 시기"처럼 구체적인 질문(롱테일 키워드)을 던집니다. 하지만 홈페이지가 교과서적인 정보만 일방적으로 늘어놓는다면 AI는 우리 병원을 답변의 출처로 인용할 수 없습니다.',
  },
];

const SOLUTIONS = [
  {
    num: '1',
    title: '크롤러 친화적 정보구조(IA) 설계',
    desc: '홈페이지의 전체 메뉴(GNB)와 깊이(Depth)를 밀도 높은 피라미드 계층 구조로 배치합니다. 크롤러 로봇이 가장 원활하게 데이터를 가져갈 수 있도록 내부 링크 구조를 설계해 수집 속도와 크롤 버젯 효율을 극대화합니다.',
  },
  {
    num: '2',
    title: '질문형 콘텐츠 아키텍처 구축',
    desc: '환자가 실제로 겪는 통증과 고민, 즉 롱테일 검색 의도를 정확하게 매핑합니다. 환자가 질문하고 AI가 답변하는 구조에 맞춰 "질문–답변–근거"의 의미론적(Semantic) 질문형 칼럼 구조를 기본 탑재해 AI 답변 인용 확률을 높입니다.',
  },
  {
    num: '3',
    title: 'E-E-A-T 신뢰 신호 시스템 배치',
    desc: '구글이 의학 정보의 전문성을 평가할 때 요구하는 E-E-A-T(경험·전문성·권위성·신뢰성) 규격을 홈페이지 뼈대에 이식합니다. 의사의 임상 경험, 사실과 근거, 실제 치료 사례를 검색 엔진이 인식할 수 있는 스키마 마크업(Schema Markup)으로 변환해 삽입합니다.',
  },
  {
    num: '4',
    title: '고속 수집 및 최적화 코딩',
    desc: '무거운 플러그인과 비효율적 코딩을 배제하고 가볍고 빠른 웹 표준으로 구축합니다. 새 콘텐츠 발행 즉시 색인 요청이 이루어지는 동적 사이트맵(XML)과 고속 수집 피드를 기본 장착해 인덱싱 속도를 극대화합니다.',
  },
];

const WHY_ABEL = [
  {
    title: '감이 아닌 철저한 데이터 기반 기획',
    desc: '무작위 템플릿 복제가 아닌, 개원 지역과 진료과별 실제 오가닉 검색량과 환자 니즈 분석을 선행한 뒤에야 정보구조(IA)를 그리기 시작합니다.',
  },
  {
    title: '의심을 제거하는 콘텐츠 소비 퍼널',
    desc: '환자는 단 한 번의 광고 노출만으로 내원하지 않습니다. 메인 유입부터 세부 증상 정보, 최종 결정 키워드까지 이어지는 내부 연결 동선을 정밀 설계해 환자가 스스로 설득되는 신뢰 퍼널을 형성합니다.',
  },
  {
    title: '문서로 제공되는 우리 병원만의 설계 자산',
    desc: '제작 후 방치되는 일반 홈페이지와 달리, 원장님이 직접 칼럼을 쓰거나 마케팅을 확장할 때 가이드라인이 될 [전용 콘텐츠 기획서 및 데이터 가이드]를 영구 자산으로 제공합니다.',
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
              ChatGPT와 Gemini가 우리 병원을{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #c4b5fd 0%, #ffffff 100%)' }}
              >
                &lsquo;가장 먼저 추천하는 정답&rsquo;
              </span>
              으로 인용하도록.
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
              아벨은 눈에 보이는 디자인 너머, AI 엔진이 신뢰하는 병원 데이터 구조를 설계합니다.
            </p>
            <p className="text-sm leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.58)' }}>
              환자는 의심이 해소될 때까지 평균 3~5개의 콘텐츠를 소비한 뒤에야 예약합니다.
              구글 오가닉 트래픽부터 AI 인용 데이터까지, 환자의 여정 전체를 설계하는
              아벨의 고밀도 홈페이지 제작 솔루션입니다.
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
            수천만 원을 들여 예쁘게 만든 홈페이지,
            <br className="hidden md:block" />
            왜 AI는 한 줄도 인용하지 않을까요?
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            검색 로봇과 AI 답변 엔진은 디자인을 보지 못합니다. 텍스트를 읽고 분류(Indexing)할 수 있는
            구조가 없다면, 아무리 훌륭한 치료 사례와 메시지도 검색 엔진에는 &lsquo;그림의 떡&rsquo;일 뿐입니다.
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
            AI가 가장 먼저 찾아와 신뢰할 수밖에 없는<br className="hidden md:block" />
            병원 홈페이지의 4가지 설계 원칙
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {SOLUTIONS.map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-2xl border-t-4 border-violet-600 p-7"
                style={{ boxShadow: CARD_SHADOW }}
              >
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
              <h2 className="text-2xl font-black mb-8" style={{ letterSpacing: '-0.02em' }}>
                디자인이 아니라, 데이터 설계가 홈페이지의 출발점입니다
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
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
              우리 병원 홈페이지, 지금 AI와 구글 앞에서 어떤 상태일까요?
            </h2>
            <p className="mb-6" style={{ color: 'rgba(255,255,255,0.82)' }}>
              약 100여 개 테크니컬 &amp; 콘텐츠 항목을 정밀 진단합니다. 크롤링 수집 에러, 색인 누락 페이지,
              E-E-A-T 점검 및 경쟁 병원의 AI 노출 상태를 전수 조사하여 리포트로 제공해 드립니다.
            </p>
            <p className="text-sm mb-8 pl-4 border-l-2" style={{ color: 'rgba(255,255,255,0.65)', borderColor: 'rgba(168,85,247,0.5)' }}>
              현재 운영 중인 홈페이지 주소를 남겨주시면, 아벨의 기술 이사가 직접 크롤러 수집 환경과
              데이터 누락 상태를 정밀 분석하여 1:1 맞춤형 처방 리포트를 보내드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full text-white font-bold transition-all hover:opacity-90 hover:scale-[1.02] shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.45)]"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
            >
              무료 정밀 진단 및 상담 신청하기 ↗
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
