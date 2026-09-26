import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Creator AI Tools – Best AI Tools for Content Creators 2026",
    template: "%s | Creator AI Tools",
  },
  description:
    "Discover the best AI tools for YouTubers, bloggers, and content creators. Honest reviews, comparisons, and affiliate links for writing, video, image, audio & SEO tools.",
  keywords: [
    "AI tools for content creators",
    "best AI writing tools",
    "AI video generators",
    "AI for YouTubers",
    "AI image generators",
    "AI SEO tools",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Creator AI Tools",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
