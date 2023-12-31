import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog Web App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={"m-4"}>
          <Navbar/>
          {children}
          <Footer/>
        </body>
      </UserProvider>
    </html>
  )
}
