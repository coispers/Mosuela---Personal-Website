"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, Code, Lightbulb } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { HighlightedText } from "@/components/ui/highlighted-text"

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

export function About() {
  return (
    <motion.section
      id="about"
      className="section-wrap"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={staggerItem} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
              Focused on building{" "}
              <HighlightedText inView from="bottom" className="font-semibold">dependable, human-centered</HighlightedText>{" "}
              software.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              I am Francois Louise C. Mosuela, a Computer Science student at Batangas State University. I care about
              creating smooth user experiences backed by systems that are reliable, observable, and easy to maintain.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              My work leans toward backend development, API design, and building products that solve real problems with
              clear structure and fast feedback.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Systems thinking", sub: "Strength" },
                { label: "Practical and iterative", sub: "Approach" },
                { label: "Continuous learning", sub: "Mindset" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex flex-col gap-1 rounded-xl border border-border/50 bg-card/50 px-4 py-3"
                >
                  <span className="text-xs text-muted-foreground">{item.sub}</span>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="card-hover p-5 border-border/50">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-border/40 shrink-0">
                    <Image src="/profilepic.png" alt="Francois Mosuela profile" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Francois Louise C. Mosuela</p>
                    <p className="text-sm text-muted-foreground">Computer Science student</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="col-span-2 sm:col-span-1"
              >
                <Card className="card-hover p-5 border-border/50 h-full">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                      <GraduationCap className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm">Education</h3>
                      <p className="text-sm text-muted-foreground">BS Computer Science</p>
                      <p className="text-xs text-muted-foreground">Batangas State University</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="col-span-2 sm:col-span-1"
              >
                <Card className="card-hover p-5 border-border/50 h-full">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                      <Code className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm">Specialization</h3>
                      <p className="text-sm text-muted-foreground">Backend and product systems</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="col-span-2"
              >
                <Card className="card-hover p-5 border-border/50">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                      <Lightbulb className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm">Outside of work</h3>
                      <p className="text-sm text-muted-foreground">
                        I recharge with music, games, and time with friends and family.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
