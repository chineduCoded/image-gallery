import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { v4 as uuidv4 } from "uuid"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Image Gallery',
  description: 'Simple Image Gallery created by Swiperjs.',
}

export default function RootLayout({ children }) {
  const navLinks = [
    {
      id: uuidv4(),
      href: "/",
      title: "Home"
    },
    {
      id: uuidv4(),
      href: "/slides",
      title: "Slides"
    },
    {
      id: uuidv4(),
      href: "/thumbnails",
      title: "Thumbnails"
    },
    {
      id: uuidv4(),
      href: "/controlled",
      title: "Controlled"
    }
  ]
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <header className='p-6'>
          <nav className='container'>
            <ul className='flex gap-6'>
              {navLinks.map((navLink) => (
                <li key={navLink.id}>
                  <Link key={navLink.id} href={navLink.href}>{navLink.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className='px-6'>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}
