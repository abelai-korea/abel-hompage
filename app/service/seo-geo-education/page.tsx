import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceStepper from '@/components/ServiceStepper';

export const metadata: Metadata = {
  title: 'SEO·GEO 1:1 교육 | ABEL 서비스 안내',
  description:
    '원장님과 실무진이 직접 홈페이지 SEO·GEO 통제권을 쥘 수 있도록 돕는 아벨의 SEO·GEO 1:1 교육 서비스를 소개합니다.',
  alternates: { canonical: 'https://abel-ai.com/service/seo-geo-education' },
};

const PAIN_POINTS = [
  {
    title: '대행사 의존, 계약이 끝나면 남는 노하우가 없다',
    desc: '외부 대행사에만 전적으로 의존하다 보니 매달 비싼 비용을 지불하지만, 계약이 만료되는 순간 내부에 축적되는 운영 노하우는 단 하나도 남지 않아 답답합니다.',
  },
  {
    title: '"기술적으로 안 된다"는 핑계에 질질 끌려다니는 답답함',
    desc: '대행사나 홈페이지 관리 업체에게 "구글에 노출되게 해달라", "코드를 최적화해달라"고 요청하면 기술적으로 안 된다는 핑계와 변명만 대며 질질 끌려다닙니다.',
  },
  {
    title: '남의 나라 이론 강의, 우리 병원엔 와닿지 않는 교육',
    desc: '큰돈을 내고 SEO·GEO 교육을 들어보아도 뻔한 남의 나라 대형 커머스 성공 이론만 떠들 뿐, 당장 내일부터 우리 병원 홈페이지에 무엇을 고치고 적용해야 하는지 실무에 와닿지 않습니다.',
  },
];

const SOLUTIONS = [
  {
    num: '01',
    tag: 'LIVE DATA WORKSHOP',
    title: '우리 병원의 라이브 실적 및 환자 이탈 데이터 실시간 분석',
    desc: '다른 병원의 허무맹랑한 성공 이론 강의가 아닙니다. 교육 의뢰 병원의 실제 구글 노출 통계 화면과 잠재 환자들이 홈페이지 예약 문의 페이지 직전에 탈출하고 도망치는 행동 흔적 데이터를 실시간으로 빔프로젝터에 띄우고 보면서, 어디가 막혀 있고 어디서 전환이 새고 있는지 직접 짚으며 눈앞에서 분석합니다.',
    demo: 'liveData' as const,
  },
  {
    num: '02',
    tag: '3~5 STEP TRUST COLUMN',
    title: "환자의 의심을 깨부수는 '3~5단계 의학 칼럼' 정석 작성법",
    desc: '병원은 환자 입장에서 고관여 업종입니다. 잠재 환자들은 단순 광고 한 번으로 가볍게 예약하지 않으며, 최소 3~5개 이상의 연관 의학 글을 꼼꼼하게 읽으며 의심을 해소합니다. 환자의 정보 소비 동선을 이해하고, 스스로 깊은 신뢰를 쌓아 자발적인 예약으로 이어지게 만드는 8:2 법칙의 오가닉 칼럼 글쓰기 기획법을 완벽히 이식합니다.',
    demo: 'columnFunnel' as const,
  },
  {
    num: '03',
    tag: 'TECHNICAL LITERACY CHECKLIST',
    title: '검색 엔진 차단 장벽과 개발 핑계를 걸러내는 기술적 지식 장착',
    desc: '홈페이지 개발 업체나 마케터가 귀찮아서 "시스템상 불가하다"고 핑계 대는 원인을 직접 읽어내고 잡아낼 수 있는 최소한의 정석 기술 상식을 장착합니다. 검색 노출을 위해 우리 홈페이지가 로봇 수집을 강제로 가로막고 있는 환경은 아닌지, 수집 장애가 일어나는 위치를 실무자가 직접 볼 수 있는 핵심 체크리스트 해독력을 키워 드립니다.',
    demo: 'techChecklist' as const,
  },
  {
    num: '04',
    tag: 'TECHNICAL REQUEST SHEET',
    title: '개발사와 막힘없이 소통을 리드하는 [테크니컬 수정 요청서] 작성 실습',
    desc: '개발 업체에 단순히 "검색 노출 잘 되게 해주세요"라고 추상적으로 요청하면 절대 움직이지 않습니다. 실무자가 스스로 오류를 정확하게 파악하고, 개발자가 변명할 수 없도록 정량적인 조치와 수정 우선순위를 조목조목 담아 즉각 수술하게 만드는 [테크니컬 수정 지시서(요청서)]를 실제로 직접 작성하고 전송해보는 실전형 실습 과정을 거칩니다.',
    demo: 'requestSheet' as const,
  },
];

