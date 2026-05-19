import { useRef, useState } from 'react'
import { gsap } from 'gsap'

interface MagneticButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const MagneticButton = ({ children, onClick, className = '' }: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(buttonRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleMouseLeave = () => {
    if (!buttonRef.current) return

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    })
    setIsHovering(false)
  }

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className={`interactive relative px-8 py-4 bg-ochi-light text-ochi-black font-semibold rounded-full overflow-hidden transition-colors duration-300 hover:bg-ochi-accent hover:text-white ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}

export default MagneticButton
