import { useEffect, useState } from "react"

/**
 * Tracks whether a media query matches.
 * Initial value is read synchronously from window.matchMedia so the
 * first render returns the correct value (CSR only).
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    if (typeof window === "undefined") return
    const mql = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    setMatches(mql.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [query])

  return matches
}

export const useIsDesktop = () => useMediaQuery("(min-width: 768px)")
