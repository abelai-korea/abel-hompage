import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '서비스 안내 | ABEL',
  description:
    'ABEL은 병원과 브랜드가 AI 검색 엔진(GEO) 안에서 더 잘 이해되도록 홈페이지 구조, 질문형 콘텐츠, FAQ·사례·신뢰 구조를 설계합니다.',
  alternates: { canonical: 'https://abel-ai.com/service' },
};

export default function ServicePage() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 pt-8">
          <p className="text-xs font-black text-violet-600 uppercase tracking-widest mb-2">
            ABEL SERVICE
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-950 mb-3">
            서비스 안내
          </h1>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            아벨은 병원과 브랜드가 AI 안에서 더 잘 이해되도록 구조를 설계합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              num: '1',
              title: '홈페이지 구조',
              desc: '메인 메시지, 핵심 포지션, 카테고리 흐름, 비교 구조를 정리합니다.',
            },
            {
              num: '2',
              title: '질문형 콘텐츠',
              desc: '환자가 실제로 묻는 질문을 증상형, 추천형, 비교형으로 나눠 설계합니다.',
            },
            {
              num: '3',
              title: 'FAQ·사례·신뢰 구조',
              desc: '후기, 사례, 선택 기준, 자주 묻는 질문을 하나의 설명 구조로 묶습니다.',
            },
          ].map((item) => (
            <div key={item.num} className="bg-white rounded-2xl border-t-4 border-violet-600 p-6 shadow-sm">
              <p className="text-sm font-black text-violet-600 mb-2">{item.num}.</p>
              <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

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
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              약 100여개 항목의 정밀 진단으로 시작합니다
            </h2>
            <p className="mb-2" style={{ color: 'rgba(255,255,255,0.82)' }}>
              병원 홈페이지의 크롤링 환경, E-E-A-T 신호 등을 정밀 분석해 AI 답변 엔진이
              가장 먼저 인용하는 구조로 재설계합니다. 진단 항목은 다국어 여부 등
              홈페이지 특성에 따라 달라질 수 있습니다.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full text-white font-bold transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
          >
            상담 문의하기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
