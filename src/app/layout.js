import Navbar from '@/components/navbar'
import './globals.css'
import Footer from '@/components/footer'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
