import { Target, LayoutGrid, DollarSign, Users, TrendingUp } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

const icons = [Target, LayoutGrid, DollarSign, Users, TrendingUp]

export function Results() {
  const { t } = useLang()
  const items = [t("res1"), t("res2"), t("res3"), t("res4"), t("res5")]

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {items.map((item, i) => {
            const Icon = icons[i]
            return (
              <BlurFade key={i} delay={0.1 * i}>
                <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300 ease-out hover:-translate-y-0.5">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(255,120,66,0.15)] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#ff7842]" />
                  </div>
                  <span className="text-sm font-medium text-white/90 pt-2">{item}</span>
                </div>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
