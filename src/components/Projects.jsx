import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section__head" data-reveal>
          <span className="section__eyebrow">03 — Projects</span>
          <h2 className="section__title">Things I’ve built</h2>
        </div>

        <div className="projects">
          {projects.map((p, i) => (
            <article
              className={`project project--${p.accent}`}
              key={p.title}
              data-reveal
              style={{ '--d': `${i * 90}ms` }}
            >
              <div className="project__glow" aria-hidden="true" />
              <div className="project__body">
                <h3 className="project__title">{p.title}</h3>
                <p className="project__desc">{p.description}</p>
                <ul className="project__tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="project__links">
                <a href={p.live} target="_blank" rel="noreferrer">
                  <FiExternalLink /> Live
                </a>
                <a href={p.code} target="_blank" rel="noreferrer">
                  <FiGithub /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
