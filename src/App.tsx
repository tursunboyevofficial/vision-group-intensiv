import { ThemeProvider } from "@/context/ThemeContext"
import { LangProvider } from "@/context/LangContext"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Audience } from "@/components/sections/Audience"
import { Promise } from "@/components/sections/Promise"
import { Expert } from "@/components/sections/Expert"
import { Solution } from "@/components/sections/Solution"
import { Cases } from "@/components/sections/Cases"
import { Format } from "@/components/sections/Format"
import { Modules } from "@/components/sections/Modules"
import { VisualStrip } from "@/components/sections/VisualStrip"
import { Results } from "@/components/sections/Results"
import { Speakers } from "@/components/sections/Speakers"
import { CTA } from "@/components/sections/CTA"
import { FAQ } from "@/components/sections/FAQ"

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Header />
        <main>
          <Hero />
          <Audience />
          <Promise />
          <Expert />
          <Solution />
          <Cases />
          <Format />
          <Modules />
          <VisualStrip src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80" alt="Personal branding workshop" toDark />
          <Results />
          <Speakers />
          <VisualStrip src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=80" alt="Team working together" />
          <CTA />
          <FAQ />
        </main>
        <Footer />
      </LangProvider>
    </ThemeProvider>
  )
}
