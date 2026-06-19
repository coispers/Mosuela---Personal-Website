"use client"

import dynamic from "next/dynamic"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Timeline } from "@/components/timeline"

const AnimatedShaderBackground = dynamic(
  () => import("@/components/animated-shader-background"),
  { ssr: false },
)

export default function Home() {
  return (
    <main className="min-h-screen subtle-grid relative">
      <AnimatedShaderBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
