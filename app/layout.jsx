import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Sidebar from "../components/user/Sidebar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Divas",
  description: "Seu website de inspiração e criação de looks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Sidebar/> */}
        {children}
      </body>
    </html>
  );
}
