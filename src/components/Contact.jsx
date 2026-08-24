import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi'
import { contactLinks, profile } from '../data.js'

const iconMap = { mail: FiMail, github: FiGithub, linkedin: FiLinkedin }

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="contact">
          <div className="contact__intro" data-reveal>
            <span className="section__eyebrow">04 — Contact</span>
            <h2 className="section__title">Let’s build something together</h2>
            <p className="contact__lead">
              I’m open to internships, collaborations and freelance work. Have an idea or just want to say hi?
              My inbox is always open.
            </p>
            <a href={`mailto:${profile.email}`} className="btn btn--primary">
              Say Hello <FiArrowUpRight />
            </a>
          </div>

          <div className="contact__cards" data-reveal>
            {contactLinks.map((c) => {
              const Icon = iconMap[c.icon] || FiMail
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="contact__card"
                >
                  <span className="contact__cardIcon"><Icon /></span>
                  <span className="contact__cardText">
                    <strong>{c.label}</strong>
                    <small>{c.value}</small>
                  </span>
                  <FiArrowUpRight className="contact__cardArrow" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
