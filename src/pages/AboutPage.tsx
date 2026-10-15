import { useEffect, useRef, useState } from 'react'
import aboutHeroImage from '../assets/images/about/about us-hero section.png'
import aboutTeamImage from '../assets/images/about/awards.png'
import oracleCertificationImage from '../assets/images/about/oracle-cert.png'
import cfaCertificationImage from '../assets/images/about/CFA-cert.png'
import cisspCertificationImage from '../assets/images/about/CISSP-cert.png'
import prince2CertificationImage from '../assets/images/about/prince2-cert.png'
import togafCertificationImage from '../assets/images/about/togaf-cert.png'
import aboutFeatureImage from '../assets/images/about/who we are.png'
import imgStrategic from '../assets/images/about/strategic consulting.png'
import imgCoreBanking from '../assets/images/about/core-banking-services.png'
import imgDataCentre from '../assets/images/about/data-center.png'
import imgCyber from '../assets/images/about/cyber.jpg'
import iconAccess from '../assets/services-icons/access.png'
import iconDesign from '../assets/services-icons/design.png'
import iconImplement from '../assets/services-icons/implement.png'
import iconDeliver from '../assets/services-icons/deliver.png'
import {
  Compass,
  Eye,
  Landmark,
  Target,
  Server,
  Shield,
} from 'lucide-react'

const aboutPillars = [
  {
    icon: Compass,
    image: imgStrategic,
    heading: 'EA - ICT Advisory',
    description:
      'Strategic planning, ICT master plans, enterprise architecture, operating models and transformation roadmaps.',
  },
  {
    icon: Landmark,
    image: imgCoreBanking,
    heading: 'CBS - Banking Technology',
    description:
      'Core banking, digital lending, CRM, payments integration, channels, data, risk and compliance systems.',
  },
  {
    icon: Server,
    image: imgDataCentre,
    heading: 'DC - Data Centre & Infrastructure',
    description:
      'Tier-aligned data centre planning, design, quality assurance, network architecture and operational readiness.',
  },
  {
    icon: Shield,
    image: imgCyber,
    heading: 'DX - Digital Transformation Factory',
    description:
      'BPA, BPM, software development, AI, analytics, integration, cybersecurity and managed services.',
  },
]

const methodologySteps = [
  {
    icon: iconAccess,
    title: 'Assess & Discover',
    description: 'Understand client needs, survey environment and define scope.',
  },
  {
    icon: iconDesign,
    title: 'Design & Plan',
    description: 'Develop technical, architectural and strategic designs.',
  },
  {
    icon: iconImplement,
    title: 'Implement & Deliver',
    description: 'Supervise build, configure systems, test and commission.',
  },
  {
    icon: iconDeliver,
    title: 'Operate & Optimise',
    description: 'Run operations with SLAs, monitoring and continuous improvement.',
  },
]

const visionMission = [
  {
    icon: Eye,
    heading: 'Vision',
    statement:
      'To be world leaders in ICT consultancy, digital transformation and technology solutions, delivering excellence across all sectors we serve.',
    variant: 'vision',
  },
  {
    icon: Target,
    heading: 'Mission',
    statement:
      'To provide world-class service in digital transformation for all customers while maintaining a high level of professionalism, efficiency and accountability.',
    variant: 'mission',
  },
]

const coreValues = [
  {
    number: '01',
    title: 'Integrity',
    description: 'Ethical behaviour and trusted advice',
    tone: 'purple',
    position: 'top-left',
  },
  {
    number: '02',
    title: 'Innovation',
    description: 'Creative solutions for evolving needs',
    tone: 'green',
    position: 'top-center',
  },
  {
    number: '03',
    title: 'Excellence',
    description: 'Superior quality in every project',
    tone: 'purple',
    position: 'top-right',
  },
  {
    number: '04',
    title: 'Collaboration',
    description: 'Teamwork and strategic partnerships',
    tone: 'green',
    position: 'bottom-left',
  },
  {
    number: '05',
    title: 'Customer Focus',
    description: 'Dedicated to client success',
    tone: 'purple',
    position: 'bottom-center',
  },
  {
    number: '06',
    title: 'Sustainability',
    description: 'Economic, social and environmental well-being',
    tone: 'green',
    position: 'bottom-right',
  },
]

