import type { Metadata } from 'next';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'SEO·GEO 홈페이지 제작 | ABEL',
  description:
    '1억 원짜리 화려한 홈페이지가 구글과 ChatGPT에게는 투명인간이었던 이유. 아벨은 크롤링, GEO 인용, 스키마, 성과 추적까지 4대 기술 엔진으로 병원 홈페이지의 뼈대를 설계합니다.',
  robots: { index: false, follow: false },
};

const RED_FLAGS = [
  { bad: '글자 수만 채우는 블로그 대행', why: '콘텐츠가 아니라 광고 예산 낭비입니다' },
  { bad: '배너만 바꿔주는 월 관리비', why: '정작 기술 구조는 그대로입니다' },
  { bad: '“구글 1위 보장” 문구', why: '검색엔진 원리상 있을 수 없는 약속입니다' },
  { bad: '무료 진단 없이 바로 계약부터', why: '문제가 뭔지도 모른 채 돈부터 나갑니다' },
];

const STATS = [
  { num: '0%', label: '통이미지 속 글자', sub: '로봇은 읽지 못합니다' },
  { num: '0회', label: 'robots.txt 막히면', sub: '재방문은 없습니다' },
  { num: '0.2초', label: '아벨의 TTFB', sub: '시공 기준입니다' },
];

const PAIN_POINTS = [
  { title: 'robots.txt 차단 오류', desc: '로봇의 출입문을 스스로 걸어 잠근 것과 같습니다.' },
  { title: '리디렉션 무한 루프', desc: '로봇이 뺑뺑이만 돌다가 지쳐서 나가버립니다.' },
  { title: '통이미지 코딩 도배', desc: '글자가 없으니, 검색엔진에겐 그냥 백지입니다.' },
];

const URL_ISSUES = [
  'http://mydentalclinic.com',
  'https://www.mydentalclinic.com',
  'https://mydentalclinic.com/index.php?id=42',
];

const PEOPLE_VIEW = ['1:1 맞춤 진료 시스템', '숙련된 전문의 상담', '수년간 축적된 임상 노하우', '맞춤형 치료 계획 설계'];
const CRAWLER_IMG_COUNT = 6;

const ENGINES = [
  {
    num: '01',
    tag: 'CRAWLABILITY',
    title: '크롤러빌리티 이식',
    desc: 'robots.txt·사이트맵·RSS 정비, 서버 응답 0.2초 이하.',
    result: '크롤러 대기 시간 0',
  },
  {
    num: '02',
    tag: 'GEO CODING',
    title: 'AI 인용 최적화 코딩',
    desc: '통이미지 제거, 시맨틱 태그로 텍스트 전면 전환.',
    result: 'AI가 읽는 페이지로',
  },
  {
    num: '03',
    tag: 'SCHEMA MARKUP',
    title: '구조화 데이터 이식',
    desc: 'JSON-LD로 병원 정보·E-E-A-T를 코드에 새깁니다.',
    result: '기계가 읽는 신뢰 신호',
  },
  {
    num: '04',
    tag: 'GSC & GA4',
    title: '성과 추적 통합 연동',
    desc: '색인 오류 상시 감지 + 오가닉·AI 유입 분리 추적.',
    result: '숫자로 증명되는 결과',
  },
];

const CHANNELS = ['유튜브', '인스타그램', '카카오톡 소식', '블로그'];

const QUEST = [
  { k: 'Q', text: '매달 광고비를 태우는데도 신환은 제자리인 원장님' },
  { k: 'U', text: '칼럼은 열심히 쓰는데 정작 구글엔 안 보였을 겁니다' },
  { k: 'E', text: '원인은 글솜씨가 아니라 홈페이지의 기술적 결함입니다' },
  { k: 'S', text: '뼈대만 바로잡으면, 지금도 해결할 수 있습니다' },
  { k: 'T', text: '지금 신청하면 무상 정밀 진단 보고서와 대면 미팅까지' },
];

const CARD_SHADOW = '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)';

function ChapterDivider({ num, title }: { num: string; title: string }) {
  return (
    <div className="min-h-[45vh] flex items-center justify-center py-20 px-6 text-center" style={{ background: '#0a0a0f' }}>
      <div className="max-w-2xl mx-auto space-y-4">
        <p className="text-sm font-black tracking-[0.4em] text-violet-400 uppercase">CHAPTER {num}</p>
        <h2 className="text-3xl md:text-5xl font-black text-white leading-snug">{title}</h2>
      </div>
    </div>
  );
}

