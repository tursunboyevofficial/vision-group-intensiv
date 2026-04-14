const TOKEN = "8644013921:AAEEQF7qgl6-FxTxZFHSL2YdQ3P_k9PNbOo"
const API = `https://api.telegram.org/bot${TOKEN}`
const CACHE_KEY = "tg_chat_ids_v1"

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
    const res = await fetch(`${API}/getUpdates?limit=100`)
    const data = await res.json()
    if (data?.ok && Array.isArray(data.result)) {
      for (const upd of data.result) {
        const chatId =
          upd?.message?.chat?.id ??
          upd?.channel_post?.chat?.id ??
          upd?.edited_message?.chat?.id
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
  const parts: string[] = [
    "<b>🚀 Yangi ro'yxatdan o'tish</b>",
    "",
    `<b>👤 Ism-familiya:</b> ${escapeHtml(p.fullname)}`,
    `<b>📞 Telefon:</b> ${escapeHtml(p.phone)}`,
  ]
  if (p.telegram && p.telegram !== "@") parts.push(`<b>💬 Telegram:</b> ${escapeHtml(p.telegram)}`)
  if (p.instagram) parts.push(`<b>📷 Instagram:</b> @${escapeHtml(p.instagram)}`)
  parts.push(`<b>💰 Daromad:</b> ${escapeHtml(p.income)}`)
  if (p.goal) parts.push("", `<b>🎯 Maqsad:</b>`, escapeHtml(p.goal))
  parts.push("", `<i>Sana: ${new Date().toLocaleString("uz-UZ")}</i>`)
  return parts.join("\n")
}

export async function sendLeadToTelegram(payload: LeadPayload): Promise<{ ok: boolean; sent: number; error?: string }> {
  const ids = await fetchChatIds()
  if (ids.length === 0) {
    return {
      ok: false,
      sent: 0,
      error: "Hali hech kim botga /start bosmagan. Botga /start yuboring va qayta urinib ko'ring.",
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
  return { ok: sent > 0, sent, error: sent === 0 ? "Xabar jo'natilmadi, qayta urinib ko'ring" : undefined }
}
