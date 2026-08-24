import { FiCode, FiLayout, FiServer, FiCpu } from 'react-icons/fi'
import { skillGroups } from '../data.js'

const iconMap = {
  code: FiCode,
  layout: FiLayout,
  server: FiServer,
  cpu: FiCpu,
}

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <div className="section__head" data-reveal>
          <span className="section__eyebrow">02 — Skills</span>
          <h2 className="section__title">Technologies I work with</h2>
        </div>

        <div className="skills">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] || FiCode
            return (
              <article className="skill-card" key={group.title} data-reveal style={{ '--d': `${i * 90}ms` }}>
                <div className="skill-card__icon"><Icon /></div>
                <h3 className="skill-card__title">{group.title}</h3>
                <ul className="skill-card__list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
