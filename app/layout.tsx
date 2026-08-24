import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteDescription =
  "Our mission is to bridge the gap between great talent and growing businesses. We believe in creating meaningful connections that lead to lasting partnerships. Join us in building a future where everyone can achieve their career and hiring goals.";

export const metadata: Metadata = {
  metadataBase: new URL("https://talentrisegroup.in"),
  title: {
    default: "TalentRiseGroup — Connecting Top Talent with Leading Companies",
    template: "%s | TalentRiseGroup",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    title: "TalentRiseGroup",
    description: siteDescription,
    images: ["https://framerusercontent.com/images/im2KW5rXUmlCcgCO3eGh2nBI.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "TalentRiseGroup",
    description: siteDescription,
    images: ["https://framerusercontent.com/images/im2KW5rXUmlCcgCO3eGh2nBI.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
