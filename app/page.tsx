import {
  ArrowIcon,
  ContactIcon,
  GitHubIcon,
  LinkedInIcon,
  MetaIcon,
  SkillIcon,
  StatIcon
} from "@/components/PortfolioIcons";
import { navItems, profile, projects, skills, stats } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="site-shell" id="home">
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Mustafa Asghari home">
          {profile.initials}
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={item.href === "#home" ? "active" : ""}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="header-contact">
          <ContactIcon />
          Contact
        </a>
      </header>

      <section className="hero-section section-divider">
        <div className="hero-copy">
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="hero-description">{profile.intro}</p>

          <div className="hero-actions" aria-label="Primary actions">
            <a href="#projects" className="text-action">
              View Projects
              <ArrowIcon />
            </a>
            <a href="#contact" className="text-action">
              Contact Me
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="dot-grid" />
          <div className="floating-mark">MA</div>
        </div>

        <div className="meta-row" aria-label="Profile availability">
          <span>
            <MetaIcon type="pin" />
            {profile.location}
          </span>
          <i />
          <span>
            <MetaIcon type="briefcase" />
            Available for Hire
          </span>
          <i />
          <span>
            <MetaIcon type="globe" />
            Open to Opportunities
          </span>
        </div>
      </section>

      <section className="skills-section section-divider" id="skills">
        <p className="section-label">Skills</p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <SkillIcon icon={skill.icon} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section section-divider" id="projects">
        <div className="section-heading">
          <p className="section-label">Featured Projects</p>
          <a href={profile.github} className="view-all" target="_blank" rel="noreferrer">
            View all projects
            <ArrowIcon />
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="tag-list" aria-label={`${project.title} technologies`}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a href={profile.github} target="_blank" rel="noreferrer" className="project-link">
                View Project
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about-card" id="about">
        <div className="about-icon" aria-hidden="true">
          &lt;/&gt;
        </div>
        <div className="about-copy">
          <h2>About Me</h2>
          <p>{profile.about}</p>
          <p>{profile.aboutDetail}</p>
          <p className="education">{profile.education}</p>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <StatIcon type={stat.icon} />
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-cta">
          <h2>Let&apos;s build something great together.</h2>
          <p>I&apos;m open to full-time roles, freelance projects, and exciting collaborations.</p>
        </div>

        <address className="contact-list">
          <a href={`mailto:${profile.email}`}>
            <ContactIcon />
            {profile.email}
          </a>
          <span>
            <MetaIcon type="pin" />
            {profile.location}
          </span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <MetaIcon type="globe" />
            {profile.githubLabel}
          </a>
          <a href={profile.resumeHref}>
            <ArrowIcon />
            Resume PDF
          </a>
          <a href={profile.cvHref}>
            <ArrowIcon />
            CV PDF
          </a>
        </address>

        <div className="social-links" aria-label="Social links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <span aria-label="LinkedIn not provided" title="LinkedIn not provided">
            <LinkedInIcon />
          </span>
          <span className="x-mark" aria-label="X not provided" title="X not provided">
            X
          </span>
        </div>
      </footer>

      <div className="site-footnote">
        <span>© 2025 Mustafa Asghari. All rights reserved.</span>
        <span>Built with Next.js</span>
      </div>
    </main>
  );
}
