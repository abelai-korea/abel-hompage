import type { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '회사소개 | ABEL — Adapted Brand Evolution Loop',
  description:
    '아벨(ABEL)은 급변하는 생성형 AI 검색 생태계에 브랜드를 적응시키고, 구조와 콘텐츠의 유기적 순환으로 병원의 가치를 진화시키는 브랜드 임팩트 파트너입니다.',
  alternates: { canonical: 'https://abel-ai.com/about' },
};

const PILLARS = [
  {
    letter: 'A',
    tag: 'ADAPTED · 적응',
    title: '급변하는 AI 생태계에 완벽히 호환되는 최적의 구조',
    desc: '기존의 고정된 네이버 노출 방식에 머물지 않습니다. ChatGPT, Gemini, Perplexity 등 환자가 질문하는 생성형 AI 답변 엔진에 최적화하여, 병원의 데이터가 AI 추천의 신뢰할 수 있는 정답 출처로 인용되도록 구조적 적응을 완벽히 수행합니다.',
  },
  {
    letter: 'B',
    tag: 'BRAND · 브랜드',
    title: '트래픽 숫자가 아닌, AI가 인용하는 독보적 권위',
    desc: '단순히 무작위 클릭을 유도하는 낚시성 키워드와는 타협하지 않습니다. 원장님의 면허 정보, 학술 활동 등 신뢰성 있는 정보 원천(E-E-A-T)을 검색 엔진에 코드 단위로 인식시켜, AI가 환자에게 당당히 추천하는 업계의 독보적인 일류 브랜드 권위를 만들어 드립니다.',
  },
  {
    letter: 'E',
    tag: 'EVOLUTION · 진화',
    title: '방치되는 홈페이지가 아닌, 데이터로 매일 무장하는 웹 자산',
    desc: '한 번 만들고 끝나는 화려한 인테리어용 홈페이지가 아닙니다. 방문자가 직접 반응하는 자가진단 시스템과 전문적인 저널 스타일의 지식 콘텐츠를 결합하여 환자의 체류 시간을 극대화하고, 수집 데이터를 분석하여 스스로 더 강력하게 진화하는 사이트를 구축합니다.',
  },
  {
    letter: 'L',
    tag: 'LOOP · 루프',
    title: '광고비 소멸 없는 무한 오가닉 성장 루프',
    desc: '매달 돈을 쓰고 사라지는 광고가 아닙니다. AI가 선호하는 구조 설계로 시작해 신뢰성 높은 전문 콘텐츠를 발행하고, AI 답변 엔진의 인용과 오가닉 노출 상승을 거쳐 신환 유입과 매출 상승으로 이어지는 선순환 고리를 완성하여 병원에 독립적인 성장 통제권을 돌려드립니다.',
  },
];

const LOOP_STEPS = [
  'AI가 선호하는 구조 설계',
  '신뢰성 높은 전문 콘텐츠 발행',
  'AI 답변 엔진 인용 및 오가닉 노출 상승',
  '신환 유입 및 매출 상승',
];

const PROMISES = [
  {
    num: '01',
    title: '소유권의 완전한 보장',
    sub: 'No Solution Lock-in',
    agency: '수정 권한조차 막아둔 채 매달 관리비라는 명목으로 수백만 원씩 영구 지불하게 만드는 악성 개발 솔루션',
    abel: '병원이 데이터와 도메인의 완전한 소유권을 가지고 독립적으로 운영할 수 있는 환경을 만듭니다.',
  },
  {
    num: '02',
    title: '권역별 상권 독점 쿼터제',
    sub: 'Area Exclusivity',
    agency: '돈만 주면 경쟁 병원에도 똑같이 템플릿을 파는 영혼 없는 대행 방식',
    abel: '신뢰 관계를 바탕으로 구(시)별 진료과당 딱 1개의 병원만 파트너로 계약하여, 해당 상권의 AI 인용 권위를 독점하도록 보호합니다.',
  },
  {
    num: '03',
    title: '철저한 결과의 투명화',
    sub: 'Transparent Data',
    agency: '"노출수가 잘 나온다"는 실체 없는 가짜 보고서',
    abel: '방문자가 실제 화면의 어느 지점까지 읽었는지, 어떤 칼럼을 보고 의심을 해소해 예약을 완료했는지 데이터를 눈앞에 투명하게 입증해 드립니다.',
  },
];

