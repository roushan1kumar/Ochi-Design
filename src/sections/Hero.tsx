import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger text reveal animation with smooth easing
      gsap.from('.hero-line span', {
        y: 120,
        opacity: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.3
      })

      // CTA button animation
      gsap.from('.hero-cta', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 1.2
      })

      // Scroll indicator animation
      gsap.from('.scroll-indicator', {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: 'power2.out',
        delay: 1.8
      })

      // Parallax effect on mouse move
      containerRef.current?.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20
        const y = (e.clientY / window.innerHeight - 0.5) * 20

        gsap.to('.hero-content', {
          x: x,
          y: y,
          duration: 1,
          ease: 'power2.out'
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="hero-content max-w-7xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tight">
          <div className="hero-line overflow-hidden">
            <span className="block">We Create</span>
          </div>
          <div className="hero-line overflow-hidden">
            <span className="block">Digital</span>
          </div>
          <div className="hero-line overflow-hidden">
            <span className="block text-red-500">Experiences</span>
          </div>
        </h1>

        <div className="hero-cta mt-12 md:mt-16">
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-sm text-gray-400 tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent animate-pulse" />
      </div>
    </section>
  )
}

export default Hero
