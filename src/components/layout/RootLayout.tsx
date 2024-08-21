// app/RootLayoutClient.tsx
"use client";

import { useState, useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
      }}>
      <Header />
      <main style={{ flexGrow: 1, width: "100%" }}>{children}</main>
      <Footer />
      {showButton && (
        <button
          type="button"
          id="btn-back-to-top"
          className="rounded-full bg-secondary p-3 duration-150 ease-in-out hover:bg-secondary hover:shadow-lg focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary active:shadow-lg text-white animate-bounce"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: 50,
            right: 20,
            backgroundClip: "#214245",
          }}>
          <span className="[&>svg]:w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
