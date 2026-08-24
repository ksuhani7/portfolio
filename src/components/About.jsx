import { FiMapPin, FiBookOpen, FiCalendar } from 'react-icons/fi'
import { about, profile } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section__head" data-reveal>
          <span className="section__eyebrow">01 — About</span>
          <h2 className="section__title">A little about me</h2>
        </div>

        <div className="about">
          <div className="about__text" data-reveal>
            {about.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <aside className="about__card" data-reveal>
            <div className="about__avatar">SK</div>
            <ul className="about__facts">
              <li><FiBookOpen /> <span>{profile.college}</span></li>
              <li><FiCalendar /> <span>{profile.year} · Computer Science</span></li>
              <li><FiMapPin /> <span>{profile.location}</span></li>
            </ul>
            <a href="#contact" className="btn btn--primary btn--full">Work with me</a>
          </aside>
        </div>
      </div>
    </section>
  )
}
