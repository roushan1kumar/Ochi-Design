import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Project Alpha',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  },
  {
    title: 'Project Beta',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop'
  },
  {
    title: 'Project Gamma',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
  }
]

const Work = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.from('.work-title', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.work-title',
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })

      // Project cards with image reveal and parallax
      projects.forEach((_, index) => {
        const card = `.project-card-${index}`

        // Image reveal animation
        gsap.fromTo(
          `${card} .project-image`,
          {
            clipPath: 'inset(0 100% 0 0)',
            scale: 1.2
          },
          {
            clipPath: 'inset(0 0% 0 0)',
            scale: 1,
            duration: 1.5,
            ease: 'power4.inOut',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Parallax effect on images
        gsap.to(`${card} .project-image`, {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })

        // Info reveal animation
        gsap.from(`${card} .project-info`, {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 70%'
          }
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="work-title text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight">
          Selected Work
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card-${index} relative overflow-hidden rounded-2xl group`}
            >
              <div
                className="project-image aspect-video w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="project-info absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-red-500 text-sm font-semibold tracking-[0.2em]">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 tracking-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
