import { useEffect, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { useLang } from "@/context/LangContext"

interface ThankYouModalProps {
  open: boolean
  onClose: () => void
  duration?: number
}

export function ThankYouModal({ open, onClose, duration = 3000 }: ThankYouModalProps) {
  const { t } = useLang()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!open) {
      setMounted(false)
      return
    }
    const openTimer = setTimeout(() => setMounted(true), 10)
    const closeTimer = setTimeout(() => {
      setMounted(false)
      setTimeout(onClose, 400)
    }, duration)
    return () => {
      clearTimeout(openTimer)
      clearTimeout(closeTimer)
    }
  }, [open, duration, onClose])

  if (!open) return null

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center p-4 transition-opacity duration-400 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(10,10,15,0.85) 0%, rgba(10,10,15,0.95) 100%)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      onClick={onClose}
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563eb, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-35 pointer-events-none"
        style={{ background: "radial-gradient(circle, #fb7185, transparent 70%)" }}
      />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative max-w-md w-full transition-all duration-500 ${
          mounted ? "scale-100 translate-y-0 opacity-100" : "scale-90 translate-y-4 opacity-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {/* Gradient border glow */}
        <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-br from-[#2563eb] via-[#fb7185] to-[#fda4af] opacity-60 blur-lg" />

        <div className="relative bg-[#0f0f16] rounded-[26px] border border-white/10 p-8 sm:p-10 text-center overflow-hidden">
          {/* Shimmer effect */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.25), transparent 60%)",
            }}
          />

          {/* Check icon with pulsating ring */}
          <div className="relative inline-flex items-center justify-center mb-6">
            <div
              className={`absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-br from-[#2563eb] to-[#fb7185] ${
                mounted ? "animate-ping" : ""
              }`}
              style={{ animationDuration: "1.8s" }}
            />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#2563eb] to-[#fb7185] flex items-center justify-center shadow-[0_10px_40px_rgba(37,99,235,0.5)]">
              <CheckCircle2
                className="w-10 h-10 text-white"
                strokeWidth={2.5}
                style={{
                  animation: mounted ? "checkPop 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards" : "none",
                }}
              />
            </div>
          </div>

          <h3 className="relative text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
            {t("f_ok_t")}
          </h3>
          <p className="relative text-sm sm:text-base text-white/70 leading-relaxed max-w-sm mx-auto">
            {t("f_ok_d")}
          </p>

          {/* Auto-close progress bar */}
          <div className="relative mt-8 h-[3px] rounded-full bg-white/10 overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#2563eb] via-[#fb7185] to-[#fda4af] rounded-full"
              style={{
                animation: mounted ? `shrinkBar ${duration}ms linear forwards` : "none",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes checkPop {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes shrinkBar {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  )
}
