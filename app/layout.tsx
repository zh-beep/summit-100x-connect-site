import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Summit 100x Connect',
  description: 'Connect with the Summit 100x team on LinkedIn',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%230f1419" width="100" height="100"/><circle cx="50" cy="50" r="30" fill="%2360a5fa"/></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