function IcebergPhoto() {
  const vFade = 'linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)';
  const hFade = 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)';
  return (
    <div className="relative w-full mx-auto" style={{ aspectRatio: '736 / 1309' }}>
      <div className="absolute inset-0 bg-violet-500/25 blur-3xl rounded-full scale-90 pointer-events-none" />
      <div className="absolute inset-0" style={{ WebkitMaskImage: vFade, maskImage: vFade }}>
        <div className="absolute inset-0" style={{ WebkitMaskImage: hFade, maskImage: hFade }}>
          <Image
            src="/lp/iceberg.jpg"
            alt="빙산의 10%만 물 위로 보이고, 90%는 물 아래 숨어 있다"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default function SeoGeoHomepageLandingPage() {
  return (
    <div className="pretendard min-h-screen bg-white">
      {/* ─── HERO (표지) ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-screen flex items-center px-6 py-24" style={{ background: '#0a0a0f' }}>
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <div className="stagger space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-400/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-semibold text-violet-300 tracking-wider uppercase">
                SEO·GEO 홈페이지 제작
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.25]">
              수면 위 10%의 디자인,
              <br />
              수면 아래
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #e9d5ff 100%)' }}
              >
                90%의 AI 최적화
              </span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0" style={{ color: 'rgba(255,255,255,0.7)' }}>
              겉으로 보이는 화려함 뒤에 숨겨진 90%의 기술 구조.
              <br />
              AI가 먼저 인용하는 아벨의 SEO·GEO 시공입니다.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#diagnosis"
                className="w-full sm:w-auto px-9 py-5 rounded-lg text-white font-bold text-center text-lg transition-all hover:scale-[1.02] shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.45)]"
                style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
              >
                무료 정밀 기술진단 신청하기
              </a>
              <a
                href="#ch1"
                className="w-full sm:w-auto px-9 py-5 rounded-lg text-center font-semibold text-lg border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all"
              >
                이야기 시작하기 ↓
              </a>
            </div>
          </div>

          <div>
            <IcebergPhoto />
          </div>
        </div>
      </section>

      {/* ═══ CHAPTER 01 ═══════════════════════════════════════════ */}
      <div id="ch1">
        <ChapterDivider num="01" title="계약 전에, 먼저 이것부터 확인하세요" />
      </div>
      <section className="min-h-screen flex items-center py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-16 w-full">
          <p className="text-center text-lg md:text-xl text-black max-w-2xl mx-auto leading-relaxed">
            아래 4가지 말을 들으신 적 있다면, 다음 미팅 전에 한 번 더 생각해 보시길 권합니다.
          </p>
          <div className="grid grid-cols-1 gap-7">
            {RED_FLAGS.map((r, i) => (
              <div
                key={r.bad}
                className="bg-white rounded-xl border-l-4 border-red-300 border border-gray-100 p-9 flex items-start gap-6"
                style={{ boxShadow: CARD_SHADOW }}
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-red-50 text-red-500 font-black text-xl flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-black text-xl mb-2">{r.bad}</p>
                  <p className="text-lg text-black">{r.why}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-lg font-semibold text-violet-600">
            그래서 아벨은 계약 전에, 100여 개 항목을 먼저 무료로 진단해 드립니다.
          </p>
        </div>
      </section>

      {/* ═══ CHAPTER 02 ═══════════════════════════════════════════ */}
      <ChapterDivider num="02" title="지금 홈페이지 안에서 무슨 일이 일어나고 있을까요" />

      <section className="py-20 px-6" style={{ background: '#0d0d12' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x divide-white/10">
          {STATS.map((s) => (
            <div key={s.label} className="text-center px-4">
              <div className="text-4xl md:text-6xl font-black text-violet-300">{s.num}</div>
              <div className="mt-3 text-sm md:text-base text-white/70 leading-tight">
                {s.label}
                <br />
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="problem" className="min-h-[130vh] flex items-center py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-24 w-full">
          <div className="text-center space-y-5 max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-violet-600 tracking-widest uppercase">THE ICEBERG TRUTH</p>
            <h3 className="text-3xl md:text-5xl font-black text-black leading-tight">
              예쁘다고 검색도 잘 되는 건 아닙니다.
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-black">
              화려한 디자인 뒤에서, 구글과 ChatGPT는 전혀 다른 화면을 보고 있을 수 있습니다.
              <br />
              그중에서도 SEO 체크리스트 1순위는 바로 <strong className="text-violet-600">URL</strong>입니다.
            </p>
          </div>

          <div
            className="rounded-3xl bg-violet-50 border border-violet-200 p-9 md:p-14 text-center space-y-6"
            style={{ boxShadow: CARD_SHADOW }}
          >
            <p className="text-sm font-black text-violet-600 uppercase tracking-wider">그래서, 이어지는 진짜 문제</p>
            <h4 className="text-2xl md:text-3xl font-black text-black leading-snug">
              홈페이지, 몇천만 원 주고 만드셨나요?
              <br />
              그런데 URL이 딱 한 개인가요?
            </h4>
            <p className="text-xl md:text-2xl font-bold leading-[1.7] text-black max-w-xl mx-auto">
              한 페이지에 임플란트·신경치료·라미네이트를 스크롤로만 이어붙인
              <br />
              &lsquo;랜딩페이지형&rsquo; 홈페이지가 있습니다.
              <br />
              이런 홈페이지는 진료과목마다 URL이 없습니다.
              <br />
              URL이 없으면, 구글은 그 페이지를 색인할 수 없습니다.
              <br />
              환자가 &lsquo;임플란트&rsquo;를 검색해도, 그 페이지는
              <br />
              검색 결과에 나올 자격조차 없습니다.
            </p>
            <p className="text-xl md:text-2xl font-black text-violet-600 pt-2">
              안타깝지만, 그건 홈페이지가 아니라 이미지 한 장짜리 전단지입니다.
              <br />
              지금이라도, 다시 만드세요.
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-center text-sm font-bold text-black uppercase tracking-wider">
              예시로 보면 — 대표 URL 통일
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl overflow-hidden border border-red-200" style={{ boxShadow: CARD_SHADOW }}>
                <div className="bg-red-50 px-6 py-3 text-sm font-bold text-red-500 uppercase tracking-wider">
                  이런 홈페이지는 위험합니다
                </div>
                <div className="bg-white p-6 space-y-3 font-mono text-sm md:text-base text-black">
                  {URL_ISSUES.map((u) => (
                    <div key={u}>{u}</div>
                  ))}
                </div>
                <div className="px-6 pb-6 text-base text-black">
                  → 검색엔진 눈에는 전혀 다른 페이지 3개입니다.
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-violet-200" style={{ boxShadow: CARD_SHADOW }}>
                <div className="bg-violet-50 px-6 py-3 text-sm font-bold text-violet-600 uppercase tracking-wider">
                  아벨은 이렇게 정리합니다
                </div>
                <div className="bg-white p-6 font-mono text-sm md:text-base text-black">
                  https://mydentalclinic.com/implant
                </div>
                <div className="px-6 pb-6 text-base text-black">
                  → 대표 주소 하나로 통일, 신뢰 점수가 한곳에 쌓입니다.
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PAIN_POINTS.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl border border-gray-100 p-9 text-center hover:border-violet-300 transition-all"
                style={{ boxShadow: CARD_SHADOW }}
              >
                <h4 className="text-lg font-bold text-black mb-3">{p.title}</h4>
                <p className="text-base leading-relaxed text-black">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHAPTER 03 ═══════════════════════════════════════════ */}
      <ChapterDivider num="03" title="사람 눈엔 보이는데, 로봇 눈엔 안 보입니다" />

      <section className="min-h-screen flex items-center py-28 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-10" style={{ boxShadow: CARD_SHADOW }}>
              <p className="text-sm font-black text-black uppercase tracking-wider mb-8">사람이 보는 화면</p>
              <ul className="space-y-5">
                {PEOPLE_VIEW.map((v) => (
                  <li key={v} className="text-lg text-black font-medium flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full flex-shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-10" style={{ background: '#0a0a0f', boxShadow: CARD_SHADOW }}>
              <p className="text-sm font-black uppercase tracking-wider mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
                크롤러가 보는 화면
              </p>
              <ul className="space-y-4 mb-8">
                {Array.from({ length: CRAWLER_IMG_COUNT }).map((_, i) => (
                  <li key={i} className="text-base font-mono text-white/25">
                    [이미지] alt=&quot;&quot;
                  </li>
                ))}
              </ul>
              <p className="text-lg font-bold text-red-400 pt-5 border-t border-white/10">
                로봇이 읽을 수 있는 문장: 0줄
              </p>
            </div>
          </div>

          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-10 text-center max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed text-black">
              AI 추천 순위는 병원의 실력이 아니라, <strong className="text-violet-700">그 순간 어떤 글을 참고했는지</strong>에 좌우됩니다.
              <br />
              텍스트가 없으면, 통제권도 없습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CHAPTER 04 ═══════════════════════════════════════════ */}
      <ChapterDivider num="04" title="그래서, 아벨은 이렇게 고칩니다" />

      <section className="min-h-screen flex items-center py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto w-full">
          <div className="grid grid-cols-1 gap-8">
            {ENGINES.map((e) => (
              <div
                key={e.num}
                className="bg-white border border-gray-100 p-10 rounded-2xl hover:border-violet-200 transition-all flex items-start gap-7"
                style={{ boxShadow: CARD_SHADOW }}
              >
                <span
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-2xl"
                  style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
                >
                  {e.num}
                </span>
                <div>
                  <p className="text-sm font-bold text-violet-600 tracking-wider">{e.tag}</p>
                  <h4 className="text-xl font-bold text-black mt-1">{e.title}</h4>
                  <p className="text-lg leading-relaxed text-black mt-2">{e.desc}</p>
                  <p className="text-sm font-bold text-violet-600 pt-3">→ {e.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 오리지널 콘텐츠 허브 ─────────────────────────────────── */}
      <section className="min-h-screen flex items-center py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-20 w-full">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-violet-600 tracking-widest uppercase">ONE SOURCE HUB</p>
            <h3 className="text-3xl md:text-5xl font-black text-black leading-snug">
              모든 채널로 뻗어 나갈
              <br />
              콘텐츠의 원천
            </h3>
            <p className="text-lg md:text-xl text-black">
              홈페이지 안에 오리지널 허브를 먼저 세웁니다.
              <br />
              <span className="text-black/60">(SNS 배포·운영 대행은 별도 서비스입니다)</span>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div
              className="px-10 py-6 rounded-2xl text-white font-bold text-xl"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
            >
              홈페이지 콘텐츠 허브
            </div>
            <div className="w-px h-12 bg-violet-200" />
            <div className="relative flex flex-wrap justify-center gap-x-16 gap-y-10 pt-4">
              <div className="absolute top-0 left-[8%] right-[8%] h-px bg-violet-200" />
              {CHANNELS.map((c) => (
                <div key={c} className="flex flex-col items-center gap-4">
                  <div className="w-px h-12 bg-violet-200" />
                  <div className="px-7 py-5 rounded-xl bg-white text-black text-lg font-semibold whitespace-nowrap" style={{ boxShadow: CARD_SHADOW }}>
                    {c}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 임팩트 카피 ──────────────────────────────────────────── */}
      <section className="min-h-[55vh] flex items-center justify-center py-24 px-6 text-center" style={{ background: '#0a0a0f' }}>
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl md:text-5xl font-black text-white leading-snug">
            10%의 디자인에 속지 마세요.
            <br />
            승부는 바다 밑 90%에서 갈립니다.
          </h3>
          <p className="text-lg md:text-xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
            남들이 예쁜 껍데기에 예산을 쓸 때,
            <br />
            아벨은 AI가 읽고 인용하는 보이지 않는 90%의 뼈대를 만듭니다.
          </p>
        </div>
      </section>

      {/* ─── 3초 자가진단 ─────────────────────────────────────────── */}
      <section className="min-h-[80vh] flex items-center py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto w-full space-y-8 text-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-violet-600 tracking-widest uppercase">3초 자가진단</p>
            <h3 className="text-2xl md:text-4xl font-black text-black leading-snug">
              주소창 끝에 /robots.txt 만 붙여보세요.
            </h3>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 text-left" style={{ boxShadow: CARD_SHADOW }}>
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 ml-3 bg-white rounded-md px-4 py-2 border border-gray-200">
                <span className="font-mono text-sm md:text-base text-black">
                  mydentalclinic.com<span className="font-bold text-red-500">/robots.txt</span>
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8 font-mono text-sm md:text-base" style={{ background: '#0a0a0f', color: 'rgba(255,255,255,0.8)' }}>
              User-agent: *
              <br />
              <span className="text-red-400 font-bold">Disallow: /</span>
            </div>
          </div>

          <p className="text-base text-black">이 화면이 보인다면, AI 크롤러가 이미 차단된 상태입니다.</p>

          <a
            href="#diagnosis"
            className="inline-block px-8 py-4 rounded-lg text-white font-bold text-lg transition-all hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
          >
            무료 정밀 진단 신청하기
          </a>
        </div>
      </section>

      {/* ─── 최종 CTA + 문의 (QUEST) ──────────────────────────────── */}
      <section id="diagnosis" className="min-h-screen flex items-center py-24 px-6" style={{ background: '#0a0a0f' }}>
        <div className="max-w-5xl mx-auto w-full">
          <div className="bg-white rounded-[32px] overflow-hidden grid lg:grid-cols-2" style={{ boxShadow: CARD_SHADOW }}>
            <div
              className="p-12 lg:p-14 text-white flex flex-col justify-center"
              style={{ background: 'linear-gradient(135deg, #1e0a3c 0%, #4c1d95 100%)' }}
            >
              <p className="text-sm font-black uppercase tracking-wider mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
                무료 기술진단
              </p>
              <ul className="space-y-5">
                {QUEST.map((q) => (
                  <li key={q.k} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white/15 text-white text-sm font-black flex items-center justify-center mt-0.5">
                      {q.k}
                    </span>
                    <span className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                      {q.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                * 선착순 매월 5개 병원 한정
              </div>
            </div>

            <div className="p-12 lg:p-14 flex flex-col justify-center bg-white">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
