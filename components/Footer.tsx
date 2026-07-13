import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* FAQ 배너 — 푸터 바로 위 */}
      <section
        className="border-t"
        style={{
          background: 'linear-gradient(135deg, #1e0a3c 0%, #2d1060 100%)',
          borderColor: 'rgba(124,58,237,0.3)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-xs font-black uppercase tracking-widest mb-1"
              style={{ color: '#c084fc' }}
            >
              ABEL FAQ
            </p>
            <h2 className="text-xl font-black text-white">자주 묻는 질문 300개 이상 수록</h2>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
              SEO·GEO에 대한 궁금증을 한 번에 확인하세요.
            </p>
          </div>
          <Link
            href="/seo-geo-faq"
            className="flex-shrink-0 px-8 py-3.5 rounded-full text-sm font-black text-white transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
          >
            자주 묻는 질문 보기 →
          </Link>
        </div>
      </section>

      <footer style={{ background: '#09090b', color: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* 로고 & 회사 소개 */}
            <div>
              <Link
                href="/"
                className="flex items-center gap-2 font-black text-white text-lg tracking-tight mb-3"
              >
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-black"
                  style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
                >
                  A
                </span>
                ABEL AI
              </Link>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                AI 마케팅 에이전시<br />
                병원·브랜드의 SEO·GEO 구조 설계
              </p>
            </div>

            {/* 바로가기 */}
            <div>
              <p
                className="font-bold text-sm mb-4 uppercase tracking-wider"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                바로가기
              </p>
              <nav className="flex flex-col gap-2">
                <Link href="/#problem" className="text-sm transition-colors text-white/40 hover:text-white">
                  서비스
                </Link>
                <Link href="/#why-now" className="text-sm transition-colors text-white/40 hover:text-white">
                  선점 이유
                </Link>
                <Link href="/#homepage-first" className="text-sm transition-colors text-white/40 hover:text-white">
                  홈페이지 구조
                </Link>
                <Link href="/blog" className="text-sm transition-colors text-white/40 hover:text-white">
                  칼럼
                </Link>
              </nav>
            </div>

            {/* 회사 정보 */}
            <div>
              <p
                className="font-bold text-sm mb-4 uppercase tracking-wider"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                회사 정보
              </p>
              <div className="text-sm space-y-1.5 text-white/40">
                <p>주식회사 아벨(ABEL)</p>
                <p>대표: 강은구</p>
                <p>사업자등록번호: 732-81-04102</p>
                <p>본점: 대전광역시 유성구 은구비남로33번길 13-8, 3층</p>
                <p className="mt-2">
                  <a
                    href="mailto:abelai.korea@gmail.com"
                    className="transition-colors hover:text-white"
                  >
                    abelai.korea@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div
            className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <p className="text-sm text-white/30">
              © 2026 ABEL AI. All rights reserved.
            </p>
            <Link
              href="/#contact"
              className="px-6 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
            >
              GEO 진단 신청하기
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
