import crmHeroImage from '../../assets/images/services/crm.jpg'
import crmCaseStudyImage from '../../assets/images/services/CRM-section.png'
import {
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Cpu,
  FolderLock,
  Layers,
  Search,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'

const crmOverviewFeatures = [
  {
    icon: Zap,
    title: 'Faster Credit Decisions',
    description:
      'Automated origination and decision engines that shorten time-to-yes while maintaining rigorous credit standards.',
  },
  {
    icon: Shield,
    title: 'Controlled Risk',
    description:
      'Configurable scoring rules, collateral tracking, and compliance workflows that protect portfolio quality.',
  },
  {
    icon: Users,
    title: 'Unified Customer Experience',
    description:
      'Customer 360 views and omnichannel engagement that connect lending, service, and relationship data.',
  },
]

const lendingCapabilities = [
  {
    icon: ClipboardList,
    title: 'Loan Origination System (LOS)',
    description:
      'End-to-end automation of customer application, document capture, and credit processing.',
  },
  {
    icon: Cpu,
    title: 'Automated Decision Engines',
    description:
      'Configurable credit scoring rules and real-time risk assessment algorithms.',
  },
  {
    icon: FolderLock,
    title: 'Collateral & Document Management',
    description:
      'Structured workflows for asset tracking, document verification, and compliance management.',
  },
  {
    icon: Users,
    title: 'Customer 360 & CRM',
    description:
      'Single customer view across all touchpoints, enabling personalized service and omnichannel integration.',
  },
  {
    icon: Smartphone,
    title: 'Channel Integration',
    description:
      'Connecting credit engines to mobile apps, internet banking, USSD, and third-party fintech channels.',
  },
]

const lendingMethodology = [
  {
    number: '01',
    icon: Search,
    title: 'Discover & Design',
    description:
      'Mapping credit products, customer journeys, and integration points to define a target lending architecture.',
    bullets: ['Product & policy workshop', 'Channel and data flow design', 'Vendor/platform fit assessment'],
  },
  {
    number: '02',
    icon: Layers,
    title: 'Build & Integrate',
    description:
      'Configuring LOS, decision engines, and CRM components with core banking and channel platforms.',
    bullets: ['LOS & rules configuration', 'API and middleware integration', 'Document & collateral workflows'],
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Test & Launch',
    description:
      'Validating credit scenarios, regulatory controls, and channel experiences before controlled rollout.',
    bullets: ['UAT across credit scenarios', 'Regulatory & audit readiness', 'Phased channel go-live'],
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimise & Scale',
    description:
      'Tuning decision models, expanding products, and improving conversion through continuous improvement.',
    bullets: ['Scorecard & rules refinement', 'Portfolio performance monitoring', 'Product expansion roadmap'],
  },
]

function CrmPage() {
  return (
    <main className="core-banking-page">
      <section
        className="core-banking-hero home-hero-sticky"
        id="top"
        style={{
          backgroundImage: `url(${crmHeroImage})`,
        }}
      >
        <div className="core-banking-hero-inner">
          <h1>Digital Lending Engineering &amp; Customer 360 CRM</h1>
          <p>
            Accelerating credit evaluation, automating loan origination, and unifying customer
            engagement.
          </p>
          <div className="core-banking-hero-actions">
            <a className="primary-btn" href="/contact">
              Explore Digital Lending Solutions
            </a>
            <a className="outline-accent" href="#about-overview">
              Explore our approach
            </a>
          </div>
        </div>
      </section>

      <div className="page-content-over-hero">
        <section className="core-banking-overview" id="about-overview">
          <div className="core-banking-overview-inner">
            <div className="core-banking-overview-copy">
              <p className="section-label core-banking-overview-eyebrow">SERVICE OVERVIEW</p>

              <h2>Digital lending and CRM built for modern financial institutions.</h2>
              <p>
                Modern financial institutions require instant, automated credit decisions combined
                with a unified view of customer relationships. Finsys Tech designs and deploys
                robust digital lending platforms and CRM systems that minimize risk, lower
                operational costs, and elevate the customer experience.
              </p>
            </div>

            <div className="core-banking-overview-features">
              {crmOverviewFeatures.map((feature) => {
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

        <section className="core-banking-methodology-section dark-green-band" id="capabilities">
          <div className="core-banking-methodology-header">
            <p className="section-label core-banking-payments-eyebrow">DETAILED CAPABILITIES</p>
            <h2>End-to-end digital lending &amp; CRM capability.</h2>
            <p>
              From origination to engagement, we deliver integrated platforms that connect credit
              decisioning, compliance, and customer relationship management across every channel.
            </p>
          </div>

          <div className="core-banking-methodology-grid core-banking-methodology-grid--five crm-capabilities-grid">
            {lendingCapabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <article key={capability.title} className="core-banking-stage-card">
                  <div className="core-banking-stage-top">
                    <div className="core-banking-stage-icon" aria-hidden="true">
                      <Icon size={20} />
                    </div>
                    <span className="core-banking-stage-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="core-banking-payments-section" id="methodology">
          <div className="core-banking-payments-inner">
            <div className="core-banking-payments-copy">
              <p className="section-label core-banking-payments-eyebrow">DELIVERY APPROACH</p>
              <h2>From concept to live lending in four stages.</h2>
              <p>
                Our delivery framework connects product design, platform integration, and
                regulatory readiness—so digital lending programmes launch with confidence and
                scale sustainably.
              </p>
              <ul className="core-banking-payments-checklist">
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>LOS, CRM, and core banking integration by design</span>
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>Credit policy and decision rules configured to your risk appetite</span>
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>Omnichannel rollout across mobile, web, USSD, and partner APIs</span>
                </li>
              </ul>
            </div>

            <div className="core-banking-methodology-grid crm-methodology-grid">
              {lendingMethodology.map((stage) => {
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
          </div>
        </section>

        <section className="core-banking-case-study-section" id="case-study">
          <div className="core-banking-case-study-inner">
            <div className="core-banking-case-study-media">
              <img src={crmCaseStudyImage} alt="Financial institution headquarters at dusk" />
            </div>

            <div className="core-banking-case-study-content">
              <p className="section-label core-banking-case-study-eyebrow">FEATURED CASE STUDY</p>

              <h2>Digital lending platform rollout &amp; channel integration.</h2>

              <p>
                We designed and assured delivery of a digital lending programme—integrating loan
                origination, automated decisioning, and CRM with mobile and internet banking
                channels to accelerate approvals and improve customer conversion.
              </p>

              <div className="core-banking-case-study-divider" />

              <div className="core-banking-case-study-stats">
                <div className="core-banking-case-study-stat">
                  <strong className="core-banking-case-study-stat--accent">60%</strong>
                  <span>reduction in origination turnaround</span>
                </div>
                <div className="core-banking-case-study-stat">
                  <strong>4</strong>
                  <span>channels integrated at launch</span>
                </div>
                <div className="core-banking-case-study-stat">
                  <strong>Live</strong>
                  <span>decision engine in production</span>
                </div>
              </div>

              <a className="core-banking-case-study-cta" href="/contact">
                Discuss your lending programme
                <span className="core-banking-case-study-cta-chevron" aria-hidden="true">›</span>
              </a>
            </div>
          </div>
        </section>

        <section className="content-section stacked-section service-cta-section">
          <div className="service-cta-card">
            <div>
              <p className="section-label">Ready to start?</p>
              <h3>Explore digital lending solutions with our team.</h3>
              <p className="section-copy">
                We tailor each engagement to your credit products, channels, and regulatory
                requirements.
              </p>
            </div>
            <div className="service-cta-actions">
              <a className="primary-btn" href="/contact">
                Explore Digital Lending Solutions
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

export default CrmPage
