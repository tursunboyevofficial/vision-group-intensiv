import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, BarChart3, Compass, Video, MessageCircle, Filter, Globe } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

const moduleIcons = [BarChart3, Compass, Video, MessageCircle, Filter, Globe]

const moduleImages = [
  "/img/modules/analiz.jpeg",
  "/img/modules/strategiya.jpeg",
  "/img/modules/reels.jpeg",
  "/img/modules/stories.jpeg",
  "/img/modules/voronka.jpeg",
  "/img/modules/platformalar.jpeg",
]

export function Modules() {
  const { t } = useLang()
  const [active, setActive] = useState(0)
  const modules = [
    { tab: t("mod_t1"), h: t("m1_h"), d: t("m1_d"), items: [t("m1_i1"), t("m1_i2"), t("m1_i3"), t("m1_i4"), t("m1_i5")] },
    { tab: t("mod_t2"), h: t("m2_h"), d: t("m2_d"), items: [t("m2_i1"), t("m2_i2"), t("m2_i3"), t("m2_i4")] },
    { tab: t("mod_t3"), h: t("m3_h"), d: t("m3_d"), items: [t("m3_i1"), t("m3_i2"), t("m3_i3"), t("m3_i4"), t("m3_i5")] },
    { tab: t("mod_t4"), h: t("m4_h"), d: t("m4_d"), items: [t("m4_i1"), t("m4_i2"), t("m4_i3"), t("m4_i4"), t("m4_i5")] },
    { tab: t("mod_t5"), h: t("m5_h"), d: t("m5_d"), items: [t("m5_i1"), t("m5_i2"), t("m5_i3"), t("m5_i4")] },
    { tab: t("mod_t6"), h: t("m6_h"), d: t("m6_d"), items: [t("m6_i1"), t("m6_i2"), t("m6_i3"), t("m6_i4"), t("m6_i5")] },
  ]
  const m = modules[active]

  return (
    <section id="modules" className="py-[100px] section-warm">
      <div className="max-w-[1180px] mx-auto px-7">
        <BlurFade>
          <SectionHeader eyebrow={t("sec8_eye")} title={t("sec8_title")} accent={t("sec8_accent")} />
        </BlurFade>
        <BlurFade delay={0.2}>
          {/* Vertical layout — tabs chap, content o'ng */}
          <div className="mt-12 grid lg:grid-cols-[280px_1fr] gap-4">
            {/* Tabs — desktopda chap sidebar, mobileda horizontal scroll */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
              {modules.map((mod, i) => {
                const Icon = moduleIcons[i]
                const isActive = i === active
                return (
                  <button key={i} onClick={() => setActive(i)}
                    className={`shrink-0 lg:shrink flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ease-out border ${
                      isActive
                        ? "gradient-bg text-white border-transparent shadow-[0_4px_12px_rgba(37,99,235,0.25)]"
                        : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-[#2563eb]/20"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-white/20" : "bg-[rgba(37,99,235,0.08)]"
                    }`}>
                      <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#2563eb]"}`} strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0">
                      <div className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? "text-white/70" : "text-muted-foreground/70"}`}>
                        {mod.tab}
                      </div>
                      <div className={`text-sm font-bold truncate ${isActive ? "text-white" : ""}`}>
                        {mod.h}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Content */}
            <div className="card-std p-6 md:p-8 min-h-[340px]">
              <AnimatePresence mode="wait">
                <motion.div key={active}
                  initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: [0.39, 0.575, 0.565, 1] }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    {/* Modul rasmi */}
                    <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 rounded-2xl overflow-hidden border border-[rgba(37,99,235,0.12)] shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                      <img src={moduleImages[active]} alt={m.h} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold uppercase tracking-[2px] text-[#2563eb] mb-1">{m.tab}</div>
                      <h3 className="text-2xl font-extrabold">{m.h}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{m.d}</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {m.items.map((item, j) => (
                      <motion.div key={j}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.05, duration: 0.3 }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-foreground/5 transition-all duration-300 ease-out"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#2563eb] shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
