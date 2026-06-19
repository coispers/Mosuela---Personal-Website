"use client"

import { useState, useEffect } from "react"
import { useActiveSection } from "@/hooks/use-active-section"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#timeline", label: "Timeline" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

const sectionIds = navLinks.map((l) => l.href.slice(1))

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const activeId = useActiveSection(sectionIds)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 max-w-6xl mx-auto rounded-2xl ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm border border-border/50"
          : "bg-background/50 backdrop-blur-sm border border-transparent"
      }`}
      style={{ left: "1rem", right: "1rem", maxWidth: "calc(72rem - 2rem)", marginLeft: "auto", marginRight: "auto" }}
    >
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            FM<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm transition-colors ${
                    isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                    />
                  )}
                </a>
              )
            })}
            <ThemeToggle />
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs" asChild>
              <a href="/mosuela-resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
                <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-3 pb-2 flex flex-col gap-3 overflow-hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/mosuela-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                Resume
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
