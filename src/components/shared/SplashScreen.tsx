import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function SplashScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    let done = false
    const hide = (delay = 0) => {
      if (done) return
      done = true
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("splash:done"))
        setShow(false)
      }, delay)
    }
    const onLoaded = () => hide(150)
    if (document.readyState === "complete") {
      hide(100)
    } else {
      window.addEventListener("load", onLoaded, { once: true })
    }
    const safetyTimer = setTimeout(() => hide(0), 1500)
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
          transition={{ duration: 0.3, ease: "linear" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f] pointer-events-none"
        >
          <div className="relative flex flex-col items-center">
            <img
              src="/img/logo.svg"
              alt="Invision"
              width={160}
              height={36}
              className="h-9 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <div className="relative mt-6 w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#2563eb] to-[#fb7185] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.7, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
