import type { Metadata } from "next";
import { Inter, Space_Grotesk, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import KakaoChatButton from "@/components/KakaoChatButton"; // 카카오 비즈니스 심사 완료 전까지 비활성화
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
    default: "ABEL | AI 에이전시 — SEO·GEO 구조 설계",
    template: "%s | ABEL",
  },
  description:
    "SEO·GEO 구조 설계로 병원과 브랜드가 ChatGPT·Gemini·Perplexity 답변에 인용되도록 만드는 AI 에이전시 아벨(ABEL). 권역별 쿼터제로 상권을 보호합니다.",
  keywords: ["AI 에이전시", "GEO", "SEO", "아벨", "ABEL", "ChatGPT 최적화"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://abel-ai.com",
    siteName: "ABEL AI",
    images: [
      {
        url: "/og-image.png",
        width: 1536,
        height: 864,
        alt: "ABEL | AI 에이전시",
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
        {/* 각 페이지가 자체 alternates.canonical을 지정하면 Metadata API가 layout의
            alternates를 통째로 덮어써서 여기 RSS 링크가 사라지므로, 직접 head에 박아둔다. */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="ABEL 칼럼"
          href="https://abel-ai.com/feed.xml"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* 카카오 비즈니스 심사(채널 연결) 완료 전까지 비활성화 — 심사 끝나면 주석 해제 */}
        {/* <KakaoChatButton /> */}
        {/* <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.8.1/kakao.min.js"
          strategy="afterInteractive"
        /> */}
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
