import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Replication Test",
  description: "Pixel-perfect responsive component",
};

const manrope = localFont({
  src: [
    {
      path: "../public/fonts/manrope/Manrope-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/manrope/Manrope-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/manrope/Manrope-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/manrope/Manrope-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
});

const prRightSlab = localFont({
  src: [
    {
      path: "../public/fonts/pr-right-slab/PP Right Slab - Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-pr-slab",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${prRightSlab.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
