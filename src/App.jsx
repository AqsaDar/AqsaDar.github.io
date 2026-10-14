import { useEffect, useState } from 'react'
import profilePhoto from './assets/profile.jpg'
import { education, highlights, profile, projects, skillGroups, stats } from './data'
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon, MoonIcon, SunIcon } from './icons'
import './App.css'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function readStoredTheme() {
  try {
    return localStorage.getItem('theme')
  } catch {
    return null
  }
}

function useTheme() {
  const [theme, setTheme] = useState(readStoredTheme)

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme
      try {
        localStorage.setItem('theme', theme)
      } catch {
        // storage unavailable — theme still applies for this visit
      }
    }
  }, [theme])

  const toggle = () => {
    const current =
      theme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(current === 'dark' ? 'light' : 'dark')
  }

  return toggle
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function Header({ onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo" aria-label="Back to top">
          AD<span>.</span>
        </a>
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle colour theme">
            <SunIcon className="sun" />
            <MoonIcon className="moon" />
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`burger ${open ? 'open' : ''}`} />
          </button>
        </div>
      </div>
    </header>
  )
}

function SocialLinks() {
  return (
    <div className="socials">
      <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <GitHubIcon />
      </a>
      <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <LinkedInIcon />
      </a>
      <a href={`mailto:${profile.email}`} aria-label="Email">
        <MailIcon />
      </a>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">
            <span className="dot" /> Open to new opportunities
          </p>
          <h1>
            Hi, I’m {profile.name}.
            <br />
            <em>{profile.role}.</em>
          </h1>
          <p className="lead">{profile.tagline}</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Get in touch <ArrowIcon />
            </a>
            <a href="#work" className="btn btn-ghost">
              See my work
            </a>
          </div>
          <SocialLinks />
        </div>
        <div className="hero-photo">
          <div className="photo-frame">
            <img src={profilePhoto} alt={`Portrait of ${profile.name}`} width="720" height="900" />
          </div>
          <div className="badge">
            <strong>{profile.yearsOfExperience}</strong>
            <span>years building
              <br />
              for the web</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ index, title, kicker }) {
  return (
    <div className="section-heading reveal">
      <span className="section-index">{index}</span>
      <h2>{title}</h2>
      {kicker && <p>{kicker}</p>}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading index="01" title="About me" />
        <div className="about-grid">
          <div className="about-text reveal">
            {profile.about.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
            <div className="education">
              {education.map((e) => (
                <div key={e.degree} className="edu-item">
                  <div>
                    <strong>{e.degree}</strong>
                    <span>{e.school}</span>
                  </div>
                  <span className="edu-years">{e.years}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="stats reveal">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionHeading
          index="02"
          title="Skills & toolkit"
          kicker="The languages, frameworks and tools I reach for every day."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="card skill-card reveal">
              <h3>{group.title}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHeading
          index="03"
          title="What I’ve built"
          kicker={`Highlights from ${profile.yearsOfExperience} years of professional, production work.`}
        />
        <div className="work-grid">
          {highlights.map((h, i) => (
            <article key={h.title} className="card work-card reveal">
              <span className="work-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{h.title}</h3>
              <p>{h.body}</p>
              <ul className="tags">
                {h.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHeading
          index="04"
          title="Personal projects"
          kicker="Things I’ve built on my own time — from my early days to today."
        />
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="card project-card reveal">
              <div className="project-top">
                <h3>{p.title}</h3>
                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <p>{p.body}</p>
              <div className="project-links">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    Live demo <ArrowIcon />
                  </a>
                )}
                <a href={p.repo} target="_blank" rel="noreferrer">
                  <GitHubIcon /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
        <a
          className="btn btn-ghost more-btn reveal"
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
        >
          More on GitHub <ArrowIcon />
        </a>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner reveal">
        <span className="section-index">05</span>
        <h2>Let’s build something together.</h2>
        <p>
          I’m always happy to talk about new roles, freelance work or interesting problems. The
          quickest way to reach me is by email.
        </p>
        <a href={`mailto:${profile.email}`} className="btn btn-primary btn-lg">
          <MailIcon /> {profile.email}
        </a>
        <p className="location">Based in {profile.location}</p>
        <SocialLinks />
      </div>
    </section>
  )
}

export default function App() {
  const toggleTheme = useTheme()
  useReveal()

  return (
    <>
      <Header onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name}. Built with React & Vite.
        </div>
      </footer>
    </>
  )
}