export default function AboutPage() {
  return (
    <div className="pretendard min-h-screen" style={{ background: '#020617' }}>
      <BreadcrumbJsonLd
        items={[
          { name: '홈', url: 'https://abel-ai.com/' },
          { name: '회사소개', url: 'https://abel-ai.com/about' },
        ]}
      />
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 overflow-hidden isolate" style={{ background: '#020617' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(700px 480px at 80% -8%, rgba(16,185,129,0.28) 0%, transparent 62%), ' +
              'radial-gradient(560px 420px at -8% 105%, rgba(5,150,105,0.28) 0%, transparent 58%), ' +
              '#020617',
          }}
        />
        <div className="hero-depth-grid" />
        <div className="hero-grain" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="stagger">
                <p className="text-xs font-bold tracking-[0.4em] uppercase mb-6" style={{ color: 'rgba(52,211,153,0.85)' }}>
                  ABEL BRAND STORY
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-white leading-[1.3] mb-6" style={{ letterSpacing: '-0.02em' }}>
                  ABEL : <span style={{ color: '#34d399' }}>A</span>dapted{' '}
                  <span style={{ color: '#34d399' }}>B</span>rand{' '}
                  <span style={{ color: '#34d399' }}>E</span>volution{' '}
                  <span style={{ color: '#34d399' }}>L</span>oop
                  <br />
                  <span
                    className="text-transparent bg-clip-text"
                    style={{ backgroundImage: 'linear-gradient(135deg, #6ee7b7 0%, #ffffff 100%)' }}
                  >
                    AI가 답하는 병원 SEO·GEO 구조 설계
                  </span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0" style={{ color: 'rgba(255,255,255,0.72)' }}>
                  아벨(ABEL)은 급변하는 생성형 AI 검색 생태계에 브랜드를 완벽하게 적응시키고, 구조와 콘텐츠의
                  유기적 순환을 통해 병원의 가치를 무한히 진화시키는 브랜드 임팩트 파트너입니다.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 rounded-full text-white font-bold text-sm transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' }}
                >
                  아벨의 철학에 동참하기 →
                </Link>
              </div>
            </div>

            {/* 박동하는 루프 오브제 */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative" style={{ width: '420px', height: '420px' }}>
                <div className="loop-pulse absolute inset-0 rounded-full border" style={{ borderColor: 'rgba(16,185,129,0.22)' }} />
                <div
                  className="loop-pulse absolute rounded-full border"
                  style={{ inset: '60px', borderColor: 'rgba(16,185,129,0.32)', animationDelay: '0.6s' }}
                />
                <div
                  className="loop-pulse absolute rounded-full border"
                  style={{ inset: '130px', borderColor: 'rgba(16,185,129,0.48)', animationDelay: '1.2s' }}
                />
                <div
                  className="absolute rounded-full"
                  style={{ inset: '175px', background: 'radial-gradient(circle, rgba(16,185,129,0.5) 0%, transparent 70%)', filter: 'blur(6px)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        {/* ─── BRAND STORY ────────────────────────────────────── */}
        <section className="relative py-20 md:py-24 border-t" style={{ borderColor: 'rgba(51,65,85,0.5)' }}>
          <div className="grid-pattern-slate" style={{ opacity: 0.5 }} />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-xs font-black uppercase tracking-widest mb-3 text-center" style={{ color: '#34d399' }}>
              WHY ABEL
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-12 leading-snug" style={{ letterSpacing: '-0.02em' }}>
              대행사를 여러 번 바꾸고도 병원 예약판이 비어있었다면,
              <br className="hidden md:block" />
              {' '}원인은 광고가 아닌 &lsquo;구조&rsquo;에 있습니다.
            </h2>

            <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(226,232,240,0.82)' }}>
              <p>
                원장님, 매달 비싼 광고비를 쏟아부을 때만 반짝 환자가 늘고, 광고를 끄는 순간 유입이 단 1초 만에{' '}
                <strong className="font-black" style={{ color: '#34d399' }}>&lsquo;Zero(0)&rsquo;</strong>가 되는
                악순환에 지치지 않으셨습니까?
              </p>
              <p>
                몸이 아픈 환자들은 극도의 불안 속에서 검색을 시작합니다. 그렇기에 단순한 한 번의 광고 노출만으로
                예약을 결심하지 않습니다. 환자들은 스스로 가진 의심이 완전히 해소될 때까지 해당 병원의 깊이 있는
                콘텐츠를 최소 3개에서 5개 이상 철저하게 소비한 뒤에야 비로소 문의 전화를 겁니다.
              </p>
              <p>
                하지만 시중의 수많은 대행사는 이 본질을 외면한 채, 매달 돈을 내지 않으면 사라질 일회성 노출에만
                매달리게 만듭니다. 심지어 원장님의 소중한 의학 지식과 성공 사례들을 검색 로봇이 읽을 수조차 없는
                &lsquo;통이미지&rsquo;로 홈페이지에 도배하여, 구글과 ChatGPT 같은 AI 엔진이 병원을 발견하지 못하도록
                &lsquo;눈먼 사이트&rsquo;로 방치합니다.
              </p>
              <p>
                아벨은 이 무의미한 소모전을 끝내기 위해 탄생했습니다. 병원의 독보적인 전문성(E-E-A-T)을 검색
                엔진과 AI가 정답으로 인용할 수 있는 디지털 자산으로 변환하여 스스로 환자를 모으는 성장 루프를
                만듭니다.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 4 PILLARS ──────────────────────────────────────── */}
        <section className="relative py-20 md:py-24 border-t" style={{ borderColor: 'rgba(51,65,85,0.5)' }}>
          <p className="text-xs font-black uppercase tracking-widest mb-3 text-center" style={{ color: '#34d399' }}>
            THE 4 PILLARS OF ABEL
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-12 leading-snug" style={{ letterSpacing: '-0.02em' }}>
            브랜드를 구조로 증명하는 아벨의 4대 철학
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {PILLARS.map((p) => (
              <div
                key={p.letter}
                className="group relative rounded-2xl p-8 overflow-hidden border transition-all duration-300"
                style={{ background: 'rgba(15,23,42,0.6)', borderColor: 'rgba(51,65,85,0.6)' }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ boxShadow: 'inset 0 0 0 1.5px rgba(16,185,129,0.55), 0 0 40px rgba(16,185,129,0.12)' }}
                />
                <div
                  className="absolute -top-3 -right-1 font-black select-none pointer-events-none"
                  style={{ fontSize: '7rem', lineHeight: 1, color: 'rgba(52,211,153,0.08)' }}
                >
                  {p.letter}
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-black tracking-widest mb-4" style={{ color: '#34d399' }}>
                    {p.tag}
                  </p>
                  <h3 className="text-lg md:text-xl font-black text-white mb-4 leading-snug">{p.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(203,213,225,0.85)' }}>
                    {p.desc}
                  </p>

                  {p.letter === 'L' && (
                    <div className="flex flex-wrap items-center gap-2 mt-6">
                      {LOOP_STEPS.map((step, i) => (
                        <span key={step} className="inline-flex items-center gap-2">
                          <span
                            className="text-xs font-bold px-3 py-1.5 rounded-full"
                            style={{ background: 'rgba(16,185,129,0.12)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.25)' }}
                          >
                            {step}
                          </span>
                          {i < LOOP_STEPS.length - 1 && <span style={{ color: 'rgba(52,211,153,0.5)' }}>➔</span>}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── WHY ABEL 약속 ──────────────────────────────────── */}
        <section className="relative py-20 md:py-24 border-t" style={{ borderColor: 'rgba(51,65,85,0.5)' }}>
          <div className="grid-pattern-slate" style={{ opacity: 0.5 }} />
          <div className="relative z-10">
            <p className="text-xs font-black uppercase tracking-widest mb-3 text-center" style={{ color: '#34d399' }}>
              ABEL&rsquo;S PROMISE
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-4 leading-snug" style={{ letterSpacing: '-0.02em' }}>
              아벨의 약속 : 독보적인 가치
            </h2>
            <p className="text-center mb-14" style={{ color: 'rgba(148,163,184,0.85)' }}>
              일반 대행사의 현실과 아벨의 원칙을 나란히 비교해 보십시오.
            </p>

            <div className="space-y-8">
              {PROMISES.map((item) => (
                <div key={item.num}>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-sm font-black" style={{ color: 'rgba(52,211,153,0.5)' }}>{item.num}</span>
                    <h3 className="text-lg md:text-xl font-black text-white">{item.title}</h3>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(148,163,184,0.6)' }}>{item.sub}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div
                      className="rounded-xl p-6 border"
                      style={{ background: 'rgba(15,23,42,0.4)', borderColor: 'rgba(51,65,85,0.5)' }}
                    >
                      <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'rgba(148,163,184,0.7)' }}>
                        ✕ 일반 대행사의 현실
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(148,163,184,0.85)' }}>{item.agency}</p>
                    </div>
                    <div
                      className="rounded-xl p-6 border"
                      style={{ background: 'rgba(6,78,59,0.18)', borderColor: 'rgba(16,185,129,0.35)' }}
                    >
                      <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#34d399' }}>
                        ✓ 아벨의 원칙
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(226,232,240,0.92)' }}>{item.abel}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 최종 CTA 배너 ──────────────────────────────────── */}
        <section className="py-20 md:py-24">
          <div
            className="rounded-[40px] p-12 lg:p-20 text-white text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #022c22 0%, #065f46 100%)' }}
          >
            <div
              className="absolute top-0 right-0 pointer-events-none"
              style={{
                width: '450px', height: '300px',
                background: 'radial-gradient(circle, rgba(16,185,129,0.35) 0%, transparent 65%)',
              }}
            />
            <div className="relative z-10">
              <span
                className="font-black text-sm uppercase tracking-wider block mb-4"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                ABEL PRECISION DIAGNOSIS
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                수백만 원의 광고비 누수,
                <br className="hidden md:block" />
                {' '}지금 바로 눈으로 확인하십시오.
              </h2>
              <p className="text-base mb-10 leading-relaxed max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.88)' }}>
                아벨은 검색 로봇 수집 장애, E-E-A-T 구조화 수준, 예약 전환 병목 구간 등 약 100여 개 항목에 걸친
                정밀 진단 시스템을 통해 원장님 병원의 숨겨진 광고비 낭비 현황을 디버깅해 드립니다.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-full text-white font-black transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)' }}
              >
                우리 병원 무료 정밀 진단 신청하기 →
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t" style={{ background: '#09090b', borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Breadcrumb
            tone="dark"
            items={[
              { name: '홈', url: 'https://abel-ai.com/' },
              { name: '회사소개' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
