import { breadcrumbJsonLd, type BreadcrumbEntry } from '@/lib/seo';

export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbEntry[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbJsonLd(items)).replace(/</g, '\\u003c'),
      }}
    />
  );
}
