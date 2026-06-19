"use client"

import { motion } from "framer-motion"

const experience = [
  {
    period: "June 2025 — July 2025",
    title: "Computer Science Intern",
    subtitle: "Batangas State University — Pablo Borbon Campus",
    description:
      "Developed a mobile-responsive employee and student portal using Ionic Framework, improving accessibility and user experience across devices. Revamped existing front-end features, transitioning from a prior Flutter-based system to a more maintainable hybrid mobile solution. Collaborated with a development team to redesign UI components and optimize performance, ensuring smoother navigation for staff and students.",
    tags: ["Ionic", "Backend", "Frontend", "UI/UX"],
  },
]

const education = [
  {
    period: "2022 — Present",
    title: "BS Computer Science",
    subtitle: "Batangas State University — Alangilan Campus",
    description:
      "Thesis: Hybridizing MobileNetV2 with Efficient Convolution and Lightweight Attention. Coursework includes data structures, algorithms, software engineering, database systems, and machine learning.",
    tags: ["Data Structures", "Algorithms", "ML", "Thesis"],
  },
]

function TimelineColumn({
  title,
  items,
  index,
}: {
  title: string
  items: typeof experience
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
      <div className="space-y-6">
        {items.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative pl-6 border-l border-border"
          >
            <div className="absolute left-0 top-1.5 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/60" />
            <span className="text-xs text-primary font-mono">{item.period}</span>
            <h4 className="text-base font-semibold text-foreground mt-0.5">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.subtitle}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">{item.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {item.tags.map((tag) => (
                <span key={tag} className="chip text-[10px] px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export function Timeline() {
  return (
    <motion.section
      id="timeline"
      className="section-wrap"
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
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-xl text-balance leading-relaxed">
            My professional journey and academic foundation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <TimelineColumn title="Experience" items={experience} index={0} />
          <TimelineColumn title="Education" items={education} index={1} />
        </div>
      </div>
    </motion.section>
  )
}
