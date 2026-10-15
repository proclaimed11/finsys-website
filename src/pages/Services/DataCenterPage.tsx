import dataCentreHeroImage from '../../assets/images/services/data-center.jpg'
import landmarkProjectImage from '../../assets/images/services/network infrastructure.jpg'
import {
  Cable,
  CheckCircle2,
  Globe,
  HardDrive,
  Network,
  Server,
  Shield,
} from 'lucide-react'

const infrastructureOverviewFeatures = [
  {
    icon: Server,
    title: 'High-Availability Design',
    description:
      'Tier-aligned data centre planning and QA that meets mission-critical uptime and resilience requirements.',
  },
  {
    icon: Shield,
    title: 'Design Assurance',
    description:
      'Independent oversight of power, cooling, cabling, and redundancy architecture from concept to commissioning.',
  },
  {
    icon: Globe,
    title: 'National-Scale Connectivity',
    description:
      'Enterprise and telecom network master plans that connect institutions to reliable regional infrastructure.',
  },
]

const competencyGrids = [
  {
    icon: HardDrive,
    title: 'Data Centre Advisory & Engineering',
    items: [
      'Concept-to-commissioning oversight',
      'Power, cooling, and structured cabling design QA',
      'Tier III & Tier IV architectural design standards',
      'Disaster Recovery (DR) & site redundancy architecture',
    ],
  },
  {
    icon: Network,
    title: 'Network Infrastructure & Telecommunications',
    items: [
      'Enterprise LAN/WAN design and optimization',
      'Hardware architecture (Cisco, Huawei, Juniper integration)',
      'ISP integration & national network connectivity master plans',
    ],
  },
]

const landmarkProjects = [
  {
    location: 'Zanzibar',
    title: 'Tier IV National Data Centre',
    description:
      'Strategic planning, QA, and design oversight for a national-tier facility supporting government and enterprise workloads.',
  },
  {
    location: 'Pemba',
    title: 'Pemba DR Data Centre',
    description:
      'High-availability disaster recovery facility development with redundant site architecture and operational readiness planning.',
  },
  {
    location: 'Zanzibar',
    title: 'National Connectivity Master Plan',
    description:
      'Design and architecture of regional telecom infrastructure to expand national network reach and resilience.',
  },
]

function DataCenterPage() {
  return (
    <main className="core-banking-page">
      <section 
        className="core-banking-hero home-hero-sticky"
        id="top"
        style={{
          backgroundImage: `url(${dataCentreHeroImage})`,
        }}
      >
        <div className="core-banking-hero-inner">
          <h1>Data Centre Planning, Design &amp; Enterprise Networking</h1>
          <p>
            Mission-critical infrastructure solutions from Tier IV data centre design QA to
            national network connectivity.
          </p>
          <div className="core-banking-hero-actions">
            <a className="primary-btn" href="/contact">
              Discuss Infrastructure Needs
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

              <h2>Infrastructure engineering for resilient, high-availability environments.</h2>
              <p>
                We deliver end-to-end infrastructure engineering services, guiding organizations
                through the planning, design, quality assurance, and execution of high-availability
                data centres and robust enterprise network backbones.
              </p>
            </div>

            <div className="core-banking-overview-features">
              {infrastructureOverviewFeatures.map((feature) => {
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

        <section className="core-banking-payments-section" id="core-competencies">
          <div className="core-banking-payments-inner">
            <div className="core-banking-payments-copy">
              <p className="section-label core-banking-payments-eyebrow">CORE COMPETENCIES</p>
              <h2>Data centre engineering &amp; enterprise networking.</h2>
              <p>
                From facility design assurance to national connectivity planning, we combine
                data centre expertise with deep network engineering capability—supporting
                institutions that cannot compromise on availability or resilience.
              </p>
              <ul className="core-banking-payments-checklist">
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>Tier III &amp; Tier IV design standards and QA oversight</span>
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>DR site architecture and redundancy planning</span>
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>Multi-vendor network integration (Cisco, Huawei, Juniper)</span>
                </li>
              </ul>
        </div>

            <div className="erp-solutions-columns dc-competency-columns">
              {competencyGrids.map((grid) => {
                const Icon = grid.icon
            return (
                  <article key={grid.title} className="erp-solutions-column dc-competency-card">
                    <div className="erp-solutions-column-header">
                      <Icon size={20} aria-hidden="true" />
                      <h3>{grid.title}</h3>
                </div>
                    <ul className="core-banking-payments-checklist">
                      {grid.items.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={18} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
              </article>
            )
          })}
        </div>
        </div>
      </section>

        <section className="core-banking-methodology-section dark-green-band" id="landmark-projects">
          <div className="core-banking-methodology-header">
            <p className="section-label core-banking-payments-eyebrow">LANDMARK PROJECTS</p>
            <h2>National infrastructure delivered with design assurance.</h2>
            <p>
              We have supported landmark data centre and connectivity programmes across Zanzibar
              and the wider region—combining strategic planning with rigorous design QA and
              execution oversight.
            </p>
        </div>

          <div className="core-banking-methodology-grid dc-projects-grid">
            {landmarkProjects.map((project, index) => (
              <article key={project.title} className="core-banking-stage-card">
                <div className="core-banking-stage-top">
                  <div className="core-banking-stage-icon" aria-hidden="true">
                    <Cable size={20} />
          </div>
                  <span className="core-banking-stage-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <span className="ict-project-client">{project.location}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="core-banking-case-study-section" id="case-study">
          <div className="core-banking-case-study-inner">
            <div className="core-banking-case-study-media">
              <img
                src={landmarkProjectImage}
                alt="Network infrastructure and connectivity planning"
              />
        </div>

            <div className="core-banking-case-study-content">
              <p className="section-label core-banking-case-study-eyebrow">PROJECT SPOTLIGHT</p>

              <h2>Tier IV National Data Centre — Zanzibar.</h2>

              <p>
                We provided strategic planning, design QA, and commissioning oversight for
                Zanzibar&apos;s Tier IV national data centre programme—ensuring power, cooling,
                redundancy, and operational readiness met national-tier standards.
              </p>

              <div className="core-banking-case-study-divider" />

              <div className="core-banking-case-study-stats">
                <div className="core-banking-case-study-stat">
                  <strong className="core-banking-case-study-stat--accent">Tier IV</strong>
                  <span>design standard target</span>
                </div>
                <div className="core-banking-case-study-stat">
                  <strong>End-to-end</strong>
                  <span>planning &amp; QA oversight</span>
          </div>
                <div className="core-banking-case-study-stat">
                  <strong>National</strong>
                  <span>infrastructure programme</span>
                </div>
              </div>

              <a className="core-banking-case-study-cta" href="/contact">
                Discuss infrastructure needs
                <span className="core-banking-case-study-cta-chevron" aria-hidden="true">›</span>
              </a>
          </div>
        </div>
      </section>

      <section className="content-section stacked-section service-cta-section">
        <div className="service-cta-card">
          <div>
            <p className="section-label">Ready to start?</p>
              <h3>Discuss your data centre and network requirements.</h3>
            <p className="section-copy">
                We tailor each engagement to your availability targets, vendor landscape, and
                national connectivity ambitions.
            </p>
          </div>
          <div className="service-cta-actions">
            <a className="primary-btn" href="/contact">
                Discuss Infrastructure Needs
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

export default DataCenterPage
