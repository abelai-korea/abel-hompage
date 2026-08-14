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

export interface ArticleSeoInput {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}

// RankMath REST API가 yoast_head_json 같은 미리 만들어진 head 데이터를 안 주기 때문에,
// 워드프레스 핵심 필드(title/excerpt/featured media/date)만으로 직접 Article 스키마를 만든다.
// 어떤 SEO 플러그인을 쓰든(또는 REST 노출 설정이 꺼져있든) 흔들리지 않도록 하기 위함.
export function articleJsonLd(input: ArticleSeoInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    ...(input.image ? { image: [input.image] } : {}),
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': input.url },
    author: { '@type': 'Organization', name: 'ABEL', url: 'https://abel-ai.com' },
    publisher: {
      '@type': 'Organization',
      name: 'ABEL',
      url: 'https://abel-ai.com',
      logo: { '@type': 'ImageObject', url: 'https://abel-ai.com/logo.png' },
    },
  };
}

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
