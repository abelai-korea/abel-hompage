import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEO·GEO 운영 대행 | ABEL 서비스 안내',
  description:
    '매달 사라지는 소모성 광고비 대신, 영구히 축적되는 병원의 디지털 권위 자산을 만듭니다. 아벨의 SEO·GEO 운영 대행(콘텐츠 관리) 서비스를 소개합니다.',
  alternates: { canonical: 'https://abel-ai.com/service/seo-geo-management' },
};

const PAIN_POINTS = [
  {
    title: '비싸게 만든 홈페이지, 방치된 채 쌓이는 사이버 먼지',
    desc: '큰맘 먹고 비싸게 홈페이지를 제작했지만, 아무도 정기적으로 글을 올리거나 모니터링하지 않아 사이버 먼지가 쌓인 채 그대로 방치되고 있습니다.',
  },
  {
    title: '무엇을 어떻게 써야 구글에 잡히는지 모르는 막막함',
    desc: '칼럼이나 글을 써야 노출과 신환 유입에 도움이 된다는 건 직관적으로 알겠는데, 도대체 어떤 키워드로 무슨 전문 내용을 어떤 기준에 맞게 써야 구글에 잡히는지 기준을 모르겠습니다.',
  },
  {
    title: '전담 인력 부재, 대행사의 글자 수 채우기 원고',
    desc: '내부에 전문 마케터나 에디터가 없어서 꾸준한 운영이 불가능하며, 일반 대행사들은 무의미하게 아무도 검색하지 않는 글자 수만 채우는 쓸모없는 복제형 원고만 찍어내어 돈만 낭비되고 있습니다.',
  },
];

const SOLUTIONS = [
  {
    num: '01',
    tag: '8:2 SEARCH FUNNEL COLUMN',
    title: "'8:2 검색 퍼널' 키워드 기반 고화질 칼럼 기획·발행",
    desc: '단순히 병원 이름이나 좁은 치료명만 올리지 않습니다. 실제 환자들이 병원에 내원하기 직전, 절박하게 밤새 검색창에 두드리는 다양한 자가진단 및 증상 질문(80%)에 원장님의 명쾌한 임상 전문성을 담은 칼럼을 매핑합니다. 그리고 나머지(20%)의 최종 결정 키워드와 정밀 결합하여 매주 환자가 제 발로 찾아오는 길목을 선점합니다.',
    demo: 'columnMix' as const,
  },
  {
    num: '02',
    tag: 'DUPLICATE CONTENT FILTER',
    title: '구글 중복 콘텐츠 검열 필터 회피 및 에디팅',
    desc: '기존 네이버 블로그에 올린 글이나 타사 사이트 원고를 홈페이지에 단순히 그대로 복사·붙여넣기 하면, 구글 검색 로봇은 이를 ‘스팸 및 무단 복사 글’로 낙인찍어 검색 창고에서 완전히 빠뜨려 버립니다. 아벨은 원장님의 임상 증례 데이터를 바탕으로 독창성 70% 이상의 고유성을 확보하는 저널 스타일로 가치 있는 전문 리라이팅 및 에디팅을 실행합니다.',
    demo: 'duplicateFilter' as const,
  },
  {
    num: '03',
    tag: 'IN-ARTICLE SELF-CHECK TOOL',
    title: '환자 이탈을 원천 차단하는 본문 내 [자가진단 기능] 이식',
    desc: '환자들이 텍스트만 가득한 지루한 설명 글을 끝까지 읽지 않고 이탈하는 문제를 완벽히 타개합니다. 치료 칼럼 하단이나 본문 내에 환자가 손쉽게 터치하여 자신의 통증이나 어지럼증 수준을 가볍게 간이 체크할 수 있는 반응형 ‘자가진단 기능’을 탑재합니다. 이는 환자의 참여도를 높여 사이트 체류 시간을 획기적으로 상승시키며 최종 문의(CVR)로 부드럽게 안착시킵니다.',
    demo: 'selfCheck' as const,
  },
  {
    num: '04',
    tag: 'PURE ORGANIC ATTRIBUTION',
    title: '우리 병원을 몰랐던 미래 고객의 순수 오가닉 유입 추적',
    desc: '이미 우리 병원을 잘 알고 검색해서 찾아오는 브랜드 유입 데이터는 성과 분석에서 완전히 차단합니다. 우리 병원은 전혀 몰랐지만, 특정 통증과 정보를 검색하다가 아벨이 운영하는 오가닉 자산 칼럼에 이끌려 들어온 ‘미래 신환 유입 실적’과 ‘예약 문의 전환율’을 통계 데이터 분석 시스템으로 매월 투명하고 확실하게 증명해 드립니다.',
    demo: 'attribution' as const,
  },
];

