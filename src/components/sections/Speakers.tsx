import { useState } from "react"
import { ChevronLeft, ChevronRight, Play, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

type Speaker = { img?: string; name: string; topicKey: string; nameKey?: string; hidden?: boolean }

const speakers: Speaker[] = [
  { img: "/img/optimized/speaker2.webp", name: "Umidjon Raximboyev", topicKey: "spk_topic_1" },
  { img: "/img/optimized/speaker-sadriddin.webp", name: "Sadriddin Abdurahimov — Marketolog", topicKey: "spk_topic_2" },
  { img: "/img/optimized/speaker3.webp", name: "Abdulboriy Abduqodirov", topicKey: "spk_topic_3" },
  { img: "/img/optimized/speaker5.webp", name: "Abdullokh Khikmatov", topicKey: "spk_topic_4" },
  { name: "", nameKey: "spk_name_hidden", topicKey: "spk_topic_5", hidden: true },
]

const reels = [
  { id: "a1un10bwYnU", authorKey: "reels_author_1" },
  { id: "OorUQTtH-VU", authorKey: "reels_author_2" },
  { id: "szfHU8VJMHs", authorKey: "reels_author_3" },
  { id: "DiG8g40Dh0o", authorKey: "reels_author_4" },
  { id: "ZE0S4OMGeJY", authorKey: "reels_author_5" },
]

export function Speakers() {
  const { t } = useLang()

  return (
    <>
      <section className="py-[100px]">
        <div className="max-w-[1180px] mx-auto px-7">
          <BlurFade>
            <SectionHeader eyebrow={t("spk_section_eyebrow")} title={t("spk_section_title")} accent={t("spk_section_accent")} />
          </BlurFade>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 mt-12">
            {speakers.map((s, i) => {
              const isLast = i === speakers.length - 1
              // Last speaker (sirli): full-width banner on mobile, normal card on md+
              const wrapperClass = isLast ? "col-span-2 md:col-span-1" : ""
              const cardAspect = isLast ? "aspect-[16/9] md:aspect-[3/4]" : "aspect-[3/4]"
              return (
              <BlurFade key={i} delay={0.08 * i} className={wrapperClass}>
                <div className="group relative">
                  <div className={`relative ${cardAspect} rounded-2xl overflow-hidden border border-border dark:border-white/10 bg-card shadow-[0_6px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_6px_24px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:shadow-[0_10px_36px_rgba(37,99,235,0.2)] group-hover:-translate-y-1`}>
                    {/* Gradient border glow (hover) */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#2563eb] via-[#fb7185] to-[#1e3a8a] opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-500 -z-10" />

                    {s.hidden ? (
                      /* Sirli spiker — kuchli vizual aksent */
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#7c3aed]">
                        {/* Animated radial glows */}
                        <div className="absolute inset-0 opacity-60" style={{
                          backgroundImage: "radial-gradient(circle at 30% 20%, rgba(251,113,133,0.5), transparent 50%), radial-gradient(circle at 70% 80%, rgba(96,165,250,0.5), transparent 50%)"
                        }} />
                        {/* Dot pattern */}
                        <div className="absolute inset-0 opacity-20" style={{
                          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
                          backgroundSize: "12px 12px",
                        }} />
                        {/* Pulsating ring */}
                        <div className="relative">
                          <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 animate-ping" />
                          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/15 backdrop-blur-xl border-2 border-white/40 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                            <HelpCircle className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={1.8} />
                          </div>
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
                        {s.nameKey ? t(s.nameKey) : s.name}
                      </div>
                      <div className="text-[10.5px] md:text-[11px] text-white/70 mt-1 leading-[1.35] line-clamp-2">
                        {t(s.topicKey)}
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
              )
            })}
          </div>

          <p className="text-sm text-muted-foreground text-center mt-10">{t("spk_more")}</p>
        </div>
      </section>

      <ReelsSection />
    </>
  )
}

function ReelsSection() {
  const { t } = useLang()
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
            eyebrow={t("reels_eyebrow")}
            title={t("reels_title")}
            accent={t("reels_accent")}
            description={t("reels_desc")}
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
  const { t } = useLang()
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
              {interacted ? (
                <AnimatePresence mode="wait">
                  <motion.iframe key={reels[active].id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: [0.39, 0.575, 0.565, 1] }}
                    src={`https://www.youtube.com/embed/${reels[active].id}?autoplay=1&rel=0&modestbranding=1`}
                    title={t(reels[active].authorKey)}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </AnimatePresence>
              ) : (
                /* Lite YouTube — iframe yuklanmaydi, faqat thumbnail + Play tugma */
                <button
                  onClick={() => setInteracted(true)}
                  className="group/lite absolute inset-0 w-full h-full cursor-pointer"
                  aria-label={`Play ${t(reels[active].authorKey)}`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${reels[active].id}/hqdefault.jpg`}
                    alt={t(reels[active].authorKey)}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover scale-[1.4]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover/lite:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-[#ff0000] text-[#ff0000] ml-1" />
                    </div>
                  </div>
                </button>
              )}
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
          {t("reels_all")} · 0{total}
        </div>

        {/* Mobile: vertical stacked cards */}
        <div className="lg:hidden flex flex-col gap-2.5 mt-4">
          <div className="text-[10px] font-bold tracking-[2.5px] uppercase text-white/40 mb-1 px-1">
            {t("reels_all")} · 0{total}
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
                <img src={`https://img.youtube.com/vi/${r.id}/hqdefault.jpg`} alt={t(r.authorKey)} loading="lazy"
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
                  {t("reels_tag")} · 0{i + 1}
                </div>
                <div className={`text-[14px] font-bold ${i === active ? "text-white" : "text-white/80"}`}>
                  {t(r.authorKey)}
                </div>
                <div className="text-[11px] text-white/45 mt-0.5">
                  {t("reels_exp_short")}
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
                <img src={`https://img.youtube.com/vi/${r.id}/hqdefault.jpg`} alt={t(r.authorKey)} loading="lazy"
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
                  {t("reels_tag")} · 0{i + 1}
                </div>
                <div className={`text-[15px] font-bold truncate ${i === active ? "text-white" : "text-white/80"}`}>
                  {t(r.authorKey)}
                </div>
                <div className="text-[12px] text-white/45 mt-0.5 truncate">
                  {t("reels_exp_long")}
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
