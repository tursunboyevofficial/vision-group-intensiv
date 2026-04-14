import { User, Target, FileText, Video, MessageCircle, TrendingUp } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

export function Solution() {
  const { t } = useLang()

  const items: BentoItem[] = [
    {
      title: t("sol1"),
      description: t("sol1"),
      icon: <User className="w-5 h-5 text-[#2563eb]" strokeWidth={1.8} />,
      meta: "01",
    },
    {
      title: t("sol2"),
      description: t("sol2"),
      icon: <Target className="w-5 h-5 text-[#2563eb]" strokeWidth={1.8} />,
      meta: "02",
    },
    {
      title: t("sol3"),
      description: t("sol3"),
      icon: <FileText className="w-5 h-5 text-[#2563eb]" strokeWidth={1.8} />,
      meta: "03",
    },
    {
      title: t("sol4"),
      description: t("sol4"),
      icon: <Video className="w-5 h-5 text-[#2563eb]" strokeWidth={1.8} />,
      meta: "04",
    },
    {
      title: t("sol5"),
      description: t("sol5"),
      icon: <MessageCircle className="w-5 h-5 text-[#2563eb]" strokeWidth={1.8} />,
      meta: "05",
    },
    {
      title: t("sol6"),
      description: t("sol6"),
      icon: <TrendingUp className="w-5 h-5 text-[#2563eb]" strokeWidth={1.8} />,
      meta: "06",
    },
  ]

  return (
    <section id="solution" className="py-[100px]">
      <div className="max-w-[1180px] mx-auto px-7">
        <BlurFade>
          <SectionHeader
            eyebrow={t("sec5_eye")} title={t("sec5_title")}
            accent={t("sec5_accent")} description={t("sec5_desc")}
          />
        </BlurFade>
        <BlurFade delay={0.2}>
          <div className="mt-12">
            <BentoGrid items={items} />
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
