"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollTextLinesProps {
  text: string
  className?: string
  lineClassName?: string
}

export function ScrollTextLines({ text, className, lineClassName }: ScrollTextLinesProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  })

  const words = text.split(" ")

  return (
    <div ref={ref} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]} className={lineClassName}>
            {word}
          </Word>
        )
      })}
    </div>
  )
}

function Word({
  children,
  progress,
  range,
  className,
}: {
  children: string
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  range: [number, number]
  className?: string
}) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <motion.span
      style={{ opacity }}
      className={cn("mr-[0.25em] inline-block", className)}
    >
      {children}
    </motion.span>
  )
}
