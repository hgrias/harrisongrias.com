import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Spotlight } from "./components/Spotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harrison Grias",
  description: "Portfolio website for Harrison Grias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-foreground bg-background selection:text-primary min-h-screen w-full font-sans leading-relaxed antialiased selection:bg-yellow-200/10`}
      >
        <div className="__variable_20b187 group/spotlight relative">
          <Spotlight />
          {children}
        </div>
      </body>
    </html>
  );
}
