import { Check } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

export function Promise() {
  const { t } = useLang()
  const items = [t("prom1"), t("prom2"), t("prom3"), t("prom4"), t("prom5")]

  return (
    <section id="promise" className="py-[100px]">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid md:grid-cols-[380px_1fr] gap-8 items-start">
          <BlurFade>
            <div className="rounded-2xl overflow-hidden">
              <img src="/img/promise.jpeg" alt="Spiker auditoriya oldida" loading="lazy" className="w-full h-full object-cover min-h-[300px]" />
            </div>
          </BlurFade>
          <div>
            <BlurFade>
              <SectionHeader eyebrow={t("sec3_eye")} title={t("sec3_title")} accent={t("sec3_accent")} />
            </BlurFade>
            <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-3 mt-12">
              {items.map((item, i) => (
                <BlurFade key={i} delay={0.08 * i}>
                  <div className="card-std flex items-center gap-4 px-5 py-5">
                    <div className="check-std">
                      <Check className="w-[13px] h-[13px] text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-[15px] font-semibold">{item}</span>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
