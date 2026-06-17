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
    }, 5000)

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
          <div className="relative flex flex-col items-center gap-10">
            {/* Envelope */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
              style={{ perspective: 1000 }}
            >
              <div className="relative w-80 sm:w-96 h-64 sm:h-72">
                {/* Interior background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#12121a] to-[#0a0a0f] rounded-xl border border-primary/15" />

                {/* Letter */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-x-3 bottom-12 top-14 bg-[#16162a] rounded-lg border border-accent/10 p-4 sm:p-5 flex items-center justify-center shadow-xl shadow-primary/5"
                >
                  <div className="text-center flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                      {["Welcome", "to"].map((word, i) => (
                        <motion.span
                          key={word}
                          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          transition={{ delay: 2.4 + i * 0.12, duration: 0.5, ease: "easeOut" as const }}
                          className="text-lg sm:text-xl md:text-2xl font-display font-semibold tracking-tight bg-gradient-to-r from-[#a78bfa] via-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </div>
                    <motion.span
                      initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ delay: 2.64, duration: 0.5, ease: "easeOut" as const }}
                      className="text-lg sm:text-xl md:text-2xl font-display font-semibold tracking-tight bg-gradient-to-r from-[#a78bfa] via-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent"
                    >
                      Francois Mosuela&rsquo;s
                    </motion.span>
                    <div className="flex items-center gap-2">
                      {["Personal", "Portfolio"].map((word, i) => (
                        <motion.span
                          key={word}
                          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          transition={{ delay: 2.76 + i * 0.12, duration: 0.5, ease: "easeOut" as const }}
                          className="text-lg sm:text-xl md:text-2xl font-display font-semibold tracking-tight bg-gradient-to-r from-[#a78bfa] via-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.2, duration: 0.6 }}
                      className="pt-1"
                    >
                      <div className="w-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-1.5" />
                      <p className="text-[10px] text-muted-foreground/60">
                        Francois Louise C. Mosuela
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Envelope back — 4 triangular flaps all peeling outward from center */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  {/* Left flap — peels left */}
                  <motion.div
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: -115 }}
                    transition={{ delay: 0.9, duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute top-0 left-0 w-1/2 h-full"
                    style={{
                      clipPath: 'polygon(0 0, 50% 50%, 0 100%)',
                      transformOrigin: '0% 50%',
                      backfaceVisibility: 'hidden',
                      background: '#1a1a2e',
                    }}
                  />

                  {/* Right flap — peels right */}
                  <motion.div
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: 115 }}
                    transition={{ delay: 0.95, duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute top-0 right-0 w-1/2 h-full"
                    style={{
                      clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)',
                      transformOrigin: '100% 50%',
                      backfaceVisibility: 'hidden',
                      background: '#1a1a2e',
                    }}
                  />

                  {/* Bottom flap — peels down */}
                  <motion.div
                    initial={{ rotateX: 0 }}
                    animate={{ rotateX: -115 }}
                    transition={{ delay: 1.0, duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute bottom-0 inset-x-0 h-1/2"
                    style={{
                      clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
                      transformOrigin: '50% 100%',
                      backfaceVisibility: 'hidden',
                      background: '#1a1a2e',
                    }}
                  />

                  {/* Top flap — rotates backward in 3D (last child = on top) */}
                  <motion.div
                    initial={{ rotateX: 0 }}
                    animate={{ rotateX: -115 }}
                    transition={{ delay: 0.9, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                      transformOrigin: '50% 0%',
                      backfaceVisibility: 'hidden',
                      background: '#1a1a2e',
                    }}
                    className="absolute top-0 inset-x-0 h-1/2"
                  >
                    {/* Fold line decoration */}
                    <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                    {/* Wax seal */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
                    >
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 10px rgba(109,40,217,0.3)",
                            "0 0 25px rgba(109,40,217,0.6)",
                            "0 0 10px rgba(109,40,217,0.3)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4H2l10 8L2 20h20l-10-8z" />
                          <path d="M2 4l10 8 10-8" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Outer border ring */}
                <div className="absolute inset-0 rounded-xl border border-primary/25 pointer-events-none" />
              </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.0, duration: 0.6 }}
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-muted-foreground"
              >
                <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="mx-auto">
                  <rect x="1" y="1" width="18" height="26" rx="9" stroke="currentColor" strokeWidth="2" />
                  <motion.rect
                    x="8"
                    y="6"
                    width="4"
                    height="6"
                    rx="2"
                    fill="currentColor"
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
