import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Loading = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(textRef.current, { y: 100, opacity: 0 })

      // Animate in
      gsap.to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      })

      // Animate out
      gsap.to(containerRef.current, {
        yPercent: -100,
        duration: 1,
        ease: 'power4.inOut',
        delay: 1.5
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-ochi-black z-[100] flex items-center justify-center"
    >
      <div ref={textRef} className="text-ochi-light text-4xl font-bold tracking-wider">
        LOADING
      </div>
    </div>
  )
}

export default Loading
