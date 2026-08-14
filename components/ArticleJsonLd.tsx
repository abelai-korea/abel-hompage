import { articleJsonLd, type ArticleSeoInput } from '@/lib/seo';

export default function ArticleJsonLd(props: ArticleSeoInput) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleJsonLd(props)).replace(/</g, '\\u003c'),
      }}
    />
  );
}
