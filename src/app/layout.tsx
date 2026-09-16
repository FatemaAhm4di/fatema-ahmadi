import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Fatema Ahmadi | Frontend Developer",
  description:
    "Portfolio of Fatema Ahmadi, a frontend developer focused on building thoughtful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}