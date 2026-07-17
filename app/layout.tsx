import type { Metadata } from "next";
import { Inter, Space_Grotesk, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-kr",
  weight: ["400", "500", "700", "900"],
  display: "swap",
  preload: false,
});


export const metadata: Metadata = {
  metadataBase: new URL("https://abel-ai.com"),
  title: {
    default: "ABEL | AI 마케팅 에이전시 — SEO·GEO 구조 설계",
    template: "%s | ABEL",
  },
  description:
    "SEO·GEO 구조 설계로 병원과 브랜드가 ChatGPT·Gemini·Perplexity 답변에 인용되도록 만드는 AI 마케팅 에이전시 아벨(ABEL). 권역별 쿼터제로 상권을 보호합니다.",
  keywords: ["AI 마케팅 에이전시", "GEO", "SEO", "아벨", "ABEL", "ChatGPT 최적화"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://abel-ai.com",
    siteName: "ABEL AI",
    images: [
      {
        url: "/logo.png",
        width: 1536,
        height: 1024,
        alt: "ABEL | AI 마케팅 에이전시",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "naver-site-verification": [
        "819560ce6e4e2924f24deb7d7786f3f2a03cca36",
        "a6da7996e7fe32e4194af276c28849efd5a9bc3d",
      ],
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://abel-ai.com/#organization",
      name: "ABEL",
      legalName: "주식회사 아벨",
      url: "https://abel-ai.com",
      logo: "https://abel-ai.com/logo.png",
      description:
        "SEO·GEO 구조 설계로 병원과 브랜드가 ChatGPT·Gemini·Perplexity 답변에 인용되도록 만드는 AI 마케팅 에이전시.",
      email: "abelai.korea@gmail.com",
      taxID: "732-81-04102",
      founder: { "@type": "Person", name: "강은구" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "은구비남로33번길 13-8, 3층",
        addressLocality: "유성구",
        addressRegion: "대전광역시",
        addressCountry: "KR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "abelai.korea@gmail.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://abel-ai.com/#website",
      name: "ABEL",
      url: "https://abel-ai.com",
      publisher: { "@id": "https://abel-ai.com/#organization" },
      inLanguage: "ko-KR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${spaceGrotesk.variable} ${notoSansKR.variable}`}>
      <head>
        {/* Pretendard Variable — 서비스 상세 페이지 디자인 업그레이드용. 전역 기본 폰트는 유지, .pretendard 클래스로만 opt-in */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Script id="clarity-analytics" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wt0o45smzx");`}
        </Script>
      </body>
      <GoogleAnalytics gaId="G-KV79757NCV" />
    </html>
  );
}
