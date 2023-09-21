import type { Metadata } from "next";
import { Inter as RootFont } from "next/font/google";

import "@/styles/globals.css";
import { rootMetadata } from "@/configs/seo";

const rootFont = RootFont({ subsets: ["latin"] });

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rootFont.className}>{children}</body>
    </html>
  );
}
