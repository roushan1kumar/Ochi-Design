import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Custom hook for ScrollTrigger animations
 * @param callback - Function that receives GSAP context
 * @param dependencies - Array of dependencies to re-run animation
 */
export const useScrollTrigger = (
  callback: (context: gsap.Context) => void,
  dependencies: any[] = []
) => {
  const scope = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(ctx)
    }, scope)

    return () => ctx.revert()
  }, dependencies)

  return scope
}
