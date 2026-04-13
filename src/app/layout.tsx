import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "ABIRAM RAVIKUMAR | Intelligent Systems Developer",
  description: "Abiram Ravikumar builds fast, modern, and intelligent digital products using Next.js and React. Focus on high performance, design, and user experience.",
  keywords: ["ABIRAM RAVIKUMAR", "intelligent systems developer", "nextjs portfolio", "web developer", "react developer", "modern web design"],
  openGraph: {
    title: "ABIRAM RAVIKUMAR | Portfolio",
    description: "Expertly crafted Next.js web applications with a focus on speed and aesthetic.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-inter overflow-x-hidden transition-colors duration-500`}>
        {children}
      </body>
    </html>
  );
}
