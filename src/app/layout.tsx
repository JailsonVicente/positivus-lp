import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";


const Space = Space_Grotesk({
  weight: ['400', '700', '500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Positivus Landing Page",
  description: "Study case by Jailson Vicente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Space.className}>{children}</body>
    </html>
  );
}
