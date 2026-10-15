import cyberHeroImage from '../../assets/images/services/cyber.jpg'
import cyberCaseStudyImage from '../../assets/images/services/Cyber-security-section.png'
import {
  CheckCircle2,
  ClipboardCheck,
  KeyRound,
  Scale,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Target,
} from 'lucide-react'

const securityOverviewFeatures = [
  {
    icon: Shield,
    title: 'End-to-End Resilience',
    description:
      'Security embedded across governance, architecture, and operations—not bolted on after systems go live.',
  },
  {
    icon: Target,
    title: 'Risk-Based Prioritization',
    description:
      'Assessments and remediation roadmaps that focus investment where exposure and regulatory impact are highest.',
  },
  {
    icon: ShieldCheck,
    title: 'Audit-Ready Controls',
    description:
      'Control frameworks and evidence preparation that stand up to internal audit, regulator review, and external assurance.',
  },
]

const securityPillars = [
  {
    number: '01',
    icon: KeyRound,
    title: 'Identity & Access Management (IAM)',
    description:
      'Enterprise access controls, privilege management, and Segregation of Duties (SOD) risk mitigation.',
  },
  {
    number: '02',
    icon: ShieldAlert,
    title: 'Threat & Risk Assessments',
    description:
      'Vulnerability evaluations, security architecture reviews, and risk remediation roadmaps.',
  },
  {
    number: '03',
    icon: Scale,
    title: 'Regulatory Compliance & Standards',
    description:
      'Aligning systems with SOC 2, PCI-DSS, GDPR, and central bank regulatory frameworks.',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Audit Readiness',
    description:
      'Technical audit preparation, control gap evaluations, and compliance reporting.',
  },
]

function CyberSecurity() {
  return (
    <main className="core-banking-page">
      <section
        className="core-banking-hero home-hero-sticky"
        id="top"
        style={{
          backgroundImage: `url(${cyberHeroImage})`,
        }}
      >
        <div className="core-banking-hero-inner">
          <h1>Cybersecurity, Risk Management &amp; Regulatory Compliance</h1>
          <p>
            Safeguarding digital assets, ensuring audit readiness, and building resilient cyber
            defense frameworks.
          </p>
          <div className="core-banking-hero-actions">
            <a className="primary-btn" href="/contact">
              Request Security Audit
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

              <h2>Security built into how your organization operates.</h2>
              <p>
                In an environment of increasing cyber threats and strict regulatory demands,
                Finsys Tech helps organizations build end-to-end cyber resilience. We integrate
                security directly into enterprise governance, technology lifecycles, and
                operational processes.
              </p>
            </div>

            <div className="core-banking-overview-features">
              {securityOverviewFeatures.map((feature) => {
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

        <section className="core-banking-methodology-section dark-green-band" id="security-pillars">
          <div className="core-banking-methodology-header">
            <p className="section-label core-banking-payments-eyebrow">KEY SECURITY PILLARS</p>
            <h2>Four foundations of enterprise cyber resilience.</h2>
            <p>
              Our security practice spans identity, threat management, regulatory alignment, and
              audit readiness—giving boards and CIOs a coherent view of risk and control
              maturity.
            </p>
          </div>

          <div className="core-banking-methodology-grid">
            {securityPillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <article key={pillar.number} className="core-banking-stage-card">
                  <div className="core-banking-stage-top">
                    <div className="core-banking-stage-icon" aria-hidden="true">
                      <Icon size={20} />
                    </div>
                    <span className="core-banking-stage-number">{pillar.number}</span>
                  </div>

                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="core-banking-payments-section" id="compliance-approach">
          <div className="core-banking-payments-inner">
            <div className="core-banking-payments-copy">
              <p className="section-label core-banking-payments-eyebrow">COMPLIANCE APPROACH</p>
              <h2>From assessment to audit-ready assurance.</h2>
              <p>
                We help regulated institutions and enterprises close control gaps, strengthen
                IAM, and prepare evidence packs that satisfy internal audit, external assessors,
                and supervisory review.
              </p>
              <ul className="core-banking-payments-checklist">
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>SOC 2, PCI-DSS, GDPR, and central bank framework alignment</span>
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>Security architecture and vulnerability assessment programmes</span>
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>SOD analysis, access reviews, and privilege governance</span>
                </li>
              </ul>
            </div>

            <div className="core-banking-payments-grid">
              <article className="core-banking-payments-card">
                <h3>SOC 2 &amp; ISO 27001</h3>
                <p>Control design, gap analysis, and readiness for assurance programmes.</p>
              </article>
              <article className="core-banking-payments-card">
                <h3>PCI-DSS</h3>
                <p>Cardholder data environment reviews and payment security compliance.</p>
              </article>
              <article className="core-banking-payments-card">
                <h3>GDPR &amp; Data Privacy</h3>
                <p>Privacy controls, data handling policies, and breach readiness planning.</p>
              </article>
              <article className="core-banking-payments-card">
                <h3>Central Bank Frameworks</h3>
                <p>Regulatory cybersecurity and ICT risk guidance for financial institutions.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="core-banking-case-study-section" id="case-study">
          <div className="core-banking-case-study-inner">
            <div className="core-banking-case-study-media">
              <img src={cyberCaseStudyImage} alt="Enterprise security operations environment" />
            </div>

            <div className="core-banking-case-study-content">
              <p className="section-label core-banking-case-study-eyebrow">SECURITY IN ACTION</p>

              <h2>Regulated institution security assessment &amp; audit readiness.</h2>

              <p>
                We conducted a comprehensive security and controls assessment for a regulated
                financial institution—evaluating IAM, SOD risks, and architecture gaps, then
                delivering a prioritized remediation roadmap aligned to central bank supervisory
                expectations.
              </p>

              <div className="core-banking-case-study-divider" />

              <div className="core-banking-case-study-stats">
                <div className="core-banking-case-study-stat">
                  <strong className="core-banking-case-study-stat--accent">100+</strong>
                  <span>controls evaluated</span>
                </div>
                <div className="core-banking-case-study-stat">
                  <strong>Prioritized</strong>
                  <span>remediation roadmap</span>
                </div>
                <div className="core-banking-case-study-stat">
                  <strong>Audit-ready</strong>
                  <span>evidence framework delivered</span>
                </div>
              </div>

              <a className="core-banking-case-study-cta" href="/contact">
                Request a security audit
                <span className="core-banking-case-study-cta-chevron" aria-hidden="true">›</span>
              </a>
            </div>
          </div>
        </section>

        <section className="content-section stacked-section service-cta-section">
          <div className="service-cta-card">
            <div>
              <p className="section-label">Ready to start?</p>
              <h3>Request a security audit with our team.</h3>
              <p className="section-copy">
                We tailor each engagement to your regulatory context, threat profile, and control
                maturity goals.
              </p>
            </div>
            <div className="service-cta-actions">
              <a className="primary-btn" href="/contact">
                Request Security Audit
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

export default CyberSecurity
