import { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { profile, stats } from '../data.js'

function useTypewriter(words, speed = 90, pause = 1400) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[i % words.length]
    let timeout
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setI((v) => v + 1)
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        )
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, i, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <p className="hero__hi" data-reveal>
          <span className="wave">👋</span> Hello, I’m
        </p>
        <h1 className="hero__name" data-reveal>
          {profile.name}
        </h1>
        <h2 className="hero__role" data-reveal>
          <span className="hero__roleText">{typed}</span>
          <span className="hero__caret" />
        </h2>
        <p className="hero__tagline" data-reveal>
          {profile.tagline}
        </p>

        <div className="hero__actions" data-reveal>
          <a href="#projects" className="btn btn--primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in Touch
          </a>
        </div>

        <div className="hero__socials" data-reveal>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><FiMail /></a>
        </div>

        <div className="hero__stats" data-reveal>
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <FiArrowDown />
      </a>
    </section>
  )
}
