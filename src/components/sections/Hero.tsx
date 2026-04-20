import { useEffect, useState, Fragment } from "react"
import { ArrowRight, TrendingUp, DollarSign } from "lucide-react"
import { motion } from "framer-motion"
import { BlurFade } from "@/components/magicui/blur-fade"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { useLang } from "@/context/LangContext"
import { useIsDesktop } from "@/hooks/useMediaQuery"

export function Hero() {
  const { t } = useLang()
  const isDesktop = useIsDesktop()
  // Splash screen tugaganda, Hero animatsiyasini boshlash uchun flag
  const [splashDone, setSplashDone] = useState(false)
  useEffect(() => {
    const handler = () => setSplashDone(true)
    window.addEventListener("splash:done", handler)
    // Fallback — agar splash event kelmasa, 1.5s dan keyin ishga tushadi
    const fallback = setTimeout(() => setSplashDone(true), 1500)
    return () => {
      window.removeEventListener("splash:done", handler)
      clearTimeout(fallback)
    }
  }, [])

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
      className="relative overflow-hidden md:min-h-screen bg-[#0a0a0f] text-white"
    >
      {/* BACKGROUND IMAGE — desktop: full cover (loaded ONLY on desktop) */}
      {isDesktop && (
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.img
          src="/img/hero-brand.webp"
          alt="Jaxongir Raimjonov"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-[center_22%]"
          initial={{ scale: 1.14 }}
          animate={splashDone ? { scale: 1.1 } : { scale: 1.14 }}
          transition={{ duration: 1.6, ease: [0.25, 0.8, 0.25, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-black" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/65 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0f] via-black/40 to-transparent" />
      </div>
      )}

      {/* MOBILE IMAGE — portrait version (loaded ONLY on mobile) */}
      {!isDesktop && (
      <div className="absolute inset-x-0 -top-12 h-[62vh] max-h-[520px] z-[1] overflow-hidden pointer-events-none">
        <motion.img
          src="/img/hero-brand-mobile.webp"
          alt="Jaxongir Raimjonov"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-[center_bottom]"
          initial={{ scale: 1.06 }}
          animate={splashDone ? { scale: 1 } : { scale: 1.06 }}
          transition={{ duration: 1.6, ease: [0.25, 0.8, 0.25, 1] }}
        />
        {/* Yuqori nozik fade — navbar ostida matn o'qilishi uchun */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/55 via-black/20 to-transparent" />
        {/* Pastki fade — silliq */}
        <div
          className="absolute inset-x-0 bottom-0 h-[25%]"
          style={{
            background:
              "linear-gradient(to top, #0a0a0f 0%, #0a0a0f 30%, rgba(10,10,15,0.65) 70%, transparent 100%)",
          }}
        />
        {/* O'ng pastki burchak — KlingAI watermark'ni yopish uchun */}
        <div className="absolute bottom-0 right-0 w-[26%] h-[8%] bg-[#0a0a0f]" />

        {/* Qo'llar ustidagi floating premium badges — o'sish + natija */}
        {/* Chap qo'l — Auditoriya o'sishi (glass morphism) */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={splashDone ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.85 }}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[56%] left-[2%] z-[3]"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-center gap-1.5 rounded-xl bg-white/[0.08] backdrop-blur-2xl border border-white/25 pl-1.5 pr-2.5 py-1.5 shadow-[0_8px_24px_rgba(37,99,235,0.3)]"
          >
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#60a5fa] flex items-center justify-center shrink-0 shadow-[0_3px_8px_rgba(37,99,235,0.5)]">
              <TrendingUp className="w-3 h-3 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-[7.5px] font-bold uppercase tracking-[1.5px] text-white/65 leading-none">
                {t("hero_badge_growth_lbl")}
              </div>
              <div className="text-[11.5px] font-black text-white leading-tight mt-0.5">
                {t("hero_badge_growth_val")}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* O'ng qo'l — Daromad (gradient premium) */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={splashDone ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.85 }}
          transition={{ delay: 0.62, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[56%] right-[2%] z-[3]"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="relative flex items-center gap-1.5 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] pl-1.5 pr-2.5 py-1.5 shadow-[0_10px_30px_rgba(37,99,235,0.5)] border border-white/15"
          >
            <div className="w-6 h-6 rounded-lg bg-white/15 backdrop-blur-xl border border-white/25 flex items-center justify-center shrink-0">
              <DollarSign className="w-3 h-3 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-[7.5px] font-bold uppercase tracking-[1.5px] text-white/75 leading-none">
                {t("hero_badge_sales_lbl")}
              </div>
              <div className="text-[11.5px] font-black text-white leading-tight mt-0.5">
                {t("hero_badge_sales_val")}
              </div>
            </div>
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fb7185] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fb7185]" />
            </span>
          </motion.div>
        </motion.div>
      </div>
      )}

      {/* Ambient orbs — static (no infinite motion for Safari performance) */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
        <div
          className="absolute -top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 mix-blend-overlay"
          style={{ background: "radial-gradient(circle, #2563eb, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 mix-blend-overlay"
          style={{ background: "radial-gradient(circle, #fb7185, transparent 70%)" }}
        />
      </div>

      {/* ============ DESKTOP: three-column grid ============ */}
      <div className="hidden md:grid relative z-10 h-screen grid-cols-[minmax(220px,1fr)_minmax(0,2fr)_minmax(220px,1fr)] px-10 lg:px-16 pt-32 pb-16 gap-4">
        {/* LEFT */}
        <div className="flex flex-col justify-between">
          <BlurFade delay={0.1}>
            <div className="flex items-center gap-3">
              <div className="w-1 h-12 bg-gradient-to-b from-[#2563eb] to-[#fb7185] rounded-full" />
              <div>
                <div className="text-[13px] font-bold tracking-[3px] uppercase text-white leading-tight">
                  Jaxongir Raimjonov
                </div>
                <div className="text-[11px] text-white/60 font-medium tracking-[1.5px] uppercase mt-1 leading-tight">
                  {t("hero_speaker_role")}
                </div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div>
              <div className="text-[12px] font-bold tracking-[3px] uppercase text-white/60 mb-2">
                {t("hero_stats_eye")}
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-[44px] lg:text-[58px] font-black tracking-[-2px] leading-none text-white">
                    <NumberTicker value={100} delay={0.5} />
                    <span className="bg-gradient-to-br from-[#2563eb] to-[#fb7185] bg-clip-text text-transparent">+</span>
                  </div>
                  <div className="text-[11.5px] text-white/55 uppercase tracking-[2px] font-medium mt-1.5">
                    {t("hero_stat1_lbl")}
                  </div>
                </div>
                <div className="h-px w-12 bg-white/15" />
                <div>
                  <div className="text-[32px] lg:text-[40px] font-black tracking-[-1px] leading-none text-white">
                    <NumberTicker value={50} delay={0.7} />
                    <span className="text-[#fb7185]">M+</span>
                  </div>
                  <div className="text-[11.5px] text-white/55 uppercase tracking-[2px] font-medium mt-1.5">
                    {t("hero_stat2_lbl")}
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.5}>
            <div>
              <a href="#register" className="btn-primary gap-2.5 px-9 py-4 text-[16px] relative overflow-hidden group">
                {t("hero_cta")}
                <ArrowRight className="w-[20px] h-[20px] group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[sweep_4s_ease-in-out_infinite]" />
              </a>
              <div className="flex items-center gap-2.5 mt-3.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[12.5px] font-bold tracking-[1.5px] uppercase text-emerald-400">
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
                <div className="text-[10.5px] text-white/60 uppercase tracking-[2.5px]">{t("hero_duration")}</div>
                <div className="text-[18px] font-bold text-white mt-0.5">{t("hero_duration_val")}</div>
              </div>
              <div className="h-px w-12 bg-white/20 ml-auto" />
              <div>
                <div className="text-[10.5px] text-white/60 uppercase tracking-[2.5px]">{t("hero_format")}</div>
                <div className="text-[18px] font-bold text-white mt-0.5">{t("hero_format_val")}</div>
              </div>
              <div className="h-px w-12 bg-white/20 ml-auto" />
              <div>
                <div className="text-[10.5px] text-white/60 uppercase tracking-[2.5px]">{t("hero_lessons")}</div>
                <div className="text-[18px] font-bold text-white mt-0.5">{t("hero_lessons_val")}</div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.45}>
            <div className="max-w-[380px]">
              <div className="flex items-center gap-3 justify-end mb-3">
                <span className="text-[12.5px] font-bold tracking-[3px] uppercase text-white/75">
                  {t("hero_badge")}
                </span>
                <div className="w-8 h-px bg-[#2563eb]" />
              </div>
              <h1 className="font-display font-bold text-[30px] lg:text-[40px] leading-[1.08] tracking-[-0.02em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
                {renderShortTitle()}
              </h1>
              <p className="text-[15px] text-white/70 leading-[1.55] mt-4 ml-auto">
                {t("hero_short_desc")}
              </p>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* ============ MOBILE: single column, stacked ============ */}
      <div className="md:hidden relative z-10 flex flex-col px-5 pt-24 pb-10">
        {/* Top: brand — slide-in from left */}
        <motion.div
          initial={{ opacity: 0, x: -10, filter: "blur(3px)" }}
          animate={splashDone ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
          transition={{ delay: 0, duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <motion.div
            initial={{ scaleY: 0 }}
            animate={splashDone ? { scaleY: 1 } : {}}
            transition={{ delay: 0.05, duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
            style={{ originY: 0 }}
            className="w-1 h-12 bg-gradient-to-b from-[#2563eb] to-[#fb7185] rounded-full shrink-0"
          />
          <div className="min-w-0">
            <div className="text-[14px] font-bold tracking-[2.5px] uppercase text-white leading-tight">
              Jaxongir Raimjonov
            </div>
            <div className="text-[11.5px] text-white/65 font-medium tracking-[1.5px] uppercase mt-1 leading-tight truncate">
              {t("hero_speaker_role")}
            </div>
          </div>
        </motion.div>

        {/* Spacer — image face visible — pastdagi yozuvlar rasmga yaqin */}
        <div className="h-[28vh] max-h-[230px]" />

        {/* Bottom content — har qaysi tilda bir xil pozitsiya (mt-auto olib tashlandi) */}
        <div className="space-y-5">
          {/* Badge — gradient line grows + text fades */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={splashDone ? { opacity: 1 } : {}}
            transition={{ delay: 0.08, duration: 0.2 }}
            className="flex items-center gap-3"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={splashDone ? { scaleX: 1 } : {}}
              transition={{ delay: 0.08, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className="w-12 h-px bg-[#2563eb]"
            />
            <motion.span
              initial={{ opacity: 0, x: -6 }}
              animate={splashDone ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.13, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-[18px] font-bold tracking-[2.5px] uppercase text-white/95"
            >
              {t("hero_badge")}
            </motion.span>
          </motion.div>

          {/* Headline — rise with blur */}
          <motion.h1
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={splashDone ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.15, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-[54px] sm:text-[64px] leading-[1.02] tracking-[-0.03em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          >
            {renderShortTitle()}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={splashDone ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.3, ease: "easeOut" }}
            className="text-[21px] text-white/80 leading-[1.45] !mt-3"
          >
            {t("hero_short_desc")}
          </motion.p>

          {/* Meta row — staggered items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={splashDone ? { opacity: 1 } : {}}
            transition={{ delay: 0.32, duration: 0.2 }}
            className="flex items-center gap-4 pt-3 border-t border-white/10"
          >
            {[
              { lbl: t("hero_duration"), val: t("hero_duration_val") },
              { lbl: t("hero_format"), val: t("hero_format_val") },
              { lbl: t("hero_lessons"), val: t("hero_lessons_val") },
            ].map((m, i) => (
              <Fragment key={i}>
                {i > 0 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={splashDone ? { scaleY: 1 } : {}}
                    transition={{ delay: 0.36 + i * 0.04, duration: 0.2 }}
                    className="w-px h-9 bg-white/15"
                  />
                )}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={splashDone ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.34 + i * 0.04, duration: 0.22, ease: "easeOut" }}
                >
                  <div className="text-[13px] text-white/65 uppercase tracking-[1.5px]">{m.lbl}</div>
                  <div className="text-white font-bold text-[19px] mt-0.5">{m.val}</div>
                </motion.div>
              </Fragment>
            ))}
          </motion.div>

          {/* CTA — scale pop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 6 }}
            animate={splashDone ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.32, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <a href="#register" className="btn-primary gap-2.5 px-7 py-4 text-[18px] w-full relative overflow-hidden group">
              {t("hero_cta")}
              <ArrowRight className="w-[22px] h-[22px] group-hover:translate-x-1 transition-transform" />
              <span className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[sweep_4s_ease-in-out_infinite]" />
            </a>
            <motion.div
              initial={{ opacity: 0 }}
              animate={splashDone ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.25 }}
              className="flex items-center justify-center gap-2 mt-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[13px] font-bold tracking-[1.5px] uppercase text-emerald-400">
                {t("hero_limited")}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[hsl(240,30%,4%)] to-transparent pointer-events-none z-[5]" />
    </section>
  )
}
