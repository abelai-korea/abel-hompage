import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '서비스 안내 | ABEL',
  description:
    'ABEL은 AI 답변 엔진이 병원을 정답으로 인용하도록 구조 구축, 컨설팅, 운영 대행, 실무 교육 4가지 솔루션으로 SEO·GEO를 설계합니다.',
  alternates: { canonical: 'https://abel-ai.com/service' },
};

const PAIN_POINTS = [
  {
    title: '독이 되는 ‘통이미지’ 도배',
    desc: '수백만 원 들인 화려한 홈페이지의 칼럼과 설명이 모두 사진 파일(통이미지)로 도배되어 있습니다. 구글과 AI 답변 로봇은 사진 안의 글씨를 읽지 못해, 텅 빈 페이지로 무시해버립니다.',
  },
  {
    title: '이탈을 막는 ‘동선 설계 부재’',
    desc: '검색으로 들어온 환자가 진짜 겪는 통증에 답을 주는 3~5회 의심 해소 연결 링크가 모두 끊겨 있습니다. 신뢰를 쌓기 전에 답답함을 느끼고 경쟁 병원으로 빠져나갑니다.',
  },
  {
    title: '생색내기용 ‘배너 교체’ 월세',
    desc: '매달 고정 관리비를 내지만 정작 해주는 일은 배너나 팝업 교체가 전부입니다. 노출을 결정하는 코드 구조 개선은 이루어지지 않고, 글자 하나 고칠 때도 추가 기술비를 청구합니다.',
  },
];

const SERVICES = [
  {
    href: '/service/seo-geo-structure',
    step: 'STEP 1 · 웹사이트 뼈대 코딩',
    num: '01',
    title: 'SEO·GEO 구조 구축',
    sub: '홈페이지 제작',
    problems: [
      '화려하지만 검색 로봇에게는 아무 글씨도 안 보이는 ‘통이미지’ 껍데기 홈페이지',
      '질문은 있지만 환자의 신뢰 동선(3~5단계 의심 해소)이 없는 정보 구조',
    ],
    solution:
      'AI 답변 엔진과 글로벌 검색 로봇이 1초 만에 우리 병원의 전문성(E-E-A-T)을 해독할 수 있도록 텍스트 데이터를 철저하게 구조화하여 홈페이지를 새로 짓습니다.',
  },
  {
    href: '/service/seo-geo-consulting',
    step: 'STEP 2 · 막힌 유입 뚫기',
    num: '02',
    title: 'SEO·GEO 최적화 컨설팅',
    sub: '진단 및 처방',
    problems: [
      '기존 홈페이지는 있지만 검색 로봇이 들어오다가 시스템 에러를 만나 탈출하고 있는 상태',
      '환자들이 들어오기는 하는데 예약 신청 직전에 자꾸 이탈하는 이유를 모를 때',
    ],
    solution:
      '검색 로봇의 수집을 가로막는 보이지 않는 기술적 장애물을 전수 조사하여 제거하고, 환자가 예약 버튼을 누르기 직전 느끼는 미세한 불편함과 이탈 원인을 행동 패턴 분석 녹화 시스템으로 추적하여 처방전을 써 드립니다.',
  },
  {
    href: '/service/seo-geo-management',
    step: 'STEP 3 · 환자의 신뢰 독점',
    num: '03',
    title: 'SEO·GEO 운영 대행',
    sub: '콘텐츠 관리',
    problems: [
      '무의미한 글자 수 채우기용 블로그 대행으로 광고 예산만 낭비하는 상황',
      '다른 사이트의 글을 기계처럼 복사해 붙여넣어 구글에서 저품질로 자동 차단당한 경우',
    ],
    solution:
      '환자들이 밤마다 불안함에 검색하는 증상 질문(80%)과 병원 선택 직전의 결정 질문(20%)의 균형을 맞춘 ‘8:2 검색 퍼널’ 기반의 독창적인 전문 칼럼을 주기적으로 발행하고, 페이지 내에 자가진단 툴을 이식해 환자의 체류 시간을 폭발적으로 늘립니다.',
  },
  {
    href: '/service/seo-geo-education',
    step: 'STEP 4 · SEO·GEO 주도권 자립',
    num: '04',
    title: 'SEO·GEO 1:1 교육',
    sub: '내부 역량 강화',
    problems: [
      '홈페이지 제작사에 매번 “개발 구조상 수정이 불가하다”는 핑계를 들으며 끌려다닐 때',
      '남의 병원 이론 위주 교육을 듣고 정작 우리 병원 데이터는 1도 손대지 못하는 답답함',
    ],
    solution:
      '원장님과 내부 실무진이 우리 병원의 구글 검색 노출 데이터를 직접 확인하고, 제작업체에 최적화 수술을 정당하게 지시할 수 있는 [실무용 기술 수정 지시서] 작성 능력을 100% 이식해 드립니다.',
  },
];

