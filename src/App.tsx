import { useEffect } from 'react'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import Services from './sections/Services'
import Work from './sections/Work'
import Contact from './sections/Contact'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    gsap.to(window, {
      scrollTo: 0,
      duration: 0
    })
  }, [])

  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Contact />
    </main>
  )
}

export default App
