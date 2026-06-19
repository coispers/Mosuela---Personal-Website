"use client"

import { useRef, useState } from "react"
import { useActiveSection } from "@/hooks/use-active-section"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence, animate } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { smoothScrollTo } from "@/lib/utils"

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "timeline", label: "Timeline" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

const sectionIds = navLinks.map((l) => l.id)

export function Navigation() {
  const activeId = useActiveSection(sectionIds)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const islandRef = useRef<HTMLDivElement>(null)

  const isExpanded = isHovered || isMobileMenuOpen
  const activeLabel = navLinks.find((l) => l.id === activeId)?.label

  function handleNavClick(id: string) {
    if (islandRef.current) {
      animate(islandRef.current, { scale: [1, 1.02, 1] }, { duration: 0.35, ease: "easeInOut" })
    }

    setIsMobileMenuOpen(false)
    smoothScrollTo(id)
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        ref={islandRef}
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`flex items-center bg-black/90 backdrop-blur-xl border border-white/10 shadow-lg ${
          isExpanded ? "rounded-full px-3 py-2 md:px-4" : "rounded-full px-5 py-2.5"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isExpanded ? (
          <div className="flex items-center gap-2 text-sm font-medium text-white/90 whitespace-nowrap">
            <span className="font-semibold">
              FM<span className="text-blue-400">.</span>
            </span>
            {activeLabel && (
              <>
                <span className="text-white/30">&mdash;</span>
                <span className="text-white/70">{activeLabel}</span>
              </>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-between w-full gap-4">
            <button
              onClick={() => handleNavClick("hero")}
              className="text-sm font-semibold text-white/90 shrink-0 hover:text-white/70 transition-colors"
            >
              FM<span className="text-blue-400">.</span>
            </button>

            <div className="hidden md:flex items-center gap-5">
              {navLinks.map((link) => {
                const isActive = activeId === link.id
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative text-xs transition-colors ${
                      isActive
                        ? "text-white font-medium"
                        : "text-white/60 hover:text-white/90"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-white/70"
                      />
                    )}
                  </button>
                )
              })}
            </div>

            <div className="hidden md:flex items-center gap-2 text-white">
              <ThemeToggle />
              <Button
                size="sm"
                className="bg-white/10 text-white hover:bg-white/20 rounded-full border border-white/10 h-8 text-xs shadow-none"
                asChild
              >
                <a href="/mosuela-resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-2 md:hidden text-white">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
                className="text-white/80 hover:text-white"
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {isExpanded && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-4 right-4 md:hidden rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 p-4 flex flex-col gap-3 shadow-lg"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-white/80 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/mosuela-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-400"
            >
              Resume
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
