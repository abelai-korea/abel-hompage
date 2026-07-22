'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CARD_SHADOW = '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)';

interface FeaturedPost {
  id: number;
  slug: string;
  titleHtml: string;
  titleText: string;
  category?: string;
  date: string;
  thumbnail?: string;
}

export default function BlogFeaturedHero({ posts }: { posts: FeaturedPost[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = posts[activeIndex];

  if (!active) return null;

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-14">
      {/* 프리뷰 */}
      <Link
        href={`/${active.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 order-2 md:order-1"
        style={{ boxShadow: CARD_SHADOW }}
      >
        <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
          {active.thumbnail ? (
            <Image
              key={active.id}
              src={active.thumbnail}
              alt={active.titleText}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-white text-4xl font-black"
              style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #4338CA 100%)' }}
            >
              A
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2 text-xs text-gray-400">
            {active.category && <span className="font-medium text-indigo-600">{active.category}</span>}
            {active.category && <span>·</span>}
            <span>{active.date}</span>
          </div>
          <h3
            className="text-xl font-bold text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors"
            dangerouslySetInnerHTML={{ __html: active.titleHtml }}
          />
        </div>
      </Link>

      {/* 목록 */}
      <div className="order-1 md:order-2 flex flex-col justify-center gap-1">
        {posts.map((post, i) => (
          <button
            key={post.id}
            onClick={() => setActiveIndex(i)}
            className={`text-left px-5 py-4 rounded-xl transition-colors flex items-start gap-4 ${
              i === activeIndex ? 'bg-indigo-50' : 'hover:bg-gray-100'
            }`}
          >
            <span
              className={`text-sm font-black tabular-nums mt-0.5 ${
                i === activeIndex ? 'text-indigo-600' : 'text-gray-300'
              }`}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              className={`text-base font-bold leading-snug line-clamp-2 ${
                i === activeIndex ? 'text-slate-900' : 'text-gray-500'
              }`}
              dangerouslySetInnerHTML={{ __html: post.titleHtml }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
