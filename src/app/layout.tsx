import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thesis Viewer | Virtue VC",
  description: "Living investment theses — read, challenge, and suggest improvements.",
  openGraph: {
    title: "Thesis Viewer | Virtue VC",
    description: "Living investment theses — read, challenge, and suggest improvements.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 group">
              <span className="font-mono text-sm text-accent">
                ◆
              </span>
              <span className="font-mono font-bold text-lg tracking-tight">
                Virtue
              </span>
            </a>
            <nav className="flex gap-4">
              <a
                href="/"
                className="px-3 py-1.5 text-sm text-gray-600 hover:text-accent border border-transparent hover:border-gray-200 rounded transition-all"
              >
                Theses
              </a>
              <a
                href="https://www.virtuevc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-sm text-gray-600 hover:text-accent border border-transparent hover:border-gray-200 rounded transition-all"
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
