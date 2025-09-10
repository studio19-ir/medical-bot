import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Medical Bot",
  description: "MVP Medical Assistant Chatbot",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
