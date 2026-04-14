import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { BlurFade } from "@/components/magicui/blur-fade"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { useLang } from "@/context/LangContext"

export function Hero() {
  const { t } = useLang()

  return (
    <section
      id="home"
      className="relative overflow-hidden h-screen bg-[#0a0a0f] text-white"
    >
      {/* BACKGROUND IMAGE — bigger, showing center-below (torso + figure) */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="/img/hero-brand-mobile.jpg" />
          <img
            src="/img/hero-brand.jpg"
            alt="Jaxongir Raimjonov"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-[center_22%] scale-[1.18] md:scale-[1.12]"
          />
        </picture>

        {/* Side vignettes — darken left and right for text readability, middle stays clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-black" />
        {/* Top strip thin overlay */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/65 to-transparent" />
        {/* Bottom soft fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0f] via-black/40 to-transparent" />
      </div>

      {/* Ambient color orbs */}
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

      {/* CONTENT — split left/right */}
      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-[minmax(220px,1fr)_minmax(0,2fr)_minmax(220px,1fr)] px-5 md:px-10 lg:px-16 pt-20 md:pt-24 pb-12 md:pb-16 gap-4">

        {/* ============ LEFT COLUMN ============ */}
        <div className="flex flex-col justify-between">
          {/* TOP — brand */}
          <BlurFade delay={0.1}>
            <div className="flex items-center gap-3">
              <div className="w-1 h-12 bg-gradient-to-b from-[#2563eb] to-[#fb7185] rounded-full" />
              <div>
                <div className="text-[10px] md:text-[11px] font-bold tracking-[3px] uppercase text-white leading-tight">
                  Jaxongir Raimjonov
                </div>
                <div className="text-[8.5px] md:text-[9.5px] text-white/55 font-medium tracking-[1.5px] uppercase mt-1 leading-tight">
                  {t("hero_speaker_role")}
                </div>
              </div>
            </div>
          </BlurFade>

          {/* MIDDLE — stats (desktop only) */}
          <BlurFade delay={0.3} className="hidden md:block">
            <div>
              <div className="text-[10px] font-bold tracking-[3px] uppercase text-white/55 mb-2">
                Natijalar
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-[40px] lg:text-[52px] font-black tracking-[-2px] leading-none text-white">
                    <NumberTicker value={100} delay={0.5} />
                    <span className="bg-gradient-to-br from-[#2563eb] to-[#fb7185] bg-clip-text text-transparent">+</span>
                  </div>
                  <div className="text-[10px] text-white/50 uppercase tracking-[2px] font-medium mt-1">
                    Muvaffaqiyatli loyiha
                  </div>
                </div>
                <div className="h-px w-12 bg-white/15" />
                <div>
                  <div className="text-[28px] lg:text-[36px] font-black tracking-[-1px] leading-none text-white">
                    <NumberTicker value={50} delay={0.7} />
                    <span className="text-[#fb7185]">M+</span>
                  </div>
                  <div className="text-[10px] text-white/50 uppercase tracking-[2px] font-medium mt-1">
                    Prosmotr
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* BOTTOM — CTA */}
          <BlurFade delay={0.5}>
            <div>
              <a
                href="#register"
                className="btn-primary gap-2.5 px-8 md:px-9 py-3.5 md:py-4 text-[14px] md:text-[15px] relative overflow-hidden group w-full sm:w-auto"
              >
                Ro'yxatdan o'tish
                <ArrowRight className="w-4 h-4 md:w-[18px] md:h-[18px] group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[sweep_4s_ease-in-out_infinite]" />
              </a>
              <div className="flex items-center gap-2.5 mt-3.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[10px] md:text-[11px] font-bold tracking-[1.5px] uppercase text-emerald-400">
                  Joylar soni cheklangan
                </span>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* ============ CENTER (empty — image shows) ============ */}
        <div className="hidden md:block" />

        {/* ============ RIGHT COLUMN ============ */}
        <div className="hidden md:flex flex-col justify-between items-end text-right">
          {/* TOP — meta */}
          <BlurFade delay={0.15}>
            <div className="flex flex-col gap-3">
              <div>
                <div className="text-[8px] md:text-[9px] text-white/55 uppercase tracking-[2.5px]">
                  Davomiyligi
                </div>
                <div className="text-[14px] md:text-[16px] font-bold text-white mt-0.5">2 oy</div>
              </div>
              <div className="h-px w-12 bg-white/20 ml-auto" />
              <div>
                <div className="text-[8px] md:text-[9px] text-white/55 uppercase tracking-[2.5px]">
                  Format
                </div>
                <div className="text-[14px] md:text-[16px] font-bold text-white mt-0.5">Offline</div>
              </div>
              <div className="h-px w-12 bg-white/20 ml-auto" />
              <div>
                <div className="text-[8px] md:text-[9px] text-white/55 uppercase tracking-[2.5px]">
                  Darslar
                </div>
                <div className="text-[14px] md:text-[16px] font-bold text-white mt-0.5">10 ta</div>
              </div>
            </div>
          </BlurFade>

          {/* BOTTOM — headline */}
          <BlurFade delay={0.45}>
            <div className="max-w-[340px]">
              <div className="flex items-center gap-3 justify-end mb-3">
                <span className="text-[10px] md:text-[11px] font-bold tracking-[3px] uppercase text-white/70">
                  {t("hero_badge")}
                </span>
                <div className="w-8 h-px bg-[#2563eb]" />
              </div>
              <h1 className="font-display font-bold text-[26px] lg:text-[34px] leading-[1.08] tracking-[-0.02em] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
                <span className="italic font-serif font-normal bg-gradient-to-br from-[#2563eb] via-[#fb7185] to-[#fda4af] bg-clip-text text-transparent">
                  Shaxsiy brend
                </span>{" "}
                qurish sirlari
              </h1>
              <p className="text-[12px] lg:text-[13px] text-white/65 leading-[1.55] mt-3 ml-auto">
                Instagram orqali 0 dan auditoriya yig'ib, sotuv qiladigan tizimni quring.
              </p>
            </div>
          </BlurFade>
        </div>

        {/* ============ MOBILE: right column content collapses to bottom ============ */}
        <div className="md:hidden flex flex-col gap-4 mt-auto">
          <BlurFade delay={0.45}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#2563eb]" />
              <span className="text-[10px] font-bold tracking-[3px] uppercase text-white/70">
                {t("hero_badge")}
              </span>
            </div>
            <h1 className="font-display font-bold text-[26px] leading-[1.08] tracking-[-0.02em] text-white mt-3 drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
              <span className="italic font-serif font-normal bg-gradient-to-br from-[#2563eb] via-[#fb7185] to-[#fda4af] bg-clip-text text-transparent">
                Shaxsiy brend
              </span>{" "}
              qurish sirlari
            </h1>
            <div className="flex items-center gap-5 mt-3 text-[10px]">
              <div>
                <div className="text-white/55 uppercase tracking-[1.5px]">Davomiyligi</div>
                <div className="text-white font-bold text-[13px] mt-0.5">2 oy</div>
              </div>
              <div className="w-px h-8 bg-white/15" />
              <div>
                <div className="text-white/55 uppercase tracking-[1.5px]">Format</div>
                <div className="text-white font-bold text-[13px] mt-0.5">Offline</div>
              </div>
              <div className="w-px h-8 bg-white/15" />
              <div>
                <div className="text-white/55 uppercase tracking-[1.5px]">Darslar</div>
                <div className="text-white font-bold text-[13px] mt-0.5">10 ta</div>
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
