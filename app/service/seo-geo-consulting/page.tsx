import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceStepper from '@/components/ServiceStepper';

export const metadata: Metadata = {
  title: 'SEO·GEO 최적화 컨설팅 | ABEL 서비스 안내',
  description:
    '지금 병원 홈페이지가 AI에게 어떻게 보이는지 진단하고, 문제점과 개선 로드맵을 처방합니다. 아벨의 SEO·GEO 최적화 컨설팅을 소개합니다.',
  alternates: { canonical: 'https://abel-ai.com/service/seo-geo-consulting' },
};

const PAIN_POINTS = [
  {
    title: '광고를 끄면 사라지는 병원, 이유 모를 AI 무응답',
    desc: '광고비를 안 쓰면 우리 홈페이지에 환자가 들어오지 않고, 구글이나 ChatGPT·Gemini 같은 AI 검색 엔진에 왜 우리 병원이 언급되지 않는지 도무지 이유를 알 수 없습니다.',
  },
  {
    title: '경쟁 병원만 쏙쏙 노출되는 답답함',
    desc: '경쟁 병원들은 AI 추천 답변이나 구글 상단에 정답으로 쏙쏙 노출되는데, 우리는 왜 매번 빠져 있는지 답답합니다.',
  },
  {
    title: '무엇부터 고쳐야 할지 없는 우선순위',
    desc: '홈페이지를 고쳐야 할 것 같긴 한데, 개발사는 “시스템상 문제없다”고 하고 대행사는 “블로그 글만 매달 수십 개 쓰라”는 뻔한 대답만 반복하여 무엇부터 고쳐야 할지 우선순위가 전혀 없습니다.',
  },
];

const SOLUTIONS = [
  {
    num: '01',
    tag: 'TECHNICAL CRAWL DIAGNOSIS',
    title: '구글 검색 로봇 수집 장벽 전수 진단',
    desc: '홈페이지에 아무리 훌륭한 글이 많아도 검색 로봇이 읽지 못하면 소용없습니다. 전문 수집 분석 로봇을 가동하여 웹사이트의 모든 페이지를 긁어보며, 로봇이 수집 도중 오류를 만나 탈출하는 구간이나 자산을 갉아먹는 치명적인 기술적 에러(서버 먹통, 끊긴 링크, 잘못된 이동 설정)를 전수 색출합니다.',
    demo: 'crawl' as const,
  },
  {
    num: '02',
    tag: 'E-E-A-T READABILITY ANALYSIS',
    title: '의료 신뢰도(E-E-A-T)의 해독성 정밀 분석',
    desc: '원장님의 전문의 면허, 수만 건의 임상 이력, 언론 보도 자료 등이 혹시 글씨를 읽을 수 없는 ‘통이미지’ 파일로 업로드되어 있는지 진단합니다. AI와 구글이 우리 병원의 독보적인 신뢰성을 해독 가능한 텍스트 데이터(구조화 신호) 상태로 명확하게 인지하고 있는지 전수 점검합니다.',
    demo: 'eeat' as const,
  },
  {
    num: '03',
    tag: 'SEARCH FUNNEL COVERAGE',
    title: '8:2 검색 퍼널 키워드 노출 기회 진단',
    desc: '우리 병원 이름으로만 유입이 일어나는 것은 진짜 SEO·GEO가 아닙니다. 환자들이 밤늦게 통증과 증상에 대해 절박하게 묻는 ‘탐색 질문’(80%)과, 신뢰를 얻고 예약을 결정하는 ‘최종 질문’(20%)이 홈페이지 내부 구조에 최적의 비율로 잘 매핑되어 있는지 검색 노출 기회를 진단합니다.',
    demo: 'funnelSplit' as const,
  },
  {
    num: '04',
    tag: 'PATIENT BEHAVIOR & CRO',
    title: '환자 이탈 구간 및 예약 행동 패턴 진단',
    desc: '어렵게 들어온 잠재 환자들이 왜 문의를 남기지 않고 그냥 나갈까요? 방문 환자들이 우리 사이트에서 고민하며 움직인 흔적과 스크롤 깊이를 정밀하게 추적하는 행동 패턴 분석 시스템을 통해, 최종 예약을 유도하는 동선의 방해 요소를 제거하고 가장 최적화된 예약 문의 폼(Form)의 구조를 처방합니다.',
    demo: 'dropoff' as const,
  },
];

