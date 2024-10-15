"use client";

import "../global.css";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const getBlocks = () => {
    const blockSize = Math.max(windowWidth * 0.05, 50); // Set a minimum size for blocks
    const nbOfBlocks = 20 * Math.ceil(windowHeight / blockSize); // Total number of blocks (20 columns)

    return [...Array(nbOfBlocks)].map((_, index) => {
      const randomNoBorder = Math.random() > 0.7;
        return (
          <div
            key={index}
            onMouseEnter={(e) => colorize(e.target)}
            className={`block flex items-center justify-center ${
              randomNoBorder ? '' : 'border border-zinc-500'
            }`}
            style={{
              height: '100%',
              width: '100%',
              opacity: 0.3,
            }}
          ></div>
        );
      }
    );
  };

  const colorize = (el) => {
    el.style.backgroundColor = 'white';
    setTimeout(() => {
      el.style.backgroundColor = 'transparent';
    }, 300);
  };

  useEffect(() => {
    // Set the window size dynamically on load and on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    handleResize(); // Call once initially
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <html lang="en" className={inter.className}>
      <body className={'bg-black'}>
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(20, 1fr)",
          gridAutoRows: "1fr",
          width: "100%",
          height: "100%",
          gap: "1px",
          zIndex: 0
        }}
      >
        {getBlocks()}
      </div>
        {children}
      </body>
    </html>
  );
}
