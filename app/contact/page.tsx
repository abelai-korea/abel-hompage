import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '상담 문의 | ABEL',
  description:
    'ABEL GEO 정밀 진단 신청서. 병원 홈페이지의 크롤링 환경, E-E-A-T 신호 등 약 100여개 항목을 전수 분석합니다. 권역별 쿼터제로 상권을 보호합니다.',
  alternates: { canonical: 'https://abel-ai.com/contact' },
};

export default function ContactPage() {
  return (
    <>
    <section className="pt-24 pb-24 bg-gray-50">
      <BreadcrumbJsonLd
        items={[
          { name: '홈', url: 'https://abel-ai.com/' },
          { name: '상담 문의', url: 'https://abel-ai.com/contact' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 pt-8">
          <p className="text-xs font-black text-violet-600 uppercase tracking-widest mb-2">
            ABEL GEO REGISTRATION
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-gray-950 mb-3">
            상담 문의
          </h1>
          <p className="text-gray-500 text-sm">
            아벨의 GEO 정밀 진단 신청서를 작성해 주시면 영업일 1~2일 내에 연락드립니다.
          </p>
        </div>

        <div className="bg-white rounded-[40px] border border-gray-100 shadow-2xl overflow-hidden grid lg:grid-cols-2">
          {/* 왼쪽: 소개 */}
          <div
            className="p-12 lg:p-20 text-white flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, #1e0a3c 0%, #4c1d95 100%)' }}
          >
            <div>
              <span
                className="font-black text-sm uppercase tracking-wider block mb-4"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                ABEL GEO REGISTRATION
              </span>
              <h2 className="text-4xl font-black text-white mb-8 leading-tight">
                아벨의 GEO 진단 신청서
              </h2>
              <p className="text-base mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
                아벨의 GEO 정밀 진단은 AI 전문가가 원장님의 홈페이지 크롤링 환경, E-E-A-T 신호 등{' '}
                <span className="font-bold text-white">약 100여개 항목을 전수 분석</span>하는 서비스입니다.
              </p>
              <div className="p-6 bg-white/8 border border-white/15 rounded-2xl space-y-4 text-sm font-medium">
                <div className="flex gap-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  <span className="text-red-400 font-bold flex-shrink-0">🚨</span>
                  <div>
                    <span className="font-bold text-white block mb-0.5">권역별 쿼터제</span>
                    <span style={{ color: 'rgba(255,255,255,0.8)' }}>상권 보호를 위해 각 구(시)별 진료과당 딱 1개 병원만 계약합니다.</span>
                  </div>
                </div>
                <div className="flex gap-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  <span className="flex-shrink-0">🚫</span>
                  <div>
                    <span className="font-bold text-white block mb-0.5">신청 사양</span>
                    <span style={{ color: 'rgba(255,255,255,0.8)' }}>단순 가격 비교 목적이거나 AI 트렌드를 불신하는 분들은 반려됩니다.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-8 border-t border-white/10 mt-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
              <div>
                <span className="text-white font-bold">주식회사 아벨(ABEL)</span>
              </div>
              <div>
                <a href="mailto:abel.aikorea@gmail.com" className="hover:text-white transition-colors">
                  abel.aikorea@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* 오른쪽: 폼 */}
          <div className="p-12 lg:p-20 flex flex-col justify-center bg-white">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
    <div className="border-t" style={{ background: '#09090b', borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Breadcrumb
          tone="dark"
          items={[
            { name: '홈', url: 'https://abel-ai.com/' },
            { name: '상담 문의' },
          ]}
        />
      </div>
    </div>
    </>
  );
}