const WHY_ABEL = [
  {
    title: '감이 아닌, 약 100여 개 항목의 정밀 진단 기준',
    desc: '느낌이나 직관이 아닙니다. 테크니컬 SEO 원칙과 구글 가이드라인에 근거한 정량적 자가진단 항목을 기준으로 우리 병원 사이트의 오가닉 트래픽 성장 및 예약 저해 요소를 꼼꼼히 전수 점검합니다.',
  },
  {
    title: '개발자·마케터가 즉시 수술할 수 있는 실무 [수정 요청서] 처방',
    desc: '“사이트 속도가 느리니 고치라”는 식의 추상적인 훈수 보고서가 아닙니다. 자사 마케터나 홈페이지 관리 개발사에 그대로 메일로 전달하면 군말 없이 바로 작업을 개시할 수 있도록, 정밀한 기술 지침과 구체적인 수정 우선순위가 정량화되어 담긴 [수정 지시서] 형태로 처방전이 발급됩니다.',
  },
];

const CARD_SHADOW = '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)';

function DemoCrawl() {
  return (
    <div className="rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center gap-2" style={{ background: '#0a0a0f' }}>
      <div className="text-xs text-white/40 mb-1">// Crawl Bot Access Log</div>
      <div className="flex items-center justify-between text-sm py-2 px-3 bg-white/5 border border-white/10 rounded-lg text-white/60 font-mono">
        <span>GET /doctor-profile</span>
        <span className="text-red-400 font-bold">500 ✕ 탈출</span>
      </div>
      <div className="flex items-center justify-between text-sm py-2 px-3 bg-white/5 border border-white/10 rounded-lg text-white/60 font-mono">
        <span>GET /reviews/case-12.jpg</span>
        <span className="text-yellow-400 font-bold">200 (이미지만)</span>
      </div>
      <div className="flex items-center justify-between text-sm py-2 px-3 bg-violet-500/15 border border-violet-400/30 rounded-lg text-violet-300 font-mono">
        <span>GET /blog?page=99</span>
        <span className="font-bold">404 ✕</span>
      </div>
    </div>
  );
}

function DemoEEAT() {
  return (
    <div className="rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center gap-3" style={{ background: '#0a0a0f' }}>
      <div className="text-xs text-white/40">// Text Extraction Test</div>
      <div className="bg-white/5 border border-red-500/20 rounded-lg p-3 text-sm text-white/60">
        <span className="text-red-400 font-bold">[이력.jpg] </span>
        파일 업로드 → 로봇 인식 결과: <span className="text-red-400">&ldquo;빈 이미지&rdquo; ✕</span>
      </div>
      <div className="bg-white/5 border border-violet-400/30 rounded-lg p-3 text-sm text-white/80">
        <span className="text-violet-300 font-bold">[구조화 텍스트] </span>
        &ldquo;전문의 15년차, OO학회 정회원&rdquo; → <span className="text-violet-300">인식 완료 ✓</span>
      </div>
    </div>
  );
}

function DemoFunnelSplit() {
  return (
    <div className="rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center gap-4" style={{ background: '#0a0a0f' }}>
      <div className="text-xs text-white/40">// Search Intent Coverage Diagnosis</div>
      <div>
        <div className="flex items-center justify-between text-sm text-white/70 mb-1.5">
          <span>탐색 질문 (증상·통증) · 이상적 80%</span>
        </div>
        <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-violet-500/60 rounded-full" style={{ width: '32%' }} />
        </div>
        <div className="text-xs text-red-400 mt-1">현재 커버리지 32% · 부족 ✕</div>
      </div>
      <div>
        <div className="flex items-center justify-between text-sm text-white/70 mb-1.5">
          <span>결정 질문 (병원 선택) · 이상적 20%</span>
        </div>
        <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-violet-400 rounded-full" style={{ width: '18%' }} />
        </div>
        <div className="text-xs text-white/40 mt-1">현재 커버리지 18% · 양호</div>
      </div>
    </div>
  );
}

