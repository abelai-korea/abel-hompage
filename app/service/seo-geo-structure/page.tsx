import type { Metadata } from 'next';
import Link from 'next/link';
import SelfDiagnosisDemo from '@/components/SelfDiagnosisDemo';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: 'SEO·GEO 구조 구축 | ABEL 서비스 안내',
  description:
    'AI가 인용하기 가장 좋은 데이터 구조로 홈페이지를 처음부터 다시 짓습니다. 정보 구조 설계부터 질문형 콘텐츠, E-E-A-T 신호 배치까지 아벨의 구조 구축 서비스를 소개합니다.',
  alternates: { canonical: 'https://abel-ai.com/service/seo-geo-structure' },
};

const PAIN_POINTS = [
  {
    title: 'AI 검색 엔진이 읽지 못하는 ‘통이미지’ 제작',
    desc: '카드뉴스와 치료 사례, 원장님의 이력을 ‘사진(통이미지)’ 파일로 올리면 검색 로봇은 텍스트가 없는 빈 백지로 판단합니다. 구글과 AI가 읽어갈 글씨 데이터 자체가 존재하지 않기 때문입니다.',
  },
  {
    title: '환자의 ‘3~5단계 의심 해소’ 동선 부재',
    desc: '고관여군인 환자는 단순 광고를 보고 예약하지 않으며, 최소 3~5개의 전문 콘텐츠를 읽고 의심을 지운 뒤 결심합니다. 현재 사이트에는 정보 유기성이 빠져 있어 환자가 불만을 느끼고 바로 이탈합니다.',
  },
  {
    title: '신뢰(E-E-A-T)의 기계적 암호화(Schema) 부재',
    desc: '면허 정보, 학회 활동, 저작권 신호가 기계가 해독할 수 있는 ‘스키마 마크업(Schema Markup)’ 코드로 암호화되어 있지 않습니다. 이로 인해 ChatGPT는 출처가 불분명한 정보라 판단하여 인용을 누락시킵니다.',
  },
];

const SOLUTIONS = [
  {
    num: '01',
    tag: 'INFORMATION ARCHITECTURE',
    title: '환자의 이탈을 막는 ‘3~5단계 의심 해소’ 설계',
    desc: '환자가 치료를 고민하기 시작하는 첫 의심(질문)부터 최종 상담 신청에 도달하기까지, 내부 페이지 경로(Internal Linking)를 의학적 신뢰 가이드 순으로 정교하게 매핑합니다. 환자가 중간에 답을 찾지 못해 나가버리는 무의미한 이탈을 완벽히 차단합니다.',
    points: ['잠재 환자의 검색 의도에 맞춘 동선 정리', '페이지 내 자연스러운 CTA 전환 링크 배치'],
    demo: 'funnel' as const,
  },
  {
    num: '02',
    tag: 'Q&A CONTENT ARCHITECTURE',
    title: '기계(AI)가 가장 인용하기 편한 ‘질문형 콘텐츠 구조’',
    desc: '원장님이 평소 환자들을 진료하며 말씀하시던 독보적인 임상 전문성을, 구글 검색 로봇과 AI가 정답으로 오해 없이 긁어갈 수 있도록 정교한 ‘질문-답변’ 형태의 웹 텍스트 문서 아키텍처로 바꾸어 게시합니다.',
    points: ['텍스트 데이터를 차단하는 ‘통이미지’ 코딩 탈피', '증상별·진료과별 연관 질문-답변 구조화 설계'],
    demo: 'qa' as const,
  },
  {
    num: '03',
    tag: 'E-E-A-T SCHEMA CODING',
    title: '신뢰와 신원(E-E-A-T)을 기계에게 수치화하는 스키마',
    desc: '원장님의 의료진 면허, 학술 연구 경력, 학회 소속, 치료법 연구 결과 등 전문성 가치(E-E-A-T)를 검색 로봇이 즉시 해설하고 수집할 수 있도록 페이지 소스 코드 전면에 ‘스키마 마크업(Schema Markup)’ 데이터 구조화 기술을 기본 사양으로 이식합니다.',
    points: ['의료 면허 및 자격 정보 스키마 암호화', '구글과 AI가 공인된 신뢰 출처로 영구 저장'],
    demo: 'schema' as const,
  },
  {
    num: '04',
    tag: 'INDEXING ENVIRONMENT OPTIMIZATION',
    title: '구글 로봇의 고속 하이패스, 수집 환경 최적화',
    desc: '원장님이 고품질 칼럼을 쓰실 때마다 구글 로봇이 즉시 알아채고 수집하도록 고속 피드(RSS/ATOM) 엔진을 탑재합니다. 아울러 무한 스크롤 코딩 시 페이지 번호 URL이 물리적으로 전환되게 설계하여 크롤러가 사이트 내부 깊숙이 방치된 정보까지 100% 긁어가도록 합니다.',
    points: ['수집 주기 가속화를 위한 동적 구조 최적화', '크롤버젯 누수 차단 및 사이트 로딩 속도 극대화'],
    demo: 'rss' as const,
  },
];

