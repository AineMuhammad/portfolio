import { useRef } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import { experience } from '../data/resume'

function RoleNode({ role }: { role: (typeof experience)[number] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })

  return (
    <div ref={ref} className="role-node" style={{ position: 'relative', paddingLeft: '2.75rem', paddingBottom: '3rem' }}>
      <motion.div
        className="role-dot"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
        style={{
          position: 'absolute',
          left: '-5px',
          top: '0.4rem',
          width: 11,
          height: 11,
          borderRadius: '50%',
          background: 'var(--color-bg)',
          border: '2px solid var(--color-accent)',
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20, clipPath: 'inset(0 0 100% 0)' }}
        animate={inView ? { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' } : {}}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <h3 style={{ fontSize: '1.3rem', fontWeight: 500 }}>{role.title}</h3>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-ink-faint)' }}>
            {role.range}
          </span>
        </div>
        <p style={{ color: 'var(--color-accent)', fontSize: '0.95rem', marginTop: '0.2rem', fontFamily: 'var(--font-mono)' }}>
          {role.org}
        </p>

        {role.bullets.length > 0 && (
          <ul style={{ marginTop: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {role.bullets.map((b, i) => (
              <li
                key={i}
                style={{
                  listStyle: 'none',
                  position: 'relative',
                  paddingLeft: '1.1rem',
                  color: 'var(--color-ink-soft)',
                  fontSize: '0.95rem',
                  lineHeight: 1.55,
                }}
              >
                <span style={{ position: 'absolute', left: 0, color: 'var(--color-ink-faint)' }}>—</span>
                {b}
              </li>
            ))}
          </ul>
        )}

        {role.sub && (
          <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {role.sub.map((s, i) => (
              <div key={i} style={{ borderLeft: '2px solid var(--color-line)', paddingLeft: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 500 }}>{s.title}</h4>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-ink-faint)' }}>
                    {s.range}
                  </span>
                </div>
                <ul style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {s.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      style={{
                        listStyle: 'none',
                        position: 'relative',
                        paddingLeft: '1.1rem',
                        color: 'var(--color-ink-soft)',
                        fontSize: '0.9rem',
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ position: 'absolute', left: 0, color: 'var(--color-ink-faint)' }}>—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default function Experience() {
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, amount: 0.6 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.75', 'end 0.6'],
  })

  return (
    <section id="experience" className="section section-alt">
      <div className="section-inner">
        <div ref={headingRef}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            02 — Experience
          </motion.p>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: '3rem' }}
          >
            Where I&rsquo;ve worked
          </motion.h2>
        </div>

        <div ref={containerRef} style={{ position: 'relative' }}>
          <svg
            width="2"
            height="100%"
            style={{ position: 'absolute', left: '0px', top: 0, bottom: 0, overflow: 'visible' }}
          >
            <line x1="1" y1="0" x2="1" y2="100%" stroke="var(--color-line)" strokeWidth="2" />
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="var(--color-accent)"
              strokeWidth="2"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>

          {experience.map((role, i) => (
            <RoleNode key={i} role={role} />
          ))}
        </div>
      </div>
    </section>
  )
}
