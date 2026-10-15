import erpHeroImage from '../../assets/images/services/oracle fusion.png'
import erpCaseStudyImage from '../../assets/images/services/Oracle-fusion-section.png'
import {
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  Compass,
  Layers,
  Search,
  Server,
  Target,
  TrendingUp,
} from 'lucide-react'

const erpOverviewFeatures = [
  {
    icon: Compass,
    title: 'ERP Advisory',
    description:
      'Independent guidance on platform selection, licensing strategy, and roadmap design—aligned to your operating model and regulatory context.',
  },
  {
    icon: Layers,
    title: 'Implementation & Migration',
    description:
      'Structured delivery across EBS upgrades, Fusion rollouts, and data conversion—with governance that keeps complex programmes on track.',
  },
  {
    icon: Cloud,
    title: 'Cloud Modernization',
    description:
      'Hybrid and cloud-first architectures that modernize finance, supply chain, and HCM without compromising continuity or control.',
  },
]

const ebsSolutions = [
  { title: 'Financials Management', description: 'General ledger, AP/AR, assets, and close management' },
  { title: 'Supply Chain & Procurement', description: 'Procurement, sourcing, and supplier lifecycle' },
  { title: 'Inventory Management', description: 'Stock control, warehousing, and fulfilment visibility' },
  { title: 'Human Capital Management', description: 'HRMS, payroll, and workforce administration' },
]

const fusionSolutions = [
  { title: 'Fusion HCM', description: 'Talent, payroll, and workforce experience in the cloud' },
  { title: 'Fusion Financials & PM', description: 'Cloud financials, projects, and enterprise performance' },
  { title: 'Cloud Migration Roadmaps', description: 'Phased EBS-to-Fusion transition and TCO planning' },
  { title: 'Modernization & Integration', description: 'API-led connectivity with banking, CRM, and analytics' },
]

const erpMethodology = [
  {
    number: '01',
    icon: Search,
    title: 'Assess',
    description:
      'Evaluating current enterprise architecture, processes, licensing, and technical debt to establish a clear baseline.',
    bullets: ['Current-state process & system review', 'Licensing and compliance assessment', 'Gap analysis & readiness scoring'],
  },
  {
    number: '02',
    icon: Target,
    title: 'Target Architecture',
    description:
      'Designing scalable, future-proof cloud or hybrid enterprise blueprints aligned to business outcomes.',
    bullets: ['Target operating model design', 'Integration & data architecture', 'Security and controls framework'],
  },
  {
    number: '03',
    icon: Server,
    title: 'Select',
    description:
      'Navigating platform licensing, module scope, and implementation partner selection with evidence-based decisions.',
    bullets: ['Module & edition scoping', 'RFP and SI evaluation', 'Business case and rollout sequencing'],
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Assure',
    description:
      'Managing technical delivery, integrations, configuration governance, and user acceptance testing (UAT).',
    bullets: ['Delivery assurance & QA oversight', 'Integration and data migration testing', 'UAT planning and sign-off'],
  },
  {
    number: '05',
    icon: TrendingUp,
    title: 'Stabilise',
    description:
      'Delivering post-go-live support, performance tuning, and operational handoff for sustained adoption.',
    bullets: ['Hypercare and incident management', 'Performance tuning & SLA monitoring', 'Knowledge transfer & handover'],
  },
]

