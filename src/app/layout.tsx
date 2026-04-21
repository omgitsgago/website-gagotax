import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const SITE_URL = "https://gagotax.com";
const SITE_NAME = "GagoTax";
const DEFAULT_TITLE =
  "GagoTax — Strategic Tax Savings, Proactive Planning, Seamless Service";
const DEFAULT_DESCRIPTION =
  "GagoTax is a full-service CPA firm helping business owners, entrepreneurs, and professionals reduce taxes, stay compliant, and make confident financial decisions year-round.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s · GagoTax",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  keywords: [
    "CPA firm",
    "tax planning",
    "tax strategy",
    "business tax",
    "bookkeeping",
    "S-Corp",
    "tax advisory",
    "real estate tax",
    "1099 filing",
  ],
  openGraph: {
    title: DEFAULT_TITLE,
    description:
      "A CPA partner who shows up year-round. Tax planning, accounting, and advisory for business owners and professionals.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/gagotax-logo-hd.png",
        width: 1200,
        height: 630,
        alt: "GagoTax — Strategic Tax Savings, Proactive Planning, Seamless Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description:
      "A CPA partner who shows up year-round. Tax planning, accounting, and advisory.",
    images: ["/images/gagotax-logo-hd.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/images/gagotax-logo-hd.png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "GagoTax",
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  email: "contact@gagotax.com",
  logo: `${SITE_URL}/images/gagotax-logo-hd.png`,
  image: `${SITE_URL}/images/gagotax-logo-hd.png`,
  priceRange: "$$",
  areaServed: { "@type": "Country", name: "United States" },
  sameAs: [],
  serviceType: [
    "Tax Preparation",
    "Tax Planning",
    "Bookkeeping",
    "Accounting",
    "Advisory Services",
    "Payroll Coordination",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <Script
          id="ld-json-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
