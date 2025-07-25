import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import { Header, Footer } from "@/components/layout";
import { FloatingQuoteButton } from "@/components/ui";
import { 
  generatePageMetadata, 
  generateOrganizationSchema, 
  generateLocalBusinessSchema,
  generateWebSiteSchema 
} from "@/lib/structured-data";

export const metadata: Metadata = generatePageMetadata({
  title: "Palitha Aluminium - Precision Crafted. Built to Last.",
  description: "Professional aluminum fabrication services for residential and commercial projects. Windows, doors, facades, and custom aluminum work.",
  keywords: [
    "aluminum fabrication",
    "aluminum windows", 
    "aluminum doors",
    "curtain walls",
    "commercial aluminum",
    "residential aluminum",
    "custom fabrication",
    "aluminum railings",
    "California aluminum contractor",
    "architectural aluminum"
  ]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema()
  const localBusinessSchema = generateLocalBusinessSchema()
  const webSiteSchema = generateWebSiteSchema()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema)
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
        <ThemeProvider>
          {/* Skip Navigation Link for Accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-electric-blue focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue"
          >
            Skip to main content
          </a>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main id="main-content" className="flex-1 pt-20">
              {children}
            </main>
            <Footer />
            <FloatingQuoteButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
