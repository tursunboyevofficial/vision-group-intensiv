import { useState, useEffect, useCallback } from "react"
import { Menu, X } from "lucide-react"
import { useLang } from "@/context/LangContext"
import { langNames, type Lang } from "@/lib/i18n"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      if (mobileOpen) setMobileOpen(false)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [mobileOpen])

  const closeAll = useCallback(() => {
    setLangOpen(false)
    setMobileOpen(false)
  }, [])

  // Tashqariga bosilsa yopiladi
  useEffect(() => {
    if (!mobileOpen && !langOpen) return
    const handle = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("[data-header]")) return
      closeAll()
    }
    window.addEventListener("click", handle, true)
    return () => window.removeEventListener("click", handle, true)
  }, [mobileOpen, langOpen, closeAll])

  const navLinks = [
    { href: "#audience", label: t("nav_audience") },
    { href: "#modules", label: t("nav_program") },
    { href: "#expert", label: t("nav_speaker") },
  ]

  const isLight = !scrolled && !mobileOpen
  const ctrlCls = "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-all duration-300"
  const ctrlStyle = isLight
    ? "bg-white/15 text-white/80 hover:bg-white/25 hover:text-white"
    : "bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
  const ctrlMobile = "bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground"

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setMobileOpen(prev => !prev)
    setLangOpen(false)
  }

  const toggleLang = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLangOpen(prev => !prev)
  }

  const selectLang = (l: Lang) => {
    setLang(l)
    setLangOpen(false)
    setMobileOpen(false)
  }

  const clickLink = () => setMobileOpen(false)

  return (
    <header data-header className={`fixed z-[1000] transition-all duration-500 ease-out ${
      scrolled
        ? "top-3 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-[1100px] md:w-[calc(100%-32px)]"
        : "top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-[1180px] md:w-[calc(100%-32px)]"
    }`}>
      <div className={`rounded-2xl border transition-all duration-500 backdrop-blur-[12px] backdrop-saturate-[200%] ${
        scrolled
          ? "bg-white/80 dark:bg-[rgba(10,10,15,0.6)] border-white/40 dark:border-white/10 shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
          : "bg-white/15 border-white/25 shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
      }`}>
        <div className={`mx-auto px-5 flex items-center justify-between gap-3 transition-all duration-500 ${
          scrolled ? "h-12" : "h-14"
        }`}>
          <a href="#" className="no-underline shrink-0">
            <span className={`font-black tracking-[2px] uppercase transition-all duration-300 ${scrolled ? "text-base" : "text-lg"}`}>
              <span className={isLight ? "text-white" : "text-foreground"}>INVIS</span>
              <span className="gradient-text">ION</span>
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className={`text-[13px] font-medium no-underline transition-all duration-300 ${
                  isLight ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >{link.label}</a>
            ))}
            <div className="flex items-center gap-1.5 ml-1">
              <div className="relative">
                <button className={`${ctrlCls} ${ctrlStyle} font-sans`} onClick={toggleLang}>{lang.toUpperCase()}</button>
                {langOpen && <LangDropdown lang={lang} onSelect={selectLang} />}
              </div>
              <a href="#register" className="btn-primary px-5 py-2 text-[13px] ml-1">{t("nav_start")}</a>
            </div>
          </div>

          {/* Mobile burger */}
          <button className={`md:hidden ${ctrlCls} ${isLight ? "bg-white/15 hover:bg-white/25" : "bg-foreground/5 hover:bg-foreground/10"}`}
            onClick={toggleMenu}>
            {mobileOpen
              ? <X className={`w-4 h-4 pointer-events-none ${isLight ? "text-white" : "text-foreground"}`} />
              : <Menu className={`w-4 h-4 pointer-events-none ${isLight ? "text-white" : "text-foreground"}`} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 rounded-2xl border backdrop-blur-[12px] backdrop-saturate-[200%] bg-white/85 dark:bg-[rgba(10,10,15,0.8)] border-white/30 dark:border-white/10 shadow-xl p-4 flex flex-col gap-1">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={clickLink}
              className="text-sm font-medium text-foreground/70 hover:text-foreground no-underline py-2.5 px-3 rounded-xl hover:bg-foreground/5 transition-all duration-300"
            >{link.label}</a>
          ))}
          <div className="flex items-center gap-2 px-3 py-2 mt-1 border-t">
            <div className="relative">
              <button className={`${ctrlCls} ${ctrlMobile} font-sans`} onClick={toggleLang}>{lang.toUpperCase()}</button>
              {langOpen && <LangDropdown lang={lang} onSelect={selectLang} />}
            </div>
            <span className="text-xs text-muted-foreground ml-1">{langNames[lang]}</span>
          </div>
          <div className="pt-2">
            <a href="#register" onClick={clickLink} className="btn-primary w-full py-2.5 text-sm">{t("nav_start")}</a>
          </div>
        </div>
      )}
    </header>
  )
}

function LangDropdown({ lang, onSelect }: { lang: Lang; onSelect: (l: Lang) => void }) {
  return (
    <div className="absolute left-0 bottom-full mb-2 md:left-auto md:right-0 md:bottom-auto md:mb-0 md:top-10 bg-white/90 dark:bg-[rgba(15,15,20,0.95)] backdrop-blur-[12px] backdrop-saturate-[180%] border border-white/20 dark:border-white/10 rounded-xl shadow-xl overflow-hidden min-w-[110px] z-50">
      {(Object.keys(langNames) as Lang[]).map(l => (
        <button key={l} onClick={() => onSelect(l)}
          className={`block w-full text-left px-4 py-2.5 text-[13px] font-semibold transition-all duration-300 hover:bg-foreground/5 ${
            l === lang ? "text-[#ff7842]" : "text-muted-foreground hover:text-foreground"
          }`}
        >{langNames[l]}</button>
      ))}
    </div>
  )
}
