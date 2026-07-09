'use client';

import { useEffect, useRef, useState } from 'react';

interface TocItem {
  href: string;
  label: string;
}

export default function ArticleSidenav() {
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
      collected.push({ href, label: a.textContent || '' });
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

  const pct = (i: number) => (items.length > 1 ? (i / (items.length - 1)) * 100 : 0);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <nav className="ap-sidenav" aria-label="글 목차 네비게이션">
      <div className="ap-sidenav-rail" />
      <div className="ap-sidenav-progress" style={{ height: `${pct(activeIdx)}%` }} />
      {items.map((item, i) => (
        <a
          key={item.href}
          href={item.href}
          className={`ap-sidenav-dot${i === activeIdx ? ' is-active' : ''}`}
          style={{ top: `${pct(i)}%` }}
          onClick={(e) => handleClick(e, item.href)}
        >
          <span className="ap-sidenav-tip">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
