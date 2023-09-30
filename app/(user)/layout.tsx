import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";
import TanstackQueryProvider from "@/components/providers/tanstack-query-provider";
import GoogleAnalytics from "../../components/custom/google-analytics";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "DHH News";
const APP_DESCRIPTION =
  "Welcome to DHH News, your go-to source for all the latest DHH-related news in one convenient location.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dhhnews.vercel.app/"),
  applicationName: APP_NAME,
  title: {
    default: `${APP_NAME} - Home`,
    template: `${APP_NAME} - %s`,
  },
  description: APP_DESCRIPTION,
  verification: {
    google: "",
  },

  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: [
    "desi hip hop",
    "hip hop",
    "music news",
    "indian hip hop",
    "rap",
    "rappers",
    "hip hop artists",
    "bollywood rap",
    "hip hop culture",
    "urban music",
    "hip hop community",
    "hip hop events",
    "hip hop lifestyle",
  ],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Sahil Verma" },
    { name: "Sahil Verma", url: "https://sahilverma.dev/" },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",

  openGraph: {
    type: "website",
    url: "https://dhhnews.vercel.app/",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: ["/images/open-graph.png"],
  },
  other: {
    "google-site-verification": "sv7VdNrqX_97aBYi4EYratZtvoDqinmGGM9XALGtb70",
  },
  icons: [
    { rel: "apple-touch-icon", url: "/icon-192x192.png" },
    { rel: "icon", url: "/images/favicon.ico" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
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
