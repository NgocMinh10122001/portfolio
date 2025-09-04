import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { navLinks } from "@/fake_data/mock";
import SmoothScroll from "./_components/SmoothScroll";

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Ngoc Minh - Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} bg-dark-700   text-white `}>
      <body className="mt-6 sm:mt-5  w-full  sm:w-[87.5rem] sm:mx-auto ">
        <SmoothScroll>
          <Header navLinks={navLinks} />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
