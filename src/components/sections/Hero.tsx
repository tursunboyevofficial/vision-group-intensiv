import { ArrowRight } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { useLang } from "@/context/LangContext"
import { useTheme } from "@/context/ThemeContext"

export function Hero() {
  const { t } = useLang()
  const { theme } = useTheme()

  return (
    <section id="home" className="relative overflow-hidden min-h-screen bg-black text-white flex flex-col">
      <div className="absolute inset-0 bg-[url('/img/hero.png')] bg-cover bg-[47%_30%] md:bg-[center_18%]" />
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-500" style={{
        background: "linear-gradient(90deg,rgba(0,0,0,.7) 0%,rgba(0,0,0,.05) 38%,rgba(0,0,0,.05) 62%,rgba(0,0,0,.7) 100%),linear-gradient(0deg,rgba(0,0,0,.55) 0%,transparent 35%),linear-gradient(180deg,rgba(0,0,0,.4) 0%,transparent 18%)",
        opacity: theme === "dark" ? 1 : 0.85,
      }} />
      {/* Dark mode tint — ko'rinmas lekin pastki seksiyaga o'tish silliq */}
      <div className={`absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-t from-[hsl(240,30%,4%)] to-transparent"
          : "bg-gradient-to-t from-white to-transparent"
      }`} />

      <div className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 text-[clamp(100px,18vw,220px)] font-black tracking-[-6px] uppercase text-transparent z-[5] pointer-events-none select-none leading-[0.85] whitespace-nowrap"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.06)" }}>INTENSIV</div>

      <BlurFade delay={0.2} className="relative z-20 max-w-[1180px] w-full mx-auto px-7 pt-[110px] flex justify-between items-center">
        <div className="flex items-center gap-3.5">
          <div className="w-[42px] h-[42px] border-[1.5px] border-[rgba(255,120,66,0.4)] rounded-[10px] flex items-center justify-center">
            <svg className="w-5 h-5 stroke-[#ff7842] fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <div>
            <div className="text-base font-bold tracking-[-0.3px]">Jaxongir Raimjonov</div>
            <div className="text-xs text-white/45 font-medium">{t("hero_speaker_role")}</div>
          </div>
        </div>
        <div className="hidden sm:flex gap-6">
          <div className="text-center">
            <div className="text-[11px] text-white/35 font-medium tracking-[0.5px]">{t("hero_format")}</div>
            <div className="text-[15px] font-bold text-[#ff7842] mt-0.5">{t("hero_format_val")}</div>
          </div>
          <div className="text-center">
            <div className="text-[11px] text-white/35 font-medium tracking-[0.5px]">{t("hero_duration")}</div>
            <div className="text-[15px] font-bold text-[#ff7842] mt-0.5">{t("hero_duration_val")}</div>
          </div>
        </div>
      </BlurFade>

      <div className="relative z-20 max-w-[1180px] w-full mx-auto px-7 pb-8 md:pb-14 mt-auto grid grid-cols-1 md:grid-cols-2 items-end gap-5 md:gap-8">
        <BlurFade delay={0.5} className="md:justify-self-end md:text-right max-w-[440px] order-1 md:order-2">
          <div className="text-[10px] md:text-[11px] font-bold tracking-[2px] md:tracking-[2.5px] uppercase text-white/45 mb-2 md:mb-3.5">{t("hero_badge")}</div>
          <div className="text-[20px] md:text-[clamp(22px,3vw,34px)] font-light leading-[1.2] md:leading-[1.25] tracking-[-0.5px] text-white/85">{t("hero_title")}</div>
          <p className="text-[13px] md:text-[15px] text-white/45 leading-[1.55] md:leading-[1.65] mt-2 md:mt-3.5 max-w-[400px] md:ml-auto">{t("hero_sub")}</p>
        </BlurFade>
        <BlurFade delay={0.4} className="order-2 md:order-1">
          <a href="#register" className="btn-primary gap-2 md:gap-2.5 px-7 md:px-10 py-3 md:py-4 text-sm md:text-base mb-4 md:mb-5 relative overflow-hidden">
            {t("hero_cta")} <ArrowRight className="w-4 h-4 md:w-[18px] md:h-[18px]" />
            <span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[sweep_4s_ease-in-out_infinite]" />
          </a>
          <div className="flex gap-5 md:gap-7">
            {[{ val: 10, suf: "+", lbl: "darslar" }, { val: 3, suf: "", lbl: "spikerlar" }, { val: 100, suf: "+", lbl: "loyihalar" }].map((m, i) => (
              <div key={i}>
                <div className="text-lg md:text-2xl font-extrabold tracking-[-0.5px] leading-none">
                  <NumberTicker value={m.val} delay={0.6 + i * 0.2} className="text-white" />
                  <span className="text-[#ff7842]">{m.suf}</span>
                </div>
                <div className="text-[9px] md:text-[10px] text-white/30 mt-1 font-medium tracking-[0.5px] uppercase">{m.lbl}</div>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
