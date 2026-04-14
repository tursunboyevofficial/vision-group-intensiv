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
        <AnimatedContainer delay={0.3} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i} className="card-std relative overflow-hidden p-4 md:p-5 flex items-start gap-4 group">
                {/* Orqa fon ikon */}
                <Icon
                  className="absolute -right-3 -bottom-3 w-24 h-24 text-[#2563eb]/8 group-hover:text-[#2563eb]/15 group-hover:scale-110 transition-all duration-500"
                  strokeWidth={1}
                  aria-hidden
                />
                {/* Chap taraf: ikon */}
                <div className="relative w-11 h-11 rounded-xl bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.15)] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#2563eb]" strokeWidth={1.8} />
                </div>
                {/* O'ng taraf: kontent */}
                <div className="relative flex-1 min-w-0">
                  <h3 className="text-[15px] font-bold tracking-[-0.2px] mb-1">{f.title}</h3>
                  <p className="text-[12.5px] text-muted-foreground leading-[1.5] mb-2.5">{f.description}</p>
                  <ul className="space-y-1">
                    {f.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-[11.5px] text-foreground/75">
                        <Check className="w-3 h-3 text-[#2563eb] shrink-0 mt-0.5" strokeWidth={2.5} />
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
