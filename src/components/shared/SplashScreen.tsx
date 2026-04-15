import { useEffect } from "react"

/**
 * Splash — HTML'da darhol ko'rsatiladi (index.html ichida).
 * Bu komponent React mount bo'lgach HTML splash'ni yo'q qilib, splash:done event'ini uchiradi.
 * Hech qanday React render yo'q — Safari'da yuklash paytida qotish his qilinmaydi.
 */
export function SplashScreen() {
  useEffect(() => {
    let done = false
    const hide = (delay = 0) => {
      if (done) return
      done = true
      setTimeout(() => {
        const el = document.getElementById("initial-splash")
        if (el) {
          el.classList.add("hide")
          setTimeout(() => el.remove(), 300)
        }
        window.dispatchEvent(new CustomEvent("splash:done"))
      }, delay)
    }
    const onLoaded = () => hide(100)
    if (document.readyState === "complete") {
      hide(50)
    } else {
      window.addEventListener("load", onLoaded, { once: true })
    }
    const safetyTimer = setTimeout(() => hide(0), 1500)
    return () => {
      window.removeEventListener("load", onLoaded)
      clearTimeout(safetyTimer)
    }
  }, [])

  return null
}
