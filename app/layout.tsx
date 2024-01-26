import type { ReactNode } from "react";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      <body className="px-3 py-4 font-mono">
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer className="border-t-2 mt-4">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
