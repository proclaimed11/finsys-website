import { useCallback, useEffect, useLayoutEffect, useState, useRef, type MouseEvent } from 'react'
import {
  ClipboardCheck,
  Database,
  MapPin,
  Shield,
  type LucideIcon,
} from 'lucide-react'
import ictConsultationIcon from '../assets/home-icons/ict-consultation.png'
import coreBankingIcon from '../assets/home-icons/core-banking.png'
import oracleDbIcon from '../assets/home-icons/oracle-db.png'
import dataCenterIcon from '../assets/home-icons/data-center.png'
import cyberSecurityIcon from '../assets/home-icons/cyber-security.png'
import cloudDevIcon from '../assets/home-icons/cloud-dev.png'
import crmIcon from '../assets/home-icons/crm.png'
import whyChoosePrimaryImage from '../assets/images/home/why choose us1.png'
import whyChooseSecondaryImage from '../assets/images/home/why choose us2.jpg'
import pillarAdvisoryImage from '../assets/images/services/strategic consulting.jpg'
import pillarBankingImage from '../assets/images/services/core-banking-services.jpg'
import pillarInfrastructureImage from '../assets/images/services/data-center.jpg'
import pillarCyberImage from '../assets/images/services/cyber.jpg' 
import pillarCRMImage from '../assets/images/services/crm.jpg'
import pillarCloudImage from '../assets/images/services/software development.png'
import pillarOracle from '../assets/images/services/oracle fusion.png' 
import tcbLogo from '../assets/images/home/tcb-logo.png'
import zictiaLogo from '../assets/images/home/zictia-logo.png'
import tpcLogo from '../assets/images/home/TPC-logo.png'
import tasacLogo from '../assets/images/home/TASAC-logo.png'
import nccLogo from '../assets/images/home/NCC-logo.png'
import ttclLogo from '../assets/images/home/TTCL-logo.png'

interface HomePageProps {
  theme: 'light' | 'dark'
  onExploreServices: (event: MouseEvent<HTMLAnchorElement>) => void
  onServiceNavigate: (event: MouseEvent<HTMLAnchorElement>, path: string) => void
}

const homePillars = [
  {
    image: pillarAdvisoryImage,
    heading: 'ICT & Strategic Consulting',
    description: 'Strategic planning, enterprise architecture, and transformation roadmaps for regulated institutions.',
    path: '/services/ict-advisory-enterprise-architecture',
  },
  {
    image: pillarBankingImage,
    heading: 'Core Banking Services',
    description: 'Core banking, lending, payments integration, channels, and risk systems.',
    path: '/services/core-banking-services',
  },
  {
    image: pillarInfrastructureImage,
    heading: 'Data Centre & Infrastructure',
    description: 'Data centre planning, network architecture, and operational readiness.',
    path: '/services/data-centre-network-infrastructure',
  },
  {
    image: pillarCyberImage,
    heading: 'Cybersecurity & Compliance',
    description: 'Security assessments, IAM design, risk controls, and audit readiness.',
    path: '/services/cybersecurity-risk-compliance',
  },
  {
    image: pillarCRMImage,
    heading: 'Digital CRM Solutions',
    description: 'Digital lending platforms and CRM solutions for financial institutions.',
    path: '/services/digital-lending-crm-solutions',
  },
  {
    image: pillarCloudImage,
    heading: 'Cloud, DevOps & Software',
    description: 'Cloud architecture, CI/CD pipelines, AI integration, and custom software.',
    path: '/services/cloud-devops-modern-digital-solutions',
  },
  {
    image: pillarOracle,
    heading: 'Oracle Enterprise Systems',
    description: 'Oracle EBS and Fusion Cloud ERP advisory, rollout, and delivery assurance.',
    path: '/services/enterprise-erp-systems',
  },
]

