"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, Code, Lightbulb } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function About() {
  return (
    <section id="about" className="section-wrap">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={staggerItem} className="space-y-6">
            <p className="section-kicker">About</p>
            <h2 className="section-title">Focused on building dependable, human-centered software.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am Francois Louise C. Mosuela, a Computer Science student at Batangas State University. I care about
              creating smooth user experiences backed by systems that are reliable, observable, and easy to maintain.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work leans toward backend development, API design, and building products that solve real problems with
              clear structure and fast feedback.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="stat">
                <span className="text-sm text-muted-foreground">Strength</span>
                <span className="text-base font-semibold text-foreground">Systems thinking</span>
              </div>
              <div className="stat">
                <span className="text-sm text-muted-foreground">Approach</span>
                <span className="text-base font-semibold text-foreground">Practical and iterative</span>
              </div>
              <div className="stat">
                <span className="text-sm text-muted-foreground">Mindset</span>
                <span className="text-base font-semibold text-foreground">Continuous learning</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="glass-card card-hover p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-border/60">
                    <Image src="/profilepic.png" alt="Francois Mosuela profile" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-foreground">Francois Louise C. Mosuela</p>
                    <p className="text-sm text-muted-foreground">Computer Science student</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="glass-card card-hover p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Education</h3>
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
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="glass-card card-hover p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Code className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Specialization</h3>
                      <p className="text-sm text-muted-foreground">Backend and product systems</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="sm:col-span-2"
              >
                <Card className="glass-card card-hover p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Outside of work</h3>
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
    </section>
  )
}
