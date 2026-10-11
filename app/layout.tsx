import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GLOPHRA — Collection 01 / Electric Presence",
  description: "Explore GLOPHRA Collection 01: precision tailoring shaped by light, structure and movement.",
  icons: { icon: "/assets/favicon.jpg", shortcut: "/assets/favicon.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
