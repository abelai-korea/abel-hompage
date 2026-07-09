import type { Metadata } from "next";
import { Inter, Space_Grotesk, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

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
    default: "ABEL | AI 마케팅 에이전시 — GEO·AEO 구조 설계",
    template: "%s | ABEL",
  },
  description:
    "SEO를 넘어 GEO·AEO까지. 병원과 브랜드가 ChatGPT·Gemini·Perplexity 답변에 인용되도록 구조를 설계하는 AI 마케팅 에이전시 아벨(ABEL). 권역별 쿼터제로 상권을 보호합니다.",
  keywords: ["AI 마케팅 에이전시", "GEO", "AEO", "SEO", "아벨", "ABEL", "ChatGPT 최적화"],
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
      url: "https://abel-ai.com",
      logo: "https://abel-ai.com/logo.png",
      description:
        "SEO를 넘어 GEO·AEO까지. 병원과 브랜드가 ChatGPT·Gemini·Perplexity 답변에 인용되도록 구조를 설계하는 AI 마케팅 에이전시.",
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
      </body>
      <GoogleAnalytics gaId="G-KV79757NCV" />
    </html>
  );
}
