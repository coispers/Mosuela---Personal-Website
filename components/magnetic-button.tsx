"use client"

import { useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  radius?: number
  asChild?: boolean
}

export function MagneticButton({
  children,
  className = "",
  strength = 30,
  radius = 200,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distX = e.clientX - centerX
    const distY = e.clientY - centerY
    const distance = Math.sqrt(distX * distX + distY * distY)

    if (distance < radius) {
      const pull = (1 - distance / radius) * strength
      x.set((distX / distance) * pull)
      y.set((distY / distance) * pull)
    }
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}