const solutions = [
  {
    iconSrc: ictConsultationIcon,
    title: 'ICT & Strategic Consulting',
    description: 'Enterprise architecture, digital roadmaps, and ICT strategy for regulated transformation.',
    path: '/services/ict-advisory-enterprise-architecture',
  },
  {
    iconSrc: coreBankingIcon,
    title: 'Core Banking Services',
    description: 'Core banking selection, implementation, and payments integration for modern banks.',
    path: '/services/core-banking-services',
  },
  {
    iconSrc: oracleDbIcon,
    title: 'Oracle Enterprise Systems',
    description: 'Oracle EBS and Fusion Cloud ERP advisory, rollout, and delivery assurance.',
    path: '/services/enterprise-erp-systems',
  },
  {
    iconSrc: dataCenterIcon,
    title: 'Data Centre & Infrastructure',
    description: 'Tier-aligned data centre, network, and national infrastructure engineering.',
    path: '/services/data-centre-network-infrastructure',
  },
  {
    iconSrc: cyberSecurityIcon,
    title: 'Cybersecurity & Compliance',
    description: 'Security assessments, IAM design, risk controls, and audit readiness.',
    path: '/services/cybersecurity-risk-compliance',
  },
  {
    iconSrc: cloudDevIcon,
    title: 'Cloud, DevOps & Software',
    description: 'Cloud architecture, CI/CD pipelines, AI integration, and custom software.',
    path: '/services/cloud-devops-modern-digital-solutions',
  },
  {
    iconSrc: crmIcon,
    title: 'CRM Systems',
    description: 'Digital lending platforms and CRM solutions for financial institutions.',
    path: '/services/digital-lending-crm-solutions',
  },
]

const whyChoosePoints: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: Shield,
    title: 'Banking-Grade Capability',
    description: 'End-to-end integration across core systems, payments, risk, and channels.',
  },
  {
    icon: Database,
    title: 'Oracle Enterprise Depth',
    description: 'Strong expertise in both legacy Oracle EBS and modern Fusion Cloud environments.',
  },
  {
    icon: ClipboardCheck,
    title: 'Implementation Assurance',
    description: 'Active governance through PMO, design authority, and cutover management.',
  },
  {
    icon: MapPin,
    title: 'Local Presence, Regional Reach',
    description: 'Offices in Dar es Salaam, Zanzibar, and Nairobi with practical East African delivery experience.',
  },
]

const clientLogos = [
  { src: tcbLogo, name: 'Tanzania Commercial Bank' },
  { src: zictiaLogo, name: 'ZICTIA' },
  { src: tpcLogo, name: 'Tanzania Posta Corporation' },
  { src: tasacLogo, name: 'TASAC' },
  { src: nccLogo, name: 'National Consumer Council' },
  { src: ttclLogo, name: 'TTCL' },
]

