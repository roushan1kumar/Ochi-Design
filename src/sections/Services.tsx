import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Web Design',
    description: 'Creating stunning, user-centered digital experiences that captivate and convert.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
  },
  {
    title: 'Development',
    description: 'Building robust, scalable web applications with cutting-edge technologies.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop'
  },
  {
    title: 'Branding',
    description: 'Crafting memorable brand identities that resonate with your audience.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop'
  },
  {
    title: 'Strategy',
    description: 'Developing data-driven strategies to grow your digital presence.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  }
]

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title stagger animation
      gsap.from('.services-title', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.services-title',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })

      // Service cards stagger animation with parallax
      gsap.from('.service-card', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })

      // Parallax effect on cards
      gsap.utils.toArray('.service-card').forEach((card: any) => {
        gsap.to(card, {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="services-title text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight">
          Our Services
        </h2>

        <div className="services-container grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group overflow-hidden bg-gray-900 rounded-2xl border border-gray-800 hover:border-red-500 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-video w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${service.image})` }} />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
