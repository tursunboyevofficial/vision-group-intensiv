import { Fragment } from "react"

interface SectionHeaderProps {
  eyebrow: string
  title: string
  accent?: string
  description?: string
  className?: string
}

export function SectionHeader({ eyebrow, title, accent, description, className = "" }: SectionHeaderProps) {
  const renderWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, i, arr) => (
      <Fragment key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </Fragment>
    ))
  }

  const renderTitle = () => {
    if (!accent) return renderWithLineBreaks(title)
    const idx = title.indexOf(accent)
    if (idx === -1) return renderWithLineBreaks(title)
    return (
      <>
        {renderWithLineBreaks(title.substring(0, idx))}
        <span className="gradient-text">{accent}</span>
        {renderWithLineBreaks(title.substring(idx + accent.length))}
      </>
    )
  }

  return (
    <div className={className}>
      <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[3px] text-[#ff7842] mb-5">
        <span className="w-6 h-[1.5px] gradient-bg block" />
        {eyebrow}
      </div>
      <h2 className="text-[clamp(32px,5vw,50px)] font-extrabold leading-[1.1] tracking-[-2px] mb-4">
        {renderTitle()}
      </h2>
      {description && (
        <p className="text-[17px] text-muted-foreground leading-[1.65] max-w-[560px]">{description}</p>
      )}
    </div>
  )
}
