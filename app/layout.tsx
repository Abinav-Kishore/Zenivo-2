import type { Metadata } from "next";
import "./globals.css";
import AnimationProvider from "@/components/AnimationProvider";

export const metadata: Metadata = {
  title: "zenivo — Freelance Software Development",
  description:
    "Freelance software development by Abinav Kishore: web apps, mobile apps, AI automation, backend systems and APIs.",
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
