import "./globals.css";
import CursorDot from "@/components/CursorDot";

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
