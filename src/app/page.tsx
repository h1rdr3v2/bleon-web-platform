import Hero from '@/components/app/Hero'
import About from '@/components/app/About'
import Footer from '@/components/app/Footer'
import Navbar from '@/components/app/Navbar'
import Contact from '@/components/app/Contact'
import Services from '@/components/app/Services'

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
