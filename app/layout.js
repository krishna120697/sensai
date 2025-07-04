import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sensai - AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <div className="grid-background"></div>
        
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="w-full bg-gray-900 text-gray-300 py-8">
  <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    <div className="text-center md:text-left">
      <h4 className="text-2xl md:text-3xl font-extrabold tracking-widest text-white">SENSAI</h4>
      <p className="text-sm mt-1 text-gray-400">
        Build smart, professional resumes in minutes with AI.
      </p>
    </div>
    <div className="flex space-x-4">
      <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
      <a href="/terms" className="hover:text-white transition">Terms of Service</a>
      <a href="/contact" className="hover:text-white transition">Contact</a>
    </div>
    <div className="flex space-x-4">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <svg className="h-5 w-5 fill-current hover:text-white transition" viewBox="0 0 24 24">
          <path d="M..." /> {/* Replace with real icon paths or use lucide-react / heroicons */}
        </svg>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <svg className="h-5 w-5 fill-current hover:text-white transition" viewBox="0 0 24 24">
          <path d="M..." />
        </svg>
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <svg className="h-5 w-5 fill-current hover:text-white transition" viewBox="0 0 24 24">
          <path d="M..." />
        </svg>
      </a>
    </div>
  </div>
  <div className="mt-6 text-center text-xs text-gray-500">
    © {new Date().getFullYear()} SENSAI. All rights reserved.
  </div>
</footer>

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
