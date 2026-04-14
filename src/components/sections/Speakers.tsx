import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

const speakers = [
  { img: "/img/optimized/speaker1.jpg", name: "Martis" },
  { img: "/img/optimized/speaker2.jpg", name: "Umid" },
  { img: "/img/optimized/speaker3.jpg", name: "Abdulboriy" },
  { img: "/img/optimized/speaker4.jpg", name: "Humoyun" },
  { img: "/img/optimized/speaker5.jpg", name: "Abdulloh" },
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
    <section className="py-[100px]">
      <div className="max-w-[1180px] mx-auto px-7">
        <BlurFade>
          <SectionHeader eyebrow="Spikerlar" title="Kursda kimlar o'qitadi?" accent="kimlar o'qitadi?" />
        </BlurFade>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 mt-12">
          {speakers.map((s, i) => (
            <BlurFade key={i} delay={0.1 * i}>
              <div className="flex flex-col items-center text-center group">
                <div className="relative">
                  {/* Gradient ring */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#ff7842] via-[#e85d2a] to-[#ff9a6c] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                  {/* Image */}
                  <div className="relative aspect-square w-full max-w-[160px] rounded-full overflow-hidden border-2 border-white dark:border-white/10 shadow-[0_8px_28px_rgba(0,0,0,0.12)] group-hover:shadow-[0_12px_36px_rgba(255,120,66,0.25)] transition-all duration-500">
                    <img src={s.img} alt={s.name} loading="lazy"
                      className="w-full h-full object-cover scale-150 transition-transform duration-500 group-hover:scale-[1.6] object-[center_41.2%]" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-base font-bold tracking-tight">{s.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Spiker</div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-10">{t("spk_more")}</p>

        <BlurFade delay={0.3} className="mt-[72px]">
          <SectionHeader eyebrow="Reels" title="Haliyam bir qarorga kelmagan bo'lsangiz, mijozlarimizning fikrlari bilan tanishing" accent="mijozlarimizning fikrlari bilan tanishing" />
        </BlurFade>

        <ReelsPlayer />
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
    <div className="mt-10 grid md:grid-cols-[280px_1fr] gap-6 md:gap-8 items-center md:max-w-[720px] md:mx-auto">
      {/* Asosiy player */}
      <div className="mx-auto w-full max-w-[320px] md:max-w-[280px]">
        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.15)] bg-black">
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

        {/* Navigatsiya */}
        <div className="flex items-center justify-between mt-4">
          <button onClick={prev}
            className="w-10 h-10 rounded-full border bg-card hover:bg-foreground/5 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold tabular-nums">{String(active + 1).padStart(2, "0")}</span>
            <span className="text-xs text-muted-foreground">/ {String(total).padStart(2, "0")}</span>
          </div>
          <button onClick={next}
            className="w-10 h-10 rounded-full border bg-card hover:bg-foreground/5 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Thumbnail ro'yxati */}
      <div className="grid grid-cols-5 md:flex md:flex-col md:gap-2 gap-2">
        {reels.map((r, i) => (
          <button key={r.id} onClick={() => select(i)}
            className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 group aspect-[9/16] md:aspect-auto md:h-14 md:flex md:items-center md:gap-3 md:p-2 md:rounded-lg ${
              i === active
                ? "border-[#ff7842] md:bg-[rgba(255,120,66,0.08)] shadow-[0_6px_20px_rgba(255,120,66,0.25)] md:shadow-none scale-[1.02] md:scale-100"
                : "border-transparent md:border-border md:bg-card opacity-60 md:opacity-100 hover:opacity-100 md:hover:border-[#ff7842]/30"
            }`}>
            {/* Mobile: aspect 9:16 thumbnail */}
            <div className="md:hidden absolute inset-0">
              <img src={`https://img.youtube.com/vi/${r.id}/hqdefault.jpg`} alt={r.author} loading="lazy"
                className="absolute inset-0 w-full h-full object-cover scale-150" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-1.5 left-0 right-0 text-center">
                <span className="text-[10px] font-bold text-white tracking-wider">0{i + 1}</span>
              </div>
              {i === active && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#ff7842] animate-pulse" />
                </div>
              )}
            </div>
            {/* Desktop: horizontal row */}
            <div className="hidden md:block relative w-10 h-10 rounded-md overflow-hidden shrink-0 bg-black">
              <img src={`https://img.youtube.com/vi/${r.id}/hqdefault.jpg`} alt={r.author} loading="lazy"
                className="absolute inset-0 w-full h-full object-cover scale-[1.4]" />
            </div>
            <div className="hidden md:flex flex-1 items-center justify-between min-w-0">
              <span className="text-sm font-semibold truncate">{r.author}</span>
              <span className={`text-[10px] font-bold tabular-nums shrink-0 ml-2 ${i === active ? "text-[#ff7842]" : "text-muted-foreground"}`}>0{i + 1}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