const CARD_SHADOW = '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)';

export default function ServicePage() {
  return (
    <div className="pretendard min-h-screen bg-gray-50">
      <BreadcrumbJsonLd
        items={[
          { name: '홈', url: 'https://abel-ai.com/' },
          { name: '서비스 안내', url: 'https://abel-ai.com/service' },
        ]}
      />
      {/* ─── HERO (다크, 입체감 레이어) ─────────────────────────────── */}
      <section
        className="relative pt-40 pb-28 overflow-hidden isolate"
        style={{ background: '#0d0020' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(680px 460px at 82% -10%, rgba(124,58,237,0.42) 0%, transparent 62%), ' +
              'radial-gradient(560px 420px at -8% 108%, rgba(88,28,135,0.5) 0%, transparent 58%), ' +
              '#0d0020',
          }}
        />
        <div className="hero-depth-grid" />
        <div className="hero-grain" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex justify-center lg:justify-start mb-6">
            <Breadcrumb
              tone="dark"
              items={[
                { name: '홈', url: 'https://abel-ai.com/' },
                { name: '서비스 안내' },
              ]}
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="stagger text-center lg:text-left">
            <p
              className="text-xs font-bold tracking-[0.4em] uppercase mb-6"
              style={{ color: 'rgba(196,181,253,0.85)' }}
            >
              ABEL SERVICE
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-[3.1rem] font-black text-white leading-[1.32] mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              환자가 묻고 AI가 추천하는 시대,
              <br className="hidden md:block" />
              아벨은 병원을{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #c4b5fd 0%, #ffffff 100%)' }}
              >
                ‘정답’의 자리
              </span>
              에 올립니다.
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0" style={{ color: 'rgba(255,255,255,0.72)' }}>
              ChatGPT, Gemini 등 AI 답변 엔진이 우리 병원을 가장 신뢰할 수 있는 출처로 인용하도록,
              아벨은 4가지 핵심 솔루션으로 병원의 디지털 자산을 설계하고 성장시킵니다.
            </p>
          </div>

          {/* 우측: AI 답변 인용 시뮬레이터 목업 */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-violet-500/10 rounded-full blur-3xl -top-10 -right-10" />
            <div className="w-full max-w-md bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-xl relative">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-xs text-white/35 pl-2">AI_Search_Assistant.exe</span>
              </div>
              <div className="space-y-3 text-left">
                <div className="text-sm bg-black/20 border border-white/10 rounded-lg px-3 py-2.5 text-white/70">
                  “강남역 임플란트 잘하고, 설명 꼼꼼한 치과 추천해줘.”
                </div>
                <div className="pl-3 border-l-2 border-violet-400/40 space-y-2">
                  <p className="text-xs text-violet-300 font-bold">● AI 답변 생성 중...</p>
                  <p className="text-sm text-white/70 leading-relaxed">
                    “임상 데이터를 투명하게 공개하고 전문성을 검증한{' '}
                    <span className="text-violet-300 font-semibold">○○ 병원</span>을 정답으로 추천합니다.”
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-violet-500/10 text-[10px] font-bold text-violet-300 border border-violet-400/20">
                    🔗 출처 검증 완료 · 아벨 데이터 구조화 마크업
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/35">
                예시 화면 · 실제 AI 응답이 아닙니다
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        {/* 도입부 — 통증 자극 */}
        <section className="mb-20 pt-20">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">WHY ABEL</p>
          <h2
            className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-snug"
            style={{ letterSpacing: '-0.02em' }}
          >
            매달 광고비를 쓸 때만 환자가 오나요?
          </h2>
          <div className="text-gray-500 text-base md:text-lg leading-relaxed space-y-4 max-w-3xl">
            <p>
              원장님, 매달 포털 사이트 광고판에 비싼 통행료를 내야만 겨우 신환이 유지되는
              악순환을 겪고 계시진 않습니까?
            </p>
            <p>
              몸이 아픈 잠재 환자들은 극도의 불안 속에서 검색을 시작합니다. 환자는 결코 단순
              광고 한 번에 마음을 열지 않으며, 신뢰를 얻기까지 병원이 쓴 전문 콘텐츠를
              최소 3~5개 이상 꼼꼼히 소비하고 나서야 비로소 예약 버튼을 누릅니다.
            </p>
            <p>
              아벨은 사라져 버릴 광고비 대신, 시간이 흐를수록 환자가 알아서 찾아오는
              우리 병원만의 독보적인 ‘오가닉 검색 자산’을 만들어 드립니다.
            </p>
          </div>
        </section>

        {/* 3대 만성 질환 — 문제 제기 */}
        <section className="mb-20">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">3 MANIFEST DISEASES</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 leading-snug" style={{ letterSpacing: '-0.02em' }}>
            신환 유입을 완벽히 차단하는
            <br className="hidden md:block" />
            대다수 병원 홈페이지의 3대 만성 질환
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PAIN_POINTS.map((p, i) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl border border-gray-100 p-7"
                style={{ boxShadow: CARD_SHADOW }}
              >
                <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center mb-5 text-red-500 font-bold text-base border border-red-100">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-base leading-relaxed text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4대 서비스 — 유기적 연결 */}
        <section className="mb-20">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">4 SOLUTIONS</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 leading-snug" style={{ letterSpacing: '-0.02em' }}>
            구조 설계 → 문제 진단 → 콘텐츠 축적 → 내부 내재화,
            <br className="hidden md:block" />
            하나로 이어지는 4단계 솔루션
          </h2>
          <div className="space-y-6">
            {SERVICES.map((s) => (
              <div
                key={s.href}
                className="group bg-white rounded-2xl border-t-4 border-violet-600 p-7 md:p-10 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: CARD_SHADOW }}
              >
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl"
                    style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
                  >
                    {s.num}
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center flex-wrap gap-x-3 gap-y-1 mb-1.5">
                      <p className="text-xs font-black text-violet-600 uppercase tracking-wider">{s.step}</p>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{s.sub}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-gray-900">{s.title}</h3>
                  </div>
                </div>
                <div className="mb-5 md:pl-[4.75rem]">
                  <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2">해결하는 문제</p>
                  <ul className="space-y-1.5">
                    {s.problems.map((p) => (
                      <li key={p} className="text-gray-500 text-base leading-relaxed pl-4 relative">
                        <span className="absolute left-0 text-gray-300">·</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6 md:pl-[4.75rem]">
                  <p className="text-xs font-black text-violet-600 uppercase tracking-wider mb-2">아벨의 해결책</p>
                  <p className="text-gray-600 text-base leading-relaxed">{s.solution}</p>
                </div>
                <div className="md:pl-[4.75rem]">
                  <Link
                    href={s.href}
                    className="text-base font-bold text-violet-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    더 알아보기 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

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
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-snug" style={{ letterSpacing: '-0.02em' }}>
              우리 병원 홈페이지는 과연 AI의 정답지가 될 자격이 있을까요?
            </h2>
            <p className="mb-8 text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.82)' }}>
              아벨은 검색 로봇 수집성, 데이터 구조화 수준, 환자 이탈 경로 등 약 100여 개 항목에
              걸친 정밀 진단 시스템을 갖추고 있습니다. 지금 신청하시면 우리 병원 사이트의 숨겨진
              유입 병목 현상과 AI 추천 가능성 진단 결과를 처방해 드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full text-white font-bold transition-all hover:opacity-90 hover:scale-[1.02] shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.45)]"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
            >
              우리 병원 홈페이지 정밀 진단 신청하기 ↗
            </Link>

            <div className="mt-8 bg-white/[0.05] border border-white/10 p-6 rounded-2xl max-w-xl text-base text-left space-y-2">
              <div className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-violet-300">🛡️</span> 권역별 쿼터제 운영 정책 안내
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                원장님의 독점 상권을 보호하기 위해, 아벨은 각 구(시)별 진료과당 단 1개의 병원하고만
                파트너십을 맺습니다. 경쟁 병원이 먼저 정밀 진단을 완료하여 상권을 선점하기 전에
                병원의 디지털 자산을 구축해 보십시오.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
