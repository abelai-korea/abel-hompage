'use client';

import { useState } from 'react';
import Link from 'next/link';

const QUESTIONS = [
  {
    label: '환자가 홈페이지에서 가장 먼저 찾는 정보는 무엇일까요?',
    options: ['치료 방법·과정 비교', '통증·회복 기간 정보', '비용·상담 절차'],
  },
  {
    label: '이 환자는 지금 어떤 단계에 있을까요?',
    options: ['정보 탐색 초기', '병원 후보 비교 중', '상담 예약 직전'],
  },
];

export default function SelfDiagnosisDemo() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleSelect = (opt: string) => {
    setAnswers([...answers, opt]);
    setStep(step + 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  const done = step >= QUESTIONS.length;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10 max-w-2xl mx-auto">
      {!done ? (
        <>
          <p className="text-xs font-black text-violet-600 uppercase tracking-widest mb-2">
            DEMO · STEP {step + 1} / {QUESTIONS.length}
          </p>
          <h3 className="text-lg font-black text-gray-900 mb-6">{QUESTIONS[step].label}</h3>
          <div className="grid gap-3">
            {QUESTIONS[step].options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                className="text-left px-5 py-4 rounded-xl border border-gray-200 hover:border-violet-400 hover:bg-violet-50 transition-colors font-medium text-gray-700"
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <p className="text-xs font-black text-violet-600 uppercase tracking-widest mb-2">DEMO · 결과 예시</p>
          <h3 className="text-lg font-black text-gray-900 mb-3">
            선택마다 맞춤 콘텐츠와 다음 행동이 연결됩니다
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            방금 선택하신 &ldquo;{answers.join(' → ')}&rdquo; 흐름처럼, 실제 병원 홈페이지에서는
            환자의 선택 하나하나가 관련 칼럼·치료 사례로 이어지고, 마지막에는 자연스럽게 상담 신청으로
            연결되도록 설계합니다.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 rounded-full text-white font-bold text-sm transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
            >
              무료 정밀 진단 신청하기 →
            </Link>
            <button
              onClick={reset}
              className="px-6 py-3 rounded-full border border-gray-200 text-gray-500 font-bold text-sm hover:bg-gray-50 transition-colors"
            >
              다시 체험하기
            </button>
          </div>
        </>
      )}
    </div>
  );
}
