import type { Metadata } from "next";
import { Outfit } from 'next/font/google';
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const outfit = Outfit({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Food Delivery Website - admin",
  description: "This is website's admin panel",
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased bg-[#fcfcfc] text-lg md:text-xl`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
