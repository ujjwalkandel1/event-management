import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SignedOut, SignedIn, SignInButton } from "@clerk/nextjs";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


const poppins = Poppins({ 
subsets: ["latin"],
weight: ['400', '500', '600', '700'],
variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Event",
  description: "Event is a platform for event management",
  icons: {
    icon: '/assets/'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <ClerkProvider >
    <html lang="en">
      <body className={poppins.variable}>
      <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
          
            </SignedIn>
      </header>
          <main>{children}</main>
        {children}</body>
    </html>
    </ClerkProvider>
  );
}
