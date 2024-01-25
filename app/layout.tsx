import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="px-3 py-4">
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
