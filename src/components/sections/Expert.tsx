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
            {/* Rasm — premium frame with accents */}
            <div className="relative w-full max-w-[420px] md:max-w-[280px] mx-auto md:mx-0">
              {/* Gradient backdrop glow */}
              <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#2563eb]/25 via-[#fb7185]/20 to-[#1e3a8a]/25 blur-2xl opacity-70" />

              {/* Main card */}
              <div className="relative rounded-2xl p-1.5 bg-gradient-to-br from-white/15 via-white/5 to-white/10 shadow-[0_20px_60px_-20px_rgba(37,99,235,0.4)]">
                <div className="relative aspect-[3/4] rounded-[14px] overflow-hidden">
                  <img src="/img/optimized/expert.jpg" alt="Jaxongir Raimjonov" loading="lazy" decoding="async"
                    className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  {/* Name label at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Crown className="w-3.5 h-3.5 text-[#2563eb]" fill="currentColor" />
                      <span className="text-[9px] font-bold uppercase tracking-[2px] text-white/80">
                        {t("sec10_eye")}
                      </span>
                    </div>
                    <div className="text-[14px] font-bold text-white tracking-[-0.2px] leading-tight">
                      Jaxongir Raimjonov
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge — top-left "6 yil" */}
              <div className="absolute -top-3 -left-3 px-3 py-2 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] shadow-[0_10px_24px_-8px_rgba(37,99,235,0.6)]">
                <div className="text-[8px] font-bold uppercase tracking-[1.5px] text-white/80 leading-none">
                  {t("exp_s1l")}
                </div>
                <div className="text-[14px] font-black text-white leading-tight mt-0.5">
                  {t("exp_s1v")}
                </div>
              </div>

              {/* Floating badge — bottom-right "100+" */}
              <div className="absolute -bottom-3 -right-3 px-3 py-2 rounded-xl bg-white/[0.06] backdrop-blur-2xl border border-white/15 shadow-[0_10px_24px_rgba(0,0,0,0.4)]">
                <div className="text-[8px] font-bold uppercase tracking-[1.5px] text-white/60 leading-none">
                  Loyiha
                </div>
                <div className="text-[14px] font-black text-white leading-tight mt-0.5">
                  100+
                </div>
              </div>
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
