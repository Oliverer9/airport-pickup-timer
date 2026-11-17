import type { Metadata } from "next";
import "./globals.css";

// TODO: load the typeface from the Figma style guide here with next/font,
// and point --font-sans / --font-mono in tokens.css at it.

export const metadata: Metadata = {
  title: "Airport Pickup Timer",
  description: "Know when to leave for Keflavík, not just when the plane lands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
