import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useLang } from "@/context/LangContext"

const incomeOptions = ["$200–500", "$600–1000", "$1000–2000", "$2000–5000", "$5000+"]

export function RegisterForm() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-card border rounded-2xl p-10 text-center shadow-lg">
        <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-2">{t("f_ok_t")}</h3>
        <p className="text-muted-foreground">{t("f_ok_d")}</p>
      </div>
    )
  }

  return (
    <div className="bg-card border rounded-2xl p-8 shadow-lg">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {incomeOptions.map(opt => (
              <button key={opt} type="button" onClick={() => setForm({ ...form, income: opt })}
                className={`px-3 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 ease-out ${
                  form.income === opt ? "gradient-bg text-white border-transparent shadow-[0_4px_12px_rgba(255,120,66,0.2)]" : "bg-card hover:bg-muted hover:border-foreground/10"
                }`}>{opt}</button>
            ))}
          </div>
        </Field>
        <Field label={t("f_goal_lbl")} error={errors.goal}>
          <textarea placeholder={t("f_goal_ph")} value={form.goal} maxLength={500}
            onChange={e => setForm({ ...form, goal: e.target.value })}
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
        </Field>
        <button type="submit"
          className="btn-primary w-full py-3.5 rounded-xl text-base relative overflow-hidden">
          {t("form_btn")}
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
