import type { Metadata } from "next";
import "./globals.css";
import AnimationProvider from "@/components/AnimationProvider";

export const metadata: Metadata = {
  title: "zenivo — Digital Product Development Team",
  description:
    "We build scalable digital products, apps, and automation systems for startups and growing businesses.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AnimationProvider />
        {children}
      </body>
    </html>
  );
}
