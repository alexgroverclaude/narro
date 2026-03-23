import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Narro — Narrow down your options",
  description: "London's local discovery app. Reviews, deals, reservations — all in one place.",
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
