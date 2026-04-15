import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

export function Cases() {
  const { t } = useLang()

  return (
    <section id="cases" className="py-[100px] section-warm">
      <div className="max-w-[1180px] mx-auto px-7">
        <BlurFade>
          <SectionHeader eyebrow={t("sec6_eye")} title={t("sec6_title")} accent={t("sec6_accent")} />
        </BlurFade>
        <BlurFade delay={0.2}>
          <div className="mt-10 flex justify-center">
            {/* Oq fonni tabiiy ko'rsatish uchun rasm oq kartochka ichida */}
            <div className="relative w-full max-w-[920px] rounded-3xl bg-white p-2 sm:p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] dark:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
              {/* Gradient glow halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#2563eb]/20 via-[#fb7185]/15 to-[#2563eb]/20 blur-2xl opacity-50 -z-10" />
              <img src="/img/cases.webp" alt="Keyslar — natijalarimiz" loading="lazy"
                className="w-full h-auto rounded-2xl block" />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
