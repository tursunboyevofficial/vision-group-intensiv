"use client"

import { useState, type ReactNode } from "react"
import { motion, AnimatePresence, LayoutGroup, type PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"
import { Grid3X3, Layers, LayoutList } from "lucide-react"

export type LayoutMode = "stack" | "grid" | "list"

export interface CardData {
  id: string
  title: string
  description: string
  icon?: ReactNode
  color?: string
}

export interface MorphingCardStackProps {
  cards?: CardData[]
  className?: string
  defaultLayout?: LayoutMode
  onCardClick?: (card: CardData) => void
}

const layoutIcons = { stack: Layers, grid: Grid3X3, list: LayoutList }
const SWIPE_THRESHOLD = 50
// sineOut ease (GSAP Ease Visualizer)
const SINE_OUT: [number, number, number, number] = [0.39, 0.575, 0.565, 1]

export function MorphingCardStack({
  cards = [], className, defaultLayout = "stack", onCardClick,
}: MorphingCardStackProps) {
  const [layout, setLayout] = useState<LayoutMode>(defaultLayout)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  if (!cards || cards.length === 0) return null

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info
    const swipe = Math.abs(offset.x) * velocity.x
    if (offset.x < -SWIPE_THRESHOLD || swipe < -1000) {
      setActiveIndex((prev) => (prev + 1) % cards.length)
    } else if (offset.x > SWIPE_THRESHOLD || swipe > 1000) {
      setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)
    }
    setIsDragging(false)
  }

  const getStackOrder = () => {
    const reordered = []
    for (let i = 0; i < cards.length; i++) {
      const index = (activeIndex + i) % cards.length
      reordered.push({ ...cards[index], stackPosition: i })
    }
    return reordered.reverse()
  }

  const getLayoutStyles = (stackPosition: number) => {
    if (layout === "stack") {
      return { top: stackPosition * 8, left: stackPosition * 8, zIndex: cards.length - stackPosition, rotate: (stackPosition - 1) * 2 }
    }
    return { top: 0, left: 0, zIndex: 1, rotate: 0 }
  }

  const containerStyles: Record<LayoutMode, string> = {
    stack: "relative h-72 w-72 sm:h-80 sm:w-80",
    grid: "grid grid-cols-2 gap-5",
    list: "flex flex-col gap-4",
  }

  const displayCards = layout === "stack"
    ? getStackOrder()
    : cards.map((c, i) => ({ ...c, stackPosition: i }))

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-center gap-1 rounded-full bg-secondary/60 backdrop-blur-sm p-1 w-fit mx-auto border">
        {(Object.keys(layoutIcons) as LayoutMode[]).map((mode) => {
          const Icon = layoutIcons[mode]
          return (
            <button key={mode} onClick={() => setLayout(mode)}
              className={cn(
                "rounded-full p-2 transition-all duration-300",
                layout === mode
                  ? "gradient-bg text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              )}
              aria-label={`Switch to ${mode} layout`}
            >
              <Icon className="h-4 w-4" />
            </button>
          )
        })}
      </div>

      <LayoutGroup>
        <motion.div layout className={cn(containerStyles[layout], "mx-auto")}>
          <AnimatePresence mode="popLayout">
            {displayCards.map((card) => {
              const styles = getLayoutStyles(card.stackPosition)
              const isExpanded = expandedCard === card.id
              const isTopCard = layout === "stack" && card.stackPosition === 0

              return (
                <motion.div key={card.id} layoutId={card.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: isExpanded ? 1.05 : 1, x: 0, ...styles }}
                  exit={{ opacity: 0, scale: 0.8, x: -200 }}
                  transition={{ duration: 0.5, ease: SINE_OUT }}
                  drag={isTopCard ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  whileDrag={{ scale: 1.02, cursor: "grabbing" }}
                  onClick={() => {
                    if (isDragging) return
                    setExpandedCard(isExpanded ? null : card.id)
                    onCardClick?.(card)
                  }}
                  className={cn(
                    "cursor-pointer rounded-2xl border bg-card p-5 transition-colors duration-300",
                    "hover:border-[#ff7842]/30",
                    layout === "stack" && "absolute w-64 h-56 sm:w-72 sm:h-60",
                    layout === "stack" && isTopCard && "cursor-grab active:cursor-grabbing",
                    layout === "grid" && "w-full min-h-[180px] flex flex-col",
                    layout === "list" && "w-full",
                    isExpanded && "ring-2 ring-[#ff7842]/40"
                  )}
                  style={{ backgroundColor: card.color || undefined }}
                >
                  <div className={cn(
                    "flex gap-3",
                    layout === "grid" ? "flex-col items-start" : "items-start"
                  )}>
                    {card.icon && (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(255,120,66,0.08)] border border-[rgba(255,120,66,0.1)] text-[#ff7842]">
                        {card.icon}
                      </div>
                    )}
                    <div className="min-w-0 flex-1 w-full">
                      <h3 className={cn(
                        "font-bold text-card-foreground",
                        layout === "stack" && "truncate",
                        layout === "list" && "truncate"
                      )}>{card.title}</h3>
                      <p className={cn(
                        "text-sm text-muted-foreground mt-1 leading-relaxed",
                        layout === "stack" && "line-clamp-4",
                        layout === "grid" && "line-clamp-3",
                        layout === "list" && "line-clamp-2",
                      )}>{card.description}</p>
                    </div>
                  </div>
                  {isTopCard && (
                    <div className="absolute bottom-3 left-0 right-0 text-center">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground/50">Swipe to navigate</span>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {layout === "stack" && cards.length > 1 && (
        <div className="flex justify-center gap-1.5">
          {cards.map((_, index) => (
            <button key={index} onClick={() => setActiveIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === activeIndex ? "w-6 gradient-bg" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
