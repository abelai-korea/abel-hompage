'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface TocItem {
  href: string;
  label: string;
  sub: string;
}

interface Category {
  name: string;
  slug: string;
}

export default function ArticleSidenav({
  categories,
  currentSlug,
}: {
  categories?: Category[];
  currentSlug?: string;
}) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const targetsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('.wp-content .ap-toc ol li a')
    );
    if (links.length < 3) return;

    const targets: HTMLElement[] = [];
    const collected: TocItem[] = [];
    links.forEach((a) => {
      const href = a.getAttribute('href');
      if (!href) return;
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      targets.push(target);
      const sub = target.querySelector<HTMLElement>('.ap-sub');
      collected.push({ href, label: a.textContent || '', sub: sub?.textContent || '' });
    });
    if (targets.length < 3) return;

    targetsRef.current = targets;
    setItems(collected);

    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.35;
      let idx = 0;
      targetsRef.current.forEach((t, i) => {
        if (t.getBoundingClientRect().top + window.pageYOffset <= mid) idx = i;
      });
      setActiveIdx(idx);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  if (items.length < 3) return null;

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <nav className="ap-sidenav" aria-label="글 목차 네비게이션">
      {categories && categories.length > 0 && (
        <div className="ap-sidenav-cats">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog?blog_cat=${cat.slug}`}
              className={`ap-sidenav-cat${cat.slug === currentSlug ? ' is-active' : ''}`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      )}
      <p className="ap-sidenav-title">목차</p>
      <ul>
        {items.map((item, i) => (
          <li key={item.href} className={i === activeIdx ? 'is-active' : ''}>
            <a href={item.href} onClick={(e) => handleClick(e, item.href)}>
              {item.label}
            </a>
            {item.sub && <p className="ap-sidenav-sub">{item.sub}</p>}
          </li>
        ))}
      </ul>
    </nav>
  );
}
