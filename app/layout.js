import './globals.css'
import { Inter } from 'next/font/google'
import { Noto_Sans_Arabic } from 'next/font/google'
import BackgroundVideo from './components/BackgroundVideo.js'

const inter = Inter({ 
  subsets: ['latin']
})

const arabic = Noto_Sans_Arabic({ 
  subsets: ['arabic']
})

export const metadata = {
  title: 'E Trading',
  description: 'للتداول والإستثمار في الأسواق المالية',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.className} ${arabic.className}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#D4AF37" />
      </head>
      <body className={`${inter.className} ${arabic.className}`}>
        <BackgroundVideo />
        {children}
      </body>
    </html>
  )
}
