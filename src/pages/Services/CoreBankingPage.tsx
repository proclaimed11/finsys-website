import tcbCaseStudyImage from '../../assets/images/services/sky-scraper.png'
import coreBankingHeroImage from '../../assets/images/services/core-banking-services.jpg'
import {
  Shield,
  CheckCircle2,
  Gauge,
  Layers,
  Search,
  ClipboardCheck,
  ArrowLeftRight,
  TrendingUp
} from 'lucide-react'

const coreBankingOverviewFeatures = [
  {
    icon: Layers,
    title: 'Implementation',
    description:
      'Structured, vendor-independent delivery across the full core banking lifecycle—de-risking complex, multi-year programs.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'Rigorous QA, regulatory alignment, and program governance that keep implementations on scope, on time, and audit-ready.',
  },
  {
    icon: Gauge,
    title: 'System Optimization',
    description:
      'Performance tuning and post-implementation reviews that turn a live platform into a durable competitive advantage.',
  },
]

const coreBankingLifecycle = [
  {
    number: '01',
    icon: Search,
    title: 'Assess & Select',
    description:
      'Core banking selection, RFP management, and structured fit-gap analysis to match the right platform to your target operating model.',
    bullets: ['Requirements & target operating model', 'RFP design & vendor evaluation', 'Fit-gap and shortlist analysis'],
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Assure Delivery',
    description:
      'Independent program management, quality assurance, and regulatory alignment throughout the build and configuration phases.',
    bullets: ['Program & delivery governance', 'Quality assurance & testing', 'Regulatory & compliance alignment'],
  },
  {
    number: '03',
    icon: ArrowLeftRight,
    title: 'Migrate & Go-Live',
    description:
      'Data migration, fallback strategies, and cutover management engineered to protect continuity on the most critical night of the program.',
    bullets: ['Data migration & reconciliation', 'Fallback & contingency planning', 'Cutover & go-live command'],
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimise & Support',
    description:
      'Performance tuning and post-implementation reviews that stabilize the platform and unlock its full value over time.',
    bullets: ['Performance tuning', 'Post-implementation review', 'Continuous improvement roadmap'],
  },
]

const paymentRails = [
  { title: 'RTGS', description: 'Real-time gross settlement connectivity' },
  { title: 'SWIFT', description: 'Cross-border messaging & compliance' },
  { title: 'TIPS', description: 'Instant payment settlement' },
  { title: 'Cards', description: 'Card switch & scheme integration' },
]

function CoreBankingPage() {
  return (
    <main className="core-banking-page">
    <section
    className="core-banking-hero home-hero-sticky"
    id="top"
    style={{ backgroundImage: `url(${coreBankingHeroImage})` }}
    >
    <div className="core-banking-hero-inner">
        <h1>Core Banking Systems & Payment Integration Solutions</h1>
        <p>
        End-to-end guidance and delivery assurance for core banking and payment system transformations.
        </p>
        <div className="core-banking-hero-actions">
        <a className="primary-btn" href="/contact">Book a consultation</a>
        <a className="outline-accent" href="#about-overview">Explore our approach</a>
        </div>
    </div>
    </section>

    <div className="page-content-over-hero">
      <section className="core-banking-overview" id="about-overview">
      <div className="core-banking-overview-inner">
        <div className="core-banking-overview-copy">
          <p className="section-label core-banking-overview-eyebrow">OVERVIEW</p>

          <h2>A single, accountable partner across the core banking journey.</h2>
          <p>
            Replacing or upgrading a core banking system is among the highest-stakes
            initiatives a financial institution can undertake. We bring the specialist
            expertise and independent oversight to make it predictable—covering
            implementation, quality assurance, and ongoing optimization so your teams
            can focus on serving customers.
          </p>
        </div>

        <div className="core-banking-overview-features">
          {coreBankingOverviewFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <article key={feature.title} className="core-banking-feature-card">
                <div className="core-banking-feature-icon" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <div className="core-banking-feature-copy">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>

    <section className="core-banking-methodology-section dark-green-band" id="methodology">
      <div className="core-banking-methodology-header">
        <p className="section-label core-banking-payments-eyebrow">Our Methodology</p>
        <h2>A proven 4-stage delivery lifecycle.</h2>
        <p>
          Every engagement follows a disciplined path—so decisions are evidence-based,
          risks are surfaced early, and the transition to a new core is a controlled
          event, not a gamble.
        </p>
      </div>

      <div className="core-banking-methodology-grid">
        {coreBankingLifecycle.map((stage) => {
          const Icon = stage.icon
          return (
            <article key={stage.number} className="core-banking-stage-card">
              <div className="core-banking-stage-top">
                <div className="core-banking-stage-icon" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <span className="core-banking-stage-number">{stage.number}</span>
              </div>

              <h3>{stage.title}</h3>
              <p>{stage.description}</p>

              <div className="core-banking-stage-divider" />

              <ul className="core-banking-stage-bullets">
                {stage.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>

    <section className="core-banking-payments-section" id="payments-switches">
      <div className="core-banking-payments-inner">
        <div className="core-banking-payments-copy">
          <p className="section-label core-banking-payments-eyebrow">SUB-SPECIALTY</p>
          <h2>Payments & switches integration.</h2>
          <p>
            A modern core is only as strong as its connection to the payment
            ecosystem. We integrate core banking platforms with domestic and
            international rails—ensuring settlement accuracy, resilience, and
            full regulatory compliance across every channel.
          </p>
          <ul className="core-banking-payments-checklist">
            <li>
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>End-to-end payment flow design and reconciliation</span>
            </li>
            <li>
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>Scheme certification and settlement assurance</span>
            </li>
            <li>
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>Resilient, fault-tolerant switch architecture</span>
            </li>
          </ul>
        </div>

        <div className="core-banking-payments-grid">
          {paymentRails.map((rail) => (
            <article key={rail.title} className="core-banking-payments-card">
              <h3>{rail.title}</h3>
              <p>{rail.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

<section className="core-banking-case-study-section" id="case-study">
        <div className="core-banking-case-study-inner">
          <div className="core-banking-case-study-media">
            <img src={tcbCaseStudyImage} alt="Tanzania Commercial Bank headquarters at dusk" />
          </div>

          <div className="core-banking-case-study-content">
            <p className="section-label core-banking-case-study-eyebrow">FEATURED CASE STUDY</p>

            <h2>
              Tanzania Commercial Bank: core banking migration &amp; delivery assurance.
            </h2>

            <p>
              We provided independent program management and delivery assurance for
              TCB&rsquo;s core banking migration—governing data migration, orchestrating
              a rehearsed cutover, and safeguarding continuity for over a million
              customers through go-live and stabilization.
            </p>

            <div className="core-banking-case-study-divider" />

            <div className="core-banking-case-study-stats">
              <div className="core-banking-case-study-stat">
                <strong className="core-banking-case-study-stat--accent">Zero</strong>
                <span>unplanned downtime at cutover</span>
              </div>
              <div className="core-banking-case-study-stat">
                <strong>1.2M+</strong>
                <span>customer records migrated</span>
              </div>
              <div className="core-banking-case-study-stat">
                <strong>On time</strong>
                <span>go-live delivered to plan</span>
              </div>
            </div>

            <a className="core-banking-case-study-cta" href="/case-studies/tcb-core-banking">
              Read the full case study
              <span className="core-banking-case-study-cta-chevron" aria-hidden="true">›</span>
            </a>
          </div>
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

export default CoreBankingPage
