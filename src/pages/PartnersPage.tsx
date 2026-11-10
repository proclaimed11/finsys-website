import handshakeImage from '../assets/images/about/Professional Handshake in Modern Office.png'
import jmrLogo from '../assets/images/home/JMR Iogo.png'
import jethroLogo from '../assets/images/home/JETHRO logo.png'
import binaryLogo from '../assets/images/home/BINARY logo.png'
import clcLogo from '../assets/images/home/CLC logo.png'
import torqueItLogo from '../assets/images/home/torque-it_logo.png'

type PartnerProfile = {
  name: string
  logo: string
  focus: string
  description: string
  expertise: string[]
  delivery?: string[]
}

const technicalPartners: PartnerProfile[] = [
  {
    name: 'JMR Infotech',
    logo: jmrLogo,
    focus: 'Banking Technology · Oracle Solutions · Digital Transformation',
    description: 'JMR Infotech is a global technology services and systems integration company specialising in banking and enterprise technology. Its work supports financial institutions modernising technology infrastructure, implementing banking platforms and improving operational efficiency.',
    expertise: [
      'Core banking systems and modernisation',
      'Digital banking and customer experience',
      'Oracle FLEXCUBE and enterprise applications',
      'Financial analytics and risk management',
      'Banking systems integration and implementation support',
    ],
  },
  {
    name: 'AHEAD / Jethro',
    logo: jethroLogo,
    focus: 'Core Banking · Digital Banking · Financial Technology',
    description: 'Jethro Limited delivers software and digital transformation capabilities, particularly for financial services. Its AHEAD digital banking accelerator supports banks, SACCOs, microfinance institutions and other financial organisations developing modern digital services.',
    expertise: [
      'Core banking solutions and integration',
      'Digital banking platforms',
      'Payment systems and financial technology',
      'Business intelligence and data solutions',
      'Enterprise software and application development',
      'Banking process automation',
    ],
  },
  {
    name: 'Binary Limited',
    logo: binaryLogo,
    focus: 'Software Engineering · Banking Applications · Systems Integration',
    description: 'Binary Limited is a software engineering and technology solutions partner with capabilities in banking application development, digital channels and systems integration.',
    expertise: [
      'Software engineering and application development',
      'Banking application development',
      'Digital banking channels',
      'Enterprise software solutions',
      'Systems integration',
    ],
  },
]

const trainingPartners: PartnerProfile[] = [
  {
    name: 'Computer Learning Centre (CLC)',
    logo: clcLogo,
    focus: 'Kenya · Established 1994 · Professional ICT Training',
    description: 'Established in 1994, Computer Learning Centre is an IT and business training institution serving professionals and organisations across Africa and the Middle East. It offers 25 vendor certifications and has trained more than 20,000 professionals across 10 countries.',
    expertise: [
      'Cybersecurity and information security',
      'Cloud computing and virtualisation',
      'Artificial intelligence and machine learning',
      'Networking and IT infrastructure',
      'Data centre technologies',
      'DevOps and software technologies',
      'Project management, IT service management and business skills',
    ],
  },
  {
    name: 'Torque IT',
    logo: torqueItLogo,
    focus: 'South Africa · Established 1995 · ICT Training and Certification',
    description: 'Torque IT is a South African ICT training and certification provider focused on technology education and workforce development. Its catalogue includes 500+ courses and 23 global technology partners, supporting more than 16,000 students each year through classroom, virtual, blended and customised corporate learning.',
    expertise: [
      'Cybersecurity and information security',
      'Cloud computing and enterprise technologies',
      'Networking and infrastructure management',
      'Data science and artificial intelligence',
      'Microsoft and enterprise technology',
      'IT service management and project management',
      'Vendor-based technology certifications',
    ],
    delivery: [
      'Instructor-led classroom and virtual training',
      'Blended and self-paced learning',
      'Customised corporate programmes',
      'Certification preparation and examinations',
    ],
  },
]

function PartnersPage() {
  return (
    <main className="partners-page">
      <section
        className="partners-page-hero home-hero-sticky"
        style={{ backgroundImage: `url(${handshakeImage})` }}
      >
        <div className="partners-page-hero-inner">
          <h1>Strategic partnerships. Greater possibilities.</h1>
          <p>
            We partner with technology specialists and training providers to expand delivery capability and build ICT skills.
          </p>
          <nav className="partners-page-hero-links" aria-label="Partner categories">
            <a href="#technical-partners">Technical partners</a>
            <a href="#training-partners">Training partners</a>
          </nav>
        </div>
      </section>

      <div className="page-content-over-hero partners-page-content">
        <section className="partners-page-group" id="technical-partners">
          <header className="partners-page-group-heading">
            <p className="section-label">Technology expertise</p>
            <h2>Technology &amp; Banking Partners</h2>
            <p>
              Specialised technology organisations strengthen our capabilities in banking transformation, enterprise systems, software engineering and digital innovation.
            </p>
          </header>
          <div className="partners-page-profiles">
            {technicalPartners.map((partner) => (
              <article className="partners-page-profile" key={partner.name}>
                <div className="partners-page-profile-heading">
                  <div className="partners-page-logo">
                    <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" />
                  </div>
                  <div>
                    <p className="partners-page-focus">{partner.focus}</p>
                    <h3>{partner.name}</h3>
                  </div>
                </div>
                <p className="partners-page-description">{partner.description}</p>
                <div className="partners-page-profile-details">
                  <div>
                    <h4>Areas of expertise</h4>
                    <ul>
                      {partner.expertise.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="partners-page-group" id="training-partners">
          <header className="partners-page-group-heading">
            <p className="section-label">Professional development</p>
            <h2>Professional Training Partners</h2>
            <p>
              Our established training partners help organisations develop workforce skills, strengthen technical competencies and pursue internationally recognised ICT certifications.
            </p>
          </header>
          <div className="partners-page-profiles partners-page-profiles--training">
            {trainingPartners.map((partner) => (
              <article className="partners-page-profile partners-page-training-profile" key={partner.name}>
                <div className="partners-page-profile-heading">
                  <div className="partners-page-logo">
                    <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" />
                  </div>
                  <div>
                    <p className="partners-page-focus">{partner.focus}</p>
                    <h3>{partner.name}</h3>
                  </div>
                </div>
                <p className="partners-page-description">{partner.description}</p>
                <div className="partners-page-profile-details">
                  <div>
                    <h4>Areas of expertise</h4>
                    <ul>
                      {partner.expertise.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  {partner.delivery && (
                    <div>
                      <h4>Training delivery</h4>
                      <ul>
                        {partner.delivery.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="partners-page-topics">
            Training supports practical technology skills, knowledge transfer and professional growth for teams working in a changing digital environment.
          </p>
        </section>

        <section className="partners-page-closing">
          <p className="section-label">Building capabilities through collaboration</p>
          <h2>Connecting expertise. Enabling innovation. Delivering impact.</h2>
          <p>
            By combining specialist technology expertise with professional training and knowledge transfer, we help organisations strengthen capabilities, improve operational efficiency and prepare for an increasingly connected digital world.
          </p>
        </section>
      </div>
    </main>
  )
}

export default PartnersPage
