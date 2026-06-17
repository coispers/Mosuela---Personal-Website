"use client"

import { useState, useEffect, useCallback } from "react"

interface UseTypewriterOptions {
  words: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseDuration?: number
}

export function useTypewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: UseTypewriterOptions) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const currentWord = words[wordIndex]

    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1))
    } else {
      setText(currentWord.substring(0, text.length + 1))
    }
  }, [text, wordIndex, isDeleting, words])

  useEffect(() => {
    if (!words.length) return

    const currentWord = words[wordIndex]

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), pauseDuration)
      return
    }

    if (isDeleting && text === "") {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed)
    return () => clearTimeout(timeout)
  }, [text, wordIndex, isDeleting, words, tick, typeSpeed, deleteSpeed, pauseDuration])

  return { text, isDeleting }
}
