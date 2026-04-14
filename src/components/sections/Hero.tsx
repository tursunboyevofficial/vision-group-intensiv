import { ArrowRight, Play, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { BlurFade } from "@/components/magicui/blur-fade"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { useLang } from "@/context/LangContext"

export function Hero() {
  const { t } = useLang()

  const renderTitle = () => {
    const title = t("hero_title")
    const accent = t("hero_title_accent")
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
      className="relative overflow-hidden min-h-screen flex items-center bg-[#0a0a0f] text-white"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-40"
          style={{ background: "radial-gradient(circle, #2563eb, transparent 70%)" }}
          animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] rounded-full blur-[120px] opacity-30"
          style={{ background: "radial-gradient(circle, #fda4af, transparent 70%)" }}
          animate={{ x: [0, -60, 0], y: [0, -50, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25"
          style={{ background: "radial-gradient(circle, #fb7185, transparent 70%)" }}
          animate={{ x: [0, -40, 40, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      {/* Huge INTENSIV watermark */}
      <div
        className="absolute bottom-[-3%] left-1/2 -translate-x-1/2 text-[clamp(120px,20vw,260px)] font-black tracking-[-8px] uppercase text-transparent pointer-events-none select-none leading-[0.85] whitespace-nowrap z-[1]"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}
      >
        INTENSIV
      </div>

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 lg:px-12 py-24 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          {/* LEFT: Main content */}
          <div>
            {/* Live badge */}
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563eb] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563eb]" />
                </span>
                <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/80">
                  {t("hero_badge")}
                </span>
              </div>
            </BlurFade>

            {/* Massive editorial headline */}
            <BlurFade delay={0.2}>
              <h1 className="font-display font-bold leading-[0.98] tracking-[-0.035em] text-white text-[clamp(40px,6.5vw,86px)]">
                {renderTitle()}
              </h1>
            </BlurFade>

            {/* Subtitle */}
            <BlurFade delay={0.35}>
              <p className="text-[16px] lg:text-[18px] text-white/55 leading-[1.6] mt-7 max-w-[560px]">
                {t("hero_sub")}
              </p>
            </BlurFade>

            {/* CTAs */}
            <BlurFade delay={0.45}>
              <div className="flex flex-wrap items-center gap-5 mt-10">
                <a
                  href="#register"
                  className="btn-primary gap-2.5 px-8 py-4 text-[15px] relative overflow-hidden group"
                >
                  {t("hero_cta")}
                  <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[sweep_4s_ease-in-out_infinite]" />
                </a>
                <a
                  href="#reels"
                  className="inline-flex items-center gap-3 px-2 py-2 text-[15px] font-medium text-white/75 hover:text-white transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/[0.05] transition">
                    <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                  </span>
                  Dasturni ko'rish
                </a>
              </div>
            </BlurFade>

            {/* Bottom stats row */}
            <BlurFade delay={0.6}>
              <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-wrap items-center gap-x-10 gap-y-6">
                {/* Social proof avatars */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {[
                      "https://i.pravatar.cc/80?img=60",
                      "https://i.pravatar.cc/80?img=47",
                      "https://i.pravatar.cc/80?img=33",
                      "https://i.pravatar.cc/80?img=26",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt="bitiruvchi"
                        loading="lazy"
                        className="w-9 h-9 rounded-full border-2 border-[#0a0a0f] object-cover bg-white/5"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-white leading-none">
                      2.4K+
                    </div>
                    <div className="text-[10px] text-white/40 uppercase tracking-[1.5px] mt-1">
                      bitiruvchilar
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden sm:block h-10 w-px bg-white/[0.08]" />

                {/* Stats */}
                {[
                  { val: 100, suf: "+", lbl: "loyiha" },
                  { val: 50, suf: "M+", lbl: "prosmotr" },
                  { val: 6, suf: " yil", lbl: "tajriba" },
                ].map((m, i) => (
                  <div key={i}>
                    <div className="text-[22px] font-black tracking-[-0.5px] text-white leading-none">
                      <NumberTicker value={m.val} delay={0.8 + i * 0.15} />
                      {m.suf}
                    </div>
                    <div className="text-[10px] text-white/40 uppercase tracking-[1.5px] mt-1.5">
                      {m.lbl}
                    </div>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>

          {/* RIGHT: Floating speaker card (desktop only) */}
          <BlurFade delay={0.3} className="hidden lg:block">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative w-[340px] rounded-[28px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-1.5 shadow-[0_30px_80px_-20px_rgba(37,99,235,0.3)]">
                <div className="aspect-[4/5] rounded-[22px] overflow-hidden relative">
                  <div
                    className="absolute inset-0 bg-cover bg-[center_20%]"
                    style={{ backgroundImage: "url('/img/optimized/hero.jpg')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/10 via-transparent to-[#fda4af]/10 mix-blend-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#2563eb]" />
                      <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#2563eb]">
                        Kurs muallifi
                      </span>
                    </div>
                    <div className="text-[20px] font-bold text-white tracking-[-0.3px]">
                      Jaxongir Raimjonov
                    </div>
                    <div className="text-[12px] text-white/60 mt-1">
                      {t("hero_speaker_role")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge: format */}
              <motion.div
                animate={{ y: [0, -4, 0], rotate: [-2, 1, -2] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -left-6 px-4 py-2.5 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] shadow-[0_20px_40px_-12px_rgba(37,99,235,0.6)]"
              >
                <div className="text-[9px] font-bold uppercase tracking-[1.5px] text-white/80">
                  Format
                </div>
                <div className="text-[14px] font-black text-white leading-tight">
                  Offline · 2 oy
                </div>
              </motion.div>

              {/* Floating badge: seats */}
              <motion.div
                animate={{ y: [0, 6, 0], rotate: [2, -1, 2] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -right-4 px-4 py-3 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </span>
                  <div>
                    <div className="text-[10px] text-white/60 uppercase tracking-[1.5px]">
                      Joylar
                    </div>
                    <div className="text-[13px] font-bold text-white leading-tight">
                      12 qoldi
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </BlurFade>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(240,30%,4%)] via-[hsl(240,30%,4%)]/60 to-transparent pointer-events-none z-[5]" />

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
      >
        <div className="text-[9px] uppercase tracking-[3px] text-white/30 font-semibold">
          Scroll
        </div>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  )
}
