import { Briefcase, Sparkles, BarChart3, Award, Check } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

type Feature = {
  title: string
  icon: typeof Briefcase
  description: string
  points: string[]
  accent: "blue" | "coral"
}

export function Audience() {
  const { t } = useLang()

  const features: Feature[] = [
    { title: t("aud1_t"), icon: Briefcase, description: t("aud1_d"), points: [t("aud1_p1"), t("aud1_p2"), t("aud1_p3")], accent: "blue" },
    { title: t("aud2_t"), icon: Sparkles, description: t("aud2_d"), points: [t("aud2_p1"), t("aud2_p2"), t("aud2_p3")], accent: "coral" },
    { title: t("aud3_t"), icon: BarChart3, description: t("aud3_d"), points: [t("aud3_p1"), t("aud3_p2"), t("aud3_p3")], accent: "coral" },
    { title: t("aud4_t"), icon: Award, description: t("aud4_d"), points: [t("aud4_p1"), t("aud4_p2"), t("aud4_p3")], accent: "blue" },
  ]

  const accentMap = {
    blue: {
      text: "text-[#2563eb]",
      bg: "bg-[rgba(37,99,235,0.1)]",
      border: "border-[rgba(37,99,235,0.15)]",
      bgFaded: "text-[#2563eb]/10",
      bgFadedHover: "group-hover:text-[#2563eb]/20",
      hoverBorder: "group-hover:border-[rgba(37,99,235,0.3)]",
      hoverShadow: "group-hover:shadow-[0_10px_30px_-12px_rgba(37,99,235,0.25)]",
    },
    coral: {
      text: "text-[#fb7185]",
      bg: "bg-[rgba(251,113,133,0.1)]",
      border: "border-[rgba(251,113,133,0.2)]",
      bgFaded: "text-[#fb7185]/10",
      bgFadedHover: "group-hover:text-[#fb7185]/20",
      hoverBorder: "group-hover:border-[rgba(251,113,133,0.3)]",
      hoverShadow: "group-hover:shadow-[0_10px_30px_-12px_rgba(251,113,133,0.25)]",
    },
  }

  return (
    <section id="audience" className="py-[100px] section-warm">
      <div className="max-w-[1180px] mx-auto px-5 md:px-7">
        <AnimatedContainer>
          <SectionHeader eyebrow={t("sec2_eye")} title={t("sec2_title")} accent={t("sec2_accent")} />
        </AnimatedContainer>
        <AnimatedContainer delay={0.3} className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {features.map((f, i) => {
            const Icon = f.icon
            const a = accentMap[f.accent]
            return (
              <div key={i}
                className={`card-std relative overflow-hidden p-5 md:p-6 flex items-start gap-4 group h-full transition-all duration-300 ${a.hoverBorder} ${a.hoverShadow} hover:-translate-y-0.5`}>
                {/* Orqa fon ikon */}
                <Icon
                  className={`absolute -right-4 -bottom-4 w-28 h-28 ${a.bgFaded} ${a.bgFadedHover} group-hover:scale-110 transition-all duration-500`}
                  strokeWidth={1}
                  aria-hidden
                />
                {/* Chap taraf: ikon */}
                <div className={`relative w-12 h-12 rounded-xl ${a.bg} border ${a.border} flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${a.text}`} strokeWidth={1.8} />
                </div>
                {/* O'ng taraf: kontent */}
                <div className="relative flex-1 min-w-0">
                  <h3 className="text-[15px] md:text-[16px] font-bold tracking-[-0.2px] mb-1.5">{f.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-[1.55] mb-3">{f.description}</p>
                  <ul className="space-y-1.5">
                    {f.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-[12px] md:text-[12.5px] text-foreground/80">
                        <Check className={`w-3.5 h-3.5 ${a.text} shrink-0 mt-0.5`} strokeWidth={2.5} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </AnimatedContainer>
      </div>
    </section>
  )
}

function AnimatedContainer({
  className, delay = 0.1, children,
}: {
  delay?: number
  className?: string
  children: React.ReactNode
}) {
  const shouldReduceMotion = useReducedMotion()
  if (shouldReduceMotion) return <>{children}</>
  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.61, 1, 0.88, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
