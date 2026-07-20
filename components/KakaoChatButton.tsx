"use client";

import { useEffect } from "react";

const KAKAO_JS_KEY = "c08dbb6ffa9f50de91845a5bb8c3d1e9";
const KAKAO_CHANNEL_ID = "_hIFxgn";

declare global {
  interface Window {
    Kakao?: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Channel: {
        chat: (options: { channelPublicId: string }) => void;
      };
    };
    gtag?: (...args: unknown[]) => void;
  }
}

function ensureKakaoInit() {
  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init(KAKAO_JS_KEY);
  }
}

export default function KakaoChatButton() {
  useEffect(() => {
    ensureKakaoInit();
  }, []);

  const handleClick = () => {
    ensureKakaoInit();
    window.gtag?.("event", "kakao_channel_click", {
      event_category: "engagement",
      event_label: "floating_button",
    });
    window.Kakao?.Channel.chat({ channelPublicId: KAKAO_CHANNEL_ID });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="카카오톡 채널로 상담하기"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-105"
      style={{ background: "#FEE500" }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 3.5C6.753 3.5 2.5 6.94 2.5 11.19c0 2.71 1.75 5.09 4.39 6.46-.19.71-.7 2.6-.8 3-.13.5.18.49.38.36.16-.1 2.48-1.68 3.49-2.37.66.1 1.34.15 2.04.15 5.247 0 9.5-3.44 9.5-7.6S17.247 3.5 12 3.5z"
          fill="#191919"
        />
      </svg>
    </button>
  );
}
