import type { Metadata } from "next";
import localFont from "next/font/local";
import { identity } from "@/lib/profile";
import { portfolioOpenGraph, siteUrl, socialImage } from "@/lib/site";
import "./globals.css";

const dmSans = localFont({
  src: './fonts/dm-sans.woff2',
  weight: '400 700', display: 'swap',
  variable: "--font-dm-sans",
});

const spaceGrotesk = localFont({
  src: './fonts/space-grotesk.woff2',
  weight: '400 700', display: 'swap',
  variable: "--font-space-grotesk",
});
const ibmPlexMono = localFont({variable: "--font-ibm-plex-mono", display: 'swap', src: [{path: './fonts/ibm-plex-mono-400.woff2', weight: '400'}, {path: './fonts/ibm-plex-mono-500.woff2', weight: '500'}]});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {default: `${identity.name} — ${identity.headline}`, template: `%s | ${identity.name}`},
  description:
    "The personal portfolio of Raey Maulana Yunus. Explore web applications, systems architecture, project leadership, and personal software projects.",
  openGraph: portfolioOpenGraph,
  twitter: {card: 'summary_large_image', images: [socialImage]},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
