"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface IntroOverlayProps {
  onComplete: () => void
}

export function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      setTimeout(onComplete, 800)
    }, 3500)

    const handleInteraction = () => {
      clearTimeout(timer)
      setShow(false)
      setTimeout(onComplete, 800)
    }

    window.addEventListener("click", handleInteraction, { once: true })
    window.addEventListener("scroll", handleInteraction, { once: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener("click", handleInteraction)
      window.removeEventListener("scroll", handleInteraction)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f]"
        >
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 120 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-px bg-gradient-to-b from-transparent via-primary to-accent"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-5xl font-display font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-[#a78bfa] via-[#6d28d9] to-[#06b6d4] bg-clip-text text-transparent bg-[length:200%_auto] animate-pulse">
                  Welcome to my portfolio
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-muted-foreground"
              >
                <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="mx-auto">
                  <rect x="1" y="1" width="18" height="26" rx="9" stroke="currentColor" strokeWidth="2" />
                  <motion.rect
                    x="8" y="6" width="4" height="6" rx="2" fill="currentColor"
                    animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
