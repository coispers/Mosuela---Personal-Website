"use client"

import { useState, useCallback } from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { IntroOverlay } from "@/components/intro-overlay"
import { Particles } from "@/components/particles"
import { Timeline } from "@/components/timeline"
import dynamic from "next/dynamic"

const CustomCursor = dynamic(() => import("@/components/custom-cursor").then((m) => m.CustomCursor), { ssr: false })

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false)
  }, [])

  return (
    <>
      {showIntro && <IntroOverlay onComplete={handleIntroComplete} />}
      <Particles />
      <CustomCursor />
      <main className="min-h-screen subtle-grid relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
