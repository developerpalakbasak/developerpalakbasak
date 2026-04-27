// layout.tsx
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stars from "@/components/Stars";

// Configure the primary font for the application
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

// SEO Metadata configuration
export const metadata = {
  title: "Palak Basak | Fullstack JavaScript/TypeScript Developer",
  description: "Senior Full-Stack & Mobile Developer specializing in React, Next.js, and React Native. Currently engineering high-performance systems at ITScholarBD.",
  keywords: ["Palak Basak", "Fullstack Developer", "React Developer", "Next.js Expert", "React Native Developer", "ITScholarBD", "Software Engineer Bangladesh"],
  authors: [{ name: "Palak Basak" }],
  openGraph: {
    title: "Palak Basak | Fullstack JavaScript/TypeScript Developer",
    description: "Building scalable web and mobile solutions with precision. Currently at ITScholarBD.",
    url: "https://developerpalakbasak.vercel.app",
    siteName: "DeveloperPalak Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Palak Basak Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palak Basak | Fullstack JavaScript/TypeScript Developer",
    description: "Specialized in MERN, Next.js, and React Native development.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

/**
 * Root Layout Component
 * Defines the global structure of the application, including fonts, theme providers, and navigation.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload for lightning fast 3D loading of the hero scene */}
        <link
          rel="preload"
          href="/scene.splinecode"
          as="fetch"
          crossOrigin="anonymous"
        />
        {/* Prevent Theme Flicker: Immediately applies the correct theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme) {
                  document.documentElement.classList.add(storedTheme);
                } else {
                  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.classList.add(systemDark ? 'dark' : 'light');
                }
              })();
            `,
          }}
        />
        {/* Structured Data: JSON-LD for enhanced search snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Palak Basak",
              "url": "https://developerpalakbasak.vercel.app",
              "jobTitle": "Fullstack JavaScript/TypeScript Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "ITScholarBD"
              },
              "sameAs": [
                "https://github.com/developerpalakbasak",
                "https://www.linkedin.com/in/palak-basak-a05510208/"
              ]
            })
          }}
        />
      </head>

      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}

      >
        <Providers>
          {/* Background Animated Stars Effect (Global) */}
          <Stars />
          
          {/* Main Navigation Header */}
          <Navbar />
          
          {/* Page Content with horizontal margin for global layout */}
          <main className="px-3">{children}</main>
          
          {/* Global Site Footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
