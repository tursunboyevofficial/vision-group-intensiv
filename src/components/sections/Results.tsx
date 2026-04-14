import { Target, LayoutGrid, DollarSign, Users, TrendingUp } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { MorphingCardStack } from "@/components/ui/morphing-card-stack"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

export function Results() {
  const { t } = useLang()

  const cards = [
    { id: "1", title: t("res1"), description: t("res1"), icon: <Target className="w-5 h-5" /> },
    { id: "2", title: t("res2"), description: t("res2"), icon: <LayoutGrid className="w-5 h-5" /> },
    { id: "3", title: t("res3"), description: t("res3"), icon: <DollarSign className="w-5 h-5" /> },
    { id: "4", title: t("res4"), description: t("res4"), icon: <Users className="w-5 h-5" /> },
    { id: "5", title: t("res5"), description: t("res5"), icon: <TrendingUp className="w-5 h-5" /> },
  ]

  return (
    <section id="result" className="py-[100px] bg-[#101114] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80" alt="" loading="lazy"
          className="w-full h-full object-cover opacity-[0.15]"
          style={{ maskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)" }} />
      </div>
      <div className="max-w-[1180px] mx-auto px-7 relative z-10">
        <BlurFade>
          <SectionHeader eyebrow={t("sec9_eye")} title={t("sec9_title")} accent={t("sec9_accent")} className="[&_h2]:text-white" />
        </BlurFade>
        <BlurFade delay={0.3}>
          <div className="mt-12 [&_.bg-secondary\\/60]:bg-white/10 [&_.text-muted-foreground]:text-white/60 [&_.bg-card]:!bg-[#1a1b20] [&_.bg-card]:!border-white/10 [&_.text-card-foreground]:text-white">
            <MorphingCardStack cards={cards} defaultLayout="stack" />
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
