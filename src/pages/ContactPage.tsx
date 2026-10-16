import { useState, type FormEvent, type MouseEvent } from 'react'
import {
  MapPin,
  Mail,
  Phone,
  Send,
} from 'lucide-react'
import contactHeroImage from '../assets/images/contact/contact-hero section.jpg'

interface ContactPageProps {
  onNavigateHome: (event: MouseEvent<HTMLAnchorElement>) => void
}

const contactCards = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+255 752 897 733',
    href: 'tel:+255752897733',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@finsys-tech.co.tz',
    href: 'mailto:info@finsys-tech.co.tz',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Office Locations',
    lines: [
      'Dar es Salaam — Derm House, Kijitonyama, Dar es Salaam',
      'Zanzibar — House # SH/MB232/B, Airport Road, Mbweni, Zanzibar',
      'Nairobi — Piedmont Plaza, 3rd Floor Westwing, Nairobi',
    ],
    href: '#map',
  },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M14 9h3V6h-3c-2.8 0-4 1.4-4 4v2H7v3h3v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M6.5 8.5h3v9h-3v-9zm1.5-4.5a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zM10 8.5h2.9v1.2h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v4.76H16.5v-4.2c0-1-.02-2.3-1.4-2.3-1.44 0-1.66 1.12-1.66 2.28v4.22H10V8.5z" />
      </svg>
    ),
  },
]

function ContactPage({ onNavigateHome }: ContactPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState('')
  const [submissionFailed, setSubmissionFailed] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmissionMessage('')
    setSubmissionFailed(false)

    try {
      const form = event.currentTarget
      const formData = new FormData(form)
      const response = await fetch('https://formsubmit.co/ajax/pascal@finsys-tech.co.tz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      })

      const result: unknown = await response.json()
      if (!response.ok || !isSuccessfulFormSubmitResponse(result)) {
        throw new Error(getFormSubmitErrorMessage(result))
      }

      form.reset()
      setSubmissionMessage('Email sent successfully. Thank you for contacting us.')
    } catch (error) {
      setSubmissionFailed(true)
      setSubmissionMessage(
        error instanceof Error
          ? `We couldn't send your message. ${error.message}`
          : "We couldn't send your message. Please try again.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="contact-page">
      <section 
      className="contact-hero home-hero-sticky"
      id="top"
      style={{ backgroundImage: `url(${contactHeroImage})` }}>
        <div className="contact-hero-inner">
          <h1>Let’s start the conversation</h1>
          <p>
            Reach out for consultancy, implementation support, or a tailored roadmap for your next ICT or banking technology initiative.
          </p>
          <div className="contact-hero-actions">
            <a className="primary-btn" href="#contact-form">
              Get in touch
            </a>
            <a className="outline-accent" href="/#top" onClick={onNavigateHome}>
              Back to home
            </a>
          </div>
        </div>
      </section>

      <div className="page-content-over-hero">
      <section className="contact-main" id="contact-form">
        <div className="contact-main-inner">
          <div className="contact-info-panel">
            <span className="section-label">Get In Touch</span>
            <h2>Talk to our team</h2>
            <p className="contact-intro">
              We respond quickly to project inquiries, service questions, and partnership discussions.
            </p>

            <div className="contact-info-grid">
              {contactCards.map((card) => {
                const Icon = card.icon

                return (
                  <a
                    key={card.label}
                    className={`contact-info-card${card.lines ? ' contact-info-card--address' : ''}`}
                    href={card.href}
                  >
                    <span className="contact-info-icon">
                      <Icon size={20} />
                    </span>
                    <div>
                      {card.lines ? (
                        <div className="contact-address-lines">
                          <p className="contact-address-title">{card.value}</p>
                          <ul>
                            {card.lines.map((line) => (
                              <li key={line}>{line}</li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p>{card.value}</p>
                      )}
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="contact-divider" />

            <div className="contact-socials" id="socials">
              <span>Find us on</span>
              <div className="contact-social-links">
                {socialLinks.map((social) => {
                  return (
                    <a key={social.label} href={social.href} aria-label={social.label}>
                      {social.icon}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <form
              className="contact-form"
              action="https://formsubmit.co/ajax/pascal@finsys-tech.co.tz"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_subject" value="client query" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="contact-form-row">
                <label>
                  <span>Name</span>
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
              </div>

              <label>
                <span>Phone</span>
                <input type="tel" name="phone" placeholder="+255 ..." />
              </label>

              <label>
                <span>Message</span>
                <textarea name="message" rows={6} placeholder="Tell us what you need" required />
              </label>

              <button className="contact-submit" type="submit" disabled={isSubmitting}>
                <Send size={18} />
                {isSubmitting ? 'Sending…' : 'Submit Message'}
              </button>
              {submissionMessage && (
                <p
                  className={`contact-form-notice${submissionFailed ? ' is-error' : ''}`}
                  role={submissionFailed ? 'alert' : 'status'}
                  aria-live={submissionFailed ? 'assertive' : 'polite'}
                >
                  {submissionMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="contact-map-section dark-green-band" id="map">
        <div className="contact-map-card">
          <div className="contact-map-float">
            <p className="section-label">Our Location</p>
            <h3>Dar es Salaam Office</h3>
            <p>Grounded in Tanzania, supporting clients across East Africa.</p>
          </div>

          <iframe
            title="Finsys location map"
            src="https://www.google.com/maps?q=-6.7766388,39.2433916&z=17&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      </div>
    </main>
  )
}

function isSuccessfulFormSubmitResponse(
  response: unknown,
): response is { success: boolean | string; message?: string } {
  if (typeof response !== 'object' || response === null || !('success' in response)) {
    return false
  }

  return response.success === true || response.success === 'true'
}

function getFormSubmitErrorMessage(response: unknown): string {
  if (
    typeof response === 'object' &&
    response !== null &&
    'message' in response &&
    typeof response.message === 'string'
  ) {
    return response.message
  }

  return 'Please try again later.'
}

export default ContactPage