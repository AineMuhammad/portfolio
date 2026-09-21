import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { projects, type Project } from '../data/resume'

function CountUp({ to, inView, suffix = '' }: { to: number; inView: boolean; suffix?: string }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.4,
      delay: 0.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to])
  return (
    <span>
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}

function LockGlyph({ inView }: { inView: boolean }) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <motion.path
        d="M10 15V11a7 7 0 0 1 14 0v4"
        stroke="var(--color-accent-warm)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ rotate: -18, originX: '10px', originY: '15px' }}
        animate={inView ? { rotate: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ transformBox: 'fill-box', transformOrigin: '10px 15px' }}
      />
      <motion.rect
        x="6"
        y="15"
        width="22"
        height="15"
        rx="2.5"
        stroke="var(--color-ink)"
        strokeWidth="2"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
    </svg>
  )
}

function GuestbookGlyph({ inView }: { inView: boolean }) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <motion.path
        d="M4 26 C 8 8, 14 8, 17 17 S 26 26, 30 8"
        stroke="var(--color-accent-warm)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
      />
    </svg>
  )
}

function LeafGlyph({ inView }: { inView: boolean }) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <motion.path
        d="M17 30 V16"
        stroke="var(--color-ink-soft)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      />
      <motion.path
        d="M17 16 C 8 16 5 7 5 7 C 5 7 15 5 17 16 Z"
        fill="var(--color-accent-warm)"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ transformBox: 'fill-box', transformOrigin: '100% 100%' }}
      />
      <motion.path
        d="M17 16 C 26 16 29 7 29 7 C 29 7 19 5 17 16 Z"
        fill="var(--color-accent)"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.42, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ transformBox: 'fill-box', transformOrigin: '0% 100%' }}
      />
    </svg>
  )
}

function BenchmarkGlyph({ inView }: { inView: boolean }) {
  const bars = [0.5, 0.8, 0.35, 0.95]
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={2 + i * 8}
          width="5"
          rx="1"
          fill={i === 3 ? 'var(--color-accent-warm)' : 'var(--color-ink-faint)'}
          initial={{ y: 30, height: 0 }}
          animate={inView ? { y: 30 - h * 26, height: h * 26 } : {}}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </svg>
  )
}

function StoryGlyph({ inView }: { inView: boolean }) {
  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: 34 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.15 }}
          animate={inView ? { opacity: [0.15, 1, 0.15] } : {}}
          transition={{ duration: 1.6, delay: i * 0.18, repeat: Infinity, repeatDelay: 0.6 }}
          style={{
            width: 4,
            height: 4 + (i % 3) * 6,
            background: 'var(--color-accent-warm)',
            borderRadius: 1,
          }}
        />
      ))}
    </div>
  )
}

function ListGlyph({ inView }: { inView: boolean }) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <motion.path
            d={`M4 ${9 + i * 8} l3 3 l5 -6`}
            stroke="var(--color-accent-warm)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.2 }}
          />
          <motion.path
            d={`M17 ${9 + i * 8} H30`}
            stroke="var(--color-ink-faint)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.2 }}
          />
        </g>
      ))}
    </svg>
  )
}

function MatchGlyph({ inView }: { inView: boolean }) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <motion.rect
        x="5"
        y="7"
        width="16"
        height="20"
        rx="2.5"
        stroke="var(--color-ink)"
        strokeWidth="2"
        initial={{ rotate: 0, x: 4, opacity: 0 }}
        animate={inView ? { rotate: -10, x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      />
      <motion.rect
        x="13"
        y="7"
        width="16"
        height="20"
        rx="2.5"
        stroke="var(--color-accent-warm)"
        strokeWidth="2"
        initial={{ rotate: 0, x: -4, opacity: 0 }}
        animate={inView ? { rotate: 10, x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      />
    </svg>
  )
}

function glyphFor(id: Project['id'], inView: boolean) {
  switch (id) {
    case 'time-capsule':
      return <LockGlyph inView={inView} />
    case 'guestbook':
      return <GuestbookGlyph inView={inView} />
    case 'leaf-lab':
      return <LeafGlyph inView={inView} />
    case 'chatilm':
      return <BenchmarkGlyph inView={inView} />
    case 'story-weaving':
      return <StoryGlyph inView={inView} />
    case 'togetherlist':
      return <ListGlyph inView={inView} />
    case 'moviematch':
      return <MatchGlyph inView={inView} />
  }
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="card-surface"
      style={{
        background: 'var(--color-paper)',
        border: '1px solid var(--color-line)',
        borderRadius: '4px',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.9rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 500 }}>{project.name}</h3>
        <motion.div whileHover={{ scale: 1.15, rotate: -4 }} transition={{ duration: 0.25 }}>
          {glyphFor(project.id, inView)}
        </motion.div>
      </div>

      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-accent-warm)', letterSpacing: '0.03em' }}>
        {project.stack}
      </p>

      <p style={{ color: 'var(--color-ink-soft)', fontSize: '0.95rem', lineHeight: 1.55 }}>{project.description}</p>

      {project.id === 'chatilm' ? (
        <div style={{ display: 'flex', gap: '1.5rem', margin: '0.25rem 0' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-accent-warm)' }}>
              <CountUp to={6200} inView={inView} />
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-ink-faint)' }}>
              source records
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-accent-warm)' }}>
              <CountUp to={36500} inView={inView} />
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-ink-faint)' }}>
              reference records
            </div>
          </div>
        </div>
      ) : null}

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.25rem' }}>
        {project.bullets.map((b, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
            style={{
              listStyle: 'none',
              fontSize: '0.85rem',
              color: 'var(--color-ink-faint)',
              position: 'relative',
              paddingLeft: '1rem',
            }}
          >
            <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-warm)' }}>·</span>
            {b}
          </motion.li>
        ))}
      </ul>

      {project.repo || project.live ? (
        <div
          style={{
            display: 'flex',
            gap: '1.25rem',
            marginTop: 'auto',
            paddingTop: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
          }}
        >
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-warm)' }}>
              Live site ↗
            </a>
          ) : null}
          {project.repo ? (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-warm)' }}>
              GitHub ↗
            </a>
          ) : null}
        </div>
      ) : null}
    </motion.article>
  )
}

export default function Projects() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, amount: 0.6 })

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div ref={headingRef}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            03 — Projects
          </motion.p>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: '3rem' }}
          >
            Things I&rsquo;ve built
          </motion.h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
