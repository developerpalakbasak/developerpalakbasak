// layout.tsx
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configure the primary font for the application
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

// SEO Metadata configuration
export const metadata = {
  title: "DeveloperPalak | Senior Full-Stack & Mobile Developer",
  description: "Portfolio of Palak Basak, specialized in MERN, Next.js, and React Native development.",
  icons: "/favicon.ico",
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
      </head>

      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <Providers>
          {/* Main Navigation Header */}
          <Navbar />
          
          {/* Page Content with horizontal margin for global layout */}
          <main className="mx-10">{children}</main>
          
          {/* Global Site Footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
