"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { HighlightedText } from "@/components/ui/highlighted-text"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "C#", "React", "Java"],
    wide: true,
  },
  {
    title: "Frontend + Mobile",
    skills: ["React", "Ionic"],
    wide: false,
  },
  {
    title: "Cloud + Backend",
    skills: ["Firebase", "Supabase", "SendGrid"],
    wide: false,
  },
  {
    title: "DevOps + Deployment",
    skills: ["Vercel", "GitHub"],
    wide: false,
  },
  {
    title: "AI-Assisted Tools",
    skills: ["Cursor", "Copilot", "Codex", "Claude"],
    wide: false,
  },
  {
    title: "Productivity",
    skills: ["MS Office", "Google Workspace"],
    wide: false,
  },
]

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="section-wrap bg-muted/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
            <HighlightedText inView from="bottom" className="font-semibold">Tools</HighlightedText> I use to build and ship.
          </h2>
          <p className="text-muted-foreground max-w-xl text-balance leading-relaxed">
            A balanced toolkit across backend systems, product UI, and deployment. I prefer picking the right tool for
            the problem, not forcing a single stack everywhere.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
              className={category.wide ? "sm:col-span-2" : ""}
            >
              <Card className="card-hover p-5 border-border/50 h-full">
                <h3 className="text-base font-semibold mb-3 text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="chip text-xs"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
