import { useState } from "react"
import { ChevronLeft, ChevronRight, Play, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

type Speaker = { img?: string; name: string; topic: string; hidden?: boolean }

const speakers: Speaker[] = [
  { img: "/img/optimized/speaker2.jpg", name: "Umidjon Raximboyev", topic: "Telegram Ads orqali Million $ lik lead jalb qilish" },
  { img: "/img/optimized/speaker1.jpg", name: "Maris Istamov", topic: "Shaxsiy brend orqali Million $ Voronka qurish" },
  { img: "/img/optimized/speaker3.jpg", name: "Abdulboriy Abduqodirov", topic: "Sotuv Texnikalari" },
  { img: "/img/optimized/speaker5.jpg", name: "Abdullokh Khikmatov", topic: "Agentlik qurish" },
  { name: "Sirli Spiker", topic: "Zapusk bo'yicha", hidden: true },
]

const reels = [
  { id: "a1un10bwYnU", author: "Mijoz 1" },
  { id: "OorUQTtH-VU", author: "Mijoz 2" },
  { id: "szfHU8VJMHs", author: "Mijoz 3" },
  { id: "DiG8g40Dh0o", author: "Mijoz 4" },
  { id: "ZE0S4OMGeJY", author: "Mijoz 5" },
]

export function Speakers() {
  const { t } = useLang()

  return (
    <>
      <section className="py-[100px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <BlurFade>
            <SectionHeader eyebrow="Spikerlar" title="Kursda kimlar o'qitadi?" accent="kimlar o'qitadi?" />
          </BlurFade>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 mt-12">
            {speakers.map((s, i) => (
              <BlurFade key={i} delay={0.08 * i}>
                <div className="group relative">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border dark:border-white/10 bg-card shadow-[0_6px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_6px_24px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:shadow-[0_10px_36px_rgba(37,99,235,0.2)] group-hover:-translate-y-1">
                    {/* Gradient border glow (hover) */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#2563eb] via-[#fb7185] to-[#1e3a8a] opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-500 -z-10" />

                    {s.hidden ? (
                      /* Sirli spiker — blur + soro belgisi */
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e3a8a] dark:from-[#0f172a] dark:to-[#1e1b4b]">
                        <div className="absolute inset-0 opacity-30" style={{
                          backgroundImage: "radial-gradient(circle at 30% 20%, rgba(37,99,235,0.4), transparent 50%), radial-gradient(circle at 70% 80%, rgba(251,113,133,0.3), transparent 50%)"
                        }} />
                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-3">
                          <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-white/80" strokeWidth={1.5} />
                        </div>
                        <div className="relative px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                          <span className="text-[10px] font-bold tracking-[2px] uppercase text-white/80">Tez kunda</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <img src={s.img} alt={s.name} loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        {/* Bottom gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      </>
                    )}

                    {/* Bottom content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <div className="text-[13px] md:text-[14px] font-bold text-white tracking-[-0.2px] leading-tight">
                        {s.name}
                      </div>
                      <div className="text-[10.5px] md:text-[11px] text-white/70 mt-1 leading-[1.35] line-clamp-2">
                        {s.topic}
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center mt-10">{t("spk_more")}</p>
        </div>
      </section>

      <ReelsSection />
    </>
  )
}

function ReelsSection() {
  return (
    <section
      id="reels"
      className="relative overflow-hidden bg-[#0a0a0f] text-white py-[100px] md:py-[140px]"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 -left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
          style={{ background: "radial-gradient(circle, #2563eb, transparent 70%)" }}
          animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-25"
          style={{ background: "radial-gradient(circle, #fda4af, transparent 70%)" }}
          animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full blur-[140px] opacity-20"
          style={{ background: "radial-gradient(circle, #fb7185, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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

      <div className="relative z-10 max-w-[1180px] mx-auto px-7">
        <BlurFade>
          <SectionHeader
            eyebrow="Reels"
            title="Haliyam bir qarorga kelmagan bo'lsangiz, mijozlarimiz fikrlari bilan tanishing"
            accent="mijozlarimiz fikrlari"
            description="Invision bilan shaxsiy brendini qurgan mijozlarimizdan haqiqiy natijalar va tajribalar"
          />
        </BlurFade>

        <BlurFade delay={0.25}>
          <ReelsPlayer />
        </BlurFade>
      </div>
    </section>
  )
}

function ReelsPlayer() {
  const [active, setActive] = useState(0)
  const [interacted, setInteracted] = useState(false)
  const total = reels.length
  const change = (fn: (p: number) => number) => { setInteracted(true); setActive(fn) }
  const next = () => change((p) => (p + 1) % total)
  const prev = () => change((p) => (p - 1 + total) % total)
  const select = (i: number) => { setInteracted(true); setActive(i) }

  return (
    <div className="mt-14 grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-14 items-start max-w-[880px] mx-auto">
      {/* Main player */}
      <div className="mx-auto w-full max-w-[340px] lg:mx-0">
        <div className="relative group">
          <div className="absolute -inset-[2px] rounded-[26px] bg-gradient-to-br from-[#2563eb] via-[#fb7185] to-[#fda4af] opacity-40 blur-md group-hover:opacity-60 transition-opacity duration-500" />
          <div className="relative rounded-[24px] p-[1.5px] bg-gradient-to-br from-white/20 via-white/5 to-white/10">
            <div className="relative aspect-[9/16] rounded-[22px] overflow-hidden bg-black shadow-[0_30px_80px_-20px_rgba(37,99,235,0.4)]">
              <AnimatePresence mode="wait">
                <motion.iframe key={reels[active].id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.39, 0.575, 0.565, 1] }}
                  src={`https://www.youtube.com/embed/${reels[active].id}?autoplay=${interacted ? 1 : 0}&rel=0&modestbranding=1`}
                  title={reels[active].author}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button onClick={prev}
            className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5">
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold tabular-nums text-white">{String(active + 1).padStart(2, "0")}</span>
            <span className="text-xs text-white/40">/ {String(total).padStart(2, "0")}</span>
          </div>
          <button onClick={next}
            className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5">
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Thumbnails — vertical cards on desktop, horizontal grid on mobile */}
      <div className="w-full">
        <div className="hidden lg:block text-[10px] font-bold tracking-[2.5px] uppercase text-white/40 mb-4">
          Barcha videolar · 0{total}
        </div>

        {/* Mobile: vertical stacked cards */}
        <div className="lg:hidden flex flex-col gap-2.5 mt-4">
          <div className="text-[10px] font-bold tracking-[2.5px] uppercase text-white/40 mb-1 px-1">
            Barcha videolar · 0{total}
          </div>
          {reels.map((r, i) => (
            <button key={r.id} onClick={() => select(i)}
              className={`relative flex items-center gap-3 p-2.5 rounded-2xl transition-all duration-300 text-left ${
                i === active
                  ? "bg-gradient-to-r from-[#2563eb]/15 via-[#fb7185]/8 to-transparent border border-[#2563eb]/35 shadow-[0_6px_20px_-8px_rgba(37,99,235,0.35)]"
                  : "bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06]"
              }`}>
              {/* Portrait thumbnail */}
              <div className="relative w-[52px] h-[72px] rounded-lg overflow-hidden shrink-0 bg-black">
                <img src={`https://img.youtube.com/vi/${r.id}/hqdefault.jpg`} alt={r.author} loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover scale-150" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {i === active && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-6 h-6 rounded-full bg-[#2563eb] flex items-center justify-center">
                      <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
                    </div>
                  </div>
                )}
              </div>
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className={`text-[10px] font-bold tracking-[2px] uppercase mb-1 ${i === active ? "text-[#2563eb]" : "text-white/40"}`}>
                  Reels · 0{i + 1}
                </div>
                <div className={`text-[14px] font-bold ${i === active ? "text-white" : "text-white/80"}`}>
                  {r.author}
                </div>
                <div className="text-[11px] text-white/45 mt-0.5">
                  Mijoz tajribasi
                </div>
              </div>
              {/* Right chevron */}
              <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${i === active ? "bg-[#2563eb]/15" : "bg-white/5"}`}>
                <ChevronRight className={`w-3.5 h-3.5 ${i === active ? "text-[#2563eb]" : "text-white/50"}`} />
              </div>
            </button>
          ))}
        </div>

        {/* Desktop: clean vertical list with larger cards */}
        <div className="hidden lg:flex flex-col gap-2.5">
          {reels.map((r, i) => (
            <button key={r.id} onClick={() => select(i)}
              className={`relative flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 text-left group ${
                i === active
                  ? "bg-gradient-to-r from-[#2563eb]/12 via-[#fb7185]/8 to-transparent border border-[#2563eb]/30 shadow-[0_6px_24px_-8px_rgba(37,99,235,0.35)]"
                  : "bg-white/[0.025] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/15"
              }`}>
              {/* Portrait thumbnail */}
              <div className="relative w-[58px] h-[78px] rounded-xl overflow-hidden shrink-0 bg-black">
                <img src={`https://img.youtube.com/vi/${r.id}/hqdefault.jpg`} alt={r.author} loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover scale-150" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {i === active ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-7 h-7 rounded-full bg-[#2563eb] flex items-center justify-center shadow-lg">
                      <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className={`text-[10px] font-bold tracking-[2px] uppercase mb-1 ${i === active ? "text-[#2563eb]" : "text-white/40"}`}>
                  Reels · 0{i + 1}
                </div>
                <div className={`text-[15px] font-bold truncate ${i === active ? "text-white" : "text-white/80"}`}>
                  {r.author}
                </div>
                <div className="text-[12px] text-white/45 mt-0.5 truncate">
                  Mijoz tajribasi va natijalari
                </div>
              </div>

              {/* Right indicator */}
              <div className={`shrink-0 transition-all duration-300 ${i === active ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i === active ? "bg-[#2563eb]/15" : "bg-white/5"}`}>
                  <ChevronRight className={`w-3.5 h-3.5 ${i === active ? "text-[#2563eb]" : "text-white/60"}`} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
