"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { useTypewriter } from "@/hooks/use-typewriter"

const roles = ["Full-Stack Developer", "Backend Engineer", "CS Student"]

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function Hero() {
  const { text, isDeleting } = useTypewriter({ words: roles, typeSpeed: 70, deleteSpeed: 45, pauseDuration: 2200 })

  return (
    <section className="min-h-screen page-bg flex items-center px-4 pt-24 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={staggerItem} className="space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="chip">Calamba City, Laguna</span>
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight text-balance">
                Francois Louise C. Mosuela
              </h1>
              <div className="flex items-center gap-2 text-lg md:text-xl text-muted-foreground">
                <span>I am a</span>
                <span className="relative inline-block min-w-[160px]">
                  <span className="text-transparent bg-gradient-to-r from-primary via-accent to-accent bg-clip-text">
                    {text}
                  </span>
                  <span
                    className={`absolute -right-1 top-0.5 h-[1.1em] w-[2px] bg-accent ${
                      isDeleting ? "" : "animate-pulse"
                    }`}
                  />
                </span>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
                CS student focused on backend systems, thoughtful UI, and real-world problem solving.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#projects">
                  View Projects
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/mosuela-resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/coispers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/francois-louise-mosuela-179a68222/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:francoislouisemosuela@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <span className="text-sm text-muted-foreground">Open to entry-level full-stack or backend roles</span>
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="relative">
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-[320px] h-[320px] rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, rgba(109,40,217,0.3), rgba(6,182,212,0.3), transparent)",
                }}
              />
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/10 blur-2xl" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative glass-card rounded-3xl p-6 card-hover"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                  <Image
                    src="/profilepic2.png"
                    alt="Francois Mosuela headshot"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-6 space-y-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Currently</p>
                  <p className="text-lg font-semibold text-foreground">Computer Science student</p>
                  <p className="text-sm text-muted-foreground">
                    Batangas State University
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 mt-12 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
            Scroll to learn more
          </a>
        </motion.div>
      </div>
    </section>
  )
}
