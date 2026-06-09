'use client';

import { useState, FormEvent } from 'react';

const GAS_URL =
  'https://script.google.com/macros/s/AKfycbzP1qeFl9KWmFDF5Zt3BT6vxkmGvjaVykcAp1Fa7UECYhBi5V5DnXUPR0Al2aE0vaE/exec';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = {
      hospital: (form.elements.namedItem('hospital') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      address: (form.elements.namedItem('address') as HTMLInputElement).value,
      url: (form.elements.namedItem('url') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value || '추가 문의사항 없음',
    };

    try {
      await fetch(GAS_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch {
      alert('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-slate-800 mb-2">신청이 접수되었습니다!</h3>
        <p className="text-slate-500 text-sm">
          검토 후 영업일 1~2일 내에 연락드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h3 className="text-xl font-black text-zinc-800 mb-2">GEO 정밀 진단 신청서 심사</h3>

      <div>
        <label className="block text-sm font-black text-zinc-600 mb-2">
          병원명 및 원장님 성함
        </label>
        <input
          required
          type="text"
          name="hospital"
          placeholder="예: 아벨치과 홍길동 원장"
          className="w-full px-6 py-4 bg-zinc-100 rounded-2xl border border-transparent font-bold focus:bg-white focus:border-indigo-500 outline-none transition-all text-zinc-800"
        />
      </div>

      <div>
        <label className="block text-sm font-black text-zinc-600 mb-2">연락처</label>
        <input
          required
          type="tel"
          name="phone"
          placeholder="원장님 직통 또는 담당자 번호"
          className="w-full px-6 py-4 bg-zinc-100 rounded-2xl border border-transparent font-bold focus:bg-white focus:border-indigo-500 outline-none transition-all text-zinc-800"
        />
      </div>

      <div>
        <label className="block text-sm font-black text-zinc-600 mb-2">
          병원 정확한 주소 (지역 쿼터 확인 필수)
        </label>
        <input
          required
          type="text"
          name="address"
          placeholder="예: 서울시 강남구 역삼동"
          className="w-full px-6 py-4 bg-zinc-100 rounded-2xl border border-transparent font-bold focus:bg-white focus:border-indigo-500 outline-none transition-all text-zinc-800"
        />
      </div>

      <div>
        <label className="block text-sm font-black text-zinc-600 mb-2">
          병원 공식 홈페이지 또는 블로그 URL (없음 가능)
        </label>
        <input
          required
          type="text"
          name="url"
          placeholder="예: abel-ai.com 또는 없음"
          className="w-full px-6 py-4 bg-zinc-100 rounded-2xl border border-transparent font-bold focus:bg-white focus:border-indigo-500 outline-none transition-all text-zinc-800"
        />
      </div>

      <div>
        <label className="block text-sm font-black text-zinc-600 mb-2">
          추가 문의사항 (선택)
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="기타 문의사항을 적어주세요"
          className="w-full px-6 py-4 bg-zinc-100 rounded-2xl border border-transparent font-medium focus:bg-white focus:border-indigo-500 outline-none transition-all text-zinc-800 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-2xl text-white font-black text-base transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ background: 'linear-gradient(135deg, #4338CA 0%, #6528F7 100%)' }}
      >
        {loading ? '심사 신청서 전송 중...' : '아벨 GEO 진단 심사 신청하기 →'}
      </button>
    </form>
  );
}
