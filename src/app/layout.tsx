import { Albert_Sans as MainFont } from "next/font/google";
import "@/styles/globals.css";
import { siteMetadata } from "@/config/seo";

export const metadata = { ...siteMetadata };

const mainFont = MainFont({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mainFont.className}>
      <body>{children}</body>
    </html>
  );
}
