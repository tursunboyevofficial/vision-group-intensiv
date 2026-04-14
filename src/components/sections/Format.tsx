import { BlurFade } from "@/components/magicui/blur-fade"
import { ScrollTextLines } from "@/components/magicui/scroll-text-lines"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

export function Format() {
  const { t } = useLang()

  return (
    <section id="format" className="py-[120px]">
      <div className="max-w-[1180px] mx-auto px-7">
        <BlurFade>
          <SectionHeader eyebrow={t("sec7_eye")} title={t("sec7_title")} accent={t("sec7_accent")} />
        </BlurFade>

        <div className="mt-16 md:mt-20 max-w-[900px] mx-auto">
          <ScrollTextLines
            text={t("fmt_story")}
            className="text-[clamp(22px,3vw,36px)] font-semibold leading-[1.35] tracking-[-0.5px] text-foreground"
          />
        </div>

        <BlurFade delay={0.2}>
          <div className="mt-16 rounded-2xl overflow-hidden">
            <img src="/img/optimized/format.jpg"
              alt="Format" loading="lazy" decoding="async" className="w-full h-[280px] md:h-[400px] object-cover" />
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
