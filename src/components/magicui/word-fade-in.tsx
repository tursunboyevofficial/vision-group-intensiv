"use client"

import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface WordFadeInProps {
  words: string
  className?: string
  delay?: number
  variants?: Variants
}

export function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
}: WordFadeInProps) {
  const _words = words.split(" ")

  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn("font-display text-4xl font-bold tracking-tight", className)}
    >
      {_words.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  )
}
