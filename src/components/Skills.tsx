import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills, type SkillGroup } from '../data/resume'

function SkillCluster({ group, index }: { group: SkillGroup; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })

  return (
    <div ref={ref} style={{ paddingTop: '0.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <motion.span
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.35, delay: index * 0.05 }}
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--color-accent)',
            flexShrink: 0,
          }}
        />
        <motion.h3
          initial={{ opacity: 0, x: -8 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: index * 0.05 + 0.05 }}
          style={{ fontSize: '1rem', fontWeight: 500, fontFamily: 'var(--font-mono)', letterSpacing: '0.01em' }}
        >
          {group.category}
        </motion.h3>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.05 + 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          height: '1px',
          background: 'var(--color-line-strong)',
          marginLeft: '4px',
          marginTop: '0.4rem',
          marginBottom: '0.9rem',
          transformOrigin: 'left',
        }}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem 0.9rem', paddingLeft: '1.2rem' }}>
        {group.skills.map((skill, i) => (
          <div key={skill} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.25, delay: index * 0.05 + 0.15 + i * 0.035 }}
              style={{
                width: '1px',
                height: '10px',
                background: 'var(--color-line-strong)',
                transformOrigin: 'top',
              }}
            />
            <motion.span
              initial={{ opacity: 0, scale: 0.7, y: -6 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              whileHover={{ y: -2 }}
              transition={{
                duration: 0.35,
                delay: index * 0.05 + 0.18 + i * 0.035,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="pill"
              style={{
                padding: '0.35rem 0.75rem',
                border: '1px solid var(--color-line)',
                borderRadius: '999px',
                fontSize: '0.8rem',
                color: 'var(--color-ink-soft)',
                background: 'var(--color-paper)',
                whiteSpace: 'nowrap',
                cursor: 'default',
              }}
            >
              {skill}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, amount: 0.6 })

  return (
    <section id="skills" className="section section-alt">
      <div className="section-inner">
        <div ref={headingRef}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            04 — Skills
          </motion.p>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: '3rem' }}
          >
            Toolkit
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem 3rem' }}>
          {skills.map((group, i) => (
            <SkillCluster key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
