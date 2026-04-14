"use client"

import { cn } from "@/lib/utils"

export interface BentoItem {
  title: string
  description: string
  icon: React.ReactNode
  status?: string
  tags?: string[]
  meta?: string
  cta?: string
  colSpan?: number
  hasPersistentHover?: boolean
}

interface BentoGridProps {
  items: BentoItem[]
  className?: string
}

export function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-3", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative p-5 rounded-xl overflow-hidden transition-all duration-300",
            "border border-border bg-card",
            "hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]",
            "hover:-translate-y-0.5 will-change-transform",
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
            item.hasPersistentHover && "shadow-[0_4px_20px_rgba(0,0,0,0.06)] -translate-y-0.5 dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          )}
        >
          <div className={cn(
            "absolute inset-0 transition-opacity duration-300",
            item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          )}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,66,0.04)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <div className="relative flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[rgba(255,120,66,0.08)] border border-[rgba(255,120,66,0.1)] transition-all duration-300">
                {item.icon}
              </div>
              {item.status && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-foreground/5 text-muted-foreground backdrop-blur-sm transition-colors duration-300 group-hover:bg-foreground/10">
                  {item.status}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-foreground tracking-tight text-[15px]">
                {item.title}
                {item.meta && (
                  <span className="ml-2 text-xs text-muted-foreground font-normal">{item.meta}</span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground leading-snug">{item.description}</p>
            </div>

            {(item.tags || item.cta) && (
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
                  {item.tags?.map((tag, i) => (
                    <span key={i}
                      className="px-2 py-1 rounded-md bg-foreground/5 backdrop-blur-sm transition-all duration-200 hover:bg-foreground/10">
                      #{tag}
                    </span>
                  ))}
                </div>
                {item.cta && (
                  <span className="text-xs text-[#ff7842] opacity-0 group-hover:opacity-100 transition-opacity font-medium shrink-0 ml-2">
                    {item.cta}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
