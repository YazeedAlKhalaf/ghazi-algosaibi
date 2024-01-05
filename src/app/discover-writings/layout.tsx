import type { Metadata } from "next";

import "../globals.css";

import { sfArabicRounded } from "../layout";

export const metadata: Metadata = {
  title: "غازي القصيبي | اكتشف المؤلّفات",
  description:
    "غازي القصيبي: رجل دولة، دبلوماسي، تكنوقراطي، أكاديمي، شاعر، وروائي، جزء لا يتجزأ من نسيج المجتمع السعودي المعاصر.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className="scrollbar-track-primary scrollbar-thin scrollbar-thumb-outline"
    >
      <body className={sfArabicRounded.className}>{children}</body>
    </html>
  );
}