const certificationImages = [
  { image: cfaCertificationImage, alt: 'CFA certification' },
  { image: cisspCertificationImage, alt: 'CISSP certification' },
  { image: prince2CertificationImage, alt: 'PRINCE2 certification' },
  { image: oracleCertificationImage, alt: 'Oracle certification' },
  { image: togafCertificationImage, alt: 'TOGAF certification' },
]

const aboutMetrics = [
  { target: 4, label: 'Core Pillars' },
  { target: 3, label: 'Regional Offices' },
  { target: 20, label: 'Certifications', suffix: '+' },
]

const metricStartValues = aboutMetrics.map(
  (metric) => metric.target + Math.max(2, Math.ceil(metric.target * 1.5)),
)

function AboutPage() {
  const metricsRef = useRef<HTMLDivElement | null>(null)
  const metricsInViewRef = useRef(false)
  const [metricRunSeed, setMetricRunSeed] = useState(0)
  const [metricValues, setMetricValues] = useState<number[]>(metricStartValues)

  useEffect(() => {
    const node = metricsRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!metricsInViewRef.current) {
            metricsInViewRef.current = true
            setMetricValues(metricStartValues)
            setMetricRunSeed((value) => value + 1)
          }
          return
        }

        metricsInViewRef.current = false
        setMetricValues(metricStartValues)
      },
      { threshold: 0.35 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (metricRunSeed === 0) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMetricValues(aboutMetrics.map((metric) => metric.target))
      return
    }

    const durationMs = 1100
    const startAt = Date.now()

    const intervalId = window.setInterval(() => {
      const progress = Math.min(1, (Date.now() - startAt) / durationMs)
      const easedProgress = 1 - (1 - progress) ** 3

      setMetricValues(
        metricStartValues.map((startValue, index) => {
          const target = aboutMetrics[index].target
          const nextValue = startValue - (startValue - target) * easedProgress
          return Math.max(target, Math.round(nextValue))
        }),
      )

      if (progress >= 1) {
        setMetricValues(aboutMetrics.map((metric) => metric.target))
        window.clearInterval(intervalId)
      }
    }, 24)

    return () => window.clearInterval(intervalId)
  }, [metricRunSeed])

  return (
    <main className="about-page">
      <section 
        className="about-hero home-hero-sticky" 
        id='top'
        style={{ backgroundImage: `url(${aboutHeroImage})` }}
        >
        <div className="about-hero-inner">
          <h1>About Finsys Tech Solutions</h1>
          <p>
            Trusted technology and banking transformation advisors delivering practical outcomes across East Africa.
          </p>
          <div className="about-hero-actions">
            <a className="primary-btn" href="#about-overview">Explore Our Story</a>
            <a className="outline-accent" href="/contact">Talk to an Expert</a>
          </div>
        </div>
      </section>

    <div className="page-content-over-hero">
      <section className="about-overview" id="about-overview">
        <div className="about-overview-inner">
          <div className="about-overview-copy">
            <p className="section-label about-overview-eyebrow">ABOUT FINSYS TECH SOLUTIONS</p>

            <h2>Who We Are</h2>
            <p>
              Practical technology advisors with end-to-end capability - from strategy and architecture through implementation, assurance and managed support.
            </p>

            <div className="about-overview-actions">
              <a className="outline-accent" href="/services">Explore Our Pillars</a>
            </div>

            <div className="about-divider" />

            <div className="about-metrics" id="about-pillars" ref={metricsRef}>
              {aboutMetrics.map((metric, index) => (
                <article key={metric.label}>
                  <strong>
                    {metricValues[index]}
                    {metric.suffix ?? ''}
                  </strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="about-overview-media">
            <div className="about-media-card">
              <img src={aboutFeatureImage} alt="Data center server aisle" />
            </div>
            <div className="about-floating-callout">
              Technical depth meets business process understanding for regulated transformation programmes.
            </div>
          </div>
        </div>
      </section>

      <section className="about-capabilities-band" id="about-pillars-grid">
        <div className="about-redesign-heading">
          <div>
            <p className="section-label">Our Capability</p>
            <h2>Four disciplines. One accountable partner.</h2>
          </div>
          <p>Finsys brings strategy, banking technology, infrastructure and digital delivery together for complex transformation programmes.</p>
        </div>

        <div className="about-capability-grid">
          {aboutPillars.map((pillar, index) => {
            const Icon = pillar.icon

            return (
              <article key={pillar.heading} className="about-capability-card">
                <div className="about-capability-media">
                  <img src={pillar.image} alt={pillar.heading} />
                  <span className="about-capability-number">0{index + 1}</span>
                </div>
                <div className="about-capability-body">
                  <div className="about-capability-icon"><Icon size={19} /></div>
                  <h3>{pillar.heading}</h3>
                  <p>{pillar.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="about-process-band" id="methodology">
        <div className="about-redesign-heading about-redesign-heading--centered">
          <p className="section-label">How We Deliver</p>
          <h2>A clear path from ambition to adoption.</h2>
          <p>Every engagement moves through a practical four-stage delivery system built for clarity, governance and measurable progress.</p>
        </div>

        <div className="about-process-rail">
          {methodologySteps.map((step, index) => (
            <article key={step.title} className="about-process-step">
              <span className="about-process-index">0{index + 1}</span>
              <div className="about-process-icon"><img src={step.icon} alt="" aria-hidden="true" /></div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-purpose-band" id="vision-mission">
        <div className="about-redesign-heading">
          <div>
            <p className="section-label">Safeguarding Tomorrow</p>
            <h2>Purpose that guides the work.</h2>
          </div>
          <p>Our vision and mission keep the work ambitious, practical and accountable to the people and institutions we serve.</p>
        </div>

        <div className="about-purpose-grid">
          {visionMission.map((item) => {
            const Icon = item.icon

            return (
              <article key={item.heading} className={`about-purpose-card about-purpose-card--${item.variant}`}>
                <div className="about-purpose-icon"><Icon size={22} /></div>
                <div>
                  <span>0{item.heading === 'Vision' ? '1' : '2'}</span>
                  <h3>{item.heading}</h3>
                  <p>{item.statement}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="about-values-band" id="core-values">
        <div className="about-redesign-heading about-redesign-heading--centered">
          <p className="section-label">What We Stand For</p>
          <h2>Values made visible in every engagement.</h2>
        </div>

        <div className="about-values-grid">
          {coreValues.map((value) => (
            <article key={value.number} className="about-value-tile">
              <span>{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-proof-band" id="team-certifications">
        <div className="about-certification-heading">
          <p className="section-label">Recognised enterprise capability</p>
          <h2>Credentials that support confident delivery.</h2>
        </div>
        <div className="about-proof-intro">
          <div className="about-certifications-image-wrap">
            <img src={aboutTeamImage} alt="Modern team working around a conference table" />
          </div>
          <div className="about-redesign-heading">
            <p className="section-label">Expertise You Can Trust</p>
            <h2>Capability backed by experience.</h2>
            <p>Our team combines deep ICT infrastructure, banking technology, strategic planning and transformation experience with recognised professional certifications.</p>
          </div>
        </div>

        <div className="about-certification-gallery" aria-label="Professional certifications">
          {certificationImages.map((certificate) => (
            <img key={certificate.alt} src={certificate.image} alt={certificate.alt} />
          ))}
        </div>
      </section>

      <section className="content-section stacked-section service-cta-section">
        <div className="service-cta-card">
          <div>
            <p className="section-label">Ready to start?</p>
            <h3>Talk to our service delivery team today.</h3>
            <p className="section-copy">
              We tailor each engagement to your infrastructure, compliance and digital transformation goals.
            </p>
          </div>
          <div className="service-cta-actions">
            <a className="primary-btn" href="/contact">
              Contact Us
            </a>
            <a className="outline-accent" href="/services">
              Explore Services
              <span className="button-icon" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
      </div>
    </main>
  )
}

export default AboutPage
