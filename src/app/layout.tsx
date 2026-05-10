import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio | Turning Moments Into Art",
  description: "A premium creative studio specialized in cinematic photography and videography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased scroll-smooth`}>
      <body className="bg-black text-white selection:bg-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}
