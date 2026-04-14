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
      suffix: "",
      label: t("fmt1_sub"),
      details: [t("fmt_card_1_d1"), t("fmt_card_1_d2")],
    },
    {
      icon: BookOpen,
      value: "10",
      suffix: "",
      label: t("fmt_card_2_label"),
      details: [t("fmt_card_2_d1"), t("fmt_card_2_d2")],
    },
    {
      icon: Users,
      value: "1:1",
      suffix: "",
      label: t("fmt_card_3_label"),
      details: [t("fmt_card_3_d1"), t("fmt_card_3_d2")],
    },
    {
      icon: Sparkles,
      value: "",
      suffix: "",
      label: t("fmt_card_4_label"),
      details: [t("fmt_card_4_d1"), t("fmt_card_4_d2")],
    },
    {
      icon: Headphones,
      value: "",
      suffix: "",
      label: t("fmt_card_5_label"),
      details: [t("fmt_card_5_d1"), t("fmt_card_5_d2")],
    },
    {
      icon: MessageSquare,
      value: "",
      suffix: "",
      label: t("fmt_card_6_label"),
      details: [t("fmt_card_6_d1"), t("fmt_card_6_d2")],
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
          <div className="mt-12 relative rounded-2xl overflow-hidden group">
            <img src="/img/optimized/format.jpg"
              alt="Invision jamoasi" loading="lazy" decoding="async"
              className="w-full h-[280px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105" />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-gradient-to-r from-[#2563eb] to-[#fb7185]" />
                <span className="text-[10px] md:text-[11px] font-bold tracking-[3px] uppercase text-white/70">
                  INVISION
                </span>
              </div>
              <h3 className="text-[28px] md:text-[44px] lg:text-[52px] font-display font-bold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                <span className="italic font-serif font-normal bg-gradient-to-br from-[#2563eb] via-[#fb7185] to-[#fda4af] bg-clip-text text-transparent">
                  Invision
                </span>{" "}
                jamoasi
              </h3>
              <p className="text-[13px] md:text-[15px] text-white/70 mt-3 max-w-[600px] leading-[1.55]">
                Professional jamoa har bir ishtirokchiga shaxsiy yondashuv va yordam bilan xizmat qiladi
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
