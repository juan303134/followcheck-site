import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FollowChecker – Private Instagram Export Analysis",
  description:
    "Import your Instagram export ZIP and analyze followers, mutuals, unfollowers, and account changes privately on your device.",
  icons: {
    icon: "/images/followcheck-logo.png",
    shortcut: "/images/followcheck-logo.png",
    apple: "/images/followcheck-logo.png",
  },
  openGraph: {
    title: "FollowChecker – Private Instagram Export Analysis",
    description:
      "Import your Instagram export ZIP and analyze followers, mutuals, unfollowers, and account changes privately on your device.",
    images: ["/images/followcheck-logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FollowChecker – Private Instagram Export Analysis",
    description:
      "Import your Instagram export ZIP and analyze followers, mutuals, unfollowers, and account changes privately on your device.",
    images: ["/images/followcheck-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}