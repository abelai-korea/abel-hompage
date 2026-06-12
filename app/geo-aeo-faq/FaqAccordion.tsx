'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <button
            className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 font-bold text-slate-900 hover:text-indigo-700 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="leading-snug">{item.question}</span>
            <span
              className={`flex-shrink-0 text-indigo-600 text-lg transition-transform duration-200 ${
                openIndex === i ? 'rotate-180' : 'rotate-0'
              }`}
            >
              ↓
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 text-sm">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
