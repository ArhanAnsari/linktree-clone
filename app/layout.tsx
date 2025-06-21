import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linktree Clone",
  description: "A full stack Linktree clone built with Next.js 15 by Arhan Ansari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 font-sans min-h-screen`}
      >
        <Navbar />
        <main className="min-h-screen flex flex-col items-center justify-center">
          <div className="max-w-3xl w-full p-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
