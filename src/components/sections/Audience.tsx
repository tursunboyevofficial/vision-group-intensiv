import { Briefcase, Sparkles, BarChart3, Award } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { FeatureCard } from "@/components/ui/grid-feature-cards"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

export function Audience() {
  const { t } = useLang()

  const features = [
    { title: t("aud1_t"), icon: Briefcase, description: t("aud1_d") },
    { title: t("aud2_t"), icon: Sparkles, description: t("aud2_d") },
    { title: t("aud3_t"), icon: BarChart3, description: t("aud3_d") },
    { title: t("aud4_t"), icon: Award, description: t("aud4_d") },
  ]

  return (
    <section id="audience" className="py-[100px] section-warm">
      <div className="max-w-[1180px] mx-auto px-7">
        <AnimatedContainer>
          <SectionHeader eyebrow={t("sec2_eye")} title={t("sec2_title")} accent={t("sec2_accent")} />
        </AnimatedContainer>
        <AnimatedContainer
          delay={0.3}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-dashed border border-dashed rounded-2xl overflow-hidden bg-card/40 backdrop-blur-sm"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
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
