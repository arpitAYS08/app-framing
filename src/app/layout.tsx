// app/layout.tsx

import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/globals.css";
import RootLayoutClient from "../components/layout/RootLayout";
// import { favicon } from "./assets/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "App Framing",
  description: "It an ai based platform where user can upload the docs and ask question based on that doc.",
  // icons: {
  //   icon: './assets/favicon.png', // Provide the path to your favicon
  // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Additional metadata can be added here */}
      </head>
      <body className={inter.className}>
        <RootLayoutClient>{children}</RootLayoutClient> {/* Use your client component */}
      </body>
    </html>
  );
}
