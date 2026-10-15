import advisoryHeroImage from '../../assets/images/services/strategic consulting.jpg'
import advisoryCaseStudyImage from '../../assets/images/services/ICT-advisory-section.jpg'
import {
  Building2,
  CheckCircle2,
  Compass,
  GitBranch,
  Layers,
  Map,
  Shield,
  Target,
} from 'lucide-react'

const advisoryOverviewFeatures = [
  {
    icon: Target,
    title: 'Business Alignment',
    description:
      'ICT strategy and architecture directly linked to executive priorities, regulatory mandates, and measurable outcomes.',
  },
  {
    icon: Shield,
    title: 'Governance & Compliance',
    description:
      'Operating models and architecture boards that strengthen oversight, accountability, and audit readiness.',
  },
  {
    icon: Compass,
    title: 'Transformation Roadmaps',
    description:
      'Multi-year master plans that sequence investments, manage risk, and guide phased digital transformation.',
  },
]

const keyOfferings = [
  {
    number: '01',
    icon: Map,
    title: 'ICT Master Planning & Strategy',
    description:
      'Formulating multi-year digital transformation roadmaps aligned with business goals, budget cycles, and regulatory priorities.',
  },
  {
    number: '02',
    icon: GitBranch,
    title: 'BPR & Automation (BPA)',
    description:
      'Mapping, streamlining, and automating legacy enterprise workflows to reduce cost, cycle time, and manual intervention.',
  },
  {
    number: '03',
    icon: Building2,
    title: 'IT Operating Model & Governance',
    description:
      'Designing effective organizational structures, decision rights, and IT governance frameworks for sustainable delivery.',
  },
  {
    number: '04',
    icon: Layers,
    title: 'Enterprise Architecture (TOGAF)',
    description:
      'Designing structured domains across Business, Application, Data, and Technology architectures with clear transition roadmaps.',
  },
]

const featuredProjects = [
  {
    client: 'TASAC',
    title: 'Digital Transformation Roadmap',
    description:
      'Enterprise architecture and strategic advisory to define a multi-year digital transformation programme for Tanzania Shipping Agencies Corporation.',
  },
  {
    client: 'TAA',
    title: 'Enterprise Architecture & Strategic Advisory',
    description:
      'ICT strategy and architecture guidance supporting operational modernization and regulatory alignment for Tanzania Airports Authority.',
  },
  {
    client: 'Posta Tanzania',
    title: 'National E-Commerce Platform',
    description:
      'Strategic advisory and architecture input for a national digital commerce initiative connecting postal services to modern trade channels.',
  },
]

function IctAdvisoryPage() {
  return (
    <main className="core-banking-page">
      <section
        className="core-banking-hero home-hero-sticky"
        id="top"
        style={{
          backgroundImage: `url(${advisoryHeroImage})`,
        }}
      >
        <div className="core-banking-hero-inner">
          <h1>Strategic ICT Advisory &amp; Enterprise Architecture</h1>
          <p>
            Aligning digital technology strategy, operating models, and enterprise architecture
            with business objectives.
          </p>
          <div className="core-banking-hero-actions">
            <a className="primary-btn" href="/contact">
              Consult with Our Advisors
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

              <h2>Advisory that connects technology investment to business outcomes.</h2>
              <p>
                Technology investments must drive measurable business outcomes. Our advisory
                practice helps executives, boards, and public sector leaders design long-term
                ICT strategy, re-engineer operational processes, and implement TOGAF-aligned
                enterprise architectures that support growth and regulatory compliance.
              </p>
            </div>

            <div className="core-banking-overview-features">
              {advisoryOverviewFeatures.map((feature) => {
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

        <section className="core-banking-methodology-section dark-green-band" id="key-offerings">
          <div className="core-banking-methodology-header">
            <p className="section-label core-banking-payments-eyebrow">KEY OFFERINGS</p>
            <h2>Strategy, process, governance, and architecture—integrated.</h2>
            <p>
              Our advisory services span the full spectrum of enterprise transformation—from
              master planning and process re-engineering to TOGAF-aligned architecture and IT
              operating model design.
            </p>
          </div>

          <div className="core-banking-methodology-grid">
            {keyOfferings.map((offering) => {
              const Icon = offering.icon
              return (
                <article key={offering.number} className="core-banking-stage-card">
                  <div className="core-banking-stage-top">
                    <div className="core-banking-stage-icon" aria-hidden="true">
                      <Icon size={20} />
                    </div>
                    <span className="core-banking-stage-number">{offering.number}</span>
                  </div>

                  <h3>{offering.title}</h3>
                  <p>{offering.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="core-banking-payments-section" id="impact-credibility">
          <div className="core-banking-payments-inner">
            <div className="core-banking-payments-copy">
              <p className="section-label core-banking-payments-eyebrow">IMPACT &amp; CREDIBILITY</p>
              <h2>Proven advisory across public sector and agency clients.</h2>
              <p>
                We have supported national agencies and public institutions with enterprise
                architecture, ICT master planning, and strategic advisory—delivering roadmaps
                that executives can fund, govern, and execute with confidence.
              </p>
              <ul className="core-banking-payments-checklist">
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>TOGAF-aligned enterprise architecture deliverables</span>
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>Board-ready ICT strategy and master plan documentation</span>
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>Public sector transformation experience across Tanzania</span>
                </li>
              </ul>
            </div>

            <div className="ict-projects-highlight">
              <p className="section-label core-banking-payments-eyebrow">FEATURED PROJECTS</p>
              <div className="ict-projects-grid">
                {featuredProjects.map((project) => (
                  <article key={project.client} className="core-banking-payments-card ict-project-card">
                    <span className="ict-project-client">{project.client}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="core-banking-case-study-section" id="case-study">
          <div className="core-banking-case-study-inner">
            <div className="core-banking-case-study-media">
              <img src={advisoryCaseStudyImage} alt="Public sector agency headquarters at dusk" />
            </div>

            <div className="core-banking-case-study-content">
              <p className="section-label core-banking-case-study-eyebrow">ADVISORY IN ACTION</p>

              <h2>TASAC digital transformation roadmap &amp; enterprise architecture.</h2>

              <p>
                We delivered strategic ICT advisory and enterprise architecture for Tanzania
                Shipping Agencies Corporation—defining a phased digital transformation roadmap,
                target architecture domains, and governance model to guide multi-year investment
                decisions.
              </p>

              <div className="core-banking-case-study-divider" />

              <div className="core-banking-case-study-stats">
                <div className="core-banking-case-study-stat">
                  <strong className="core-banking-case-study-stat--accent">4</strong>
                  <span>architecture domains defined</span>
                </div>
                <div className="core-banking-case-study-stat">
                  <strong>3-year</strong>
                  <span>transformation roadmap delivered</span>
                </div>
                <div className="core-banking-case-study-stat">
                  <strong>Board-ready</strong>
                  <span>strategy documentation</span>
                </div>
              </div>

              <a className="core-banking-case-study-cta" href="/contact">
                Consult with our advisors
                <span className="core-banking-case-study-cta-chevron" aria-hidden="true">›</span>
              </a>
            </div>
          </div>
        </section>

        <section className="content-section stacked-section service-cta-section">
          <div className="service-cta-card">
            <div>
              <p className="section-label">Ready to start?</p>
              <h3>Consult with our ICT advisory team today.</h3>
              <p className="section-copy">
                We tailor each engagement to your strategic priorities, regulatory context, and
                transformation ambitions.
              </p>
            </div>
            <div className="service-cta-actions">
              <a className="primary-btn" href="/contact">
                Consult with Our Advisors
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

export default IctAdvisoryPage
