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
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
              alt="Team collaboration" loading="lazy" className="w-full h-[280px] object-cover" />
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
