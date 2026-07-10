import type { Metadata } from "next";
import "./globals.css";
import { LINE_Seed_JP } from "next/font/google";
import { Dela_Gothic_One } from "next/font/google";
import { cn } from "@/lib/utils";
import Script from 'next/script'

const line = LINE_Seed_JP({ subsets: ['latin'], variable: '--font-sans', weight: ["400"] });
const dela = Dela_Gothic_One({subsets:['latin'],variable:'--font-sans', weight:["400"]});

export const metadata: Metadata = {
  title: "Skyline",
  description: "Build a robot, come to Tokyo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", line.variable, "font-heading", dela.variable)}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script
            src="https://scripts.simpleanalyticscdn.com/latest.js" // Replace with your analytics URL
            strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
