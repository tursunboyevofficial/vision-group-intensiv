import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

export function Problem() {
  const { t } = useLang()
  const items = [t("prob1"), t("prob2"), t("prob3"), t("prob4"), t("prob5")]

  return (
    <section className="py-[100px] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img src="/img/problem-banner.webp" alt="" className="w-full h-full object-cover opacity-[0.06] dark:opacity-[0.03]" />
      </div>
      <div className="max-w-[1180px] mx-auto px-7 relative">
        <BlurFade>
          <SectionHeader eyebrow={t("sec4_eye")} title={t("sec4_title")} accent={t("sec4_accent")} />
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 mt-12">
          {items.map((item, i) => (
            <BlurFade key={i} delay={0.08 * i}>
              <div className="flex items-center gap-4 px-5 py-5 bg-[rgba(220,38,38,0.03)] dark:bg-[rgba(220,38,38,0.06)] border border-[rgba(220,38,38,0.08)] dark:border-[rgba(220,38,38,0.12)] rounded-xl transition-all duration-[0.35s] hover:bg-[rgba(220,38,38,0.06)] hover:border-[rgba(220,38,38,0.15)]">
                <div className="w-9 h-9 bg-[rgba(220,38,38,0.08)] border border-[rgba(220,38,38,0.12)] rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 stroke-[#ef4444] fill-none" strokeWidth={2} strokeLinecap="round" viewBox="0 0 24 24">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </div>
                <span className="text-[15px] font-semibold">{item}</span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
