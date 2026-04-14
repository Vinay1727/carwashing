import type { Metadata } from "next";
import "./globals.css";
import "@/styles/animations.css";

export const metadata: Metadata = {
  title: "AquaShine Car Care | Premium Car Wash & Detailing in Hyderabad",
  description:
    "Professional car wash and detailing services in Hyderabad. Exterior wash, interior detailing, ceramic coating, and paint protection. Book online in 60 seconds.",
  keywords: ["car wash hyderabad", "car detailing", "ceramic coating", "car care", "AquaShine"],
  openGraph: {
    title: "AquaShine Car Care | Premium Car Wash & Detailing",
    description: "Professional car wash and detailing services with cutting-edge technology and eco-friendly products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
