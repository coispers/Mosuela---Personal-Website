import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "RPN Simulator",
      description:
        "The objective of this project is to visualize and simulate the process behind Reverse Polish Notation (RPN). The Shunting Yard Algorithm and Stack-based Approach are the main Computer Science Theory(CST) that will be given emphasis in the overall outcome of this project. This interactive arcade-inspired simulation provides users with a fun and educational way to explore the concepts behind RPN.",
      image: "/rpnsimulator.png",
      tags: ["HTML", "JavaScript", "CSS", "Simulation"],
      github: "https://github.com/adnalow/RPN-Simulator",
      demo: "https://github.com/adnalow/RPN-Simulator",
    },
    {
      title: "ProTomo",
      description:
        "A productivity app is gamified to help users stay focused and motivated by giving the users rewards for completing tasks and the rewards can be spent on their Tomodachi or Tomo.",
      image: "/protomo.png",
      tags: ["Flutter", "Dart", "Firebase", "Mobile Application"],
      github: "https://github.com/Kryptiku/ProTomo",
      demo: "https://github.com/Kryptiku/ProTomo",
    },
    {
      title: "Pandemonium",
      description:
        "A 2D RPG game where players embark on an epic quest to save their world from impending doom. Explore diverse environments, engage in strategic turn-based battles, and unravel a captivating storyline filled with memorable characters and challenging quests.",
      image: "/pandemonium.png",
      tags: ["Java", "SQLite", "Game Development"],
      github: "https://github.com/KazuMoment/panDEMONium",
      demo: "https://github.com/KazuMoment/panDEMONium",
    },
    {
      title: "Data Sweep",
      description:
        "Data Sweep is a simple, user-friendly web application designed to help users clean and organize messy CSV files without needing any technical expertise. It offers a clean interface for uploading, previewing, cleaning, and downloading CSV files — streamlining the data preparation process for students, educators, researchers, business owners, and entry-level data analysts.",
      image: "/datasweep.png",
      tags: ["HTML", "CSS", "JavaScript","Flask", "Web Application"],
      github: "https://github.com/PaulVincent-Calvo/Data-Sweep---Web",
      demo: "https://github.com/PaulVincent-Calvo/Data-Sweep---Web",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden border-2 border-border hover:border-primary transition-all hover:shadow-xl group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-card-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
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
                  <Button size="sm" asChild className="bg-primary hover:bg-accent text-primary-foreground">
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
