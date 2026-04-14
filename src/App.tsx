import { ThemeProvider } from "@/context/ThemeContext"
import { LangProvider } from "@/context/LangContext"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Audience } from "@/components/sections/Audience"
import { Expert } from "@/components/sections/Expert"
import { Solution } from "@/components/sections/Solution"
import { Cases } from "@/components/sections/Cases"
import { Format } from "@/components/sections/Format"
import { Modules } from "@/components/sections/Modules"
import { Results } from "@/components/sections/Results"
import { Speakers } from "@/components/sections/Speakers"
import { CTA } from "@/components/sections/CTA"
import { FAQ } from "@/components/sections/FAQ"
import { GradientDivider } from "@/components/shared/GradientDivider"

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <Header />
        <main>
          <Hero />
          <Audience />
          <GradientDivider />
          <Expert />
          <Solution />
          <GradientDivider />
          <Cases />
          <Format />
          <GradientDivider />
          <Modules />
          <Results />
          <Speakers />
          <CTA />
          <FAQ />
        </main>
        <Footer />
      </LangProvider>
    </ThemeProvider>
  )
}
