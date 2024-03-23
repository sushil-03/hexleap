import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const popp = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700"],
  variable: "--font-poppin",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${popp.variable}`}>{children}</body>
    </html>
  );
}
