import { translations, type Lang } from "@/lib/i18n"

const TOKEN = "8644013921:AAEEQF7qgl6-FxTxZFHSL2YdQ3P_k9PNbOo"
const API = `https://api.telegram.org/bot${TOKEN}`
const CACHE_KEY = "tg_chat_ids_v1"

function currentLang(): Lang {
  try {
    const stored = localStorage.getItem("lang") as Lang | null
    if (stored === "uz" || stored === "ru" || stored === "en") return stored
  } catch {}
  return "uz"
}

function tr(key: string): string {
  const lang = currentLang()
  return translations[lang]?.[key] || translations.uz[key] || key
}

type ChatIdSet = number[]

function readCache(): ChatIdSet {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function writeCache(ids: ChatIdSet) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(ids))
  } catch {}
}

async function fetchChatIds(): Promise<ChatIdSet> {
  const ids = new Set<number>(readCache())
  try {
    const allowed = encodeURIComponent(
      JSON.stringify([
        "message",
        "edited_message",
        "channel_post",
        "edited_channel_post",
        "my_chat_member",
        "chat_member",
      ])
    )
    const res = await fetch(`${API}/getUpdates?limit=100&allowed_updates=${allowed}`)
    const data = await res.json()
    if (data?.ok && Array.isArray(data.result)) {
      for (const upd of data.result) {
        const chatId =
          upd?.message?.chat?.id ??
          upd?.edited_message?.chat?.id ??
          upd?.channel_post?.chat?.id ??
          upd?.edited_channel_post?.chat?.id ??
          upd?.my_chat_member?.chat?.id ??
          upd?.chat_member?.chat?.id
        if (typeof chatId === "number") ids.add(chatId)
      }
    }
  } catch {}
  const arr = [...ids]
  writeCache(arr)
  return arr
}

export type LeadPayload = {
  fullname: string
  phone: string
  telegram?: string
  instagram?: string
  income: string
  goal?: string
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function formatMessage(p: LeadPayload): string {
  const lang = currentLang()
  const locale = lang === "ru" ? "ru-RU" : lang === "en" ? "en-US" : "uz-UZ"
  const parts: string[] = [
    `<b>🚀 ${tr("tg_new_lead")}</b>`,
    "",
    `<b>👤 ${tr("tg_name")}:</b> ${escapeHtml(p.fullname)}`,
    `<b>📞 ${tr("tg_phone")}:</b> ${escapeHtml(p.phone)}`,
  ]
  if (p.telegram && p.telegram !== "@") parts.push(`<b>💬 ${tr("tg_tg")}:</b> ${escapeHtml(p.telegram)}`)
  if (p.instagram) parts.push(`<b>📷 ${tr("tg_ig")}:</b> @${escapeHtml(p.instagram)}`)
  parts.push(`<b>💰 ${tr("tg_income")}:</b> ${escapeHtml(p.income)}`)
  if (p.goal) parts.push("", `<b>🎯 ${tr("tg_goal")}:</b>`, escapeHtml(p.goal))
  parts.push("", `<i>${tr("tg_date")}: ${new Date().toLocaleString(locale)}</i>`)
  return parts.join("\n")
}

export async function sendLeadToTelegram(payload: LeadPayload): Promise<{ ok: boolean; sent: number; error?: string }> {
  const ids = await fetchChatIds()
  if (ids.length === 0) {
    return {
      ok: false,
      sent: 0,
      error: tr("tg_no_start"),
    }
  }
  const text = formatMessage(payload)
  const results = await Promise.allSettled(
    ids.map((chat_id) =>
      fetch(`${API}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id, text, parse_mode: "HTML", disable_web_page_preview: true }),
      }).then((r) => r.json())
    )
  )
  const sent = results.filter((r) => r.status === "fulfilled" && (r.value as { ok?: boolean })?.ok).length
  return { ok: sent > 0, sent, error: sent === 0 ? tr("tg_send_fail") : undefined }
}
