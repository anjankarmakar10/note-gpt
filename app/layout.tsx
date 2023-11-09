import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "NoteGPT",
  description: "AI Powered note taking app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <main>{children}</main>
        </body>
        <Toaster />
      </html>
    </ClerkProvider>
  );
}