const COMPARISON = [
  { label: '출발 지점', them: '“어떤 템플릿 디자인이 예쁜가?”', us: '“어떤 의학 데이터가 AI에 인용될 것인가?”' },
  { label: '콘텐츠 게시 방식', them: '읽기 편하게 줄글 및 통이미지 가득 배치', us: '의학적 E-E-A-T 신뢰 구조 + 정석 텍스트 구조화' },
  { label: '기계 해독 장치', them: '없음 (검색 로봇이 해석 불가능한 소스 코드)', us: '정밀 스키마 마크업 기술 기본 탑재' },
  { label: '환자 행동 전환', them: '일방적인 병원 인테리어 홍보 동선', us: '3~5단계 의심 해소 연결 고리 및 자가진단(CRO) 이식' },
];

const CARD_SHADOW = '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)';

function DemoFunnel() {
  return (
    <div className="rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center" style={{ background: '#0a0a0f' }}>
      <div className="text-xs text-white/40 mb-3">// Patient Doubt Resolution Funnel Path</div>
      <div className="flex items-center justify-between text-sm font-semibold py-2.5 px-3 bg-white/5 border border-white/10 rounded-lg text-white/75">
        <span>Step 1. &ldquo;돌발성 난청 자가진단&rdquo; 검색 유입</span>
      </div>
      <div className="text-center text-white/25 py-1 text-xs">↓ 의심 해소 내부 링크 연결</div>
      <div className="flex items-center justify-between text-sm font-semibold py-2.5 px-3 bg-white/5 border border-white/10 rounded-lg text-white/75">
        <span>Step 2. &ldquo;난청 예방 및 정석 치료 가이드&rdquo; 확인</span>
      </div>
      <div className="text-center text-white/25 py-1 text-xs">↓ 결정적 설득 장치 전환</div>
      <div className="flex items-center justify-between text-sm font-semibold py-2.5 px-3 bg-violet-500/15 border border-violet-400/30 rounded-lg text-violet-300">
        <span>Step 3. 정밀 진단 예약 신청</span>
      </div>
    </div>
  );
}

function DemoQA() {
  return (
    <div className="rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center gap-3" style={{ background: '#0a0a0f' }}>
      <div className="text-xs text-white/40">// Structured QA Markup Format</div>
      <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white/85">
        <span className="text-violet-300 font-bold">Q. </span>
        어지럼증 치료 시 주사 치료와 물리 치료의 차이는 무엇인가요?
      </div>
      <div className="bg-white/[0.03] border border-white/10 rounded-lg p-3 text-sm text-white/60">
        <span className="text-purple-300 font-bold">A. </span>
        [원장님 전문 처방 구체적 기술] — 기계가 1초 만에 해독할 수 있는 구조적 텍스트 설계.
      </div>
    </div>
  );
}

