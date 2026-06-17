"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "C#", "React", "Java"],
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
    title: "AI-Assisted Tools",
    skills: ["Cursor", "Copilot", "Codex", "Claude"],
  },
  {
    title: "Productivity",
    skills: ["MS Office", "Google Workspace"],
  },
]

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

const cardVariants = (index: number) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
})

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="section-wrap gradient-bg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 mb-12"
        >
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Tools I use to build and ship.</h2>
          <p className="text-muted-foreground max-w-2xl">
            A balanced toolkit across backend systems, product UI, and deployment. I prefer picking the right tool for
            the problem, not forcing a single stack everywhere.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={category.title} variants={cardVariants(idx)} className="relative group">
              <Card className="glass-card card-hover p-6 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
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
