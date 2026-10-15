import { useEffect, useRef, useState, type ReactElement } from 'react'
import {
  ChevronRight,
  ChevronUp,
  Mail,
  MapPin,
  Phone,
  Shield,
} from 'lucide-react'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import CoreBankingPage from './pages/Services/CoreBankingPage'
import ErpSystemsPage from './pages/Services/ErpSystemsPage'
import CrmPage from './pages/Services/CrmPage'
import IctAdvisoryPage from './pages/Services/IctAdvisoryPage'
import DataCenterPage from './pages/Services/DataCenterPage'
import CyberSecurity from './pages/Services/CyberSecurity'
import CloudDevPage from './pages/Services/CloudDevPage'
import logoLight from './assets/logos/Finsys Trch Logo-light mode.png'
import logoDark from './assets/logos/Finsys Trch Logo-dark mode.png'
import './App.css'
import { useGlobalReveal } from './hooks/useGlobalReveal'

const navLinks = ['Home', 'About', 'Services', 'Contact']

const getNavLabel = (link: string) => (link === 'Contact' ? 'Contact Us' : link)

const serviceOptions = [
  { label: 'Core Banking Services (CBS)', slug: 'core-banking-services', path: '/services/core-banking-services' },
  { label: 'Enterprise ERP Systems (Oracle EBS & Fusion Cloud)', slug: 'enterprise-erp-systems', path: '/services/enterprise-erp-systems' },
  { label: 'Digital Lending & CRM Solutions', slug: 'digital-lending-crm-solutions', path: '/services/digital-lending-crm-solutions' },
  { label: 'Strategic ICT Advisory & Enterprise Architecture', slug: 'ict-advisory-enterprise-architecture', path: '/services/ict-advisory-enterprise-architecture' },
  { label: 'Data Centre & Network Infrastructure', slug: 'data-centre-network-infrastructure', path: '/services/data-centre-network-infrastructure' },
  { label: 'Cybersecurity, Risk & Compliance', slug: 'cybersecurity-risk-compliance', path: '/services/cybersecurity-risk-compliance' },
  { label: 'Cloud, DevOps & Modern Digital Solutions', slug: 'cloud-devops-modern-digital-solutions', path: '/services/cloud-devops-modern-digital-solutions' },
]

const DEFAULT_SERVICE_PATH = serviceOptions[0].path

const footerSolutions = [
  { label: 'ICT & Strategic Consulting', path: '/services/ict-advisory-enterprise-architecture' },
  { label: 'Banking Technology Services', path: '/services/core-banking-services' },
  { label: 'Oracle Enterprise Systems', path: '/services/enterprise-erp-systems' },
  { label: 'Data Centre & Infrastructure', path: '/services/data-centre-network-infrastructure' },
  { label: 'Cybersecurity & Compliance', path: '/services/cybersecurity-risk-compliance' },
  { label: 'Cloud, DevOps & Software', path: '/services/cloud-devops-modern-digital-solutions' },
]

const footerExploreLinks = [
  { label: 'Home', path: '/', navKey: 'Home' as const },
  { label: 'About', path: '/about', navKey: 'About' as const },
  { label: 'Services', path: DEFAULT_SERVICE_PATH, navKey: 'Services' as const },
  { label: 'Contact', path: '/contact', navKey: 'Contact' as const },
]

const servicesSubPageMap: Record<string, ReactElement> = {
  '/services/core-banking-services': <CoreBankingPage />,
  '/services/enterprise-erp-systems': <ErpSystemsPage />,
  '/services/digital-lending-crm-solutions': <CrmPage />,
  '/services/ict-advisory-enterprise-architecture': <IctAdvisoryPage />,
  '/services/data-centre-network-infrastructure': <DataCenterPage />,
  '/services/cybersecurity-risk-compliance': <CyberSecurity />,
  '/services/cloud-devops-modern-digital-solutions': <CloudDevPage />,
}

const footerSocialLinks = [
  { label: 'Facebook', href: '#', icon: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-2.8 0-4 1.4-4 4v2H7v3h3v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
    </svg>
  ) },
  { label: 'Instagram', href: '#', icon: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ) },
  { label: 'LinkedIn', href: '#', icon: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.5h3v9h-3v-9zm1.5-4.5a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zM10 8.5h2.9v1.2h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v4.76H16.5v-4.2c0-1-.02-2.3-1.4-2.3-1.44 0-1.66 1.12-1.66 2.28v4.22H10V8.5z" />
    </svg>
  ) },
]

