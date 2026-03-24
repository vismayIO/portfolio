import type { Metadata, Viewport } from "next";
import { Fira_Code } from "next/font/google";
import { Header } from "@/components/layout/header";
import "./globals.css";

const fontSans = Fira_Code({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Vismay | Web Designer & Front-End Developer",
    template: "%s | Vismay",
  },
  description:
    "Portfolio of Vismay — a web designer and front-end developer crafting responsive websites where technologies meet creativity.",
};

export const viewport: Viewport = {
  themeColor: "#282C33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${fontSans.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