const CARD_SHADOW = '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)';

function DemoLiveData() {
  const steps = [
    { label: '홈페이지 방문', pct: 100 },
    { label: '콘텐츠·칼럼 열람', pct: 61 },
    { label: '예약 문의 페이지 진입', pct: 22 },
    { label: '예약 완료', pct: 8 },
  ];
  return (
    <div className="rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center gap-2.5" style={{ background: '#0a0a0f' }}>
      <div className="text-xs text-white/40 mb-1">// Live Drop-off Funnel Analysis</div>
      {steps.map((s, i) => (
        <div key={s.label} className="space-y-1">
          <div className="flex items-center justify-between text-xs text-white/60">
            <span>{s.label}</span>
            <span className={i === 2 ? 'text-red-400 font-bold' : 'text-white/50'}>{s.pct}%</span>
          </div>
          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${i === 2 ? 'bg-red-500/70' : 'bg-violet-500/70'}`}
              style={{ width: `${s.pct}%` }}
            />
          </div>
        </div>
      ))}
      <div className="text-xs text-red-400/90 mt-1">최대 이탈 구간 -14%p · 예약 문의 페이지 직전</div>
    </div>
  );
}

function DemoColumnFunnel() {
  const stepsRow1 = ['STEP1 증상 자가진단', 'STEP2 원인 이해', 'STEP3 치료법 비교'];
  const stepsRow2 = ['STEP4 병원 선택 기준', 'STEP5 예약 결정'];
  return (
    <div className="rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center gap-3" style={{ background: '#0a0a0f' }}>
      <div className="text-xs text-white/40">// 3~5 Step Trust-Building Path</div>
      <div className="flex flex-wrap gap-2">
        {stepsRow1.map((s) => (
          <span key={s} className="text-xs px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60">
            {s}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {stepsRow2.map((s) => (
          <span key={s} className="text-xs px-2.5 py-1.5 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 font-semibold">
            {s}
          </span>
        ))}
      </div>
      <div className="text-xs text-white/40 pt-1">평균 3.8개 칼럼 열람 후 예약 문의로 전환</div>
    </div>
  );
}

function DemoTechChecklist() {
  const items = [
    { label: 'robots.txt 크롤링 차단 여부', status: '정상', ok: true },
    { label: 'sitemap.xml 구글 제출 여부', status: '누락', ok: false },
    { label: '메타 디스크립션 중복 검사', status: '12건 발견', ok: false },
  ];
  return (
    <div className="rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center gap-2.5" style={{ background: '#0a0a0f' }}>
      <div className="text-xs text-white/40 mb-1">// Technical Literacy Checklist</div>
      {items.map((it) => (
        <div
          key={it.label}
          className={`flex items-center justify-between text-sm py-2.5 px-3 rounded-lg border ${
            it.ok ? 'bg-white/5 border-white/10 text-white/60' : 'bg-white/5 border-red-500/20 text-white/70'
          }`}
        >
          <span>{it.label}</span>
          <span className={`text-xs font-bold flex-shrink-0 ml-2 ${it.ok ? 'text-emerald-400' : 'text-red-400'}`}>
            {it.status} {it.ok ? '✓' : '✕'}
          </span>
        </div>
      ))}
    </div>
  );
}

function DemoRequestSheet() {
  const rows = [
    { label: '우선순위 1 · sitemap 제출 오류 수정', status: '발송 완료' },
    { label: '우선순위 2 · 크롤링 차단 해제', status: '발송 완료' },
    { label: '우선순위 3 · 예약 페이지 로딩속도 개선', status: '검토 중' },
  ];
  return (
    <div className="rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center gap-2.5" style={{ background: '#0a0a0f' }}>
      <div className="text-xs text-white/40 mb-1">// Technical Revision Request Sheet</div>
      {rows.map((r) => (
        <div key={r.label} className="flex items-center justify-between text-sm py-2.5 px-3 bg-white/5 border border-white/10 rounded-lg text-white/70">
          <span>{r.label}</span>
          <span className="text-xs font-bold text-violet-300 flex-shrink-0 ml-2">{r.status}</span>
        </div>
      ))}
      <div className="text-xs text-white/40 pt-1">작성자: 원장님·실무자 직접 작성</div>
    </div>
  );
}

const DEMO_COMPONENTS = {
  liveData: DemoLiveData,
  columnFunnel: DemoColumnFunnel,
  techChecklist: DemoTechChecklist,
  requestSheet: DemoRequestSheet,
};

export default function ServiceEducationPage() {
  return (
    <div className="pretendard min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: '홈', url: 'https://abel-ai.com/' },
          { name: '서비스 안내', url: 'https://abel-ai.com/service' },
          { name: 'SEO·GEO 1:1 교육', url: 'https://abel-ai.com/service/seo-geo-education' },
        ]}
      />
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-6" style={{ background: '#0a0a0f' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(680px 460px at 82% -10%, rgba(124,58,237,0.32) 0%, transparent 62%), ' +
              'radial-gradient(560px 420px at -8% 108%, rgba(88,28,135,0.4) 0%, transparent 58%), #0a0a0f',
          }}
        />
        <div className="hero-depth-grid" />
        <div className="hero-grain" />

        <div className="max-w-7xl mx-auto relative z-10 mb-6">
          <Breadcrumb
            tone="dark"
            items={[
              { name: '홈', url: 'https://abel-ai.com/' },
              { name: '서비스 안내', url: 'https://abel-ai.com/service' },
              { name: 'SEO·GEO 1:1 교육' },
            ]}
          />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10 w-full">
          <div className="stagger space-y-6">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-400/20 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-semibold text-violet-300 tracking-wider uppercase">
                SERVICE 04 · SEO·GEO 1:1 교육
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.25]">
              SEO·GEO 1:1 교육으로,{' '}
              <br className="hidden md:block" />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #e9d5ff 100%)' }}
              >
                병원에 남는 노하우
              </span>
              를 만드십시오.
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
              계약이 끝나도 사라지지 않는 노하우를 원장님과 실무진이 직접 쌓아갈 수 있도록,
              아벨은 우리 병원 데이터를 기반으로 한 실전형 SEO·GEO 교육을 제공합니다.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-lg text-white font-bold text-center transition-all hover:scale-[1.02] shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.45)]"
                style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
              >
                우리 병원 정밀 진단 신청하기
              </Link>
              <a
                href="#problem"
                className="w-full sm:w-auto px-8 py-4 rounded-lg text-center font-semibold border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all"
              >
                진짜 통증부터 보기 ↓
              </a>
            </div>
          </div>

          {/* 우측 내부 역량 성장 리포트 목업 */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-violet-500/10 rounded-full blur-3xl -top-10 -right-10" />
            <div className="w-full max-w-md bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-xl relative">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-xs text-white/35 pl-2">Internal Capability Growth Report</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: '대행사 의존도', value: '100% → 35%' },
                  { label: '자체 칼럼 발행 역량', value: '0건 → 월 8건' },
                  { label: '테크니컬 요청서 작성 능력', value: '미보유 → 보유' },
                  { label: '원장님 의사결정 속도', value: '+40%' },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between text-sm bg-black/20 border border-white/10 rounded-lg px-3 py-2.5"
                  >
                    <span className="text-white/70">{row.label}</span>
                    <span className="text-emerald-400 font-bold">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/35">
                예시 성장 리포트 화면 · 교육 수료 후 3개월 기준
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PAIN POINT ───────────────────────────────────────────── */}
      <section id="problem" className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-violet-600 tracking-widest uppercase">THE REAL PAIN POINTS</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              혹시, 홈페이지 운영 대행에{' '}
              <br className="hidden md:block" />
              이런 답답함을 느끼고 계신가요?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PAIN_POINTS.map((p, i) => (
              <div
                key={p.title}
                className="group bg-white rounded-2xl border border-gray-100 p-8 hover:border-violet-300 transition-all duration-300"
                style={{ boxShadow: CARD_SHADOW }}
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-500 font-bold text-lg border border-red-100">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-base leading-relaxed text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 relative bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-violet-600 tracking-widest uppercase">ABEL&apos;S EDUCATION FRAMEWORK</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              아벨은 4가지 핵심 솔루션으로{' '}
              <br className="hidden md:block" />
              병원의 SEO·GEO 통제권을 원장님께 되돌려 드립니다.
            </h2>
          </div>

          <div className="space-y-8">
            {SOLUTIONS.map((s, i) => {
              const Demo = DEMO_COMPONENTS[s.demo];
              const reversed = i % 2 === 1;
              return (
                <div
                  key={s.num}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white border border-gray-100 p-8 md:p-10 rounded-2xl hover:border-violet-200 transition-all duration-300"
                  style={{ boxShadow: CARD_SHADOW }}
                >
                  <div className={`space-y-4 ${reversed ? 'lg:order-2' : ''}`}>
                    <p className="text-xs font-bold text-violet-600 tracking-wider">
                      SOLUTION {s.num}. {s.tag}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900">{s.title}</h3>
                    <p className="text-base leading-relaxed text-gray-500">{s.desc}</p>
                  </div>
                  <div className={`h-52 ${reversed ? 'lg:order-1' : ''}`}>
                    <Demo />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY ABEL: 대조 비교 카드 ─────────────────────────────── */}
      <section className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-violet-600 tracking-widest uppercase">WHY ABEL FIRST</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              이론 암기식 교육과 아벨의 실전형 교육은 무엇이 다를까요?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            <div
              className="rounded-2xl border border-gray-100 p-8 md:p-10 flex flex-col"
              style={{ boxShadow: CARD_SHADOW }}
            >
              <h3 className="text-lg font-bold text-gray-400 mb-6">시중의 일반 마케팅 이론 교육</h3>
              <ul className="space-y-4 text-sm text-gray-500 leading-relaxed flex-1">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold mt-0.5">✕</span>
                  <span>우리 병원에 당장 대입할 수 없는 해외·타 업종 성공 사례 위주 강의</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold mt-0.5">✕</span>
                  <span>복잡한 기술 용어 중심 강의로, 수료 후에도 머리만 아픈 상태로 회귀</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold mt-0.5">✕</span>
                  <span>실무 지침 양식 없이 개념만 이해해, 홈페이지에 단 1%도 수정 적용 못 함</span>
                </li>
              </ul>
              <p className="text-xs text-gray-400 pt-6 mt-6 border-t border-gray-100">
                결과: 수료 후 실무 적용 불가로 기존 대행사 의존 방식 답습
              </p>
            </div>

            <div
              className="rounded-2xl border-2 border-violet-200 bg-violet-50/40 p-8 md:p-10 flex flex-col"
              style={{ boxShadow: CARD_SHADOW }}
            >
              <h3 className="text-lg font-bold text-violet-600 mb-6">아벨(ABEL) 1:1 라이브 밀착 워크샵</h3>
              <ul className="space-y-4 text-sm text-gray-700 leading-relaxed flex-1">
                <li className="flex items-start gap-2.5">
                  <span className="text-violet-600 font-bold mt-0.5">✓</span>
                  <span>
                    <strong className="text-gray-900">우리 병원의 실제 실시간 유입·이탈 데이터</strong>를
                    화면에 띄우고 직접 원인을 짚으며 분석
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-violet-600 font-bold mt-0.5">✓</span>
                  <span>
                    어려운 기술 용어를 <strong className="text-gray-900">원장님·실무진의 눈높이 언어</strong>
                    (신환, 예약 이탈, 콘텐츠 자산화)로 통역해 설명
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-violet-600 font-bold mt-0.5">✓</span>
                  <span>
                    수료 당일 개발사에 바로 보낼 수 있는{' '}
                    <strong className="text-gray-900">[테크니컬 수정 요청서]</strong>를 실제로 작성 완료
                  </span>
                </li>
              </ul>
              <p className="text-xs font-semibold text-violet-600 pt-6 mt-6 border-t border-violet-100">
                결과: 내부 역량 100% 내재화로 대행사·제작사 의존에서 탈피
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA (다크 포인트 박스) ───────────────────────────────── */}
      <section className="py-24 px-6 bg-gray-50">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          style={{ background: '#0a0a0f' }}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">
              수동적인 대행사 의존에서 완전히 탈피하여,{' '}
              <br className="hidden md:block" />
              내부 인력이 홈페이지 트래픽 성장을 전적으로 리드하고 통제할 수 있는{' '}
              <br className="hidden md:block" />
              강력한 SEO·GEO 내재화 솔루션을 구축하십시오.
            </h2>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block px-10 py-5 rounded-xl text-white font-black transition-all hover:scale-[1.02] shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.45)]"
                style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
              >
                우리 병원 정밀 진단 신청하기 →
              </Link>
            </div>
            <div className="bg-white/[0.05] border border-white/10 p-6 rounded-2xl max-w-xl mx-auto text-base text-left space-y-2">
              <div className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-violet-300">🛡️</span> 권역별 쿼터제 운영 정책 안내
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                교육 과정 중 노출되는 병원의 실제 데이터를 다루는 특성상, 아벨은 각 구(시)별
                진료과당 단 1개의 병원하고만 교육 파트너십을 맺습니다. 경쟁 병원이 먼저 선점하기
                전에 내부 SEO·GEO 실전 역량을 갖춰 보십시오.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceStepper current={3} />
    </div>
  );
}
