import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* 로고 & 회사 소개 */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-black text-white text-lg tracking-tight mb-3">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-black"
                style={{ background: 'linear-gradient(135deg, #4338CA 0%, #6528F7 100%)' }}
              >
                A
              </span>
              ABEL AI
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI 마케팅 에이전시<br />
              병원·브랜드의 GEO·AEO 구조 설계
            </p>
          </div>

          {/* 바로가기 */}
          <div>
            <p className="font-bold text-sm text-slate-300 mb-4 uppercase tracking-wider">바로가기</p>
            <nav className="flex flex-col gap-2">
              <Link href="/#problem" className="text-slate-400 text-sm hover:text-white transition-colors">서비스</Link>
              <Link href="/#why-now" className="text-slate-400 text-sm hover:text-white transition-colors">선점 이유</Link>
              <Link href="/#homepage-first" className="text-slate-400 text-sm hover:text-white transition-colors">홈페이지 구조</Link>
              <Link href="/blog" className="text-slate-400 text-sm hover:text-white transition-colors">칼럼</Link>
            </nav>
          </div>

          {/* 회사 정보 */}
          <div>
            <p className="font-bold text-sm text-slate-300 mb-4 uppercase tracking-wider">회사 정보</p>
            <div className="text-slate-400 text-sm space-y-1.5">
              <p>주식회사 아벨(ABEL)</p>
              <p>대표: 강은구</p>
              <p>사업자등록번호: 732-81-04102</p>
              <p>본점: 대전광역시 유성구 은구비남로33번길 13-8, 3층</p>
              <p className="mt-2">
                <a href="mailto:abelai.korea@gmail.com" className="hover:text-white transition-colors">
                  abelai.korea@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2026 ABEL AI. All rights reserved.</p>
          <Link
            href="/#contact"
            className="px-6 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #4338CA 0%, #6528F7 100%)' }}
          >
            GEO 진단 신청하기
          </Link>
        </div>
      </div>
    </footer>
  );
}
