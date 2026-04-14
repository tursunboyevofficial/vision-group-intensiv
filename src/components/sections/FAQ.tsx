import { BlurFade } from "@/components/magicui/blur-fade"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

export function FAQ() {
  const { t } = useLang()
  const faqs = [
    { q: t("faq_q1"), a: t("faq_a1") },
    { q: t("faq_q2"), a: t("faq_a2") },
    { q: t("faq_q3"), a: t("faq_a3") },
    { q: t("faq_q4"), a: t("faq_a4") },
    { q: t("faq_q5"), a: t("faq_a5") },
  ]

  return (
    <section id="faq" className="pt-10 md:pt-14 pb-[100px] bg-[#101114] text-white overflow-hidden relative">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
          <BlurFade className="md:sticky md:top-24 md:self-start">
            <SectionHeader eyebrow={t("faq_eye")} title={t("faq_title")} accent={t("faq_accent")} description={t("faq_desc")}
              className="[&_h2]:text-white [&_p]:text-white/50" />
            <div className="mt-6 p-5 rounded-xl border border-white/10 bg-white/[0.04]">
              <p className="text-sm text-white/60 mb-4">{t("faq_cta_t")}</p>
              <a href="#register" className="btn-primary gap-2 px-6 py-2.5 text-sm">
                {t("faq_cta_btn")}
                <svg className="w-4 h-4 stroke-current fill-none" strokeWidth={2} strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-white/10 px-1">
                  <AccordionTrigger className="text-white/90 text-left hover:no-underline hover:text-white text-sm font-semibold py-5 [&>svg]:text-white/40">
                    <span className="text-white/30 font-bold mr-4 text-xs tabular-nums">0{i + 1}</span>
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 text-sm leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
