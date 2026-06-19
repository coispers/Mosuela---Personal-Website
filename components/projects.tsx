"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { CardStack, type CardStackItem } from "@/components/ruixen/card-stack"
import { HighlightedText } from "@/components/ui/highlighted-text"

const allProjects = [
  {
    id: "rpn-simulator",
    title: "RPN Simulator",
    description:
      "The objective of this project is to visualize and simulate the process behind Reverse Polish Notation (RPN). The Shunting Yard Algorithm and Stack-based Approach are the main Computer Science Theory(CST) that will be given emphasis in the overall outcome of this project. This interactive arcade-inspired simulation provides users with a fun and educational way to explore the concepts behind RPN.",
    short: "Interactive arcade-style simulation of Reverse Polish Notation using the Shunting Yard Algorithm.",
    image: "/rpnsimulator.png",
    role: "Frontend + logic implementation",
    outcome: "Interactive RPN learning tool",
    tags: ["HTML", "JavaScript", "CSS", "Simulation"],
    github: "https://github.com/adnalow/RPN-Simulator",
    demo: "https://github.com/adnalow/RPN-Simulator",
  },
  {
    id: "protomo",
    title: "ProTomo",
    description:
      "A productivity app is gamified to help users stay focused and motivated by giving the users rewards for completing tasks and the rewards can be spent on their Tomodachi or Tomo.",
    short: "Gamified productivity app with rewards-based habit tracking.",
    image: "/protomo.png",
    role: "Mobile UI + Firebase integration",
    outcome: "Habit tracking with rewards loop",
    tags: ["Flutter", "Dart", "Firebase", "Mobile Application"],
    github: "https://github.com/Kryptiku/ProTomo",
    demo: "https://github.com/Kryptiku/ProTomo",
  },
  {
    id: "pandemonium",
    title: "Pandemonium",
    description:
      "A 2D RPG game where players embark on an epic quest to save their world from impending doom. Explore diverse environments, engage in strategic turn-based battles, and unravel a captivating storyline filled with memorable characters and challenging quests.",
    short: "2D turn-based RPG with strategic combat and quest-driven storytelling.",
    image: "/pandemonium.png",
    role: "Gameplay systems + data storage",
    outcome: "Turn-based RPG prototype",
    tags: ["Java", "SQLite", "Game Development"],
    github: "https://github.com/KazuMoment/panDEMONium",
    demo: "https://github.com/KazuMoment/panDEMONium",
  },
  {
    id: "data-sweep",
    title: "Data Sweep",
    description:
      "Data Sweep is a simple, user-friendly web application designed to help users clean and organize messy CSV files without needing any technical expertise. It offers a clean interface for uploading, previewing, cleaning, and downloading CSV files — streamlining the data preparation process for students, educators, researchers, business owners, and entry-level data analysts.",
    short: "Web app for cleaning and organizing CSV data without technical expertise.",
    image: "/datasweep.png",
    role: "Full-stack build",
    outcome: "CSV cleaning workflow",
    tags: ["HTML", "CSS", "JavaScript", "Flask", "Web Application"],
    github: "https://github.com/PaulVincent-Calvo/Data-Sweep---Web",
    demo: "https://github.com/PaulVincent-Calvo/Data-Sweep---Web",
  },
]

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof allProjects)[0]
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl border border-border/50 bg-background p-6 md:p-8 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-foreground" />
        </button>

        <div className="relative overflow-hidden rounded-lg mb-5">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-52 object-cover"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="chip text-[10px] uppercase tracking-wider">{project.outcome}</span>
          </div>
          <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Role:</span> {project.role}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="chip text-[10px] px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3 pt-2">
            <Button size="sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-3.5 h-3.5 mr-1.5" />
                View Code
              </a>
            </Button>

          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | (typeof allProjects)[0]>(null)

  return (
    <motion.section
      id="projects"
      className="section-wrap bg-muted/30"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 mb-12"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-medium">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
            <HighlightedText inView from="bottom" className="font-semibold">Featured work</HighlightedText>, built with real constraints.
          </h2>
          <p className="text-muted-foreground max-w-xl text-balance leading-relaxed">
            A mix of product, game, and data tooling. Each project highlights a specific system, UX flow, or
            technical challenge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <CardStack
            items={allProjects.map((p) => ({
              id: p.id,
              title: p.title,
              description: p.short,
              imageSrc: p.image,
            }))}
            autoAdvance
            intervalMs={4000}
            pauseOnHover
            showDots
            showArrows
            cardWidth={480}
            cardHeight={320}
            renderCard={(item: CardStackItem, state: { active: boolean }) => {
              const project = allProjects.find((p) => p.id === item.id)!
              return (
                <div className="relative h-full w-full cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <div className="absolute inset-0">
                    <img
                      src={item.imageSrc || "/placeholder.svg"}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="relative z-10 flex h-full flex-col justify-end p-6">
                    <div className="truncate text-xl font-semibold text-white">{item.title}</div>
                    {item.description && (
                      <div className="mt-1 line-clamp-2 text-sm text-white/80">{item.description}</div>
                    )}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }}
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </motion.section>
  )
}
