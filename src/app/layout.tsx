import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Spotlight } from "./components/Spotlight";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harrison Grias",
  description:
    "Harrison Grias – Full Stack Engineer skilled creating immersive and scalable web experiences. View projects, experience, and contact info.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={`${inter.variable} en scroll-smooth`}>
      <body
        className={`text-foreground bg-background selection:text-primary min-h-screen w-full font-sans leading-relaxed antialiased selection:bg-yellow-200/10`}
      >
        <div className="relative">
          <Spotlight />
          {children}
        </div>
      </body>
    </html>
  );
}
