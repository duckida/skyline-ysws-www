import type { Metadata } from "next";
import "./globals.css";
import { LINE_Seed_JP } from "next/font/google";
import { cn } from "@/lib/utils";

const line = LINE_Seed_JP({subsets:['latin'],variable:'--font-sans', weight:["400"]});

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
      className={cn("h-full", "antialiased", "font-sans", line.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
