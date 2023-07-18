import './globals.css'
import { Oswald } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'


const oswald = Oswald({ subsets: ['latin'] })

export const metadata = {
  title: 'Ozangeles',
  description: 'Ozangeles FC for Victory Cup in Bucharest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={oswald.className}>
          <Nav />
          {children}
          <Footer />
      </body>
    </html>
  )
}
