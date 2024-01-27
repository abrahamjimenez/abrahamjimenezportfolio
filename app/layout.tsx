import type { ReactNode } from "react";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfairDisplay",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${jetBrainsMono.variable} ${inter.variable}`}
    >
      <body className="max-w-screen-xl px-3 py-4 font-mono bg-blue-50/75 selection:text-white selection:bg-blue-700/75
      lg:flex mx-auto lg:gap-3 lg:justify-center lg:p-14 lg:py-0">
        <header className={"lg:w-1/2 lg:sticky lg:top-0 lg:max-h-screen lg:py-32"}>
          <Header />
        </header>
        <main className={"lg:w-1/2"}>{children}</main>
      </body>
    </html>
  );
}
