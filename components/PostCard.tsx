import Link from 'next/link';
import { WPPost, formatDate, stripHtml } from '@/lib/wordpress';

interface Props {
  post: WPPost;
}

export default function PostCard({ post }: Props) {
  const category = post._embedded?.['wp:term']?.[0]?.[0];
  const date = formatDate(post.date);
  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 100);
  const slug = new URL(post.link).pathname.replace(/\//g, '');

  return (
    <Link
      href={`/${slug}`}
      className="group block bg-slate-900 rounded-2xl overflow-hidden hover:bg-slate-800 transition-colors"
    >
      <div className="p-6">
        {category && (
          <span className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-3 block">
            {category.name}
          </span>
        )}
        <h3
          className="font-black text-white text-lg leading-snug mb-3 group-hover:text-indigo-300 transition-colors"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        {excerpt && (
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{excerpt}…</p>
        )}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{date}</span>
          <span className="text-indigo-400 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}