function HomePage({ onExploreServices, onServiceNavigate }: HomePageProps) {
  const [activeSlidePosition, setActiveSlidePosition] = useState(1)
  const [slideTransitionEnabled, setSlideTransitionEnabled] = useState(true)
  const [slideSettled, setSlideSettled] = useState(true)
  const isSlideTransitioningRef = useRef(false)
  const activePillar = (activeSlidePosition - 1 + homePillars.length) % homePillars.length

  useLayoutEffect(() => {
    if (slideTransitionEnabled) return

    let secondFrame = 0
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        setSlideTransitionEnabled(true)
        isSlideTransitioningRef.current = false
        setSlideSettled(true)
      })
    })

    return () => {
      window.cancelAnimationFrame(firstFrame)
      window.cancelAnimationFrame(secondFrame)
    }
  }, [slideTransitionEnabled])

  const moveSlideTo = useCallback((position: number) => {
    if (isSlideTransitioningRef.current || !slideTransitionEnabled) return
    if (position === activeSlidePosition) return

    isSlideTransitioningRef.current = true
    setSlideSettled(false)
    setActiveSlidePosition(position)
  }, [activeSlidePosition, slideTransitionEnabled])

  useEffect(() => {
    if (!slideSettled || !slideTransitionEnabled) return

    const timer = window.setTimeout(() => {
      moveSlideTo(activeSlidePosition + 1)
    }, 5000)

    return () => window.clearTimeout(timer)
  }, [activeSlidePosition, moveSlideTo, slideSettled, slideTransitionEnabled])

  useEffect(() => {
    if (slideSettled || !slideTransitionEnabled) return

    const fallback = window.setTimeout(() => {
      if (!isSlideTransitioningRef.current) return

      if (activeSlidePosition === 0 || activeSlidePosition === homePillars.length + 1) {
        setSlideTransitionEnabled(false)
        setActiveSlidePosition(activeSlidePosition === 0 ? homePillars.length : 1)
        return
      }

      isSlideTransitioningRef.current = false
      setSlideSettled(true)
    }, 1100)

    return () => window.clearTimeout(fallback)
  }, [activeSlidePosition, slideSettled, slideTransitionEnabled])

    const clientTrackRef = useRef<HTMLDivElement | null>(null)
  const [activeClientIndex, setActiveClientIndex] = useState(0)
  const activeClientIndexRef = useRef(0)
  const isClientHoveredRef = useRef(false)

  const scrollClientsToIndex = (index: number) => {
    const track = clientTrackRef.current
    if (!track) return
    const cards = track.querySelectorAll<HTMLElement>('.client-logo-card')
    const card = cards[index]
    if (!card) return
    const target = card.offsetLeft + card.offsetWidth / 2 - track.clientWidth / 2
    track.scrollTo({ left: target, behavior: 'smooth' })
  }

  const scrollClients = (direction: 'previous' | 'next') => {
    const nextIndex =
      direction === 'next'
        ? (activeClientIndexRef.current + 1) % clientLogos.length
        : (activeClientIndexRef.current - 1 + clientLogos.length) % clientLogos.length
    scrollClientsToIndex(nextIndex)
  }

  useEffect(() => {
    const track = clientTrackRef.current
    if (!track) return

    const updateActiveIndex = () => {
      const cards = Array.from(track.querySelectorAll<HTMLElement>('.client-logo-card'))
      if (!cards.length) return
      const trackCenter = track.scrollLeft + track.clientWidth / 2
      let closestIndex = 0
      let closestDistance = Infinity
      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2
        const distance = Math.abs(cardCenter - trackCenter)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })
      activeClientIndexRef.current = closestIndex
      setActiveClientIndex(closestIndex)
    }

    track.addEventListener('scroll', updateActiveIndex, { passive: true })
    updateActiveIndex()

    return () => track.removeEventListener('scroll', updateActiveIndex)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (isClientHoveredRef.current) return
      const nextIndex = (activeClientIndexRef.current + 1) % clientLogos.length
      scrollClientsToIndex(nextIndex)
    }, 2600)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <>
      <div className="hero-wrap home-hero-sticky" id="top">
        <main className="hero-section hero-section--carousel-only">
          <div className="home-pillar-carousel" aria-label="Featured Finsys services" aria-live="polite">
            <div
              className={`home-pillar-track${slideTransitionEnabled ? ' is-transitioning' : ''}`}
              style={{
                width: `${(homePillars.length + 2) * 100}%`,
                transform: `translate3d(-${(activeSlidePosition * 100) / (homePillars.length + 2)}%, 0, 0)`,
              }}
              onTransitionEnd={(event) => {
                if (event.target !== event.currentTarget || event.propertyName !== 'transform') return
                if (!isSlideTransitioningRef.current) return

                if (activeSlidePosition === 0 || activeSlidePosition === homePillars.length + 1) {
                  setSlideTransitionEnabled(false)
                  setActiveSlidePosition(activeSlidePosition === 0 ? homePillars.length : 1)
                  return
                }

                isSlideTransitioningRef.current = false
                setSlideSettled(true)
              }}
            >
              {[homePillars[homePillars.length - 1], ...homePillars, homePillars[0]].map((pillar, index) => {
                const isClone = index === 0 || index === homePillars.length + 1
                const logicalIndex = (index - 1 + homePillars.length) % homePillars.length

                return (
                  <article
                    key={`${pillar.heading}-${index}`}
                    className={`home-pillar-slide${index === activeSlidePosition ? ' is-active' : ''}`}
                    aria-hidden={isClone || logicalIndex !== activePillar}
                    style={{ width: `${100 / (homePillars.length + 2)}%` }}
                  >
                    <img src={pillar.image} alt="" />
                    <div className="home-pillar-slide-content">
                      <p className="home-pillar-eyebrow">Technology that moves business forward</p>
                      <h1>{pillar.heading}</h1>
                      <p>{pillar.description}</p>
                      <div className="home-pillar-actions">
                        <a
                          className="home-pillar-slide-cta"
                          href={pillar.path}
                          onClick={(event) => onServiceNavigate(event, pillar.path)}
                        >
                          Explore this service
                          <span aria-hidden="true">→</span>
                        </a>
                        <a
                          className="home-pillar-contact-link"
                          href="/contact"
                          onClick={(event) => onServiceNavigate(event, '/contact')}
                        >
                          Talk to our team
                        </a>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
            <button
              type="button"
              className="home-pillar-arrow home-pillar-arrow--previous"
              aria-label="Show previous pillar"
              onClick={() => moveSlideTo(activeSlidePosition - 1)}
            >
              <span aria-hidden="true">&#8592;</span>
            </button>
            <button
              type="button"
              className="home-pillar-arrow home-pillar-arrow--next"
              aria-label="Show next pillar"
              onClick={() => moveSlideTo(activeSlidePosition + 1)}
            >
              <span aria-hidden="true">&#8594;</span>
            </button>
            <div className="home-pillar-controls" aria-label="Choose a pillar">
              {homePillars.map((pillar, index) => (
                <button
                  key={pillar.heading}
                  type="button"
                  className={index === activePillar ? 'is-active' : ''}
                  aria-label={`Show ${pillar.heading}`}
                  aria-pressed={index === activePillar}
                  onClick={() => moveSlideTo(index + 1)}
                />
              ))}
            </div>
          </div>
        </main>
        </div>
      <div className="page-content-over-hero">
        <section className="hero-strip-band" data-reveal-group>
          <p className="hero-strip-text reveal-up">
          A Tanzanian-led ICT consultancy bringing together enterprise technology, financial services systems and implementation assurance
        </p>
        <a         
            className="hero-strip-cta reveal-up"
          href="/about"
          onClick={(event) => onServiceNavigate(event, '/about')}
        >
          Explore More
        </a>
      </section>

      <section className="strategic-solutions" id="features">
        <div className="strategic-solutions-bg" aria-hidden="true">
          <span className="strategic-solutions-blob strategic-solutions-blob--left" />
          <span className="strategic-solutions-blob strategic-solutions-blob--right" />
        </div>

        <div className="strategic-solutions-inner">
          <header className="strategic-solutions-header" data-reveal-group>
            <p className="section-label reveal-up">Technology built around your priorities</p>
            <h2 className="strategic-solutions-title reveal-up">Solutions & Services</h2>
            <p className="strategic-solutions-copy reveal-up">
              From core banking and cybersecurity to cloud and infrastructure, we help organisations plan, implement and support technology that matters.
            </p>
          </header>

          <nav className="solutions-nav-row" aria-label="Core solutions" data-reveal-group>
            {solutions.map((solution) => (
              <div key={solution.title} className="solution-nav-item reveal-up">
                <a
                  href={solution.path}
                  className="solution-nav-card"
                  onClick={(event) => onServiceNavigate(event, solution.path)}
                >
                  <span className="solution-nav-icon">
                    <img src={solution.iconSrc} alt="" aria-hidden="true" />
                  </span>
                  <span className="solution-nav-label">{solution.title}</span>
                  <span className="solution-nav-description">{solution.description}</span>
                  <span className="solution-nav-link">Explore service <span aria-hidden="true">→</span></span>
                </a>
              </div>
            ))}
          </nav>
        </div>
      </section>

      <section className="why-choose-section" id="why-choose">
        <div className="section-heading" data-reveal-group>
          <p className="section-eyebrow reveal-up">Focused delivery for high-impact systems</p>
          <h2 className="reveal-up">
            Why Choose <span className="why-choose-brand">Finsys?</span>
          </h2>
        </div>

        <div className="why-choose-card">
          <div className="why-choose-layout">
          <div className="why-choose-content" data-reveal-group>
            <h3 className="why-choose-lead reveal-up">
              One strong solution,
              <br />
              <span className="why-choose-lead-accent">defined outcomes</span>
            </h3>
            <p className="why-choose-intro reveal-up">
              We bring banking, technology and local execution together so every solution is practical, secure and delivery-focused.
            </p>

            <div className="why-choose-points">
              {whyChoosePoints.map((point) => {
                const Icon = point.icon

                return (
                  <article key={point.title} className="why-choose-point reveal-up">
                    <div className="why-choose-point-icon" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4>{point.title}</h4>
                      <p>{point.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="why-choose-visual-stack" data-reveal-group>
            <div className="why-choose-visual-primary reveal-up">
              <img src={whyChoosePrimaryImage} alt="Finsys delivery team in action" />
            </div>
            <div className="why-choose-visual-secondary reveal-up">
              <img src={whyChooseSecondaryImage} alt="Finsys infrastructure operations" />
            </div>
          </div>
          </div>
        </div>
      </section>

    {/* <section className="track-record-section" id="track-record">
      <div className="section-heading">
        <span className="track-record-rule" aria-hidden="true" />
        <h2>
          Our valued clientele across <span className="track-record-accent">East Africa</span>
        </h2>
        <p className="section-copy">
          We have delivered large-scale ICT, banking and national infrastructure programmes
          across East Africa with a strong focus on quality, governance and impact.
        </p>
      </div>

      <div className="track-card-grid">
        <article className="track-card track-card--green">
          <div className="track-card-top" />
          <div className="track-card-logo">
            <img src={tcbLogo} alt="Tanzania Commercial Bank logo" />
          </div>
          <div className="track-card-body">
            <h4>TCB Core Banking System</h4>
            <p>Core Banking System consultancy for Tanzania Commercial Bank (TCB).</p>
          </div>
        </article>

        <article className="track-card track-card--blue">
          <div className="track-card-top" />
          <div className="track-card-logo">
            <img src={zictiaLogo} alt="ZICTIA logo" />
          </div>
          <div className="track-card-body">
            <h4>ZICTIA Data Centres</h4>
            <p>Tier IV National Data Centre (Zanzibar) & Pemba Disaster Recovery Data Centre.</p>
          </div>
        </article>

        <article className="track-card track-card--yellow">
          <div className="track-card-top" />
          <div className="track-card-logo">
            <img src={tpcLogo} alt="Tanzania Posta Corporation logo" />
          </div>
          <div className="track-card-body">
            <h4>Tanzania Posta E-commerce Platform</h4>
            <p>Business Process Reengineering & CRM for TTCL; National E-Commerce Platform for Posta Tanzania.</p>
          </div>
        </article>

        <article className="track-card track-card--teal">
          <div className="track-card-top" />
          <div className="track-card-logo">
            <img src={tasacLogo} alt="TASAC logo" />
          </div>
          <div className="track-card-body">
            <h4>TASAC Digital Transformation Roadmap</h4>
            <p>Digital Transformation Roadmap for TASAC and National Connectivity Master Plan for Zanzibar.</p>
          </div>
        </article>
      </div>
    </section> */}

    <section className="clients-carousel-section" id="track-record">
        <div className="section-heading" data-reveal-group>
          <p className="section-label clients-carousel-eyebrow reveal-up">Our Clients & Partners</p>
          <h2 className="reveal-up">
          Our valued clientele across <span className="track-record-accent">East Africa</span>
          </h2>
          <p className="section-copy reveal-up">
            We have had the privilege of working with banks, financial institutions, government agencies
            and private sector organisations, delivering reliable technology solutions and lasting value.
          </p>
        </div>

        <div className="clients-carousel reveal-up">
          <button
            type="button"
            className="clients-carousel-arrow clients-carousel-arrow--previous"
            aria-label="Show previous clients"
            onClick={() => scrollClients('previous')}
          >
            <span aria-hidden="true">&#8592;</span>
          </button>

          <div
            className="client-logo-track"
            ref={clientTrackRef}
            onMouseEnter={() => {
              isClientHoveredRef.current = true
            }}
            onMouseLeave={() => {
              isClientHoveredRef.current = false
            }}
          >
            {clientLogos.map((client, index) => (
              <div
                key={client.name}
                className={`client-logo-card${index === activeClientIndex ? ' is-center' : ''}`}
              >
                <img src={client.src} alt={`${client.name} logo`} />
              </div>
            ))}
          </div>

          <button
            type="button"
            className="clients-carousel-arrow clients-carousel-arrow--next"
            aria-label="Show next clients"
            onClick={() => scrollClients('next')}
          >
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>
      </section>

      <section className="content-section stacked-section service-cta-section">
        <div className="service-cta-card" data-reveal-group>
          <div className="reveal-up">
            <p className="section-label">Contact Us</p>
            <h3>Explore our services and get in touch today.</h3>
            <p className="section-copy">
              Speak with our team about tailored solutions, secure infrastructure, and business-ready ICT delivery.
            </p>
          </div>
          <div className="service-cta-actions reveal-up">
            <a className="primary-btn" href="/contact">
              Contact Us
            </a>
            <a className="outline-accent" href="/services" onClick={onExploreServices}>
              Explore Services
              <span className="button-icon" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
     </div>
    </>
  )
}

export default HomePage
