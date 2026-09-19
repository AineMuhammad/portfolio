import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { education, type Education as EducationType } from '../data/resume'

function EducationPanel({ item, index }: { item: EducationType; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.7, delay: index * 0.15, ease: [0.65, 0, 0.35, 1] }}
        className="card-surface"
        style={{
          transformOrigin: 'top',
          border: '1px solid var(--color-line-strong)',
          borderRadius: '4px',
          padding: '1.75rem 2rem',
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 23px, var(--color-line) 24px), repeating-linear-gradient(90deg, transparent, transparent 23px, var(--color-line) 24px), var(--color-paper)',
          position: 'relative',
        }}
      >
        {/* corner brackets */}
        {[
          { top: 6, left: 6, borderTop: '2px solid var(--color-accent)', borderLeft: '2px solid var(--color-accent)' },
          { top: 6, right: 6, borderTop: '2px solid var(--color-accent)', borderRight: '2px solid var(--color-accent)' },
          { bottom: 6, left: 6, borderBottom: '2px solid var(--color-accent)', borderLeft: '2px solid var(--color-accent)' },
          { bottom: 6, right: 6, borderBottom: '2px solid var(--color-accent)', borderRight: '2px solid var(--color-accent)' },
        ].map((pos, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.15 + 0.5 + i * 0.05 }}
            style={{ position: 'absolute', width: 14, height: 14, ...pos }}
          />
        ))}

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.35 }}
          className="eyebrow"
        >
          {item.range}
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.42 }}
          style={{ fontSize: '1.35rem', fontWeight: 500, marginTop: '0.3rem' }}
        >
          {item.degree}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.48 }}
          style={{ color: 'var(--color-ink-soft)', marginTop: '0.15rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}
        >
          {item.school}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.55 }}
          style={{ color: 'var(--color-ink-faint)', marginTop: '0.75rem', fontSize: '0.88rem', lineHeight: 1.55 }}
        >
          {item.detail}
        </motion.p>
      </motion.div>
    </div>
  )
}

export default function Education() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, amount: 0.6 })

  return (
    <section id="education" className="section">
      <div className="section-inner">
        <div ref={headingRef}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            05 — Education
          </motion.p>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: '3rem' }}
          >
            Education
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {education.map((item, i) => (
            <EducationPanel key={item.school} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
