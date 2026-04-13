import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

const icons = [
  <svg viewBox="0 0 24 24"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
  <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5Z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  <svg viewBox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>,
  <svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>,
]

export function Audience() {
  const { t } = useLang()
  const items = [
    { title: t("aud1_t"), desc: t("aud1_d") },
    { title: t("aud2_t"), desc: t("aud2_d") },
    { title: t("aud3_t"), desc: t("aud3_d") },
    { title: t("aud4_t"), desc: t("aud4_d") },
  ]

  return (
    <section id="audience" className="py-[100px] bg-secondary">
      <div className="max-w-[1180px] mx-auto px-7">
        <BlurFade>
          <SectionHeader eyebrow={t("sec2_eye")} title={t("sec2_title")} accent={t("sec2_accent")} />
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {items.map((item, i) => (
            <BlurFade key={i} delay={0.1 * i}>
              <div className="card-std p-8 group relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-0.5 gradient-bg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="icon-box-std mb-5">{icons[i]}</div>
                <h3 className="text-lg font-bold tracking-[-0.3px] mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
