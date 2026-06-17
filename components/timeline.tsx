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

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

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
      initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <h3 className="text-xl font-semibold text-foreground mb-8">{title}</h3>
      <div className="space-y-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            variants={staggerItem}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative pl-8 border-l border-primary/30"
          >
            <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(109,40,217,0.5)]" />
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{item.period}</span>
            <h4 className="text-lg font-semibold text-foreground mt-1">{item.title}</h4>
            <p className="text-sm text-muted-foreground/80">{item.subtitle}</p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-2">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
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
          <p className="section-kicker">Background</p>
          <h2 className="section-title">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl">
            My professional journey and academic foundation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <TimelineColumn title="Experience" items={experience} index={0} />
          <TimelineColumn title="Education" items={education} index={1} />
        </div>
      </div>
    </motion.section>
  )
}
