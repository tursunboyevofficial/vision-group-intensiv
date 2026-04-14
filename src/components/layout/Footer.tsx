import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useLang } from "@/context/LangContext"

const socials = [
  { href: "https://www.instagram.com/invisionuz", label: "Instagram", icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
  { href: "https://t.me/jaxongirrayimjonov", label: "Telegram", icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg> },
  { href: "https://m.facebook.com/profile.php?id=100078195200837", label: "Facebook", icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { href: "https://youtube.com/@jaxongir.raimjonov.channel", label: "YouTube", icon: <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current"><path d="M21.582 6.186a2.506 2.506 0 0 0-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418A2.506 2.506 0 0 0 2.418 6.186C2 7.746 2 12 2 12s0 4.254.418 5.814a2.506 2.506 0 0 0 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418a2.506 2.506 0 0 0 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM10 15.464V8.536L16 12l-6 3.464z"/></svg> },
]

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t">
      <div className="max-w-[1180px] mx-auto px-7">
        {/* Kontaktlar */}
        <div className="py-12 border-b">
          <h3 className="text-2xl font-extrabold tracking-tight mb-8">
            <span className="italic">Kontakt</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#2563eb] mt-1 shrink-0" />
              <div>
                <div className="text-xs text-muted-foreground mb-1">Pochta:</div>
                <a href="mailto:invisionuz@gmail.com" className="text-sm font-medium no-underline hover:text-[#2563eb] transition-colors duration-300">invisionuz@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#2563eb] mt-1 shrink-0" />
              <div>
                <div className="text-xs text-muted-foreground mb-1">Telefon:</div>
                <a href="tel:+998200032020" className="text-sm font-medium no-underline hover:text-[#2563eb] transition-colors duration-300">+998 20 003 20 20</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#2563eb] mt-1 shrink-0" />
              <div>
                <div className="text-xs text-muted-foreground mb-1">Manzil:</div>
                <a href="https://yandex.ru/navi/org/57020786046" target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium no-underline hover:text-[#2563eb] transition-colors duration-300 block">
                  Invision Agency
                </a>
                <p className="text-xs text-muted-foreground mt-0.5 leading-snug">Toshkent, Mirobod tumani, Shahrisabz ko'chasi, 25</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#2563eb] mt-1 shrink-0" />
              <div>
                <div className="text-xs text-muted-foreground mb-1">Ish vaqti:</div>
                <p className="text-sm font-medium">Dushanba–Shanba: 9:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div className="mt-8 flex items-center gap-6">
            <span className="text-xs text-muted-foreground">Ijtimoiy tarmoqlar:</span>
            <div className="flex gap-2">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  className="w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(37,99,235,0.3)]">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Qo'shimcha */}
          <p className="text-xs text-muted-foreground mt-6">
            Biz bilan istagan qulay usulda bog'laning yoki ofisimizga tashrif buyuring
          </p>
        </div>

        {/* Pastki qism */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xl font-black tracking-[2px] uppercase">
            INVIS<span className="gradient-text">ION</span>
            <span className="block text-[9px] font-medium tracking-[1.5px] text-muted-foreground -mt-0.5 lowercase">producing & marketing</span>
          </div>
          <p className="text-xs text-muted-foreground">{t("footer_copy")}</p>
        </div>
      </div>
    </footer>
  )
}
