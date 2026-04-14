import { useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useLang } from "@/context/LangContext"
import { sendLeadToTelegram } from "@/lib/telegram"

const incomeOptions = ["$200–500", "$600–1000", "$1000–2000", "$2000–5000", "$5000+"]

export function RegisterForm() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({ fullname: "", phone: "", telegram: "", instagram: "", income: "", goal: "" })

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!/^[A-Za-zА-Яа-яЁёЎўҚқҒғҲҳ\s'''-]{3,60}$/.test(form.fullname.trim())) errs.fullname = t("f_name_err")
    const digits = form.phone.replace(/\D/g, "").substring(3)
    if (digits.length !== 9) errs.phone = t("f_phone_err")
    if (form.telegram && form.telegram !== "@") {
      const tg = form.telegram.startsWith("@") ? form.telegram.substring(1) : form.telegram
      if (!/^[A-Za-z0-9_]{5,32}$/.test(tg)) errs.telegram = t("f_tg_err")
    }
    if (form.instagram && !/^[A-Za-z0-9._]{3,30}$/.test(form.instagram)) errs.instagram = t("f_ig_err")
    if (!form.income) errs.income = t("f_inc_err")
    if (form.goal && form.goal.trim().length < 10) errs.goal = t("f_goal_err")
    return errs
  }

  const formatPhone = (value: string) => {
    let raw = value.replace(/\D/g, "")
    if (!raw.startsWith("998")) raw = "998" + raw.replace(/^998*/, "")
    const d = raw.substring(3, 12)
    let f = "+998"
    if (d.length > 0) f += " " + d.substring(0, 2)
    if (d.length > 2) f += " " + d.substring(2, 5)
    if (d.length > 5) f += " " + d.substring(5, 7)
    if (d.length > 7) f += " " + d.substring(7, 9)
    return f
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setSending(true)
    setSendError(null)
    try {
      const res = await sendLeadToTelegram({
        fullname: form.fullname,
        phone: form.phone,
        telegram: form.telegram,
        instagram: form.instagram,
        income: form.income,
        goal: form.goal,
      })
      if (!res.ok) {
        setSendError(res.error || t("form_generic_err"))
        return
      }
      setSubmitted(true)
    } catch {
      setSendError(t("form_net_err"))
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="card-std p-6 sm:p-10 text-center">
        <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-2">{t("f_ok_t")}</h3>
        <p className="text-muted-foreground">{t("f_ok_d")}</p>
      </div>
    )
  }

  return (
    <div className="card-std p-5 sm:p-8">
      <h3 className="text-xl font-bold mb-1">{t("form_title")}</h3>
      <p className="text-sm text-muted-foreground mb-6">{t("form_sub")}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label={t("f_name_ph")} error={errors.fullname}>
          <Input placeholder={t("f_name_ph")} value={form.fullname}
            onChange={e => setForm({ ...form, fullname: e.target.value.replace(/[^A-Za-zА-Яа-яЁёЎўҚқҒғҲҳ\s'''-]/g, "") })} />
        </Field>
        <Field label="+998" error={errors.phone}>
          <Input type="tel" placeholder="+998 XX XXX XX XX" value={form.phone}
            onFocus={() => { if (!form.phone) setForm({ ...form, phone: "+998 " }) }}
            onChange={e => setForm({ ...form, phone: formatPhone(e.target.value) })} />
        </Field>
        <Field label="Telegram" error={errors.telegram}>
          <Input placeholder="@username" value={form.telegram}
            onFocus={() => { if (!form.telegram) setForm({ ...form, telegram: "@" }) }}
            onChange={e => {
              let v = e.target.value.replace(/[^A-Za-z0-9_@]/g, "")
              if (!v.startsWith("@")) v = "@" + v.replace(/@/g, "")
              setForm({ ...form, telegram: v })
            }} />
        </Field>
        <Field label="Instagram" error={errors.instagram}>
          <Input placeholder="username" value={form.instagram}
            onChange={e => setForm({ ...form, instagram: e.target.value.replace(/[^A-Za-z0-9._]/g, "") })} />
        </Field>
        <Field label={t("f_income_lbl")} error={errors.income}>
          <div className="relative">
            <select value={form.income}
              onChange={e => setForm({ ...form, income: e.target.value })}
              className={`flex h-11 w-full rounded-xl border border-input bg-background/50 px-4 pr-10 text-sm appearance-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:border-[#2563eb]/30 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] hover:border-foreground/15 transition-all duration-300 ${
                form.income ? "text-foreground" : "text-muted-foreground/60"
              }`}>
              <option value="" disabled>{t("form_income_ph")}</option>
              {incomeOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </Field>
        <Field label={t("f_goal_lbl")} error={errors.goal}>
          <textarea placeholder={t("f_goal_ph")} value={form.goal} maxLength={500}
            onChange={e => setForm({ ...form, goal: e.target.value })}
            className="flex min-h-[80px] w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:border-[#2563eb]/30 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] hover:border-foreground/15 transition-all duration-300" />
        </Field>
        {sendError && (
          <div className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-xs text-destructive">
            {sendError}
          </div>
        )}
        <button type="submit" disabled={sending}
          className="btn-primary w-full py-3.5 rounded-xl text-base relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed">
          {sending ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              {t("form_sending")}
            </span>
          ) : (
            t("form_btn")
          )}
          <span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[sweep_4s_ease-in-out_infinite]" />
        </button>
      </form>
    </div>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-sm font-semibold mb-1.5 block">{label}</label>
      {children}
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  )
}
