import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    if (!cursor || !follower) return

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      })

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    // Hover effect on interactive elements
    const handleMouseEnter = () => {
      setIsHovering(true)
      gsap.to(cursor, { scale: 2, duration: 0.3 })
      gsap.to(follower, { scale: 2, duration: 0.3 })
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      gsap.to(cursor, { scale: 1, duration: 0.3 })
      gsap.to(follower, { scale: 1, duration: 0.3 })
    }

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor fixed w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 z-50 hidden md:block"
      />
      <div
        ref={followerRef}
        className="custom-cursor fixed w-8 h-8 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2 z-50 hidden md:block"
      />
    </>
  )
}

export default CustomCursor
