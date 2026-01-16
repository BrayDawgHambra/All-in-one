import type { Metadata } from "next"
import { Inter, Bangers } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const bangers = Bangers({ 
  weight: ["400"], 
  subsets: ["latin"], 
  variable: "--font-bangers" 
})

export const metadata: Metadata = {
  title: "RandomFun by BrayDawg",
  description: "Bored? Click Something. You won't regret this!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bangers.variable}`}>
      <body className="font-inter bg-gray-900 text-white">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
