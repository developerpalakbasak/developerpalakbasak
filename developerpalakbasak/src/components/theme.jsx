"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"  // 👈 use system theme on first visit
      enableSystem={true}    // 👈 allow system theme
    >
      {children}
    </ThemeProvider>
  );
}
