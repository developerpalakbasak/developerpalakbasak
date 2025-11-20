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
      <body className={`${spaceGrotesk.variable} font-sans antialiased pt-5 pb-5  sm:px-5 bg-background text-foreground`}>
       <Providers>{children}</Providers>
      </body>
    </html>
  );
}
