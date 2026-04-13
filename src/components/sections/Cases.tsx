import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

export function Cases() {
  const { t } = useLang()

  return (
    <section id="cases" className="py-[100px] bg-secondary">
      <div className="max-w-[1180px] mx-auto px-7">
        <BlurFade>
          <SectionHeader eyebrow={t("sec6_eye")} title={t("sec6_title")} accent={t("sec6_accent")} />
        </BlurFade>
        <BlurFade delay={0.2}>
          <div className="mt-10 text-center">
            <img src="/img/Final/Group 2089346608.svg" alt="Keyslar" loading="lazy"
              className="w-full max-w-[900px] h-auto mx-auto" />
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