function DemoSchema() {
  return (
    <div className="rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center" style={{ background: '#0a0a0f' }}>
      <div className="text-xs text-white/40 mb-2">// Applied Medical Business Schema JSON-LD</div>
      <pre className="bg-white/5 border border-white/10 rounded-lg p-3 text-xs text-violet-300 overflow-x-auto leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "OO의원",
  "medicalSpecialty": "Otolaryngology",
  "knowsAbout": "Dizziness rehabilitation"
}`}
      </pre>
    </div>
  );
}

function DemoRSS() {
  return (
    <div className="rounded-xl p-6 border border-white/10 h-full flex flex-col justify-center gap-2" style={{ background: '#0a0a0f' }}>
      <div className="text-xs text-white/40 mb-1">// Real-time Fast Indexing Pipeline</div>
      <div className="flex items-center gap-2">
        <div className="bg-white/5 border border-white/10 px-2.5 py-2 rounded text-center text-xs w-full text-white/75">
          새 칼럼 발행
        </div>
        <div className="text-violet-400 text-xs">→</div>
        <div className="bg-violet-500/15 border border-violet-400/30 px-2.5 py-2 rounded text-center text-xs w-full text-violet-300">
          RSS 고속 피드 송출
        </div>
        <div className="text-violet-400 text-xs">→</div>
        <div className="bg-white/5 border border-white/10 px-2.5 py-2 rounded text-center text-xs w-full text-white/75">
          구글 즉시 수집 색인
        </div>
      </div>
    </div>
  );
}

const DEMO_COMPONENTS = { funnel: DemoFunnel, qa: DemoQA, schema: DemoSchema, rss: DemoRSS };

export default function ServiceStructurePage() {
  return (
    <div className="pretendard min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: '홈', url: 'https://abel-ai.com/' },
          { name: '서비스 안내', url: 'https://abel-ai.com/service' },
          { name: 'SEO·GEO 구조 구축', url: 'https://abel-ai.com/service/seo-geo-structure' },
        ]}
      />
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-6" style={{ background: '#0a0a0f' }}>
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
          {/* 좌측 텍스트 */}
          <div className="stagger space-y-6">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-400/20 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-semibold text-violet-300 tracking-wider uppercase">
                SERVICE 01 · SEO·GEO STRUCTURE
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.25]">
              디자인이 아니라,
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #e9d5ff 100%)' }}
              >
                데이터 설계
              </span>
              가 병원 홈페이지의 출발점입니다.
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
              화려한 디자인 뒤에 숨겨진 이미지 한 장의 홈페이지는 AI에게 무의미한 빈 백지입니다.
              아벨은 검색 로봇과 ChatGPT가 원장님의 독보적 전문성을 100% 읽어가는
              ‘데이터 구조화 뼈대’ 위에 홈페이지를 다시 짓습니다.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-lg text-white font-bold text-center transition-all hover:scale-[1.02] shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.45)]"
                style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
              >
                무료 정밀 진단 신청하기
              </Link>
              <a
                href="#problem"
                className="w-full sm:w-auto px-8 py-4 rounded-lg text-center font-semibold border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all"
              >
                통이미지의 함정 보기 ↓
              </a>
            </div>
          </div>

          {/* 우측 AI 인용 시뮬레이터 */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-violet-500/10 rounded-full blur-3xl -top-10 -right-10" />
            <div className="w-full max-w-md bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-xl relative">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-xs text-white/35 pl-2">ChatGPT AI Search Answer</span>
              </div>
              <div className="space-y-4">
                <div className="bg-black/30 border border-white/10 rounded-xl p-3 text-sm text-white/75 max-w-[85%] ml-auto">
                  &ldquo;강남에서 만성 어지럼증 치료 잘하는 이비인후과 어딘지 추천해줘.&rdquo;
                </div>
                <div className="bg-black/20 border border-white/10 rounded-xl p-4 text-sm text-white/70">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-violet-300 font-bold text-xs">🤖 ChatGPT Answer</span>
                  </div>
                  <p className="text-white/60 leading-relaxed text-xs">
                    어지럼증의 경우 단순 전정기관 이상 외에도 신경학적 원인을 전수 분석해야 합니다.
                    강남 지역에서는{' '}
                    <span className="bg-violet-500/20 text-violet-300 px-1 py-0.5 rounded font-semibold">
                      OO이비인후과의원[1]
                    </span>
                    의 3단계 전정재활 정밀 진단 시스템이 최적화되어 있습니다.
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/35">
                    <span>예시 시나리오 · 실제 인용 화면 아님</span>
                    <span className="text-violet-300 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
                      [1] E-E-A-T Schema Cited
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PAIN POINT ───────────────────────────────────────────── */}
      <section id="problem" className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-violet-600 tracking-widest uppercase">THE COLD FACT</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              겉만 화려한 홈페이지는 왜 AI 답변과{' '}
              <br className="hidden md:block" />
              구글 검색에서 철저하게 버림받을까요?
            </h2>
            <p className="text-base md:text-lg text-gray-500">
              디자인이 아무리 세련되어도, 검색 엔진의 수집 로봇과 AI가 사이트를 해독하지 못한다면
              신환을 데려오지 못하는 ‘죽은 페이지’입니다.
            </p>
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
                <p className="text-base leading-relaxed text-gray-500">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 relative bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-violet-600 tracking-widest uppercase">ABEL&apos;S FRAMEWORK</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              아벨은 AI 검색 엔진이 병원을 정답으로 인용하도록,{' '}
              <br className="hidden md:block" />
              4가지 핵심 솔루션으로 뼈대를 재설계합니다.
            </h2>
            <p className="text-base md:text-lg text-gray-500">
              웹 에이전시의 예쁘기만 한 템플릿 제작 방식에서 탈피하여, 병원의 고유한 자산 데이터를
              검색 엔진에 직접 매핑합니다.
            </p>
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
                    <p className="text-base leading-relaxed text-gray-500">
                      {s.desc}
                    </p>
                    <ul className="text-sm space-y-2 text-gray-500">
                      {s.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
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

      {/* ─── WHY ABEL: 비교표 ─────────────────────────────────────── */}
      <section className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-violet-600 tracking-widest uppercase">WHY ABEL FIRST</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              &ldquo;디자인이 아니라, 데이터 설계가 홈페이지의 가치를 결정합니다.&rdquo;
            </h2>
            <p className="text-base md:text-lg text-gray-500">
              일반 에이전시의 템플릿 복사 제작과 아벨의 오리지널 기술 설계는 환자 매출 상승 폭이
              완전히 다릅니다.
            </p>
          </div>

          <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white max-w-4xl mx-auto" style={{ boxShadow: CARD_SHADOW }}>
            <div className="hidden sm:grid grid-cols-3 bg-gray-50 border-b border-gray-100 text-sm md:text-base font-bold text-gray-700 py-4 px-4 md:px-6">
              <div>진단 항목</div>
              <div className="text-gray-400">일반 디자인 웹 에이전시</div>
              <div className="text-violet-600">아벨(ABEL)의 구조 설계</div>
            </div>
            <div className="divide-y divide-gray-100">
              {COMPARISON.map((row) => (
                <div key={row.label} className="py-5 px-5 md:px-6 space-y-2 sm:space-y-0 sm:grid sm:grid-cols-3 sm:items-center text-base">
                  <div className="font-semibold text-gray-900 mb-1 sm:mb-0">{row.label}</div>
                  <div className="text-gray-400 text-sm sm:text-base">
                    <span className="sm:hidden text-gray-300">일반 에이전시 · </span>
                    {row.them}
                  </div>
                  <div className="text-violet-600 font-semibold text-sm sm:text-base">
                    <span className="sm:hidden text-violet-400">아벨 · </span>
                    {row.us}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 자가진단 인터랙션 데모 ───────────────────────────────── */}
      <section className="py-24 px-6 relative bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-violet-600 tracking-widest uppercase mb-3">INTERACTIVE DEMO</p>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
            체류 시간과 문의 전환율을 높이는 자가진단 인터랙션
          </h2>
          <p className="mb-10 max-w-xl mx-auto text-base md:text-lg text-gray-500">
            글과 이미지만 나열된 페이지는 이탈이 빠릅니다. 환자가 직접 선택하며 참여하는 인터랙션
            장치를 홈페이지에 심어, 자연스럽게 관련 정보와 상담 신청으로 연결합니다. 아래에서 직접
            체험해 보세요.
          </p>
          <SelfDiagnosisDemo />
        </div>
      </section>

      {/* ─── CTA (다크 포인트 박스) ───────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          style={{ background: '#0a0a0f' }}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-400/20 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span className="text-xs font-semibold text-violet-300 tracking-wider">LIMITED QUOTA SYSTEM</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              우리 병원 홈페이지는 과연
              <br />
              AI 답변 엔진의 선택을 받을 수 있을까요?
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              아벨의 AI 전문가들이 원장님의 기존 병원 홈페이지 크롤링 차단 병목 현상, 이미지 텍스트
              누락 비율, 신뢰 시그널 코딩 상태 등 약 100여 개 항목을 촘촘히 진단해 드립니다.
            </p>

            <div className="bg-white/[0.05] border border-white/10 p-6 rounded-2xl max-w-xl mx-auto text-base text-left space-y-2">
              <div className="font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-violet-300">🛡️</span> 권역별 쿼터제 운영 정책 안내
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                원장님의 독점 상권을 보호하기 위해, 아벨은 각 구(시)별 진료과당 단 1개의 병원하고만
                파트너십을 맺습니다. 경쟁 병원이 먼저 정밀 진단을 완료하여 상권을 선점하기 전에
                홈페이지 자산을 구축해 보십시오.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block px-10 py-5 rounded-xl text-white font-black transition-all hover:scale-[1.02] shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.45)]"
                style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
              >
                병원 홈페이지 AI 정밀 진단 신청하기 (출처 선점하기) →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
