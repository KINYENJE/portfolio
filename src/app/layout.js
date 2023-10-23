import FooterSection from './components/FooterSection'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  icons: {
    icon: '/logo-icon/logo.jpg',
  },
  title: 'KINYENJE Portfolio',
  description: 'Developed using Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Toaster position='top-center' toastOptions={{
          duration: 3000,
          className: 'bg-green-500, text-black',
          success: {
            duration: 3000,
            
          },
          }} />
        <Navbar />  
        {children}
        
      </body>
    </html>
  )
}
