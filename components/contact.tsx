"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"

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
    <section id="contact" className="section-wrap gradient-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 mb-12">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let us build something that lasts.</h2>
          <p className="text-muted-foreground max-w-2xl">
            I am open to internships, junior roles, and collaborative projects. The fastest way to reach me is email.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.1fr] gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Direct lines</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Share the role, project scope, or challenge you are solving. I will respond with availability and next
                steps.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="glass-card card-hover p-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <a
                      href="mailto:francoislouisemosuela@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      francoislouisemosuela@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="glass-card card-hover p-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-muted-foreground">Calamba, Laguna</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card card-hover p-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <a href="tel:+6399668107948" className="text-muted-foreground hover:text-primary transition-colors">
                      +63 966 810 7948
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="glass-card card-hover p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-card-foreground">Resume</p>
                    <p className="text-sm text-muted-foreground">Download the latest PDF</p>
                  </div>
                  <a
                    href="/mosuela-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    View
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Card>
            </div>
          </div>

          <Card className="glass-card card-hover p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-accent text-primary-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {statusMessage ? (
                <p className={`text-xs ${statusType === "success" ? "text-emerald-400" : "text-destructive"}`}>
                  {statusMessage}
                </p>
              ) : (
                <p className="text-xs text-muted-foreground">Messages are sent directly to my inbox.</p>
              )}
            </form>
          </Card>
        </div>

        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">© 2025 Francois Louise C. Mosuela</p>
        </footer>
      </div>
    </section>
  )
}
