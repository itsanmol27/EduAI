import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "@/context/UserContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduAI - Reimagine Education with AI",
  description: "Generate a wide range of educational materials tailored to your specific needs and requirements, all with just a few clicks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          <main className="min-h-screen">{children}</main>
        </UserContextProvider>
      </body>
    </html>
  );
}
