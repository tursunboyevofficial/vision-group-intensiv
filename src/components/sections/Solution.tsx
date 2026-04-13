import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

const images = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
  "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
  "https://images.unsplash.com/photo-1621184078811-1120e2f1fc9e?w=600&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
]

export function Solution() {
  const { t } = useLang()
  const steps = [t("sol1"), t("sol2"), t("sol3"), t("sol4"), t("sol5"), t("sol6")]

  return (
    <section id="solution" className="py-[100px]">
      <div className="max-w-[1180px] mx-auto px-7">
        <BlurFade>
          <SectionHeader eyebrow={t("sec5_eye")} title={t("sec5_title")} accent={t("sec5_accent")} description={t("sec5_desc")} />
        </BlurFade>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {steps.map((step, i) => (
            <BlurFade key={i} delay={0.1 * i}>
              <div className="group relative rounded-2xl overflow-hidden min-h-[240px] flex flex-col justify-end cursor-default transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
                <img src={images[i]} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/[0.82] via-black/[0.35] to-black/[0.1] group-hover:from-black/[0.88] group-hover:via-black/[0.4] transition-all pointer-events-none" />
                <div className="relative z-[2] p-6">
                  <div className="w-9 h-9 gradient-bg rounded-lg flex items-center justify-center text-sm font-extrabold text-white mb-3 shadow-[0_4px_12px_rgba(255,120,66,0.3)]">{i + 1}</div>
                  <p className="text-base font-bold text-white leading-snug tracking-[-0.2px]">{step}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
