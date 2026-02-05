// layout.tsx
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/theme";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeveloperPalak",
  description: "Developer Palak Portfolio",
  icons: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent Theme Flicker + Respect System Theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const storedTheme = localStorage.getItem('theme');

                if (storedTheme) {
                  // Apply saved theme (light/dark)
                  document.documentElement.classList.add(storedTheme);
                } else {
                  // No saved theme → use system preference
                  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.classList.add(systemDark ? 'dark' : 'light');
                }
              })();
            `,
          }}
        />
      </head>

      <body className={`${spaceGrotesk.variable} font-sans antialiased pt-5 pb-5 sm:px-5 bg-background text-foreground`}>
        
        <Providers>{children}</Providers>
      </body>
    </html>
  );
            }
