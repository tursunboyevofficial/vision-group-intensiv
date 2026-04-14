import { motion } from "framer-motion"
import { Target, Users, Clock, Sparkles } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { useLang } from "@/context/LangContext"

export function Promise() {
  const { t } = useLang()

  const badges = [
    { icon: Target, label: t("promise_b1") },
    { icon: Users, label: t("promise_b2") },
    { icon: Clock, label: t("promise_b3") },
    { icon: Sparkles, label: t("promise_b4") },
  ]

  const renderTitle = () => {
    const title = t("promise_title")
    const accent = t("promise_title_accent")
    const idx = title.indexOf(accent)
    if (idx === -1) return title
    return (
      <>
        {title.substring(0, idx)}
        <span className="bg-gradient-to-br from-[#2563eb] via-[#fb7185] to-[#fda4af] bg-clip-text text-transparent">
          {accent}
        </span>
        {title.substring(idx + accent.length)}
      </>
    )
  }

  return (
    <section className="relative overflow-hidden py-[80px] md:py-[120px] bg-[#0a0a0f] text-white">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 -left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{ background: "radial-gradient(circle, #2563eb, transparent 70%)" }}
          animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: "radial-gradient(circle, #fb7185, transparent 70%)" }}
          animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-[1000px] mx-auto px-5 md:px-7 text-center">
        {/* Eyebrow */}
        <BlurFade>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563eb] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563eb]" />
            </span>
            <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/80">
              {t("promise_eye")}
            </span>
          </div>
        </BlurFade>

        {/* Title */}
        <BlurFade delay={0.15}>
          <h2 className="font-display font-bold text-[28px] md:text-[42px] lg:text-[52px] leading-[1.1] tracking-[-0.02em] mt-6 md:mt-8 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            {renderTitle()}
          </h2>
        </BlurFade>

        {/* Subtitle */}
        <BlurFade delay={0.3}>
          <p className="text-[14px] md:text-[17px] text-white/65 leading-[1.6] mt-5 md:mt-6 max-w-[720px] mx-auto">
            {t("promise_sub")}
          </p>
        </BlurFade>

        {/* Badges */}
        <BlurFade delay={0.45}>
          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-2.5 md:gap-3">
            {badges.map((b, i) => {
              const Icon = b.icon
              return (
                <div key={i}
                  className="inline-flex items-center gap-2 px-3.5 py-2 md:px-4 md:py-2.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.07] hover:border-white/25 transition-all duration-300">
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#2563eb]" strokeWidth={2} />
                  <span className="text-[11.5px] md:text-[13px] font-semibold text-white/85 tracking-[0.3px]">
                    {b.label}
                  </span>
                </div>
              )
            })}
          </div>
        </BlurFade>

        {/* Gradient divider */}
        <BlurFade delay={0.6}>
          <div className="mt-12 md:mt-14 flex items-center justify-center gap-4">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[#2563eb]/40" />
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#2563eb] to-[#fb7185]" />
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[#fb7185]/40" />
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
