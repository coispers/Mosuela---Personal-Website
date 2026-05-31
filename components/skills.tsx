import { Card } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "C#", "Java"],
    },
    {
      title: "Frontend + Mobile",
      skills: ["React", "Ionic"],
    },
    {
      title: "Cloud + Backend",
      skills: ["Firebase", "Supabase", "SendGrid"],
    },
    {
      title: "DevOps + Deployment",
      skills: ["Vercel", "GitHub"],
    },
    {
      title: "Productivity",
      skills: ["MS Office", "Google Workspace"],
    },
    {
      title: "AI-Assisted Tools",
      skills: ["Cursor", "Copilot", "Codex"],
    },
  ]

  return (
    <section id="skills" className="section-wrap gradient-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 mb-12">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Tools I use to build and ship.</h2>
          <p className="text-muted-foreground max-w-2xl">
            A balanced toolkit across backend systems, product UI, and deployment. I prefer picking the right tool for
            the problem, not forcing a single stack everywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="glass-card card-hover p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
