import { lazy, Suspense } from "react"
import { ThemeProvider } from "@/context/ThemeContext"
import { LangProvider } from "@/context/LangContext"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Audience } from "@/components/sections/Audience"
import { GradientDivider } from "@/components/shared/GradientDivider"
import { SplashScreen } from "@/components/shared/SplashScreen"

// Lazy-load below-the-fold sections — yengilroq dastlabki yuklash
const Expert = lazy(() => import("@/components/sections/Expert").then(m => ({ default: m.Expert })))
const Solution = lazy(() => import("@/components/sections/Solution").then(m => ({ default: m.Solution })))
const Promise = lazy(() => import("@/components/sections/Promise").then(m => ({ default: m.Promise })))
const Cases = lazy(() => import("@/components/sections/Cases").then(m => ({ default: m.Cases })))
const Format = lazy(() => import("@/components/sections/Format").then(m => ({ default: m.Format })))
const Modules = lazy(() => import("@/components/sections/Modules").then(m => ({ default: m.Modules })))
const Results = lazy(() => import("@/components/sections/Results").then(m => ({ default: m.Results })))
const Speakers = lazy(() => import("@/components/sections/Speakers").then(m => ({ default: m.Speakers })))
const CTA = lazy(() => import("@/components/sections/CTA").then(m => ({ default: m.CTA })))
const FAQ = lazy(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })))

const SectionFallback = () => <div className="min-h-[200px]" />

export default function App() {
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
