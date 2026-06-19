"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const allProjects = [
  {
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

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | (typeof allProjects)[0]>(null)
  const [featured, ...restProjects] = allProjects

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
            Featured work, built with real constraints.
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
          <Card
            className="card-hover overflow-hidden mb-8 cursor-pointer border-border/50"
            onClick={() => setSelectedProject(featured)}
          >
            <div className="grid md:grid-cols-[1.2fr_1fr]">
              <div className="relative overflow-hidden min-h-[240px]">
                <img
                  src={featured.image || "/placeholder.svg"}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="chip text-[10px] uppercase tracking-wider bg-primary/10 text-primary border-primary/20">
                    Featured
                  </span>
                  <span className="text-sm text-muted-foreground">{featured.outcome}</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{featured.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{featured.short}</p>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Role:</span> {featured.role}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="chip text-[10px] px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild onClick={(e) => e.stopPropagation()}>
                  <a href={featured.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3.5 h-3.5 mr-1.5" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {restProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              onClick={() => setSelectedProject(project)}
            >
              <Card className="card-hover overflow-hidden border-border/50 h-full cursor-pointer">
                <div className="relative overflow-hidden h-44">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={project.title === "ProTomo" ? { objectPosition: "center 35%" } : undefined}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/50 via-transparent to-transparent" />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.short}</p>
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
                  <Button variant="outline" size="sm" asChild onClick={(e) => e.stopPropagation()}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3.5 h-3.5 mr-1.5" />
                      Code
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
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
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-foreground" />
              </button>

              <div className="relative overflow-hidden rounded-lg mb-5">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="chip text-[10px] uppercase tracking-wider">{selectedProject.outcome}</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{selectedProject.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Role:</span> {selectedProject.role}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="chip text-[10px] px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button size="sm" asChild>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3.5 h-3.5 mr-1.5" />
                      View Code
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
