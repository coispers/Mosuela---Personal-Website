import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance">Francois Louise C. Mosuela</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            An aspiring Computer Science Student at Batangas State University.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button size="lg" asChild className="bg-primary hover:bg-accent text-primary-foreground">
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <a
              href="https://github.com/coispers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/francois-louise-mosuela-179a68222/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:francoislouisemosuela@gmail.com" className="text-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="inline-block mt-16 text-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  )
}
