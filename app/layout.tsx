import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // <--- 1. Import Fonts
import "./globals.css";

// 2. Configure Inter (Standard Font)
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

// 3. Configure JetBrains Mono (Coding Font)
const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-jetbrains" 
});

export const metadata: Metadata = {
  title: "Aniket Agarwal | SOC Analyst",
  description: "Cybersecurity Analyst specializing in Threat Detection & Automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        // 4. Use the font variables here
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}