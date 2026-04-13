import { FileText, Users, MessageSquare, CheckCircle } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

export function Format() {
  const { t } = useLang()
  const cards = [
    { num: "2", sub: t("fmt1_sub"), d1: t("fmt1_det_1"), d2: t("fmt1_det_2") },
    { num: "10", sub: t("fmt2_sub"), d1: t("fmt2_det_1"), d2: t("fmt2_det_2") },
    { num: "1:1", sub: t("fmt3_sub"), d1: t("fmt3_det_1"), d2: t("fmt3_det_2") },
  ]
  const extras = [
    { icon: FileText, label: t("fmtx1") },
    { icon: Users, label: t("fmtx2") },
    { icon: MessageSquare, label: t("fmtx3") },
    { icon: CheckCircle, label: t("fmtx4") },
  ]

  return (
    <section id="format" className="py-[100px]">
      <div className="max-w-[1180px] mx-auto px-7">
        <BlurFade>
          <SectionHeader eyebrow={t("sec7_eye")} title={t("sec7_title")} accent={t("sec7_accent")} />
        </BlurFade>
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {cards.map((c, i) => (
            <BlurFade key={i} delay={0.1 * i}>
              <div className="card-std p-8 h-full">
                <div className="text-[52px] font-extrabold tracking-tight gradient-text leading-none mb-2">{c.num}</div>
                <p className="font-semibold mb-3">{c.sub}</p>
                <p className="text-sm text-muted-foreground">{c.d1}</p>
                <p className="text-sm text-muted-foreground">{c.d2}</p>
              </div>
            </BlurFade>
          ))}
        </div>
        <BlurFade delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {extras.map((item, i) => (
              <div key={i} className="card-std flex items-center gap-2.5 p-4">
                <item.icon className="w-4 h-4 text-[#ff7842] shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </BlurFade>
        <BlurFade delay={0.4}>
          <div className="mt-10 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80" alt="Team collaboration" loading="lazy" className="w-full h-[280px] object-cover" />
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
