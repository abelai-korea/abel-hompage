import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center">
        <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: '#7c3aed' }}>
          404
        </p>
        <h1 className="text-3xl font-black text-gray-900 mb-4">페이지를 찾을 수 없어요</h1>
        <p className="text-gray-600 mb-10">
          주소가 바뀌었거나 삭제된 페이지예요. 아래에서 원하는 곳으로 이동해주세요.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-3 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
          >
            홈으로 가기
          </Link>
          <Link
            href="/seo-geo-faq"
            className="px-6 py-3 rounded-full text-sm font-bold text-gray-700 border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            자주 묻는 질문 보기
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 rounded-full text-sm font-bold text-gray-700 border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            칼럼 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