function DemoDropoff() {
  return (
    <div className="rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center" style={{ background: '#0a0a0f' }}>
      <div className="text-xs text-white/40 mb-3">// Patient Scroll & Drop-off Tracking</div>
      <div className="flex items-center justify-between text-sm font-semibold py-2.5 px-3 bg-white/5 border border-white/10 rounded-lg text-white/70">
        <span>Step 1. 랜딩 페이지 진입</span>
        <span className="text-white/40">100%</span>
      </div>
      <div className="text-center text-white/25 py-1 text-xs">↓</div>
      <div className="flex items-center justify-between text-sm font-semibold py-2.5 px-3 bg-white/5 border border-white/10 rounded-lg text-white/70">
        <span>Step 2. 치료 정보 페이지 이동</span>
        <span className="text-white/40">61%</span>
      </div>
      <div className="text-center text-white/25 py-1 text-xs">↓</div>
      <div className="flex items-center justify-between text-sm font-semibold py-2.5 px-3 bg-red-500/15 border border-red-400/30 rounded-lg text-red-300">
        <span>Step 3. 예약 폼 진입</span>
        <span>18% · 이탈 구간 발견 ✕</span>
      </div>
    </div>
  );
}

const DEMO_COMPONENTS = { crawl: DemoCrawl, eeat: DemoEEAT, funnelSplit: DemoFunnelSplit, dropoff: DemoDropoff };

export default function ServiceConsultingPage() {
  return (
    <div className="pretendard min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: '홈', url: 'https://abel-ai.com/' },
          { name: '서비스 안내', url: 'https://abel-ai.com/service' },
          { name: 'SEO·GEO 최적화 컨설팅', url: 'https://abel-ai.com/service/seo-geo-consulting' },
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
              { name: 'SEO·GEO 최적화 컨설팅' },
            ]}
          />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10 w-full">
          <div className="stagger space-y-6">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-400/20 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-semibold text-violet-300 tracking-wider uppercase">
                SERVICE 02 · SEO·GEO 최적화 컨설팅
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.25]">
              우리 병원 홈페이지,{' '}
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #e9d5ff 100%)' }}
              >
                구글 로봇과 AI가
              </span>{' '}
              정말 잘 읽고 있을까요?
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
              수백만 원 들인 홈페이지, 정작 구글 로봇과 AI가 들어왔다가 에러를 만나
              탈출하고 있다는 사실을 알고 계십니까? 아벨이 약 100여 개 항목으로
              정밀 진단하고 처방합니다.
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

          {/* 우측 진단 스캔 시뮬레이터 */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-violet-500/10 rounded-full blur-3xl -top-10 -right-10" />
            <div className="w-full max-w-md bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-xl relative">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-xs text-white/35 pl-2">AI Crawlability Scan</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'robots.txt 접근성', ok: true },
                  { label: '메타 태그 색인 설정', ok: true },
                  { label: '이미지 alt 텍스트', ok: false },
                  { label: '구조화 데이터(Schema)', ok: false },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between text-sm bg-black/20 border border-white/10 rounded-lg px-3 py-2.5"
                  >
                    <span className="text-white/70">{row.label}</span>
                    <span className={row.ok ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                      {row.ok ? '정상 ✓' : '오류 발견 ✕'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-white/35">예시 진단 화면 · 실제 결과 아님</span>
                <span className="text-violet-300 font-semibold">종합 점수 46/100</span>
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
              혹시, 병원 홈페이지에{' '}
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
            <p className="text-xs font-semibold text-violet-600 tracking-widest uppercase">ABEL&apos;S DIAGNOSTIC FRAMEWORK</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              아벨은 4가지 핵심 진단으로{' '}
              <br className="hidden md:block" />
              병원 홈페이지의 문제를 정확히 찾아냅니다.
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
                      DIAGNOSIS {s.num}. {s.tag}
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
              감이 아니라, 데이터로 증명하는 정밀 진단입니다.
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
              약 100여 개 항목의 정밀 기술 및 예약 동선 진단을 통해,{' '}
              <br className="hidden md:block" />
              환자가 매달 제 발로 걸어 들어오는 오가닉 전환 시스템을 구축하십시오.
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

      <ServiceStepper current={1} />
    </div>
  );
}
