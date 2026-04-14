import { Calendar, Users, BookOpen, Headphones, MessageSquare, Sparkles } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

export function Format() {
  const { t } = useLang()

  const cards = [
    {
      icon: Calendar,
      value: "2",
      suffix: "oy",
      label: t("fmt1_sub") || "oy davom etadi",
      details: ["1-oy: asosiy darslar", "2-oy: amaliyot"],
    },
    {
      icon: BookOpen,
      value: "10",
      suffix: "ta",
      label: "ta dars",
      details: ["3 ta spiker", "5 ta mehmon spiker"],
    },
    {
      icon: Users,
      value: "1:1",
      suffix: "",
      label: "Shaxsiy razbor",
      details: ["Kurator nazorati", "Savollarga javob"],
    },
    {
      icon: Sparkles,
      value: "",
      suffix: "",
      label: "Tayyor shablonlar",
      details: ["Ssenariylar", "Kontent bazasi"],
    },
    {
      icon: Headphones,
      value: "",
      suffix: "",
      label: "Kurator nazorati",
      details: ["Har kuni yordam", "Progressni kuzatish"],
    },
    {
      icon: MessageSquare,
      value: "",
      suffix: "",
      label: "Shaxsan javob beraman",
      details: ["1 ga 1 razbor", "Har bir ishtirokchiga"],
    },
  ]

  return (
    <section id="format" className="py-[100px]">
      <div className="max-w-[1180px] mx-auto px-7">
        <BlurFade>
          <SectionHeader eyebrow={t("sec7_eye")} title={t("sec7_title")} accent={t("sec7_accent")} />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {cards.map((c, i) => {
            const Icon = c.icon
            return (
              <BlurFade key={i} delay={0.08 * i}>
                <div className="card-std p-5 md:p-6 h-full flex flex-col group relative overflow-hidden">
                  {/* Fon ikon */}
                  <Icon
                    className="absolute -right-4 -bottom-4 w-28 h-28 text-[#2563eb]/8 group-hover:text-[#2563eb]/15 group-hover:scale-110 transition-all duration-500"
                    strokeWidth={1}
                    aria-hidden
                  />

                  {/* Oldingi ikon */}
                  <div className="relative icon-box-std mb-4">
                    <Icon />
                  </div>

                  {/* Qiymat + label */}
                  {c.value && (
                    <div className="relative flex items-baseline gap-1.5 mb-1">
                      <span className="text-[32px] md:text-[36px] font-black tracking-[-1px] gradient-text leading-none">{c.value}</span>
                      {c.suffix && <span className="text-base font-bold text-muted-foreground">{c.suffix}</span>}
                    </div>
                  )}
                  <h3 className="relative text-[15px] md:text-base font-bold tracking-[-0.2px]">
                    {c.label}
                  </h3>

                  {/* Tafsilotlar */}
                  <ul className="relative mt-3 pt-3 border-t border-border space-y-1.5">
                    {c.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-[12.5px] text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-[#2563eb] shrink-0 mt-[7px]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
            )
          })}
        </div>

        <BlurFade delay={0.3}>
          <div className="mt-12 rounded-2xl overflow-hidden">
            <img src="/img/optimized/format.jpg"
              alt="Format" loading="lazy" decoding="async" className="w-full h-[240px] md:h-[380px] object-cover" />
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
