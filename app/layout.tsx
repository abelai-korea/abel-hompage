import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "naver-site-verification": "819560ce6e4e2924f24deb7d7786f3f2a03cca36",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-KV79757NCV" />
    </html>
  );
}
