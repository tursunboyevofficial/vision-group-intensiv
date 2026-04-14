import { Crown, Briefcase, Users, DollarSign, Clock } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

export function Expert() {
  const { t } = useLang()

  const stats = [
    { val: t("exp_s1v"), label: t("exp_s1l"), icon: Clock },
    { val: "100+", label: t("exp_s2l"), icon: Briefcase },
    { val: "2 mln+", label: t("exp_s3l"), icon: Users },
    { val: "$1M+", label: t("exp_s4l"), icon: DollarSign },
  ]

  return (
    <section id="expert" className="py-[100px] bg-[#101114] text-white">
      <div className="max-w-[1180px] mx-auto px-7">
        <BlurFade>
          <SectionHeader eyebrow={t("sec10_eye")} title={t("sec10_title")} accent={t("sec10_accent")} className="[&_h2]:text-white" />
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="mt-14 grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-center max-w-[900px] mx-auto">
            {/* Rasm */}
            <div className="relative aspect-[3/4] max-w-[240px] mx-auto md:mx-0 rounded-2xl overflow-hidden">
              <img src="/img/optimized/expert.jpg" alt="Jaxongir Raimjonov" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Ma'lumot */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl md:text-3xl font-extrabold">Jaxongir Raimjonov</h3>
                <Crown className="w-5 h-5 text-[#2563eb]" fill="currentColor" />
              </div>
              <p className="text-sm text-white/50 mb-8">{t("exp_role")}</p>

              {/* Stats — border chiziqli grid, card emas */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8 pb-8 border-b border-white/10">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <s.icon className="w-5 h-5 text-[#2563eb] shrink-0" strokeWidth={1.8} />
                    <div className="min-w-0">
                      <div className="text-xl font-extrabold gradient-text leading-none">{s.val}</div>
                      <div className="text-xs text-white/50 mt-1">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Premium list — oddiy ★ bilan qator */}
              <div className="space-y-3">
                {[t("exp_l1"), t("exp_l2"), t("exp_l3")].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[#2563eb] text-base shrink-0">★</span>
                    <span className="text-sm text-white/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
