import React from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap, Code, Lightbulb } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">About Me</h2>

        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <Image
                src="/profilepicture.jpg"
                alt="Profile Picture"
                width={224}
                height={224}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                I'm Francois Louise C. Mosuela a student at{" "}
                <span className="font-semibold text-primary">Batangas State University</span>, driven by curiosity,
                 creativity, and a deep love for technology. My journey is one of continuous learning and growth — a life currently on the rise and full of potential.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                I am currently interested in backend development and
                 exploring the world of APIs and databases.
                  I enjoy building robust and scalable applications that solve real-world problems.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                Outside of coding, I am just a normal man who enjoys the company of my friends and family, loves to game, and listen to music.
              </p>
            </div>

          <div className="space-y-4">
            <Card className="p-6 border-2 border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">Education</h3>
                  <p className="text-muted-foreground">Bachelor of Science in Computer Science</p>
                  <p className="text-sm text-muted-foreground">Batangas State University</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">Specialization</h3>
                  <p className="text-muted-foreground">Backend Development and Game Development</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">Personal Interests</h3>
                  <p className="text-muted-foreground">NMIXX, League of Legends, and loving living life.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
