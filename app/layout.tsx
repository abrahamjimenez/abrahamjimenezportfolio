import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abraham Jimenez | Web full-stack developer",
  description:
    "Here is the portfolio of Abraham Jimenez who is pursuing a Bachelor's degree in Web Design and Development from Brigham Young University-Idaho.",
  authors: [
    { name: "Abraham Jimenez" },
    { url: "https://abrahamjimenezportfolio.vercel.app/" },
  ],
  creator: "Abraham Jimenez",
  publisher: "Abraham Jimenez",
  keywords: [
    "Next.js",
    "TypeScript",
    "Tailwind",
    "CSS",
    "Vercel",
    "Prettier",
    "ESLint",
    "Concurrently",
    "FontAwesome",
    "Heroicons",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Abraham Jimenez | Web full-stack developer",
    description: "Portfolio of Abraham Jimenez",
    site: "https://abrahamjimenezportfolio.vercel.app/",
    creator: "Abraham Jimenez",
    images:
      "https://abrahamjimenezportfolio.vercel.app/abraham-jimenez-portfolio.webp",
  },
  openGraph: {
    type: "website",
    url: "https://abrahamjimenezportfolio.vercel.app/",
    title: "Abraham Jimenez | Web full-stack developer",
    description: "Portfolio of Abraham Jimenez",
    siteName: "Abraham Jimenez Portfolio",
    images: [
      {
        url: "https://abrahamjimenezportfolio.vercel.app/abraham-jimenez-portfolio.webp",
      },
    ],
  },
};

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
      className={`scroll-smooth ${playfairDisplay.variable} ${jetBrainsMono.variable} ${inter.variable}`}
    >
      <body
        className="max-w-screen-xl px-3 py-4 font-mono bg-blue-50/75 selection:text-white selection:bg-blue-700/75
      lg:flex mx-auto lg:gap-3 lg:justify-center lg:p-14 lg:py-0"
      >
        <header
          className={"lg:w-1/2 lg:sticky lg:top-0 lg:max-h-screen lg:py-32"}
        >
          <Header />
        </header>
        <main className={"lg:w-1/2"}>{children}</main>
      </body>
    </html>
  );
}
