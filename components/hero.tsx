"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
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
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

export function Hero() {
  const { text, isDeleting } = useTypewriter({ words: roles, typeSpeed: 70, deleteSpeed: 45, pauseDuration: 2200 })

  return (
    <section className="min-h-[100dvh] flex items-center px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl w-full">
        <motion.div
          className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr] items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={staggerItem} className="space-y-8 pt-20 lg:pt-0">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight text-balance leading-none">
                Francois Louise C. Mosuela
              </h1>
              <div className="flex items-center gap-2 text-lg md:text-xl text-muted-foreground">
                <span>I am a</span>
                <span className="inline-flex items-center text-primary">
                  {text}
                  <span
                    className={`h-[1.1em] w-[2px] bg-primary ml-0.5 ${
                      isDeleting ? "" : "animate-pulse"
                    }`}
                  />
                </span>
              </div>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl text-balance leading-relaxed">
                CS student focused on backend systems, thoughtful UI, and real-world problem solving.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs" asChild>
                <a href="#projects">
                  View Projects
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/mosuela-resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/coispers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/francois-louise-mosuela-179a68222/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:francoislouisemosuela@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <span className="text-sm text-muted-foreground ml-2">Open to entry-level roles</span>
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-sm max-w-[360px] mx-auto mt-8 lg:mt-16">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none z-10" />
                <Image
                  src="/profilepic2.png"
                  alt="Francois Mosuela headshot"
                  width={360}
                  height={450}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2" />
                  Computer Science student
                </p>
                <p className="text-xs text-muted-foreground">Batangas State University</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-12"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
            Scroll to learn more
          </a>
        </motion.div>
      </div>
    </section>
  )
}
