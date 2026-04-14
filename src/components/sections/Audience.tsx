import { Briefcase, Sparkles, BarChart3, Award, Check } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

export function Audience() {
  const { t } = useLang()

  const features = [
    { title: t("aud1_t"), icon: Briefcase, description: t("aud1_d"), points: [t("aud1_p1"), t("aud1_p2"), t("aud1_p3")] },
    { title: t("aud2_t"), icon: Sparkles, description: t("aud2_d"), points: [t("aud2_p1"), t("aud2_p2"), t("aud2_p3")] },
    { title: t("aud3_t"), icon: BarChart3, description: t("aud3_d"), points: [t("aud3_p1"), t("aud3_p2"), t("aud3_p3")] },
    { title: t("aud4_t"), icon: Award, description: t("aud4_d"), points: [t("aud4_p1"), t("aud4_p2"), t("aud4_p3")] },
  ]

  return (
    <section id="audience" className="py-[100px] section-warm">
      <div className="max-w-[1180px] mx-auto px-7">
        <AnimatedContainer>
          <SectionHeader eyebrow={t("sec2_eye")} title={t("sec2_title")} accent={t("sec2_accent")} />
        </AnimatedContainer>
        <AnimatedContainer delay={0.3} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i} className="card-std relative overflow-hidden p-6 flex flex-col group">
                {/* Katta orqa fon ikon */}
                <Icon
                  className="absolute -right-6 -bottom-6 w-40 h-40 text-[#2563eb]/10 group-hover:text-[#2563eb]/20 group-hover:scale-110 transition-all duration-500"
                  strokeWidth={1}
                  aria-hidden
                />
                {/* Oldinda kichik accent ikon */}
                <div className="relative w-10 h-10 rounded-xl bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.15)] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#2563eb]" strokeWidth={1.8} />
                </div>
                <h3 className="relative text-base md:text-lg font-bold tracking-[-0.3px] mb-2">{f.title}</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed mb-4">{f.description}</p>
                {/* Bullet points */}
                <ul className="relative space-y-2 mt-auto pt-4 border-t border-border">
                  {f.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-foreground/80">
                      <Check className="w-3.5 h-3.5 text-[#2563eb] shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
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
