"use client";
import { ThemeProvider } from "next-themes";

/**
 * Providers Component
 * Wraps the application with global context providers.
 * Primarily handles theme management via next-themes with system preference support.
 */
export function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system" // Default to system preference for best user experience
      enableSystem={true}   // Enable automatic switching based on OS settings
    >
      {children}
    </ThemeProvider>
  );
}