function App() {
    //============== [my edit 1]
  useGlobalReveal()
  const [transitionPhase, setTransitionPhase] = useState<'idle' | 'covering' | 'revealing'>('idle')
  const ROUTE_COVER_MS = 500
  const ROUTE_REVEAL_MS = 900

  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [theme] = useState<'light'>('light')
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement | null>(null)
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window === 'undefined') return '/'
    return window.location.pathname
  })
  const [pendingHashTarget, setPendingHashTarget] = useState<string | null>(null)
  const previousPathRef = useRef(currentPath)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
      setShowScrollTop(window.scrollY > 80)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [menuOpen])

  useEffect(() => {
    if (!servicesOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setServicesOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [servicesOpen])

  useEffect(() => {
    if (currentPath !== '/services') return
    window.history.replaceState({}, '', DEFAULT_SERVICE_PATH)
    setCurrentPath(DEFAULT_SERVICE_PATH)
  }, [currentPath])

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
      if (window.location.pathname === '/' && window.location.hash) {
        setPendingHashTarget(window.location.hash.slice(1))
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (previousPathRef.current !== currentPath) {
      if (!(currentPath === '/' && pendingHashTarget)) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }
      previousPathRef.current = currentPath
    }
  }, [currentPath, pendingHashTarget])

  useEffect(() => {
    if (currentPath === '/' && pendingHashTarget) {
      const target = document.getElementById(pendingHashTarget)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
      setPendingHashTarget(null)
    }
  }, [currentPath, pendingHashTarget])


  //============== [my edit 2]
const handleNavClick = (
  event: React.MouseEvent<HTMLAnchorElement>,
  link: string,
) => {
  if (link === 'Home' || link === 'About' || link === 'Contact') {
    event.preventDefault()
    const nextPath =
      link === 'Home' ? '/' : link === 'About' ? '/about' : '/contact'
    goTo(nextPath)
  }
}

const handleExploreServices = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault()
  goTo(DEFAULT_SERVICE_PATH)
}


const handleNavigateHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault()
  const hash = event.currentTarget.hash ? event.currentTarget.hash.slice(1) : null
  goTo('/', hash)
}

  // const handleNavClick = (
  //   event: React.MouseEvent<HTMLAnchorElement>,
  //   link: string,
  // ) => {
  //   if (link === 'Home' || link === 'About' || link === 'Services' || link === 'Contact') {
  //     event.preventDefault()
  //     const nextPath =
  //       link === 'Home'
  //         ? '/'
  //         : link === 'About'
  //           ? '/about'
  //           : link === 'Services'
  //             ? '/services'
  //             : '/contact'
  //     if (window.location.pathname !== nextPath) {
  //       window.history.pushState({}, '', nextPath)
  //       setCurrentPath(nextPath)
  //     }
  //     setMenuOpen(false)
  //     return
  //   }
  // }

  // const handleExploreServices = (event: React.MouseEvent<HTMLAnchorElement>) => {
  //   event.preventDefault()
  //   if (window.location.pathname !== '/services') {
  //     window.history.pushState({}, '', '/services')
  //     setCurrentPath('/services')
  //   }
  //   setMenuOpen(false)
  // }

  // const handleNavigateHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
  //   event.preventDefault()
  //   const hash = event.currentTarget.hash ? event.currentTarget.hash.slice(1) : null
  //   const nextUrl = hash ? `/#${hash}` : '/'
  //   window.history.pushState({}, '', nextUrl)
  //   setCurrentPath('/')
  //   if (hash) {
  //     setPendingHashTarget(hash)
  //   }
  //   setMenuOpen(false)
  // }

  const getNavHref = (link: string) => {
    if (link === 'Home') return '/'
    if (link === 'About') return '/about'
    if (link === 'Services') return DEFAULT_SERVICE_PATH
    if (link === 'Contact') return '/contact'
    return `#${link.toLowerCase().replace(/\s+/g, '-')}`
  }

  const isActiveLink = (link: string) => {
    if (link === 'Home') return currentPath === '/'
    if (link === 'About') return currentPath === '/about'
    if (link === 'Services') return currentPath.startsWith('/services')
    if (link === 'Contact') return currentPath === '/contact'
    return false
  }

  const isActiveServicePath = (path: string) => currentPath === path

  useEffect(() => {
    if (menuOpen && currentPath.startsWith('/services')) {
      setMobileServicesOpen(true)
    }
  }, [menuOpen, currentPath])

  //========on click animation
  const goTo = (path: string, hash?: string | null) => {
    if (path === currentPath && !hash) {
      setMenuOpen(false)
      return
    }
    setMenuOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
    setTransitionPhase('covering')
    window.setTimeout(() => {
      window.history.pushState({}, '', hash ? `${path}#${hash}` : path)
      setCurrentPath(path)
      if (hash) setPendingHashTarget(hash)
      setTransitionPhase('revealing')
      window.setTimeout(() => setTransitionPhase('idle'), ROUTE_REVEAL_MS)
    }, ROUTE_COVER_MS)
  }

  const handleServiceOptionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    event.preventDefault()
    setServicesOpen(false)
    setMobileServicesOpen(false)
    goTo(path)
  }

  const handleServiceNavigate = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    event.preventDefault()
    goTo(path)
  }

  return (
    <div className="page-shell">
      {/*=============== my addition loader */}
      <div
        className={`route-transition-overlay${transitionPhase === 'covering' ? ' active' : ''}${transitionPhase === 'revealing' ? ' revealing' : ''}`}
        aria-hidden={transitionPhase === 'idle'}
      >
        <div className="route-transition-content">
          <img
            src={theme === 'light' ? logoLight : logoDark}
            alt=""
            className="route-transition-logo"
          />
          <div className="route-transition-bar">
            <span className="route-transition-bar-fill" />
          </div>
        </div>
        </div>
       {/* ends here */}

      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <a className="brand" href="/" onClick={(event) => handleNavClick(event, 'Home')}>
          <img
            src={theme === 'light' ? logoLight : logoDark}
            alt="Finsys Tech logo"
            className="brand-logo"
          />
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((s) => !s)}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M18.3 5.71L12 12l6.3 6.29-1.42 1.42L10.17 13.4 4.88 19.7 3.46 18.29 9.75 12 3.46 5.71 4.88 4.29 10.17 10.6 16.58 4.29z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
          )}
        </button>

        {/* <nav className="site-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link}
              href={getNavHref(link)}
              onClick={(event) => handleNavClick(event, link)}
              className={isActiveLink(link) ? 'active' : ''}
              aria-current={isActiveLink(link) ? 'page' : undefined}
            >
              {link}
            </a>
          ))}
        </nav> */}


        <nav className="site-nav" aria-label="Primary navigation">
          {navLinks.map((link) =>
            link === 'Services' ? (
              <div
                className="nav-dropdown"
                ref={servicesRef}
                key={link}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className={`nav-dropdown-toggle${isActiveLink('Services') ? ' active' : ''}`}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  Services
                  <svg
                    className="nav-dropdown-chevron"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M7 10l5 5 5-5z" />
               </svg>
                </button>

                <div className={`nav-dropdown-menu${servicesOpen ? ' open' : ''}`} role="menu">
                  {serviceOptions.map((option) => (
                    <a
                      key={option.slug}
                      href={option.path}
                      role="menuitem"
                      className={isActiveServicePath(option.path) ? 'active' : ''}
                      aria-current={isActiveServicePath(option.path) ? 'page' : undefined}
                      onClick={(event) => handleServiceOptionClick(event, option.path)}
                    >
                      {option.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link}
                href={getNavHref(link)}
                onClick={(event) => handleNavClick(event, link)}
                className={isActiveLink(link) ? 'active' : ''}
                aria-current={isActiveLink(link) ? 'page' : undefined}
              >
                {getNavLabel(link)}
              </a>
            ),
          )}
        </nav>

        <div className="header-actions">
        <div className="header-contact-info">
          <a href="mailto:info@finsys-tech.co.tz" className="header-contact-line">
            <Mail size={14} aria-hidden="true" />
            <span>info@finsys-tech.co.tz</span>
          </a>
          <a href="tel:+255752897733" className="header-contact-line">
            <Phone size={14} aria-hidden="true" />
            <span>+255 752 897 733</span>
          </a>
        </div>
      </div>
      </header>

      <div
        className={`mobile-drawer-backdrop${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="menu"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <button
          className="mobile-close"
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>

        {/* <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link}
              href={getNavHref(link)}
              role="menuitem"
              className={isActiveLink(link) ? 'active' : ''}
              aria-current={isActiveLink(link) ? 'page' : undefined}
              onClick={(event) => {
                handleNavClick(event, link)
                setMenuOpen(false)
              }}
            >
              {link}
            </a>
          ))} */}


          <nav className="mobile-nav">
          {navLinks.map((link) =>
            link === 'Services' ? (
              <div className="mobile-nav-dropdown" key={link}>
                <button
                  type="button"
                  className={`mobile-nav-subtoggle${mobileServicesOpen ? ' open' : ''}${isActiveLink('Services') ? ' active' : ''}`}
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((open) => !open)}
                >
                  Services
                  <svg
                    className="nav-dropdown-chevron"
                    viewBox="0 0 24 24"
                  aria-hidden="true"
                    focusable="false"
                >
                    <path d="M7 10l5 5 5-5z" />
                </svg>
                </button>

                {mobileServicesOpen && (
                  <div className="mobile-nav-submenu">
                    {serviceOptions.map((option) => (
                      <a
                        key={option.slug}
                        href={option.path}
                        role="menuitem"
                        className={isActiveServicePath(option.path) ? 'active' : ''}
                        aria-current={isActiveServicePath(option.path) ? 'page' : undefined}
                        onClick={(event) => handleServiceOptionClick(event, option.path)}
                      >
                        {option.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link}
                href={getNavHref(link)}
                role="menuitem"
                className={isActiveLink(link) ? 'active' : ''}
                aria-current={isActiveLink(link) ? 'page' : undefined}
                onClick={(event) => {
                  handleNavClick(event, link)
                  setMenuOpen(false)
                }}
              >
                {getNavLabel(link)}
              </a>
            ),
          )}

          <div className="mobile-actions">
            {/* <a
              className="primary-btn"
              href={DEFAULT_SERVICE_PATH}
              onClick={(event) => {
                handleExploreServices(event)
                setMenuOpen(false)
              }}
            >
              Get Started
            </a> */}
          </div>
        </nav>
      </aside>

      {currentPath === '/about' ? (
        <div key={currentPath} className="route-page-fade">
          <AboutPage />
        </div>
      ) : currentPath === '/contact' ? (
        <div key={currentPath} className="route-page-fade">
          <ContactPage onNavigateHome={handleNavigateHome} />
        </div>
      ) : servicesSubPageMap[currentPath] ? (
        <div key={currentPath} className="route-page-fade">
          {servicesSubPageMap[currentPath]}
        </div>
      ) : (
        <div key={currentPath} className="route-page-fade">
          <HomePage
            theme={theme}
            onExploreServices={handleExploreServices}
            onServiceNavigate={handleServiceNavigate}
          />
        </div>
      )}

      <footer className="site-footer">
        <div className="footer-decor footer-decor--map" aria-hidden="true" />
        <div className="footer-decor footer-decor--topo" aria-hidden="true" />

        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-column footer-brand">
              <div className="footer-brand-logo-wrap">
                <img src={logoDark} alt="Finsys Tech Solutions Ltd" className="footer-brand-logo" />
              </div>
              <p className="footer-brand-copy">
                Empowering organizations through technology, expertise, and local execution. Delivering secure,
                integrated and impactful solutions.
              </p>
              <span className="footer-brand-rule" aria-hidden="true" />

              <p className="footer-heading footer-social-heading">Follow Us</p>
              <div className="footer-socials" aria-label="Social media links">
                {footerSocialLinks.map((social) => (
                  <a key={social.label} href={social.href} aria-label={social.label} className="footer-social-btn">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-column">
              <p className="footer-heading">Explore</p>
              <nav className="footer-nav" aria-label="Footer explore links">
                {footerExploreLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.path}
                    className="footer-nav-link"
                    onClick={(event) => {
                      if (link.navKey === 'Services') {
                        handleServiceOptionClick(event, link.path)
                        return
                      }
                      handleNavClick(event, link.navKey)
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={16} aria-hidden="true" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="footer-column">
              <p className="footer-heading">Our Solutions</p>
              <nav className="footer-solutions" aria-label="Footer service links">
                {footerSolutions.map((solution) => (
                  <a
                    key={solution.label}
                    href={solution.path}
                    className="footer-solution-link"
                    onClick={(event) => handleServiceOptionClick(event, solution.path)}
                  >
                    {solution.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="footer-column footer-contact-column">
              <p className="footer-heading">Contact Us</p>
              <p className="footer-contact-intro">
                We are here to answer your questions and discuss how we can help.
              </p>

              <div className="footer-contact-blocks">
                <div className="footer-contact-block">
                  <div className="footer-contact-block-icon" aria-hidden="true">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="footer-contact-label">Email</span>
                    <a href="mailto:info@finsys-tech.co.tz">info@finsys-tech.co.tz</a>
                  </div>
                </div>

                <div className="footer-contact-block">
                  <div className="footer-contact-block-icon" aria-hidden="true">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="footer-contact-label">Phone / WhatsApp</span>
                    <a href="tel:+255752897733">+255 752 897 733</a>
                  </div>
                </div>

                <div className="footer-contact-block">
                  <div className="footer-contact-block-icon" aria-hidden="true">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="footer-contact-label">Offices</span>
                    <ul className="footer-offices">
                      <li>Dar es Salaam, Tanzania</li>
                      <li>Zanzibar, Tanzania</li>
                      <li>Nairobi, Kenya</li>
          </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              <Shield size={16} aria-hidden="true" />
              <span>© 2025 Finsys Tech Solutions Limited. All rights reserved.</span>
            </p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span aria-hidden="true">|</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <button
        type="button"
        className={`scroll-top-btn${showScrollTop ? ' is-visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ChevronUp size={22} strokeWidth={2.25} aria-hidden="true" />
      </button>
    </div>
  )
}

export default App
