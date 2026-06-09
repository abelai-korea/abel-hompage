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
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-w-lg mx-auto">
      {/* 탭 헤더 */}
      <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <span className="text-xs text-gray-500 font-medium">ChatGPT / Gemini / Perplexity</span>
      </div>

      <div className="p-6 space-y-4">
        {/* 사용자 메시지 */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            U
          </div>
          <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-gray-800 font-medium">
            {typed}
            <span className="inline-block w-0.5 h-4 bg-indigo-600 ml-0.5 animate-pulse" />
          </div>
        </div>

        {/* 검색 중 */}
        {showSearching && (
          <div className="flex items-center gap-2 text-sm text-indigo-600 font-medium pl-11">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            Searching the web…
          </div>
        )}

        {/* AI 응답 */}
        {showResponse && (
          <div className="pl-11 animate-fade-in">
            <div className="text-sm text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-800 mb-2">강남에서 가장 신뢰받는 치과 3곳을 추천해 드립니다:</p>
              <ol className="space-y-1.5 text-sm">
                <li className="flex gap-2"><span className="font-bold text-indigo-600">1.</span> A 치과 – 임플란트 누적 식립 3만 건 이상</li>
                <li className="flex gap-2"><span className="font-bold text-indigo-600">2.</span> B 치과 – 보건복지부 인증 전문의 상주</li>
                <li className="flex gap-2"><span className="font-bold text-indigo-600">3.</span> C 치과 – 당일 임플란트 가능 시스템</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
