import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thesis Viewer | Virtue VC",
  description: "Investment thesis research and analysis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen">
        <header className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="font-mono font-bold text-lg tracking-tight">
              Virtue
            </a>
            <nav className="flex gap-6 text-sm text-gray-600">
              <a href="/" className="hover:text-accent transition-colors">
                Theses
              </a>
              <a
                href="https://www.virtuevc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Website
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
