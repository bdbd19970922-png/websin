import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ✅ 라우트 옵션 (항상 서버 컴포넌트에서만 export)
export const dynamic = "force-dynamic";
export const revalidate = false;         // 또는 0, false가 더 안전
export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "웹신 | 홈페이지 제작 대행 — 저비용 고품질",
  description:
    "중소기업·자영업자 맞춤형 홈페이지 제작 대행. 패키지형 템플릿 5종, 맞춤형 제작, 유지보수/광고 연동까지.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
