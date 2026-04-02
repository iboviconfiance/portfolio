import React from 'react'

// Icons as simple SVG components
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
)

// Data
const projects = [
  {
    title: 'Velox Analytics',
    description: 'Real-time analytics dashboard with customizable widgets, team collaboration, and AI-powered insights.',
    tech: ['React', 'TypeScript', 'D3.js', 'PostgreSQL'],
    link: '#',
    featured: true,
  },
  {
    title: 'SecureVault',
    description: 'End-to-end encrypted password manager with biometric auth and secure sharing.',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    link: '#',
    featured: true,
  },
  {
    title: 'CodeReview AI',
    description: 'AI-powered code review assistant that analyzes PRs and suggests improvements.',
    tech: ['Python', 'FastAPI', 'OpenAI', 'GitHub API'],
    link: '#',
  },
  {
    title: 'Taskflow',
    description: 'Minimalist task management app with keyboard shortcuts and natural language input.',
    tech: ['Vue.js', 'Supabase', 'Tailwind'],
    link: '#',
  },
]

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'Linux'] },
]

const experience = [
  { role: 'Senior Frontend Engineer', company: 'TechCorp', period: '2022 - Present', description: 'Leading frontend architecture for enterprise SaaS platform.' },
  { role: 'Full-Stack Developer', company: 'StartupXYZ', period: '2020 - 2022', description: 'Built core product features from scratch to $5M ARR.' },
  { role: 'Software Engineer', company: 'Agency Co', period: '2018 - 2020', description: 'Developed web applications for Fortune 500 clients.' },
]

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-semibold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            AC
          </span>
          <div className="flex items-center gap-8">
            <a href="#work" className="text-sm text-zinc-400 hover:text-white transition-colors">Work</a>
            <a href="#about" className="text-sm text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
              Available for work
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Confiance H.Ibovi</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mb-8 leading-relaxed">
            Full-stack developer crafting elegant solutions to complex problems. 
            I build products that are fast, accessible, and delightful to use.
          </p>
          <div className="flex items-center gap-4">
            <a href="#contact" className="px-6 py-3 bg-white text-zinc-900 rounded-lg font-medium hover:bg-zinc-200 transition-colors">
              Get in touch
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a href="#" className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all">
                <GithubIcon />
              </a>
              <a href="#" className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all">
                <LinkedInIcon />
              </a>
              <a href="#" className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-8">Selected Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                className={`group p-6 rounded-2xl border transition-all duration-300 ${
                  project.featured 
                    ? 'bg-gradient-to-br from-zinc-900 to-zinc-900/50 border-zinc-700/50 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10' 
                    : 'bg-zinc-900/50 border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowIcon />
                </div>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="px-2 py-1 text-xs text-zinc-500 bg-zinc-800/50 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Skills */}
            <div>
              <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-8">Skills</h2>
              <div className="space-y-6">
                {skills.map((skill, i) => (
                  <div key={i}>
                    <h3 className="text-xs font-medium text-zinc-600 uppercase tracking-wider mb-3">{skill.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, j) => (
                        <span key={j} className="px-3 py-1.5 text-sm text-zinc-300 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-8">Experience</h2>
              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <div key={i} className="relative pl-6 border-l border-zinc-800">
                    <div className="absolute left-0 top-1.5 w-2 h-2 -translate-x-1/2 rounded-full bg-zinc-700" />
                    <h3 className="font-medium text-white">{exp.role}</h3>
                    <p className="text-sm text-violet-400">{exp.company} · {exp.period}</p>
                    <p className="text-sm text-zinc-500 mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's work together</h2>
          <p className="text-zinc-400 mb-8 max-w-md mx-auto">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a 
            href="mailto:alex@example.com" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <MailIcon />
            confiance@example.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm text-zinc-600">
          <span>© 2026 Confiance Ibovi</span>
          <span>Built with React & Tailwind</span>
        </div>
      </footer>
    </div>
  )
}