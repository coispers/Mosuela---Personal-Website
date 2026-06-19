import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4)
}

export function smoothScrollTo(elementId: string) {
  const el = document.getElementById(elementId)
  if (!el) return

  const offset = 80
  const targetPos = el.getBoundingClientRect().top + window.scrollY - offset
  const startPos = window.scrollY
  const distance = targetPos - startPos
  const duration = Math.min(Math.abs(distance) * 0.4 + 200, 900)

  let startTime: number | null = null

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutQuart(progress)

    window.scrollTo(0, startPos + distance * eased)

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}
