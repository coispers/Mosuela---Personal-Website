import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen page-bg flex items-center px-4 pt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="chip">Full-Stack Developer</span>
              <span className="chip">Calamba, Laguna</span>
            </div>
            <div className="space-y-5">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight text-balance">
                Building resilient products with clean interfaces and reliable systems.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
                I am Francois Louise C. Mosuela, a full-stack developer and CS student focused on backend systems,
                thoughtful UI, and real-world problem solving.
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

          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/10 blur-2xl" />
            <div className="relative glass-card rounded-3xl p-6 card-hover">
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
                  Delivering practical projects that blend backend reliability with polished UI.
                </p>
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="inline-flex items-center gap-2 mt-12 text-sm text-muted-foreground hover:text-primary">
          <ArrowDown className="w-4 h-4" />
          Scroll to learn more
        </a>
      </div>
    </section>
  )
}
