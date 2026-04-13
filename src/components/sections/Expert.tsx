import { Check } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

export function Expert() {
  const { t } = useLang()
  const stats = [
    { val: t("exp_s1v"), label: t("exp_s1l"), num: null },
    { val: "100+", label: t("exp_s2l"), num: 100 },
    { val: "2 mln+", label: t("exp_s3l"), num: 2 },
    { val: "$1M+", label: t("exp_s4l"), num: 1 },
  ]
  const list = [t("exp_l1"), t("exp_l2"), t("exp_l3")]

  return (
    <section id="expert" className="py-[100px] bg-[#101114] text-white">
      <div className="max-w-[1180px] mx-auto px-7">
        <BlurFade>
          <SectionHeader eyebrow={t("sec10_eye")} title={t("sec10_title")} accent={t("sec10_accent")} className="[&_h2]:text-white" />
        </BlurFade>
        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
          <BlurFade delay={0.1}>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
              <img src="/img/expert.jpg" alt="Jaxongir Raimjonov" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-transparent to-transparent pointer-events-none" />
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div>
              <h3 className="text-2xl font-extrabold mb-1">Jaxongir Raimjonov</h3>
              <p className="text-sm text-white/50 mb-8">{t("exp_role")}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((s, i) => (
                  <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/[0.04]">
                    <div className="text-2xl font-extrabold gradient-text mb-1">{s.val}</div>
                    <div className="text-xs text-white/40">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {list.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
