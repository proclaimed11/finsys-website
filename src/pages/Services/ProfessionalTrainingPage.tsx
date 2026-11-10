import { BookOpenCheck, CheckCircle2, Cloud, Code2, Network, ShieldCheck } from 'lucide-react'
import trainingHeroImage from '../../assets/images/services/Coding Workshop in a Modern Classroom.png'
import clcLogo from '../../assets/images/home/CLC logo.png'
import torqueItLogo from '../../assets/images/home/torque-it_logo.png'

const trainingAreas = [
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'Information security and cybersecurity learning for teams responsible for protecting systems and data.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Cloud computing, virtualisation, networking, infrastructure and data centre technologies.',
  },
  {
    icon: Code2,
    title: 'Software & Data',
    description: 'DevOps, software technologies, artificial intelligence, machine learning and data science.',
  },
  {
    icon: BookOpenCheck,
    title: 'Professional Development',
    description: 'Project management, IT service management and professional skills development.',
  },
]

const deliveryOptions = [
  'Instructor-led classroom training',
  'Virtual instructor-led training',
  'Blended and self-paced learning',
  'Customised corporate programmes',
  'Professional certification preparation',
]

const featuredCertifications = [
  {
    category: 'Networking & Infrastructure',
    certifications: ['Cisco CCNA', 'Red Hat Certified System Administrator (RHCSA)'],
  },
  {
    category: 'Cloud Computing',
    certifications: ['AWS Certified Solutions Architect – Associate', 'Microsoft Azure Administrator Associate (AZ-104)'],
  },
  {
    category: 'Cybersecurity',
    certifications: ['CompTIA Security+', 'Certified Ethical Hacker (CEH)'],
  },
  {
    category: 'Database & Enterprise',
    certifications: ['Oracle Database SQL Certification', 'Oracle Cloud Infrastructure Foundations Associate'],
  },
  {
    category: 'Project & IT Service Management',
    certifications: ['PMP – Project Management Professional', 'ITIL 4 Foundation'],
  },
]

function ProfessionalTrainingPage() {
  return (
    <main className="core-banking-page">
      <section
        className="core-banking-hero home-hero-sticky"
        id="top"
        style={{ backgroundImage: `url(${trainingHeroImage})` }}
      >
        <div className="core-banking-hero-inner">
          <h1>Professional ICT Training</h1>
          <p>
            Build practical technology skills and professional capabilities through
            structured, industry-aligned training.
          </p>
          <div className="core-banking-hero-actions">
            <a className="primary-btn" href="/contact">Discuss your training needs</a>
            <a className="outline-accent" href="#training-overview">Explore the training</a>
          </div>
        </div>
      </section>

      <div className="page-content-over-hero">
        <section className="core-banking-overview" id="training-overview">
          <div className="core-banking-overview-inner">
            <div className="core-banking-overview-copy">
              <p className="section-label core-banking-overview-eyebrow">SERVICE OVERVIEW</p>
              <h2>Develop the skills to support a changing technology environment.</h2>
              <p>
                Finsys works with established professional training partners to help
                individuals and organisations strengthen technical competencies and pursue
                professional ICT certifications. Training can be aligned to workforce needs,
                supporting practical learning and continued capability development.
              </p>
            </div>
            <div className="core-banking-overview-features">
              <article className="core-banking-feature-card">
                <div className="core-banking-feature-icon" aria-hidden="true">
                  <Network size={20} />
                </div>
                <div className="core-banking-feature-copy">
                  <h3>Partner-supported expertise</h3>
                  <p>
                    Access specialist courses and certification pathways through Finsys
                    training partners, including CLC and Torque IT.
                  </p>
                </div>
              </article>
              <article className="core-banking-feature-card">
                <div className="core-banking-feature-icon" aria-hidden="true">
                  <BookOpenCheck size={20} />
                </div>
                <div className="core-banking-feature-copy">
                  <h3>Learning for teams and professionals</h3>
                  <p>
                    Explore professional development for individuals, technical teams and
                    organisations seeking to build internal ICT capabilities.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="core-banking-methodology-section dark-green-band" id="training-areas">
          <div className="core-banking-methodology-header">
            <p className="section-label core-banking-payments-eyebrow">TRAINING AREAS</p>
            <h2>Technical knowledge for today’s digital workplace.</h2>
            <p>
              Training options span foundational and specialist disciplines, with course
              selection guided by the needs of the organisation and its learners.
            </p>
          </div>

          <div className="cloud-pillars-grid">
            {trainingAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <article key={area.title} className="dc-competency-card cloud-pillar-card">
                  <div className="core-banking-stage-top">
                    <div className="core-banking-stage-icon" aria-hidden="true">
                      <Icon size={20} />
                    </div>
                    <span className="core-banking-stage-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="training-certifications-section" id="featured-certifications">
          <header className="training-certifications-heading">
            <p className="section-label">Professional ICT Certifications</p>
            <h2>Popular certification pathways</h2>
            <p>
              Explore selected, widely recognised certifications across key technology and
              professional disciplines. Course and exam availability may vary by training
              partner and learner prerequisites.
            </p>
          </header>
          <div className="training-certifications-grid">
            {featuredCertifications.map((group) => (
              <article className="training-certification-card" key={group.category}>
                <h3>{group.category}</h3>
                <ul>
                  {group.certifications.map((certification) => (
                    <li key={certification}>{certification}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="core-banking-payments-section" id="training-delivery">
          <div className="core-banking-payments-inner">
            <div className="core-banking-payments-copy">
              <p className="section-label core-banking-payments-eyebrow">TRAINING DELIVERY</p>
              <h2>Flexible ways to learn.</h2>
              <p>
                Training partners offer different learning formats to help individuals and
                organisations find an approach suited to their schedules and development goals.
              </p>
              <ul className="core-banking-payments-checklist">
                {deliveryOptions.map((option) => (
                  <li key={option}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="core-banking-payments-grid">
              <article className="core-banking-payments-card">
                <img className="training-partner-card-logo" src={clcLogo} alt="Computer Learning Centre logo" />
                <h3>CLC</h3>
                <p>
                  Professional ICT training and vendor certification programmes across
                  technology and business disciplines.
                </p>
              </article>
              <article className="core-banking-payments-card">
                <img className="training-partner-card-logo" src={torqueItLogo} alt="Torque IT logo" />
                <h3>Torque IT</h3>
                <p>
                  ICT courses and certification pathways available through classroom, virtual,
                  blended and customised corporate training.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section stacked-section service-cta-section">
          <div className="service-cta-card">
            <div>
              <p className="section-label">Build your team’s capabilities</p>
              <h3>Let’s discuss your professional training needs.</h3>
              <p className="section-copy">
                Contact us to explore training areas, delivery formats and partner-supported
                certification options for your organisation.
              </p>
            </div>
            <div className="service-cta-actions">
              <a className="primary-btn" href="/contact">Contact Us</a>
              <a className="outline-accent" href="/about/partners">Meet our training partners</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ProfessionalTrainingPage
