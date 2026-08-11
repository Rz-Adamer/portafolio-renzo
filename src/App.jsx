import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Code2, ContactRound, Download, Mail, Menu, Moon, Sun, X } from 'lucide-react'

const projects = [
  {
    index: '01',
    title: 'Sistema web de rentabilidad',
    role: 'Frontend Developer',
    description: 'Interfaz para convertir información operativa en una lectura clara de la rentabilidad. Construí componentes en React y apoyé la integración con servicios y datos.',
    stack: ['React', 'Node.js', 'Express', 'Supabase'],
    tone: 'coral',
  },
  {
    index: '02',
    title: 'Sistema de órdenes de trabajo',
    role: 'Full Stack Developer',
    description: 'Aplicación para registrar, visualizar y dar seguimiento a órdenes de trabajo, conectando una experiencia simple con lógica de negocio y persistencia de datos.',
    stack: ['React', 'Node.js', 'Express', 'Supabase'],
    tone: 'ink',
  },
  {
    index: '03',
    title: 'Servicio técnico de impresoras',
    role: 'Web Developer',
    description: 'Sitio responsive para presentar servicios técnicos y recibir consultas de clientes mediante un formulario funcional desarrollado en PHP.',
    stack: ['PHP', 'HTML', 'CSS', 'JavaScript'],
    tone: 'blue',
  },
  {
    index: '04',
    title: 'E-commerce cafetería UTP',
    role: 'Frontend Developer',
    description: 'Prototipo de tienda digital con navegación clara y una interfaz orientada a facilitar la exploración y compra de productos.',
    stack: ['Angular', '.NET', 'Responsive UI'],
    tone: 'lime',
  },
]

const skillGroups = [
  { number: '01', label: 'Frontend', items: ['React', 'Angular', 'JavaScript ES6+', 'HTML5 / CSS3', 'jQuery', 'Responsive Design'] },
  { number: '02', label: 'Backend', items: ['Node.js', 'Express', 'PHP', 'Python', '.NET', 'REST APIs'] },
  { number: '03', label: 'Datos & tools', items: ['Supabase', 'Postman', 'Git / GitHub', 'Vercel', 'Hosting web'] },
]

const education = [
  { date: 'En curso', place: 'Universidad Tecnológica del Perú', title: 'Ingeniería de Software' },
  { date: '2026', place: 'IDAT', title: 'Diseño y Desarrollo Web' },
  { date: '2025', place: 'OTI — UNI', title: 'Especialización Tecnológica' },
]

function App() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span>RH</span><i />
        </a>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navegación principal">
          <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
          <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
          <a href="#habilidades" onClick={closeMenu}>Habilidades</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <a className="availability" href="#contacto"><span /> Disponible para proyectos</a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-meta mono reveal">
            <span>PORTAFOLIO / 2026</span>
            <span>LIMA, PERÚ</span>
          </div>
          <div className="hero-title reveal delay-1">
            <span className="eyebrow">Hola, soy Renzo.</span>
            <h1>Construyo<br /><em>experiencias</em><br />para la web.</h1>
          </div>
          <div className="hero-bottom reveal delay-2">
            <p>Desarrollador web y estudiante de Ingeniería de Software. Transformo ideas en interfaces funcionales, claras y pensadas para las personas.</p>
            <a className="round-link" href="#proyectos" aria-label="Ver proyectos"><ArrowDown /></a>
          </div>
          <div className="hero-code mono" aria-hidden="true">01 — WEB<br />02 — UI<br />03 — CODE</div>
        </section>

        <section className="about section" id="sobre-mi">
          <div className="section-kicker mono"><span>01</span> SOBRE MÍ</div>
          <div className="about-grid">
            <h2>Curiosidad técnica.<br /><span>Criterio visual.</span></h2>
            <div className="about-copy">
              <p className="lead">Estoy formándome como ingeniero de software con foco en el desarrollo de aplicaciones web modernas.</p>
              <p>He trabajado de manera académica y colaborativa tanto en frontend como en backend: desde crear componentes y flujos de interfaz hasta integrar APIs, servicios y bases de datos. Disfruto aprender, ordenar problemas complejos y convertirlos en productos útiles.</p>
              <div className="profile-actions">
                <a className="text-link" href="/cv-renzo-huaman.pdf" download><Download size={17} /> Descargar CV</a>
                <a className="text-link" href="https://github.com/Rz-Adamer" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
              </div>
            </div>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article key={item.place}>
                <span className="mono">{item.date}</span>
                <div><strong>{item.title}</strong><small>{item.place}</small></div>
                <ArrowUpRight />
              </article>
            ))}
          </div>
        </section>

        <section className="projects section" id="proyectos">
          <div className="section-kicker mono"><span>02</span> PROYECTOS SELECCIONADOS</div>
          <div className="section-heading">
            <h2>Trabajo que<br />resuelve.</h2>
            <p>Una selección de proyectos académicos donde diseño, código y datos trabajan juntos.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.tone}`} key={project.index}>
                <div className="card-top mono"><span>{project.index}</span><span>CASO DE ESTUDIO</span></div>
                <div className="project-mark" aria-hidden="true"><span>{project.index}</span></div>
                <div className="card-body">
                  <span className="role mono">{project.role}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section" id="habilidades">
          <div className="section-kicker mono"><span>03</span> HERRAMIENTAS</div>
          <div className="skills-head">
            <h2>Mi caja<br />de herramientas.</h2>
            <p>No se trata de acumular tecnologías, sino de elegir la correcta para cada problema.</p>
          </div>
          <div className="skills-list">
            {skillGroups.map((group) => (
              <article key={group.label}>
                <span className="skill-number mono">{group.number}</span>
                <h3>{group.label}</h3>
                <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="cert-strip mono">
            <span>CISCO NETWORKING ACADEMY</span><i />
            <span>IDAT — DISEÑO WEB</span><i />
            <span>OTI UNI</span>
          </div>
        </section>

        <section className="contact" id="contacto">
          <div className="contact-top mono"><span>04 / CONTACTO</span><span>¿TIENES UNA IDEA?</span></div>
          <h2>Hagámosla<br /><em>realidad.</em></h2>
          <a className="email-link" href="mailto:renzo.huamanhuisa@gmail.com">renzo.huamanhuisa@gmail.com <ArrowUpRight /></a>
          <div className="contact-footer">
            <p>Disponible para prácticas, oportunidades junior y proyectos colaborativos.</p>
            <div className="socials">
              <a href="https://github.com/Rz-Adamer" target="_blank" rel="noreferrer"><Code2 /> GitHub</a>
              <a href="https://linkedin.com/in/renzo-huaman-huisa-135141404" target="_blank" rel="noreferrer"><ContactRound /> LinkedIn</a>
              <a href="mailto:renzo.huamanhuisa@gmail.com"><Mail /> Email</a>
            </div>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} RENZO HUAMAN</span><a href="#inicio">VOLVER ARRIBA ↑</a></footer>
    </div>
  )
}

export default App
