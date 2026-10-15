import { useEffect } from 'react'

/**
 * Call this ONCE, at the top-level App component.
 * It watches the whole document for any element with
 * class "reveal-up" and reveals it (with optional stagger
 * via data-reveal-group) when it scrolls into view.
 *
 * Also re-scans automatically when the DOM changes (route
 * changes, dynamic content, etc.) via a MutationObserver.
 */
export function useGlobalReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.reveal-up').forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const group = el.closest('[data-reveal-group]')
            if (group) {
              const siblings = Array.from(group.querySelectorAll('.reveal-up'))
              const index = siblings.indexOf(el)
              el.style.transitionDelay = `${Math.max(index, 0) * 90}ms`
            }
            el.classList.add('is-visible')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.15 },
    )

    const observeAll = () => {
      document.querySelectorAll('.reveal-up:not(.is-visible)').forEach((el) => io.observe(el))
    }

    observeAll()

    // Re-scan when new nodes get added (route change, lazy content, etc.)
    const mo = new MutationObserver(() => observeAll())
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}