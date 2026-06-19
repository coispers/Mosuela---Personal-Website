"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Timeline } from "@/components/timeline"

export default function Home() {
  return (
    <main className="min-h-screen subtle-grid relative">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
    </main>
  )
}
