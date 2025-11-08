import "@/styles/globals.css"
import "@/styles/components.css"
import { Metadata } from "next"

import { fontHeading, fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Providers from "@/components/providers"

export const metadata: Metadata = {
  title: {
    default: "Meridia",
    template: `%s | Meridia`,
  },
  description: "A powerful code editor.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
          fontMono.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
