import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import TanstackQueryProvider from "@/components/providers/tanstack-query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://dhhnews.vercel.app/"),
  title: {
    default: "DHH News - Home",
    template: `DHH News - %s`,
  },
  description:
    "Welcome to DHH News, your go-to source for all the latest DHH-related news in one convenient location.",
  openGraph: {
    images: ["/images/open-graph.png"],
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            storageKey="dhh-news"
            enableSystem
          >
            <NextTopLoader color="#f97316" showSpinner={false} />

            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
