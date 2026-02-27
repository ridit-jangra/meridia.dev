import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Github } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const inter = Inter({
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meridia",
  description: "Created by ridit jangra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TooltipProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${jetbrains.variable} ${jakarta.variable} antialiased`}
        >
          {children}
        </body>

        <a
          href="https://github.com/ridit-jangra/Meridia"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-10 right-10 z-50 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors text-white/80 p-2"
        >
          <Github />
        </a>
      </TooltipProvider>
    </html>
  );
}
