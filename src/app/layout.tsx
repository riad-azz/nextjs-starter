import { Noto_Sans as MainFont } from "next/font/google";
import "@/styles/globals.css";
import { siteMetadata } from "@/config/seo";
import Provider from "@/components/Provider";

export const metadata = { ...siteMetadata };

const mainFont = MainFont({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mainFont.className}>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
