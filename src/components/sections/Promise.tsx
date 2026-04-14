import { useRef, useState } from "react"
import { Check, Play, Pause, Volume2, VolumeX } from "lucide-react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useLang } from "@/context/LangContext"

export function Promise() {
  const { t } = useLang()
  const items = [t("prom1"), t("prom2"), t("prom3"), t("prom4"), t("prom5")]
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) }
    else { v.pause(); setPlaying(false) }
  }
  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <section id="promise" className="py-[100px]">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid md:grid-cols-[380px_1fr] gap-8 items-start">
          <BlurFade>
            <div className="group relative rounded-2xl overflow-hidden bg-black shadow-[0_8px_30px_rgba(0,0,0,0.15)] aspect-[9/16] w-full max-w-[320px] cursor-pointer" onClick={togglePlay}>
              <video
                ref={videoRef}
                src="/video/promise.mp4"
                className="w-full h-full object-cover"
                autoPlay muted loop playsInline preload="metadata"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Center play button — faqat pauza bo'lganda */}
              {!playing && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-black fill-black ml-0.5" />
                  </div>
                </div>
              )}
              {/* Control bar — hoverda ko'rinadi */}
              <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={e => { e.stopPropagation(); togglePlay() }}
                  className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md hover:bg-white/25 flex items-center justify-center transition-all duration-300">
                  {playing ? <Pause className="w-3.5 h-3.5 text-white fill-white" /> : <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />}
                </button>
                <button onClick={e => { e.stopPropagation(); toggleMute() }}
                  className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md hover:bg-white/25 flex items-center justify-center transition-all duration-300">
                  {muted ? <VolumeX className="w-3.5 h-3.5 text-white" /> : <Volume2 className="w-3.5 h-3.5 text-white" />}
                </button>
              </div>
            </div>
          </BlurFade>
          <div>
            <BlurFade>
              <SectionHeader eyebrow={t("sec3_eye")} title={t("sec3_title")} accent={t("sec3_accent")} />
            </BlurFade>
            <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-3 mt-12">
              {items.map((item, i) => (
                <BlurFade key={i} delay={0.08 * i}>
                  <div className="card-std flex items-center gap-4 px-5 py-5">
                    <div className="check-std">
                      <Check className="w-[13px] h-[13px] text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-[15px] font-semibold">{item}</span>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
