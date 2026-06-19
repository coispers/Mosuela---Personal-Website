"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, ArrowUpRight, Send, CheckCircle, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")
  const [statusType, setStatusType] = useState<"success" | "error" | "">("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsSubmitting(true)
    setStatusMessage("")
    setStatusType("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = (await response.json()) as { message?: string; error?: string }

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong while sending your message.")
      }

      setFormData({ name: "", email: "", message: "" })
      setStatusType("success")
      setStatusMessage(result.message || "Message sent successfully. I will get back to you soon.")
    } catch (error) {
      setStatusType("error")
      setStatusMessage(error instanceof Error ? error.message : "Unable to send the message right now.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      id="contact"
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
            Let us build something that lasts.
          </h2>
          <p className="text-muted-foreground max-w-xl text-balance leading-relaxed">
            I am open to internships, junior roles, and collaborative projects. The fastest way to reach me is email.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-[1fr_1.2fr] gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Direct lines</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Share the role, project scope, or challenge you are solving. I will respond with availability and next
                steps.
              </p>
            </div>

            <div className="space-y-3">
              <Card className="card-hover p-4 border-border/50">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-lg shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Email</p>
                    <a
                      href="mailto:francoislouisemosuela@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      francoislouisemosuela@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="card-hover p-4 border-border/50">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-lg shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Location</p>
                    <p className="text-sm text-muted-foreground">Calamba City, Laguna 4027</p>
                  </div>
                </div>
              </Card>

              <Card className="card-hover p-4 border-border/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground text-sm">Resume</p>
                    <p className="text-sm text-muted-foreground">Download the latest PDF</p>
                  </div>
                  <a
                    href="/mosuela-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    View
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </Card>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
            }}
          >
            <Card className="card-hover p-6 border-border/50 relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="focus-visible:ring-primary/30 focus-visible:border-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="focus-visible:ring-primary/30 focus-visible:border-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-32 focus-visible:ring-primary/30 focus-visible:border-primary/50"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-flex"
                      >
                        <Send className="w-4 h-4" />
                      </motion.span>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>

                {statusMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-sm flex items-center gap-2 ${
                      statusType === "success" ? "text-primary" : "text-destructive"
                    }`}
                  >
                    {statusType === "success" ? (
                      <CheckCircle className="w-4 h-4 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0" />
                    )}
                    {statusMessage}
                  </motion.p>
                )}
                {!statusMessage && (
                  <p className="text-xs text-muted-foreground">Messages are sent directly to my inbox.</p>
                )}
              </form>
            </Card>
          </motion.div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Francois Louise C. Mosuela</p>
        </motion.footer>
      </div>
    </motion.section>
  )
}
