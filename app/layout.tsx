import type { Metadata } from "next";
import { WhatsAppButton } from "./components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aungcrown.com"),
  title: "Custom Headwear & Apparel Manufacturer | Aung Crown",
  description:
    "Aung Crown is a one-stop custom hats, caps, apparel, socks and packaging manufacturer for global brands, with OEM/ODM support, factory production, QC and sustainable options.",
  icons: {
    icon: "/assets/brand/aung-crown-logo.jpg",
    shortcut: "/assets/brand/aung-crown-logo.jpg",
    apple: "/assets/brand/aung-crown-logo.jpg"
  },
  openGraph: {
    title: "Custom Headwear & Apparel Manufacturer | Aung Crown",
    description:
      "One-stop OEM/ODM production for custom headwear, apparel, socks, scarves, labeling and packaging.",
    type: "website",
    images: [
      {
        url: "/assets/reference/homepage-long-reference.png",
        width: 1440,
        height: 3200,
        alt: "Aung Crown homepage preview"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
