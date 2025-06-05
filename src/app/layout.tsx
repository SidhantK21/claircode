import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/navbar/footer";
import { ViewTransitions } from "next-view-transitions";


export const metadata: Metadata = {
  title: "Claircode | Web Design & Development Agency",
  description:
    "Claircode is a modern web design and development agency focused on creating stunning websites and digital experiences. We specialize in full-stack development, UI/UX design, and scalable web solutions for startups and businesses.",
  keywords: [
    "Claircode",
    "web development agency",
    "web design agency",
    "UI UX design",
    "Next.js developer",
    "React developer",
    "frontend developer",
    "backend developer",
    "full stack web development",
    "SEO optimized websites",
    "custom website development",
    "website for startups",
    "modern web design",
    "freelance web developer",
    "India based web agency"
  ],
  authors: [{ name: "Claircode Team", url: "https://claircode.com" }],
  creator: "Claircode",
  publisher: "Claircode",
  openGraph: {
    title: "Claircode | Web Design & Development Agency",
    description:
      "We help startups and businesses build modern, fast, and beautiful websites using the latest technologies like Next.js, React, Tailwind, and more.",
    url: "https://claircode.com",
    siteName: "Claircode",
    images: [
      {
        url: "https://claircode.com/og-image.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Claircode website preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claircode | Web Design & Development Agency",
    description:
      "Claircode builds fast, scalable, and beautiful websites for startups and businesses using Next.js, React, and Tailwind CSS.",
    images: ["https://claircode.com/og-image.jpg"], // Replace with your image URL
    creator: "@claircode", // Replace with your Twitter handle if you have one
  },
  metadataBase: new URL("https://claircode.com"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`antialiased `}
        >
            <Navbar/>
            {children}
            <Footer/>
        </body>
      </html>
      </ViewTransitions>

  );
}