const WHY_ABEL = [
  {
    title: "매달 버려지는 소모성 광고가 아닌, 영구히 축적되는 병원의 '자산형 콘텐츠'",
    desc: '네이버 키워드 광고 등은 돈을 내지 않는 순간 즉시 증발하는 부채성 광고입니다. 하지만 아벨이 대행하여 구축하는 오가닉 칼럼들은 한 번 업로드되면 구글과 AI 답변 엔진에 영구히 꽂혀 쌓이는 병원의 독보적인 디지털 권위이자 자산이 됩니다.',
  },
  {
    title: '원장님이 1분 만에 이해할 수 있는 실질 성과 중심의 브리핑 리포트',
    desc: '전문가들만 아는 테크니컬 약어나 은어 보고서로 속이지 않습니다. 매달 실제 일어난 순수 오가닉 잠재 고객의 유입 증가량과 최종 예약 문의 건수의 증가 추이 등 가장 핵심적인 비즈니스 성장 지표 위주로 정기 브리핑을 제공합니다.',
  },
];

const CARD_SHADOW = '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)';

function DemoColumnMix() {
  return (
    <div className="rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center gap-4" style={{ background: '#0a0a0f' }}>
      <div className="text-xs text-white/40">// This Week&apos;s Column Queue</div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm py-2.5 px-3 bg-white/5 border border-white/10 rounded-lg text-white/70">
          <span>허리디스크 초기증상 자가진단</span>
          <span className="text-xs font-bold text-violet-300 flex-shrink-0 ml-2">탐색 80%</span>
        </div>
        <div className="flex items-center justify-between text-sm py-2.5 px-3 bg-white/5 border border-white/10 rounded-lg text-white/70">
          <span>척추 전문병원 비교 체크리스트</span>
          <span className="text-xs font-bold text-white/40 flex-shrink-0 ml-2">결정 20%</span>
        </div>
      </div>
      <div>
        <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden flex">
          <div className="h-full bg-violet-500/70" style={{ width: '80%' }} />
          <div className="h-full bg-white/20" style={{ width: '20%' }} />
        </div>
        <div className="text-xs text-white/40 mt-1.5">이번 달 발행 비율 · 탐색 80% : 결정 20%</div>
      </div>
    </div>
  );
}

function DemoDuplicateFilter() {
  return (
    <div className="rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center gap-3" style={{ background: '#0a0a0f' }}>
      <div className="text-xs text-white/40">// Google Duplicate Content Filter</div>
      <div className="bg-white/5 border border-red-500/20 rounded-lg p-3 text-sm text-white/60">
        <span className="text-red-400 font-bold">[네이버 원본 복사] </span>
        구글 판정: <span className="text-red-400">스팸 및 중복 콘텐츠 ✕</span>
      </div>
      <div className="bg-white/5 border border-violet-400/30 rounded-lg p-3 text-sm text-white/80">
        <span className="text-violet-300 font-bold">[아벨 전문 리라이팅] </span>
        고유성 72% 달성 → <span className="text-violet-300">색인 승인 ✓</span>
      </div>
    </div>
  );
}

