import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prince Kyei | Founder @ CV Wiser · Frontend Engineer",
  description:
    "Prince Kyei — Founder of CV Wiser and frontend engineer building AI-powered SaaS with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Prince Kyei | Founder @ CV Wiser",
    description:
      "Building CV Wiser — AI-tailored CVs, cover letters, and ATS scoring for job seekers.",
    url: "https://cvwiser.com",
    siteName: "Prince Kyei Portfolio",
    type: "website",
  },
  verification: {
    google: "Mhleg92J0NHVVgBwHWJ1yvWoE0CKLlKrAC7YMQSIYPc",
  },
  icons: {
    icon: "/logopk.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
