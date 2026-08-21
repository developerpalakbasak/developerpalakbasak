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
// SEO Metadata configuration
export const metadata = {
  title: "Palak Basak | Full-Stack Developer & Founder of ThetaSofts",
  description:
    "Palak Basak is a Full-Stack JavaScript/TypeScript Developer and Founder of ThetaSofts, specializing in React, Next.js, Node.js, and React Native for web, mobile, and software development.",
  keywords: [
    "Palak Basak",
    "Full-Stack Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "React Native Developer",
    "Software Developer Bangladesh",
    "Software Engineer Bangladesh",
    "ThetaSofts",
    "Founder of ThetaSofts",
    "ITScholarBD",
    "Web Development",
    "Mobile App Development",
    "Software Development",
  ],
  authors: [{ name: "Palak Basak" }],
  openGraph: {
    title: "Palak Basak | Full-Stack Developer & Founder of ThetaSofts",
    description:
      "Full-Stack JavaScript/TypeScript Developer and Founder of ThetaSofts, building modern web, mobile, and software solutions.",
    url: "https://developerpalakbasak.vercel.app",
    siteName: "Palak Basak Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Palak Basak - Full-Stack Developer & Founder of ThetaSofts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palak Basak | Full-Stack Developer & Founder of ThetaSofts",
    description:
      "Full-Stack JavaScript/TypeScript Developer and Founder of ThetaSofts, specializing in web, mobile, and software development.",
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
              name: "Palak Basak",
              url: "https://developerpalakbasak.vercel.app",
              jobTitle: "Full-Stack JavaScript/TypeScript Developer & Founder",
              worksFor: {
                "@type": "Organization",
                name: "ThetaSofts",
              },
              founder: {
                "@type": "Organization",
                name: "ThetaSofts",
              },
              alumniOf: {
                "@type": "Organization",
                name: "ITScholarBD",
              },
              sameAs: [
                "https://github.com/developerpalakbasak",
                "https://www.linkedin.com/in/palak-basak-a05510208/",
              ],
            }),
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
          <main className="px-1 md:px-3 xl:px-8">{children}</main>

          {/* Global Site Footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
