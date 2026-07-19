export interface BreadcrumbEntry {
  name: string;
  url?: string;
}

// 사이트 전역 Organization/WebSite 정보. 원래 layout.tsx에 별도 <script>로 있었는데,
// 페이지마다 BreadcrumbList가 또 다른 <script>로 추가되면서 홈페이지 기준 JSON-LD
// 스크립트가 2개가 돼(#38 미흡) 여기로 옮겨서 breadcrumbJsonLd()가 하나로 합쳐 낸다.
export const organizationGraph = [
  {
    '@type': 'Organization',
    '@id': 'https://abel-ai.com/#organization',
    name: 'ABEL',
    legalName: '주식회사 아벨',
    url: 'https://abel-ai.com',
    logo: 'https://abel-ai.com/logo.png',
    description:
      'SEO·GEO 구조 설계로 병원과 브랜드가 ChatGPT·Gemini·Perplexity 답변에 인용되도록 만드는 AI 에이전시.',
    email: 'abel.aikorea@gmail.com',
    taxID: '732-81-04102',
    founder: { '@type': 'Person', name: '강은구' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '은구비남로33번길 13-8, 3층',
      addressLocality: '유성구',
      addressRegion: '대전광역시',
      addressCountry: 'KR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'abel.aikorea@gmail.com',
    },
  },
  {
    '@type': 'WebSite',
    '@id': 'https://abel-ai.com/#website',
    name: 'ABEL',
    url: 'https://abel-ai.com',
    publisher: { '@id': 'https://abel-ai.com/#organization' },
    inLanguage: 'ko-KR',
  },
];

export function breadcrumbJsonLd(items: BreadcrumbEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ...organizationGraph,
      {
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          ...(item.url ? { item: item.url } : {}),
        })),
      },
    ],
  };
}
