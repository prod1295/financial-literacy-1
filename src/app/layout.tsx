import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Financial Literacy for Kids | Dublin, California",
    template: "%s | Financial Literacy for Kids",
  },
  description:
    "A student-led program offering free, practical financial literacy workshops for elementary school students in the Dublin area. Founded by Alex Lam.",
  applicationName: "Financial Literacy for Kids",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