function DemoSelfCheck() {
  return (
    <div className="rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center gap-3" style={{ background: '#0a0a0f' }}>
      <div className="text-xs text-white/40">// In-Article Self-Diagnosis Widget</div>
      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
        <p className="text-sm text-white/70 mb-2.5">Q. 지금 느끼는 어지럼증은?</p>
        <div className="flex gap-2 flex-wrap">
          {['가벼운 어지럼', '회전성 어지럼', '균형장애'].map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
          <p className="text-lg font-black text-violet-300">+3분 42초</p>
          <p className="text-xs text-white/40">평균 체류시간 증가</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
          <p className="text-lg font-black text-emerald-400">-18%</p>
          <p className="text-xs text-white/40">이탈률 감소</p>
        </div>
      </div>
    </div>
  );
}

function DemoAttribution() {
  return (
    <div className="rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center gap-2.5" style={{ background: '#0a0a0f' }}>
      <div className="text-xs text-white/40 mb-1">// Monthly Attribution Report</div>
      <div className="flex items-center justify-between text-sm py-2.5 px-3 bg-white/5 border border-white/10 rounded-lg text-white/35">
        <span>브랜드 검색 유입 (병원명 인지) · 집계 제외</span>
        <span className="flex-shrink-0 ml-2">240명</span>
      </div>
      <div className="flex items-center justify-between text-sm py-2.5 px-3 bg-violet-500/15 border border-violet-400/30 rounded-lg text-violet-300 font-semibold">
        <span>미래 신환 순수 오가닉 유입 ✓</span>
        <span className="flex-shrink-0 ml-2">186명 (+38%)</span>
      </div>
    </div>
  );
}

const DEMO_COMPONENTS = {
  columnMix: DemoColumnMix,
  duplicateFilter: DemoDuplicateFilter,
  selfCheck: DemoSelfCheck,
  attribution: DemoAttribution,
};

export default function ServiceOperationPage() {
  return (
    <div className="pretendard min-h-screen bg-white">
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10 w-full">
          <div className="stagger space-y-6">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-400/20 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-semibold text-violet-300 tracking-wider uppercase">
                SERVICE 03 · SEO·GEO 운영 대행
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.25]">
              매달 돈만 버리는{' '}
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #e9d5ff 100%)' }}
              >
                블로그 글자 수 채우기
              </span>
              , 이제 당장 멈추셔야 합니다.
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
              홈페이지에 방치된 콘텐츠 대신, 구글과 AI 답변 엔진에 영구히 쌓이는
              병원만의 디지털 권위 자산을 아벨이 직접 기획하고 발행합니다.
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

          {/* 우측 월간 오가닉 자산 리포트 목업 */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-violet-500/10 rounded-full blur-3xl -top-10 -right-10" />
            <div className="w-full max-w-md bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-xl relative">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-xs text-white/35 pl-2">Monthly Organic Asset Report</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: '이번 달 발행 칼럼', value: '12건 (+4)', positive: true },
                  { label: '순수 오가닉 신환 유입', value: '+38%', positive: true },
                  { label: '예약 문의 전환', value: '+21%', positive: true },
                  { label: '브랜드 검색 유입', value: '집계 제외', positive: false },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between text-sm bg-black/20 border border-white/10 rounded-lg px-3 py-2.5"
                  >
                    <span className="text-white/70">{row.label}</span>
                    <span className={row.positive ? 'text-emerald-400 font-bold' : 'text-white/35 font-semibold'}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/35">
                예시 리포트 화면 · 실제 결과 아님 · 브랜드 검색 제외, 미래 고객만 집계
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
              혹시, 병원 콘텐츠 운영에{' '}
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
            <p className="text-xs font-semibold text-violet-600 tracking-widest uppercase">ABEL&apos;S OPERATION FRAMEWORK</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              아벨은 4가지 핵심 솔루션으로{' '}
              <br className="hidden md:block" />
              병원의 디지털 자산을 꾸준히 쌓아 올립니다.
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

      {/* ─── WHY ABEL ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-violet-600 tracking-widest uppercase">WHY ABEL FIRST</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              사라지는 광고가 아니라, 쌓이는 자산을 만듭니다.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {WHY_ABEL.map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border-t-4 border-violet-600 p-8 md:p-10"
                style={{ boxShadow: CARD_SHADOW }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white font-black text-lg"
                  style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">{item.title}</h3>
                <p className="text-base leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
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
              매달 사라지는 소모성 광고비는 줄이고,{' '}
              <br className="hidden md:block" />
              영구적으로 노출되며 환자를 제 발로 끌고 오는{' '}
              <br className="hidden md:block" />
              병원의 강력한 디지털 권위 자산을 축적하십시오.
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
          </div>
        </div>
      </section>
    </div>
  );
}
