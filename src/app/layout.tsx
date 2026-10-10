import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/mrs-saint-delafield";
import "./globals.css";


export const metadata: Metadata = {
  title: "Rajshahi Silk House — From Yarn to Timeless Fabric",
  description: "Premium silk manufacturer and wholesale fabric supplier in Bangladesh. Indian Silk, Joysree Silk, Pure Silk and Bolaka Silk for leading fashion brands.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
