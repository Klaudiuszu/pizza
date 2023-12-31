import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../styles/all.scss';
import HeroInfo from '@/components/HeroInfo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'pizza',
  description: 'pizza page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <HeroInfo />
        {/* <Footer /> */}
      </body>
    </html>
  )
}
