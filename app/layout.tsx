import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "株式会社kanata | 人材紹介・採用支援・採用SaaS",
  description:
    "株式会社kanataは、有料職業紹介事業・採用業務代行（RPO）・採用管理SaaS「C-Link」を提供する人材・採用支援会社です。",
  openGraph: {
    title: "株式会社kanata",
    description: "人とキャリアの、その先へ。",
    url: "https://kanata.careers",
    siteName: "株式会社kanata",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full scroll-smooth">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
