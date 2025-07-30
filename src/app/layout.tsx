import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";


import NavBarN from "../componet/navbar/NavBarN";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mundo banda",
  description: "Comunidad de bandas de guerras y bandas marciales de Latinoamérica y españa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ `${poppins.variable} ${geistSans.variable} ${geistMono.variable} font-poppins antialiased flex flex-col min-h-screen` }>
        
        <header className="fixed top-0 left-0 right-0 z-50">
          <NavBarN />
        </header>
        <main className="flex-1 bg-gradient-to-br from-red-600 to-red-900 w-full ">
          {children}
        </main>
        <footer className="bg-gray-300 h-28 flex items-center justify-center">
          <p className="flex text-center items-center text-sm text-gray-800">
            © {new Date().getFullYear()} zaipher
          </p>
        </footer>
       
      </body>
    </html>
  );
}
