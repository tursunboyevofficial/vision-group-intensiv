import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { BlurFade } from "@/components/magicui/blur-fade"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { useLang } from "@/context/LangContext"

export function Hero() {
  const { t } = useLang()

  const renderShortTitle = () => {
    const title = t("hero_short_title")
    const accent = t("hero_short_title_accent")
    const idx = title.indexOf(accent)
    if (idx === -1) return title
    return (
      <>
        {title.substring(0, idx)}
        <span className="italic font-serif font-normal bg-gradient-to-br from-[#2563eb] via-[#fb7185] to-[#fda4af] bg-clip-text text-transparent">
          {accent}
        </span>
        {title.substring(idx + accent.length)}
      </>
    )
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen bg-[#0a0a0f] text-white"
    >
      {/* BACKGROUND IMAGE — desktop: full cover | mobile: top portion only */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="/img/hero-brand.jpg"
          alt="Jaxongir Raimjonov"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-[center_22%] scale-[1.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-black" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/65 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0f] via-black/40 to-transparent" />
      </div>

      {/* MOBILE IMAGE — top portion only, smaller */}
      <div className="md:hidden absolute inset-x-0 top-0 h-[65vh] max-h-[560px] z-0">
        <img
          src="/img/hero-brand-mobile.jpg"
          alt="Jaxongir Raimjonov"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-[center_18%]"
        />
        {/* Pastki qora parda — kuchli, rasmning pastki qismini yopadi */}
        <div
          className="absolute inset-x-0 bottom-0 h-[32%]"
          style={{
            background:
              "linear-gradient(to top, #0a0a0f 0%, #0a0a0f 30%, rgba(10,10,15,0.85) 55%, rgba(10,10,15,0.35) 80%, transparent 100%)",
          }}
        />
        {/* Brand matn o'qilishi uchun juda nozik gradient (yuqori 80px) */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/40 to-transparent" />
      </div>

      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 mix-blend-overlay"
          style={{ background: "radial-gradient(circle, #2563eb, transparent 70%)" }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 mix-blend-overlay"
          style={{ background: "radial-gradient(circle, #fb7185, transparent 70%)" }}
          animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ============ DESKTOP: three-column grid ============ */}
      <div className="hidden md:grid relative z-10 h-screen grid-cols-[minmax(220px,1fr)_minmax(0,2fr)_minmax(220px,1fr)] px-10 lg:px-16 pt-24 pb-16 gap-4">
        {/* LEFT */}
        <div className="flex flex-col justify-between">
          <BlurFade delay={0.1}>
            <div className="flex items-center gap-3">
              <div className="w-1 h-12 bg-gradient-to-b from-[#2563eb] to-[#fb7185] rounded-full" />
              <div>
                <div className="text-[11px] font-bold tracking-[3px] uppercase text-white leading-tight">
                  Jaxongir Raimjonov
                </div>
                <div className="text-[9.5px] text-white/55 font-medium tracking-[1.5px] uppercase mt-1 leading-tight">
                  {t("hero_speaker_role")}
                </div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div>
              <div className="text-[10px] font-bold tracking-[3px] uppercase text-white/55 mb-2">
                {t("hero_stats_eye")}
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-[40px] lg:text-[52px] font-black tracking-[-2px] leading-none text-white">
                    <NumberTicker value={100} delay={0.5} />
                    <span className="bg-gradient-to-br from-[#2563eb] to-[#fb7185] bg-clip-text text-transparent">+</span>
                  </div>
                  <div className="text-[10px] text-white/50 uppercase tracking-[2px] font-medium mt-1">
                    {t("hero_stat1_lbl")}
                  </div>
                </div>
                <div className="h-px w-12 bg-white/15" />
                <div>
                  <div className="text-[28px] lg:text-[36px] font-black tracking-[-1px] leading-none text-white">
                    <NumberTicker value={50} delay={0.7} />
                    <span className="text-[#fb7185]">M+</span>
                  </div>
                  <div className="text-[10px] text-white/50 uppercase tracking-[2px] font-medium mt-1">
                    {t("hero_stat2_lbl")}
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.5}>
            <div>
              <a href="#register" className="btn-primary gap-2.5 px-9 py-4 text-[15px] relative overflow-hidden group">
                {t("hero_cta")}
                <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[sweep_4s_ease-in-out_infinite]" />
              </a>
              <div className="flex items-center gap-2.5 mt-3.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-emerald-400">
                  {t("hero_limited")}
                </span>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* CENTER (empty — image shows) */}
        <div />

        {/* RIGHT */}
        <div className="flex flex-col justify-between items-end text-right">
          <BlurFade delay={0.15}>
            <div className="flex flex-col gap-3">
              <div>
                <div className="text-[9px] text-white/55 uppercase tracking-[2.5px]">{t("hero_duration")}</div>
                <div className="text-[16px] font-bold text-white mt-0.5">{t("hero_duration_val")}</div>
              </div>
              <div className="h-px w-12 bg-white/20 ml-auto" />
              <div>
                <div className="text-[9px] text-white/55 uppercase tracking-[2.5px]">{t("hero_format")}</div>
                <div className="text-[16px] font-bold text-white mt-0.5">{t("hero_format_val")}</div>
              </div>
              <div className="h-px w-12 bg-white/20 ml-auto" />
              <div>
                <div className="text-[9px] text-white/55 uppercase tracking-[2.5px]">{t("hero_lessons")}</div>
                <div className="text-[16px] font-bold text-white mt-0.5">{t("hero_lessons_val")}</div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.45}>
            <div className="max-w-[340px]">
              <div className="flex items-center gap-3 justify-end mb-3">
                <span className="text-[11px] font-bold tracking-[3px] uppercase text-white/70">
                  {t("hero_badge")}
                </span>
                <div className="w-8 h-px bg-[#2563eb]" />
              </div>
              <h1 className="font-display font-bold text-[26px] lg:text-[34px] leading-[1.08] tracking-[-0.02em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
                {renderShortTitle()}
              </h1>
              <p className="text-[13px] text-white/65 leading-[1.55] mt-3 ml-auto">
                {t("hero_short_desc")}
              </p>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* ============ MOBILE: single column, stacked ============ */}
      <div className="md:hidden relative z-10 flex flex-col min-h-screen px-5 pt-20 pb-10">
        {/* Top: brand (over image) */}
        <BlurFade delay={0.1}>
          <div className="flex items-center gap-3">
            <div className="w-1 h-11 bg-gradient-to-b from-[#2563eb] to-[#fb7185] rounded-full shrink-0" />
            <div className="min-w-0">
              <div className="text-[10.5px] font-bold tracking-[2.5px] uppercase text-white leading-tight">
                Jaxongir Raimjonov
              </div>
              <div className="text-[9px] text-white/55 font-medium tracking-[1.5px] uppercase mt-1 leading-tight truncate">
                {t("hero_speaker_role")}
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Spacer — image face visible (image ends around ~65vh) */}
        <div className="h-[50vh] max-h-[450px]" />

        {/* Bottom content */}
        <div className="space-y-5 mt-auto">
          {/* Badge */}
          <BlurFade delay={0.35}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#2563eb]" />
              <span className="text-[10px] font-bold tracking-[2.5px] uppercase text-white/75">
                {t("hero_badge")}
              </span>
            </div>
          </BlurFade>

          {/* Headline */}
          <BlurFade delay={0.4}>
            <h1 className="font-display font-bold text-[28px] sm:text-[32px] leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
              {renderShortTitle()}
            </h1>
            <p className="text-[13px] text-white/65 leading-[1.55] mt-3">
              {t("hero_short_desc")}
            </p>
          </BlurFade>

          {/* Meta row — inline */}
          <BlurFade delay={0.45}>
            <div className="flex items-center gap-4 pt-3 border-t border-white/10">
              <div>
                <div className="text-[9px] text-white/55 uppercase tracking-[1.5px]">{t("hero_duration")}</div>
                <div className="text-white font-bold text-[13px] mt-0.5">{t("hero_duration_val")}</div>
              </div>
              <div className="w-px h-7 bg-white/15" />
              <div>
                <div className="text-[9px] text-white/55 uppercase tracking-[1.5px]">{t("hero_format")}</div>
                <div className="text-white font-bold text-[13px] mt-0.5">{t("hero_format_val")}</div>
              </div>
              <div className="w-px h-7 bg-white/15" />
              <div>
                <div className="text-[9px] text-white/55 uppercase tracking-[1.5px]">{t("hero_lessons")}</div>
                <div className="text-white font-bold text-[13px] mt-0.5">{t("hero_lessons_val")}</div>
              </div>
            </div>
          </BlurFade>

          {/* CTA */}
          <BlurFade delay={0.5}>
            <div>
              <a href="#register" className="btn-primary gap-2.5 px-7 py-3.5 text-[14px] w-full relative overflow-hidden group">
                {t("hero_cta")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[sweep_4s_ease-in-out_infinite]" />
              </a>
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[10px] font-bold tracking-[1.5px] uppercase text-emerald-400">
                  {t("hero_limited")}
                </span>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[hsl(240,30%,4%)] to-transparent pointer-events-none z-[5]" />
    </section>
  )
}
