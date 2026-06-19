'use client';

import { useEffect, useState } from 'react';

const TYPING_TEXT = '강남 임플란트 잘하는 치과 추천해줘';

export default function ChatAnimation() {
  const [typed, setTyped] = useState('');
  const [showSearching, setShowSearching] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < TYPING_TEXT.length) {
        setTyped(TYPING_TEXT.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setShowSearching(true);
          setTimeout(() => {
            setShowSearching(false);
            setShowResponse(true);
          }, 2500);
        }, 500);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full">
      {/* 탭 헤더 */}
      <div className="bg-gray-50 border-b border-gray-100 px-5 py-4 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-red-400" />
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
          <div className="w-3.5 h-3.5 rounded-full bg-green-400" />
        </div>
        <span className="text-sm text-gray-500 font-semibold">ChatGPT / Gemini / Perplexity</span>
      </div>

      <div className="p-7 space-y-5">
        {/* 사용자 메시지 */}
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
          >
            U
          </div>
          <div className="bg-gray-100 rounded-2xl rounded-tl-none px-5 py-3.5 text-base text-gray-800 font-medium">
            {typed}
            <span className="inline-block w-0.5 h-[1.1em] ml-0.5 align-middle animate-pulse" style={{ background: '#7c3aed' }} />
          </div>
        </div>

        {/* 검색 중 */}
        {showSearching && (
          <div className="flex items-center gap-2 text-base text-violet-600 font-medium pl-14">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            Searching the web…
          </div>
        )}

        {/* AI 응답 */}
        {showResponse && (
          <div className="pl-14 animate-fade-in">
            <div className="text-base text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-900 mb-3 text-base">강남에서 가장 신뢰받는 치과 3곳을 추천해 드립니다:</p>
              <ol className="space-y-2.5">
                <li className="flex gap-2.5 text-base">
                  <span className="font-black text-violet-600 flex-shrink-0">1.</span>
                  <span><strong className="text-gray-900">A 치과</strong> – 임플란트 누적 식립 3만 건 이상</span>
                </li>
                <li className="flex gap-2.5 text-base">
                  <span className="font-black text-violet-600 flex-shrink-0">2.</span>
                  <span><strong className="text-gray-900">B 치과</strong> – 보건복지부 인증 전문의 상주</span>
                </li>
                <li className="flex gap-2.5 text-base">
                  <span className="font-black text-violet-600 flex-shrink-0">3.</span>
                  <span><strong className="text-gray-900">C 치과</strong> – 당일 임플란트 가능 시스템</span>
                </li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
