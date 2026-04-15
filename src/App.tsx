import { lazy, Suspense, useEffect } from "react"
import { ThemeProvider } from "@/context/ThemeContext"
import { LangProvider } from "@/context/LangContext"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Audience } from "@/components/sections/Audience"
import { GradientDivider } from "@/components/shared/GradientDivider"
import { SplashScreen } from "@/components/shared/SplashScreen"

// Lazy-load below-the-fold sections — yengilroq dastlabki yuklash
const loadExpert = () => import("@/components/sections/Expert")
const loadSolution = () => import("@/components/sections/Solution")
const loadPromise = () => import("@/components/sections/Promise")
const loadCases = () => import("@/components/sections/Cases")
const loadFormat = () => import("@/components/sections/Format")
const loadModules = () => import("@/components/sections/Modules")
const loadResults = () => import("@/components/sections/Results")
const loadSpeakers = () => import("@/components/sections/Speakers")
const loadCTA = () => import("@/components/sections/CTA")
const loadFAQ = () => import("@/components/sections/FAQ")

const Expert = lazy(() => loadExpert().then(m => ({ default: m.Expert })))
const Solution = lazy(() => loadSolution().then(m => ({ default: m.Solution })))
const Promise = lazy(() => loadPromise().then(m => ({ default: m.Promise })))
const Cases = lazy(() => loadCases().then(m => ({ default: m.Cases })))
const Format = lazy(() => loadFormat().then(m => ({ default: m.Format })))
const Modules = lazy(() => loadModules().then(m => ({ default: m.Modules })))
const Results = lazy(() => loadResults().then(m => ({ default: m.Results })))
const Speakers = lazy(() => loadSpeakers().then(m => ({ default: m.Speakers })))
const CTA = lazy(() => loadCTA().then(m => ({ default: m.CTA })))
const FAQ = lazy(() => loadFAQ().then(m => ({ default: m.FAQ })))

const SectionFallback = () => <div className="min-h-[200px]" />

export default function App() {
  useEffect(() => {
    const preload = () => {
      loadExpert(); loadSolution(); loadPromise(); loadCases(); loadFormat()
      loadModules(); loadResults(); loadSpeakers(); loadCTA(); loadFAQ()
    }
    const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback
    if (ric) {
      const id = ric(preload, { timeout: 2500 })
      return () => (window as unknown as { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(id)
    }
    const t = setTimeout(preload, 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <ThemeProvider>
      <LangProvider>
        <SplashScreen />
        <Header />
        <main>
          <Hero />
          <Audience />
          <GradientDivider />
          <Suspense fallback={<SectionFallback />}>
            <Expert />
            <Solution />
            <Promise />
            <GradientDivider />
            <Cases />
            <Format />
            <GradientDivider />
            <Modules />
            <Results />
            <Speakers />
            <CTA />
            <FAQ />
          </Suspense>
        </main>
        <Footer />
      </LangProvider>
    </ThemeProvider>
  )
}
