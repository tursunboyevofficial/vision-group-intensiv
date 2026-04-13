import { createContext, useContext, useState, type ReactNode } from "react"
import { translations, type Lang } from "@/lib/i18n"

interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const LangContext = createContext<LangContextType | undefined>(undefined)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem("lang") as Lang) || "uz"
  })

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang)
    localStorage.setItem("lang", newLang)
  }

  const t = (key: string) => {
    return translations[lang]?.[key] || translations.uz[key] || key
  }

  return (
    <LangContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LangContext)
  if (!context) throw new Error("useLang must be used within LangProvider")
  return context
}
