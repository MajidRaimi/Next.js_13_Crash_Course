import { Rubik } from 'next/font/google'

import './globals.css'
import { Header } from './components';


const rubik = Rubik({
  weight: ['400'],
  subsets: ['latin']
});


export const metadata = {
  title: 'Majid Al-Raimi',
  description: 'Web & App Developer',
  keywords: 'web development, mobile development, artificial intelligence, software engineer'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        <main className=''>
          {children}
        </main>
      </body>
    </html>
  )
}
