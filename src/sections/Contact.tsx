import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for heading
      gsap.from('.contact-heading span', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.contact-heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })

      // Description animation
      gsap.from('.contact-description', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: '.contact-description',
          start: 'top 80%'
        }
      })

      // CTA button animation with elastic easing
      gsap.from('.contact-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.6)',
        delay: 0.5,
        scrollTrigger: {
          trigger: '.contact-cta',
          start: 'top 80%'
        }
      })

      // Contact info stagger animation
      gsap.from('.contact-info > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-info',
          start: 'top 85%'
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <div className="contact-heading mb-8">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight">
            <span className="block">Let's Work</span>
            <span className="block text-red-500">Together</span>
          </h2>
        </div>

        <p className="contact-description text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Ready to bring your vision to life? Get in touch and let's create something amazing.
        </p>

        <div className="contact-cta">
          <button className="px-12 py-6 bg-white text-black font-semibold rounded-full text-lg hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>

        <div className="contact-info mt-16 flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400">
          <a href="mailto:hello@ochi.design" className="hover:text-red-500 transition-colors tracking-tight">
            hello@ochi.design
          </a>
          <span className="hidden md:block">•</span>
          <a href="tel:+1234567890" className="hover:text-red-500 transition-colors tracking-tight">
            +1 (234) 567-890
          </a>
          <span className="hidden md:block">•</span>
          <span className="tracking-tight">New York, NY</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
