import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#home" className="footer__brand">
          <span className="nav__logo">SK</span>
          <span>{profile.name}</span>
        </a>
        <div className="footer__socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} {profile.name}. Built with React & deployed on Vercel.
        </p>
      </div>
    </footer>
  )
}
