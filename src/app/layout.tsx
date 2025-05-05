import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Spotlight } from "./components/Spotlight";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harrison Grias",
  description:
    "Harrison Grias – Full Stack Engineer skilled creating immersive and scalable web experiences. View projects, experience, and contact info.",
  openGraph: {
    type: "website",
    url: "http://harrisongrias.com/",
    title: "Harrison Grias",
    description:
      "Full Stack Engineer skilled creating immersive and scalable web experiences. View projects, experience, and contact info.",
    images: [
      {
        url: "http://harrisongrias.com/openGraphImage.png",
        width: 1200,
        height: 630,
        alt: "Harrison Grias Portfolio Site Meta Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harrison Grias",
    description:
      "Full Stack Engineer skilled creating immersive and scalable web experiences. View projects, experience, and contact info.",
    images: ["http://harrisongrias.com/openGraphImage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={`${roboto.variable} en scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
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
