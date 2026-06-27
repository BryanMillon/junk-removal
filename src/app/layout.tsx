import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Junk Removal LLC | Atlanta, GA — 24/7 Same-Day Service",
  description:
    "Professional junk removal in Atlanta, GA. Free upfront estimates, same-day service available 24/7. Furniture, appliances, debris & more. Call (404) 409-8928.",
  keywords: [
    "junk removal Atlanta",
    "Atlanta junk removal",
    "same day junk removal Atlanta GA",
    "furniture removal Atlanta",
    "appliance removal Atlanta",
  ],
  openGraph: {
    title: "Junk Removal LLC | Atlanta, GA",
    description: "Fast, reliable junk removal. Free estimates. Call (404) 409-8928.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
