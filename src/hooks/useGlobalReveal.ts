import { useEffect } from 'react'

/**
 * Call this ONCE, at the top-level App component.
 * It watches elements with class "reveal-up" and reveals
 * them (with optional stagger via data-reveal-group) when
 * they scroll into view. Non-home page content sections
 * are registered automatically.
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
        if (document.querySelector('.page-shell')?.getAttribute('data-route-transitioning') === 'true') {
          return
        }

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
      if (document.querySelector('.page-shell')?.getAttribute('data-route-transitioning') === 'true') {
        return
      }

      const isHomePage = document.querySelector('.hero-section--carousel-only') !== null
      if (!isHomePage) {
        document
          .querySelectorAll('.page-content-over-hero > section:not(.reveal-up)')
          .forEach((el) => el.classList.add('reveal-up'))
      }

      document.querySelectorAll<HTMLElement>('.reveal-up:not(.is-visible)').forEach((el) => {
        const bounds = el.getBoundingClientRect()
        const isAlreadyInView = bounds.top < window.innerHeight && bounds.bottom > 0

        if (isAlreadyInView) {
          el.classList.add('is-visible')
          return
        }

        io.observe(el)
      })
    }

    let observationFrame = 0
    const scheduleObserveAll = () => {
      window.cancelAnimationFrame(observationFrame)
      observationFrame = window.requestAnimationFrame(() => {
        observationFrame = window.requestAnimationFrame(observeAll)
      })
    }

    // Re-scan when new nodes get added (route change, lazy content, etc.)
    const mo = new MutationObserver(scheduleObserveAll)
    mo.observe(document.body, { childList: true, subtree: true })
    const pageShell = document.querySelector('.page-shell')
    if (pageShell) {
      mo.observe(pageShell, {
        attributes: true,
        attributeFilter: ['data-route-transitioning'],
      })
    }
    scheduleObserveAll()

    return () => {
      io.disconnect()
      mo.disconnect()
      window.cancelAnimationFrame(observationFrame)
    }
  }, [])
}