function ErpSystemsPage() {
  return (
    <main className="core-banking-page">
      <section
        className="core-banking-hero home-hero-sticky"
        id="top"
        style={{
          backgroundImage: `url(${erpHeroImage})`,
        }}
      >
        <div className="core-banking-hero-inner">
          <h1>Oracle E-Business Suite (EBS) &amp; Fusion Cloud Solutions</h1>
          <p>
            Transforming enterprise resource planning across financial, supply chain, and human
            capital operations.
          </p>
          <div className="core-banking-hero-actions">
            <a className="primary-btn" href="/contact">
              Request ERP Assessment
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

              <h2>Oracle ERP expertise for enterprise and public sector transformation.</h2>
              <p>
                We deliver comprehensive Oracle ERP advisory, implementation, and cloud migration
                services tailored for enterprise and public sector organizations. Whether
                maintaining mission-critical on-premise deployments or transitioning to modern
                enterprise cloud environments, our team ensures operational continuity,
                governance, and measurable business value at every stage.
              </p>
            </div>

            <div className="core-banking-overview-features">
              {erpOverviewFeatures.map((feature) => {
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

        <section className="core-banking-payments-section" id="solution-breakdown">
          <div className="core-banking-payments-inner">
            <div className="core-banking-payments-copy">
              <p className="section-label core-banking-payments-eyebrow">CORE SOLUTIONS</p>
              <h2>Oracle EBS &amp; Fusion Cloud capability.</h2>
              <p>
                From established on-premise EBS estates to cloud-native Fusion deployments, we
                support the full Oracle ERP spectrum—helping you optimize today&apos;s platform while
                building a credible path to tomorrow&apos;s architecture.
              </p>
              <ul className="core-banking-payments-checklist">
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>End-to-end finance, supply chain, and HCM coverage</span>
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>Upgrade, patch, and release governance for EBS environments</span>
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>Cloud migration roadmaps with phased cutover strategies</span>
                </li>
              </ul>
            </div>

            <div className="erp-solutions-columns">
              <article className="erp-solutions-column">
                <div className="erp-solutions-column-header">
                  <Building2 size={20} aria-hidden="true" />
                  <h3>Oracle EBS Solutions (On-Premise)</h3>
                </div>
                <div className="core-banking-payments-grid erp-solutions-grid">
                  {ebsSolutions.map((solution) => (
                    <article key={solution.title} className="core-banking-payments-card">
                      <h3>{solution.title}</h3>
                      <p>{solution.description}</p>
                    </article>
                  ))}
                </div>
              </article>

              <article className="erp-solutions-column">
                <div className="erp-solutions-column-header">
                  <Cloud size={20} aria-hidden="true" />
                  <h3>Oracle Fusion Cloud Solutions</h3>
                </div>
                <div className="core-banking-payments-grid erp-solutions-grid">
                  {fusionSolutions.map((solution) => (
                    <article key={solution.title} className="core-banking-payments-card">
                      <h3>{solution.title}</h3>
                      <p>{solution.description}</p>
                    </article>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="core-banking-methodology-section dark-green-band" id="methodology">
          <div className="core-banking-methodology-header">
            <p className="section-label core-banking-payments-eyebrow">EXECUTION METHODOLOGY</p>
            <h2>A disciplined 5-stage ERP delivery framework.</h2>
            <p>
              Every Oracle engagement follows a structured path—from assessment through
              stabilization—so decisions are evidence-based, risks are surfaced early, and
              go-live is a controlled milestone, not an unmanaged event.
            </p>
          </div>

          <div className="core-banking-methodology-grid core-banking-methodology-grid--five">
            {erpMethodology.map((stage) => {
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

        <section className="core-banking-case-study-section" id="case-study">
          <div className="core-banking-case-study-inner">
            <div className="core-banking-case-study-media">
              <img src={erpCaseStudyImage} alt="Enterprise headquarters at dusk" />
            </div>

            <div className="core-banking-case-study-content">
              <p className="section-label core-banking-case-study-eyebrow">FEATURED CASE STUDY</p>

              <h2>Public sector ERP modernization &amp; delivery assurance.</h2>

              <p>
                We provided independent program management and delivery assurance for a
                large-scale Oracle ERP rollout—governing data migration, integration testing,
                and user adoption across finance, procurement, and HR modules through go-live
                and stabilization.
              </p>

              <div className="core-banking-case-study-divider" />

              <div className="core-banking-case-study-stats">
                <div className="core-banking-case-study-stat">
                  <strong className="core-banking-case-study-stat--accent">5</strong>
                  <span>core modules delivered</span>
                </div>
                <div className="core-banking-case-study-stat">
                  <strong>12+</strong>
                  <span>integrated downstream systems</span>
                </div>
                <div className="core-banking-case-study-stat">
                  <strong>On plan</strong>
                  <span>go-live within programme window</span>
                </div>
              </div>

              <a className="core-banking-case-study-cta" href="/contact">
                Discuss your ERP programme
                <span className="core-banking-case-study-cta-chevron" aria-hidden="true">›</span>
              </a>
            </div>
          </div>
        </section>

        <section className="content-section stacked-section service-cta-section">
          <div className="service-cta-card">
            <div>
              <p className="section-label">Ready to start?</p>
              <h3>Request an ERP assessment with our delivery team.</h3>
              <p className="section-copy">
                We tailor each engagement to your Oracle landscape, compliance requirements, and
                digital transformation goals.
              </p>
            </div>
            <div className="service-cta-actions">
              <a className="primary-btn" href="/contact">
                Request ERP Assessment
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

export default ErpSystemsPage
