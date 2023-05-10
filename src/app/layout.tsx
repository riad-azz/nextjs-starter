import { Albert_Sans as MainFont } from "next/font/google";
import "@/styles/globals.css";

export const metadata = {
  title: "Next.js Template",
  description: "Made by yours truly riad-azz",
};

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
