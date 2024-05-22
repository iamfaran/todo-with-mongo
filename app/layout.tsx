import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TodoProvider from "@/context/TodoProvider";
import { AuthProvider } from "@/components/AuthProvider";
import ThemeProvider from "@/context/Theme/ThemeProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("RootLayout");

  return (
    <AuthProvider>
      <ThemeProvider>
        <TodoProvider>
          <html lang="en">
            <body className={`${inter.className} relative`}>
              {children}
              <Footer />
            </body>
          </html>
        </TodoProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
