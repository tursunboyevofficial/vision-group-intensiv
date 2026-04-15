import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, BarChart3, Compass, Video, MessageCircle, Filter, Globe, ChevronDown } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

// Tartib: Reels → Voronka → Strategiya → Platformalar
const moduleIcons = [Video, Filter, Compass, Globe]

// Har bir modul uchun mavzuga mos gradient + aksent rangi
const moduleThemes = [
  { from: "#db2777", to: "#fb7185", hex: "#db2777" },   // Reels — pink
  { from: "#10b981", to: "#34d399", hex: "#10b981" },   // Voronka — emerald
  { from: "#0891b2", to: "#22d3ee", hex: "#0891b2" },   // Strategiya — cyan
  { from: "#8b5cf6", to: "#a78bfa", hex: "#8b5cf6" },   // Platformalar — violet
]
// Har bir modul uchun ikonani gradientli kartaga joylashtiruvchi komponent
function IconStage({ Icon, theme, large = false }: { Icon: typeof BarChart3; theme: typeof moduleThemes[number]; large?: boolean }) {
  return (
    <div
      className={`relative shrink-0 rounded-2xl overflow-hidden ${large ? "w-full aspect-[16/9]" : "w-28 h-28"}`}
      style={{
        background: `linear-gradient(135deg, ${theme.from} 0%, ${theme.to} 100%)`,
      }}
    >
      {/* Nozik noise pattern */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.6) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "18px 18px, 24px 24px",
        }}
      />
      {/* Glow spot */}
      <div
        className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-50"
        style={{ background: "rgba(255,255,255,0.4)" }}
      />
      {/* Yirik ikon — orqa fon sifatida */}
      <Icon
        className="absolute -right-4 -bottom-4 text-white/15"
        style={{ width: large ? "180px" : "120px", height: large ? "180px" : "120px" }}
        strokeWidth={1.2}
        aria-hidden
      />
      {/* Markaziy ikon — oldingi */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon
          className="text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          style={{ width: large ? "68px" : "48px", height: large ? "68px" : "48px" }}
          strokeWidth={1.6}
        />
      </div>
    </div>
  )
}

export function Modules() {
  const { t } = useLang()
  const [active, setActive] = useState(0)
  const [mobileOpen, setMobileOpen] = useState<number | null>(0)

  const modules = [
    { tab: t("mod_t1"), h: t("m3_h"), d: t("m3_d"), items: [t("m3_i1"), t("m3_i2"), t("m3_i3"), t("m3_i4"), t("m3_i5")] }, // Kontent — Reels
    { tab: t("mod_t2"), h: t("m5_h"), d: t("m5_d"), items: [t("m5_i1"), t("m5_i2"), t("m5_i3"), t("m5_i4")] },             // Voronka va trafik
    { tab: t("mod_t3"), h: t("m2_h"), d: t("m2_d"), items: [t("m2_i1"), t("m2_i2"), t("m2_i3"), t("m2_i4")] },             // Strategiya
    { tab: t("mod_t4"), h: t("m6_h"), d: t("m6_d"), items: [t("m6_i1"), t("m6_i2"), t("m6_i3"), t("m6_i4"), t("m6_i5")] }, // Platformalar
  ]
  const m = modules[active]
  const activeTheme = moduleThemes[active]
  const ActiveIcon = moduleIcons[active]

  return (
    <section id="modules" className="py-[100px] section-warm">
      <div className="max-w-[1180px] mx-auto px-5 md:px-7">
        <BlurFade>
          <SectionHeader eyebrow={t("sec8_eye")} title={t("sec8_title")} accent={t("sec8_accent")} />
        </BlurFade>

        {/* MOBILE: accordion list */}
        <BlurFade delay={0.2}>
          <div className="lg:hidden mt-8 space-y-2.5">
            {modules.map((mod, i) => {
              const Icon = moduleIcons[i]
              const theme = moduleThemes[i]
              const isOpen = mobileOpen === i
              return (
                <div key={i} className={`card-std overflow-hidden transition-all duration-300`}
                  style={isOpen ? { borderColor: `${theme.hex}55` } : undefined}>
                  <button
                    onClick={() => setMobileOpen(isOpen ? null : i)}
                    className="w-full flex items-center gap-3 p-3.5 text-left"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all"
                      style={{
                        background: isOpen
                          ? `linear-gradient(135deg, ${theme.from}, ${theme.to})`
                          : `${theme.hex}1A`,
                      }}
                    >
                      <Icon className={`w-4 h-4 ${isOpen ? "text-white" : ""}`}
                        style={!isOpen ? { color: theme.hex } : undefined}
                        strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[9px] font-bold uppercase tracking-wider" style={{ color: theme.hex }}>
                        {mod.tab}
                      </div>
                      <div className="text-[14px] font-bold truncate">{mod.h}</div>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-3.5 pb-4">
                          <p className="text-[12.5px] text-muted-foreground leading-[1.5] mb-3">{mod.d}</p>
                          <ul className="space-y-1.5">
                            {mod.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-[12.5px]">
                                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: theme.hex }} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </BlurFade>

        {/* DESKTOP: sidebar tabs + content */}
        <BlurFade delay={0.2}>
          <div className="hidden lg:grid mt-12 lg:grid-cols-[280px_1fr] gap-4">
            <div className="flex flex-col gap-2">
              {modules.map((mod, i) => {
                const Icon = moduleIcons[i]
                const theme = moduleThemes[i]
                const isActive = i === active
                return (
                  <button key={i} onClick={() => setActive(i)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ease-out border`}
                    style={
                      isActive
                        ? {
                            background: `linear-gradient(135deg, ${theme.from}, ${theme.to})`,
                            color: "white",
                            border: "1px solid transparent",
                            boxShadow: `0 4px 12px ${theme.hex}40`,
                          }
                        : undefined
                    }
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                      style={{
                        background: isActive ? "rgba(255,255,255,0.2)" : `${theme.hex}14`,
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: isActive ? "white" : theme.hex }} strokeWidth={1.8} />
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

            <div className="card-std p-8 min-h-[340px]">
              <AnimatePresence mode="wait">
                <motion.div key={active}
                  initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: [0.39, 0.575, 0.565, 1] }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                      style={{
                        background: `linear-gradient(135deg, ${activeTheme.from}, ${activeTheme.to})`,
                      }}
                    >
                      <ActiveIcon className="w-6 h-6 text-white" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold uppercase tracking-[2px] mb-1" style={{ color: activeTheme.hex }}>{m.tab}</div>
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
                        <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: activeTheme.hex }} />
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
