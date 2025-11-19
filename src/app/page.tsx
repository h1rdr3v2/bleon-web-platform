import Hero from '@/components/Hero'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
