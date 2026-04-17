import { Check } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { RegisterForm } from "@/components/sections/RegisterForm"
import { useLang } from "@/context/LangContext"

export function CTA() {
  const { t } = useLang()
  const checks = [t("cta_c1"), t("cta_c2"), t("cta_c3"), t("cta_c4")]
  const stats = [
    { val: "100+", label: t("cta_f1") },
    { val: "2 mln+", label: t("cta_f2") },
    { val: "$1M+", label: t("cta_f3") },
  ]

  return (
    <section className="pt-[100px] pb-10 md:pb-14 section-warm dark:!bg-[#0e0e14]">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <BlurFade>
            <div>
              <SectionHeader eyebrow={t("cta_eye")} title={t("cta_title")} accent={t("cta_accent")} description={t("cta_desc")} />
              <div className="space-y-3 mt-8">
                {checks.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="check-std">
                      <Check className="w-[13px] h-[13px] text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-px bg-gradient-to-r from-[#2563eb] to-[#fb7185]" />
                  <span className="text-[11px] font-bold tracking-[2px] uppercase text-muted-foreground">
                    {t("cta_stats_eye")}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {stats.map((s, i) => (
                    <div key={i} className="card-std p-3 sm:p-4 text-center">
                      <div className="text-lg sm:text-xl font-extrabold gradient-text">{s.val}</div>
                      <div className="text-[10.5px] sm:text-xs text-muted-foreground mt-1 leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[13px] md:text-[14px] font-medium text-foreground/80 mt-4 leading-[1.5]">
                  {t("cta_stats_cta")}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-muted-foreground">{t("cta_urg")}</span>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div id="register" style={{ scrollMarginTop: "90px" }}>
              <RegisterForm />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
