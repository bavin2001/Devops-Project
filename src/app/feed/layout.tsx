import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@app/app/globals.scss';
import favicon from "/public/favicon.ico";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Feed | Novavi',
  description: 'Digital Destiny: Your Journey to Online Prominence',
  icons: [{ rel: "icon", url: favicon.src }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
