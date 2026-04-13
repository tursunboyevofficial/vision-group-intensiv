import { CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

export function Modules() {
  const { t } = useLang()
  const [active, setActive] = useState(0)
  const modules = [
    { tab: t("mod_t1"), h: t("m1_h"), d: t("m1_d"), items: [t("m1_i1"), t("m1_i2"), t("m1_i3"), t("m1_i4"), t("m1_i5")] },
    { tab: t("mod_t2"), h: t("m2_h"), d: t("m2_d"), items: [t("m2_i1"), t("m2_i2"), t("m2_i3"), t("m2_i4")] },
    { tab: t("mod_t3"), h: t("m3_h"), d: t("m3_d"), items: [t("m3_i1"), t("m3_i2"), t("m3_i3"), t("m3_i4"), t("m3_i5")] },
    { tab: t("mod_t4"), h: t("m4_h"), d: t("m4_d"), items: [t("m4_i1"), t("m4_i2"), t("m4_i3"), t("m4_i4"), t("m4_i5")] },
    { tab: t("mod_t5"), h: t("m5_h"), d: t("m5_d"), items: [t("m5_i1"), t("m5_i2"), t("m5_i3"), t("m5_i4")] },
    { tab: t("mod_t6"), h: t("m6_h"), d: t("m6_d"), items: [t("m6_i1"), t("m6_i2"), t("m6_i3"), t("m6_i4"), t("m6_i5")] },
  ]
  const m = modules[active]

  return (
    <section id="modules" className="py-[100px] bg-secondary">
      <div className="max-w-[1180px] mx-auto px-7">
        <BlurFade>
          <SectionHeader eyebrow={t("sec8_eye")} title={t("sec8_title")} accent={t("sec8_accent")} />
        </BlurFade>
        <BlurFade delay={0.2}>
          <div className="flex flex-wrap gap-2 mt-12 p-1.5 bg-card border rounded-xl">
            {modules.map((mod, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out ${
                  i === active
                    ? "gradient-bg text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
              >{mod.tab}</button>
            ))}
          </div>
          <div className="card-std p-6 md:p-8 mt-4">
            <h3 className="text-xl font-bold mb-2">{m.h}</h3>
            <p className="text-sm text-muted-foreground mb-6">{m.d}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {m.items.map((item, j) => (
                <div key={j} className="flex items-center gap-3 p-3 rounded-lg hover:bg-foreground/5 transition-all duration-300 ease-out">
                  <CheckCircle2 className="w-4 h-4 text-[#ff7842] shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
