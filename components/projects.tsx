import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "RPN Simulator",
      description:
        "The objective of this project is to visualize and simulate the process behind Reverse Polish Notation (RPN). The Shunting Yard Algorithm and Stack-based Approach are the main Computer Science Theory(CST) that will be given emphasis in the overall outcome of this project. This interactive arcade-inspired simulation provides users with a fun and educational way to explore the concepts behind RPN.",
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
      image: "/datasweep.png",
      role: "Full-stack build",
      outcome: "CSV cleaning workflow",
      tags: ["HTML", "CSS", "JavaScript", "Flask", "Web Application"],
      github: "https://github.com/PaulVincent-Calvo/Data-Sweep---Web",
      demo: "https://github.com/PaulVincent-Calvo/Data-Sweep---Web",
    },
  ]

  const [featured, ...moreProjects] = projects

  return (
    <section id="projects" className="section-wrap">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 mb-12">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Featured work, built with real constraints.</h2>
          <p className="text-muted-foreground max-w-2xl">
            A mix of product, game, and data tooling work. Each project highlights a specific system, UX flow, or
            technical challenge.
          </p>
        </div>

        <Card className="glass-card card-hover overflow-hidden mb-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative overflow-hidden">
              <img
                src={featured.image || "/placeholder.svg"}
                alt={featured.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent" />
            </div>
            <div className="p-6 lg:p-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="chip">Featured</span>
                <span className="text-sm text-muted-foreground">{featured.outcome}</span>
              </div>
              <h3 className="text-3xl font-semibold text-foreground">{featured.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{featured.description}</p>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Role:</span> {featured.role}
              </div>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={featured.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={featured.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((project) => (
            <Card key={project.title} className="glass-card card-hover overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                  style={project.title === "ProTomo" ? { objectPosition: "center 35%" } : undefined}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Role:</span> {project.role}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
