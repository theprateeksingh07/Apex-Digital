import type { Metadata } from "next";
import "./globals.css";
import CursorDot from "@/components/CursorDot";

export const metadata: Metadata = {
  title: "Apex Digital",
  description: "We help startups and small businesses build a strong, modern digital identity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CursorDot />
        {children}
      </body>
    </html>
  );
}
