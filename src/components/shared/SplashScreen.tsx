import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function SplashScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    let done = false
    const hide = (delay = 0) => {
      if (done) return
      done = true
      setTimeout(() => setShow(false), delay)
    }
    // 1) Sahifa to'liq yuklanganda — minimum 600ms ko'rsatish uchun delay
    const onLoaded = () => hide(600)
    if (document.readyState === "complete") {
      hide(400)
    } else {
      window.addEventListener("load", onLoaded, { once: true })
    }
    // 2) Maximum 2 sekundan ko'p turib qolmasin (xavfsizlik)
    const safetyTimer = setTimeout(() => hide(0), 2000)
    return () => {
      window.removeEventListener("load", onLoaded)
      clearTimeout(safetyTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f] pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="relative flex flex-col items-center"
          >
            {/* Glow halo */}
            <motion.div
              className="absolute -inset-12 rounded-full blur-3xl opacity-50"
              style={{
                background:
                  "radial-gradient(circle, rgba(37,99,235,0.6), rgba(251,113,133,0.4), transparent 70%)",
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Logo */}
            <img
              src="/img/logo.svg"
              alt="Invision"
              width={160}
              height={36}
              className="relative h-9 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />

            {/* Loading bar */}
            <div className="relative mt-6 w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#2563eb] to-[#fb7185] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
