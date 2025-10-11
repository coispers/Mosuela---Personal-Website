import { Card } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 90 },
        { name: "C#", level: 85 },
        { name: "Python", level: 75 },
        { name: "Java", level: 60 },
        { name: "Dart", level: 70 },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 75 },
        { name: "Javascript", level: 75 },
        { name: "CSS", level: 60 },
        { name: "Ionic", level: 70 },
        { name: "Flutter", level: 50 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 70 },
        { name: "Firebase", level: 65 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 gradient-bg">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Skills & Technologies</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="p-6 border-2 border-border hover:border-primary transition-all hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary text-card-foreground">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-card-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
