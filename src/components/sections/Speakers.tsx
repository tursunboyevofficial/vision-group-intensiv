import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

const speakerImages = ["/img/speaker1.png", "/img/speaker2.png", "/img/speaker3.png", "/img/speaker4.png", "/img/speaker5.png"]
const reels = [
  "https://www.youtube.com/embed/a1un10bwYnU",
  "https://www.youtube.com/embed/OorUQTtH-VU",
  "https://www.youtube.com/embed/szfHU8VJMHs",
  "https://www.youtube.com/embed/DiG8g40Dh0o",
  "https://www.youtube.com/embed/ZE0S4OMGeJY",
]

export function Speakers() {
  const { t } = useLang()

  return (
    <section className="py-[100px]">
      <div className="max-w-[1180px] mx-auto px-7">
        <BlurFade>
          <SectionHeader eyebrow="Spikerlar" title="Kursda kimlar o'qitadi?" accent="kimlar o'qitadi?" />
        </BlurFade>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-10">
          {speakerImages.map((src, i) => (
            <BlurFade key={i} delay={0.08 * i}>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                <img src={src} alt={`Spiker ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
              </div>
            </BlurFade>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-6">{t("spk_more")}</p>

        <BlurFade delay={0.3} className="mt-[72px]">
          <SectionHeader eyebrow="Reels" title="Haliyam bir qarorga kelmagan bo'lsangiz, mijozlarimizning fikrlari bilan tanishing" accent="mijozlarimizning fikrlari bilan tanishing" />
        </BlurFade>

        <div className="flex gap-4 mt-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((url, i) => (
            <div key={i} className="shrink-0 w-[200px] snap-start">
              <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
                <iframe src={url} title={`Reel ${i + 1}`} className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
