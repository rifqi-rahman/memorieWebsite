import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "aos/dist/aos.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Memorie — Keep Their Stories Alive",
    template: "%s | Memorie",
  },
  description:
    "Memorie helps families preserve meaningful memories: from children’s artwork to cherished childhood moments, curated in a private archive designed for years.",
  keywords: [
    "preserve children artwork",
    "save kids drawings",
    "digital memory library",
    "family memory archive",
    "private memory app",
    "nostalgic memory app",
    "VR memory experience",
    "keep places alive",
    "iOS memory vault",
  ],
  authors: [{ name: "Memorie" }],
  creator: "Memorie",
  publisher: "Memorie",
  metadataBase: new URL("https://memorie.pages.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://memorie.pages.dev",
    siteName: "Memorie",
    title: "Memorie — Keep Their Stories Alive",
    description:
      "A warm, private memory library for parents and young adults to preserve, revisit, and relive meaningful moments.",
    images: [
      {
        url: "/AppIcon.png",
        width: 1024,
        height: 1024,
        alt: "Memorie App Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Memorie — Keep Their Stories Alive",
    description:
      "A warm, private memory library for meaningful family stories.",
    images: ["/AppIcon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/AppIcon.png",
    apple: "/AppIcon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Memorie",
      url: "https://memorie.pages.dev",
      logo: "https://memorie.pages.dev/AppIcon.png",
      description:
        "Memorie helps families preserve meaningful memories in a private and long-lasting archive.",
    },
    {
      "@type": "SoftwareApplication",
      name: "Memorie",
      operatingSystem: "iOS",
      applicationCategory: "LifestyleApplication",
      description:
        "Capture, curate, and revisit meaningful memories from family moments, childhood keepsakes, and everyday life.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head />
      <body className="grain-overlay">
        {children}
        <Script
          id="memorie-jsonld"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
