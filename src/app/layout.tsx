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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-foreground bg-background selection:text-primary mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans leading-relaxed antialiased selection:bg-yellow-200/10 md:px-12 md:py-16 lg:py-0`}
      >
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
