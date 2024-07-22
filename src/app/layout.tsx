import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Breadcrumb } from "@/components/Breadcrumb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Playground (niktekusho edition)",
  description: "React Playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid gap-4`}>
        <Breadcrumb></Breadcrumb>
        {children}
      </body>
    </html>
  );
}
