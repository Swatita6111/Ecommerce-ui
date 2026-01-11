"use client";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";

function BodyWrapper({ children }: { children: React.ReactNode }) {
  const { dark } = useTheme();

  return (
    <body
      className={`transition-colors duration-300 min-h-screen ${
        dark ? "dark bg-dark text-white" : "bg-light text-gray-900"
      }`}
    >
      {children}
    </body>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <BodyWrapper>
          <Header />
          {children}
          <Footer />
        </BodyWrapper>
      </ThemeProvider>
    </html>
  );
}
