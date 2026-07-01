// export const runtime = "nodejs";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CareerForge AI",
  description: "CareerForge AI",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      // appearance={{
      //   baseTheme: ,
      // }}
      signInFallbackRedirectUrl="/dashboard"
      signUpFallbackRedirectUrl="/onboarding"
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`} suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="white"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            {/* footer */}
            {/* <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-amber-400">
                <p>this is footer</p>
              </div>
            </footer> */}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
