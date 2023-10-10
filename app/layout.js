import { Footer, Nav } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' '>

        {children}
        {/* <div className='pt-20 transition-all duration-200'>
          <Footer />
        </div> */}
      </body>

    </html>
  )
}
