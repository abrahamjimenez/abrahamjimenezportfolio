import type { ReactNode } from "react";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="px-3 py-4">
        <header>
          <h1 className="text-3xl">Abraham Jimenez</h1>
          <p>I love making websites</p>
          <p>[Github] [LinkedIn] [Email]</p>
        </header>
        <main>{children}</main>
        <footer className="border-t-2 mt-4">
          <p>
            Designed with Wireframe.cc and coded in Webstorm. Built with Next.js
            and Tailwind CSS. Deployed with Vercel.
          </p>
        </footer>
      </body>
    </html>
  );
}
