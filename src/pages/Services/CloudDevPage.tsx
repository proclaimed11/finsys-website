import cloudHeroImage from '../../assets/images/services/software development.png'
import cloudCaseStudyImage from '../../assets/images/services/Cloud-dev-section.jpg'
import {
  BarChart3,
  CheckCircle2,
  Cloud,
  Code2,
  GitBranch,
  Rocket,
  Sparkles,
  Workflow,
} from 'lucide-react'

const cloudOverviewFeatures = [
  {
    icon: Cloud,
    title: 'Cloud-Native Architecture',
    description:
      'Modern application designs on AWS, Azure, and GCP that improve scalability, resilience, and cost efficiency.',
  },
  {
    icon: Workflow,
    title: 'Continuous Delivery',
    description:
      'DevOps pipelines and automation that accelerate release cycles while maintaining quality and control.',
  },
  {
    icon: Sparkles,
    title: 'Intelligent Automation',
    description:
      'Practical AI, analytics, and integration capabilities that turn data and APIs into business advantage.',
  },
]

const solutionPillars = [
  {
    icon: Cloud,
    title: 'Multi-Cloud Engineering',
    items: [
      'Cloud readiness assessments (AWS, Azure, GCP)',
      'Hybrid cloud migration strategies',
      'Cloud architecture optimization',
    ],
  },
  {
    icon: GitBranch,
    title: 'DevOps & Automation',
    items: [
      'CI/CD pipeline implementation',
      'Infrastructure as Code (IaC)',
      'Containerization & orchestration',
    ],
  },
  {
    icon: Code2,
    title: 'AI & Custom Engineering',
    items: [
      'Enterprise API & integration development',
      'Business Intelligence (BI) & analytics dashboards',
      'Practical AI/ML implementation use cases',
    ],
  },
]

function CloudDevPage() {
  return (
    <main className="core-banking-page">
      <section
        className="core-banking-hero home-hero-sticky"
        id="top"
        style={{
          backgroundImage: `url(${cloudHeroImage})`,
        }}
      >
        <div className="core-banking-hero-inner">
          <h1>Cloud Engineering, DevOps Automation &amp; AI Solutions</h1>
          <p>
            Modernizing software development, automating multi-cloud infrastructure, and
            harnessing enterprise AI.
          </p>
          <div className="core-banking-hero-actions">
            <a className="primary-btn" href="/contact">
              Accelerate Digital Factory
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

              <h2>The Digital Transformation Factory for modern enterprises.</h2>
              <p>
                We assist enterprises in modernizing their application stack through cloud-native
                architectures, continuous delivery pipelines, and intelligent automation. Our
                Digital Transformation Factory turns modern technology into scalable business
                advantages.
              </p>
            </div>

            <div className="core-banking-overview-features">
              {cloudOverviewFeatures.map((feature) => {
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

        <section className="core-banking-methodology-section dark-green-band" id="solution-pillars">
          <div className="core-banking-methodology-header">
            <p className="section-label core-banking-payments-eyebrow">SOLUTION PILLARS</p>
            <h2>Cloud, DevOps, and AI—engineered as one capability.</h2>
            <p>
              Our delivery factory combines multi-cloud engineering, automation, and custom
              development—so platforms launch faster, integrate cleanly, and scale with demand.
            </p>
          </div>

          <div className="cloud-pillars-grid">
            {solutionPillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <article key={pillar.title} className="dc-competency-card cloud-pillar-card">
                  <div className="core-banking-stage-top">
                    <div className="core-banking-stage-icon" aria-hidden="true">
                      <Icon size={20} />
                    </div>
                    <span className="core-banking-stage-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3>{pillar.title}</h3>

                  <ul className="core-banking-payments-checklist">
                    {pillar.items.map((item) => (
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
        </section>

        <section className="core-banking-payments-section" id="digital-factory">
          <div className="core-banking-payments-inner">
            <div className="core-banking-payments-copy">
              <p className="section-label core-banking-payments-eyebrow">DIGITAL FACTORY</p>
              <h2>From roadmap to running platform.</h2>
              <p>
                Whether migrating workloads, standing up CI/CD, or launching analytics and AI
                use cases, we bring engineering discipline and delivery assurance to every stage
                of the modern stack.
              </p>
              <ul className="core-banking-payments-checklist">
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>AWS, Azure, and GCP readiness and migration planning</span>
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>Automated pipelines with IaC and container orchestration</span>
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>APIs, BI dashboards, and practical AI/ML implementations</span>
                </li>
              </ul>
            </div>

            <div className="core-banking-payments-grid">
              <article className="core-banking-payments-card">
                <BarChart3 size={22} aria-hidden="true" />
                <h3>Analytics &amp; BI</h3>
                <p>Dashboards, data pipelines, and decision-ready reporting.</p>
              </article>
              <article className="core-banking-payments-card">
                <Rocket size={22} aria-hidden="true" />
                <h3>Platform Delivery</h3>
                <p>Cloud landing zones, DevOps tooling, and release automation.</p>
              </article>
              <article className="core-banking-payments-card">
                <Sparkles size={22} aria-hidden="true" />
                <h3>AI Use Cases</h3>
                <p>Targeted ML and automation where they deliver measurable ROI.</p>
              </article>
              <article className="core-banking-payments-card">
                <Code2 size={22} aria-hidden="true" />
                <h3>Integration Layer</h3>
                <p>Enterprise APIs connecting core systems, channels, and partners.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="core-banking-case-study-section" id="case-study">
          <div className="core-banking-case-study-inner">
            <div className="core-banking-case-study-media">
              <img src={cloudCaseStudyImage} alt="Modern digital platform engineering environment" />
            </div>

            <div className="core-banking-case-study-content">
              <p className="section-label core-banking-case-study-eyebrow">DIGITAL FACTORY IN ACTION</p>

              <h2>Cloud migration &amp; DevOps automation programme.</h2>

              <p>
                We supported an enterprise digital factory initiative—assessing cloud readiness,
                implementing CI/CD pipelines and IaC, and delivering integration and analytics
                capabilities that shortened release cycles and improved operational visibility.
              </p>

              <div className="core-banking-case-study-divider" />

              <div className="core-banking-case-study-stats">
                <div className="core-banking-case-study-stat">
                  <strong className="core-banking-case-study-stat--accent">3x</strong>
                  <span>faster deployment cadence</span>
                </div>
                <div className="core-banking-case-study-stat">
                  <strong>Multi-cloud</strong>
                  <span>target architecture delivered</span>
                </div>
                <div className="core-banking-case-study-stat">
                  <strong>Live</strong>
                  <span>CI/CD &amp; IaC in production</span>
                </div>
              </div>

              <a className="core-banking-case-study-cta" href="/contact">
                Accelerate your digital factory
                <span className="core-banking-case-study-cta-chevron" aria-hidden="true">›</span>
              </a>
            </div>
          </div>
        </section>

        <section className="content-section stacked-section service-cta-section">
          <div className="service-cta-card">
            <div>
              <p className="section-label">Ready to start?</p>
              <h3>Accelerate your Digital Transformation Factory.</h3>
              <p className="section-copy">
                We tailor each engagement to your cloud maturity, delivery model, and automation
                ambitions.
              </p>
            </div>
            <div className="service-cta-actions">
              <a className="primary-btn" href="/contact">
                Accelerate Digital Factory
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

export default CloudDevPage
