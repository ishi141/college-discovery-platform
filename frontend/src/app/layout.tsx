import "./globals.css";

import Footer from "@/components/Footer";

import type { Metadata } from "next";

import Navbar from "@/components/Navbar";

import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "College Discovery Platform",
  description: "College Discovery Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body>

        <AuthProvider>

          <Navbar />

          <Toaster />

          {children}

          <Footer />

        </AuthProvider>

      </body>

    </html>

  );

}