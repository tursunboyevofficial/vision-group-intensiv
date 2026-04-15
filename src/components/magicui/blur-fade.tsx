"use client"

import { useEffect, useRef, useState } from "react"

interface BlurFadeProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
  yOffset?: number
  inView?: boolean
  inViewMargin?: string
  blur?: string
  variant?: { hidden: { y: number }; visible: { y: number } }
}

/**
 * CSS-based BlurFade — Safari'da qotish bo'lmasligi uchun.
 * Framer Motion o'rniga native IntersectionObserver + CSS transition ishlatiladi.
 * Natijada animatsiya GPU'da ishlaydi, main thread bo'shaydi.
 */
export function BlurFade({
  children,
  className,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = true,
  inViewMargin = "-50px",
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(!inView)

  useEffect(() => {
    if (!inView) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { rootMargin: inViewMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [inView, inViewMargin])

  const totalDelay = 0.04 + delay

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${yOffset}px)`,
        transition: `opacity ${duration}s cubic-bezier(0.61,1,0.88,1) ${totalDelay}s, transform ${duration}s cubic-bezier(0.61,1,0.88,1) ${totalDelay}s`,
      }}
    >
      {children}
    </div>
  )
}
