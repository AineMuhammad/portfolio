import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../data/resume'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section id="about" className="section">
      <div className="section-inner" ref={ref}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          01 — About
        </motion.p>
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: '2rem' }}
        >
          Summary
        </motion.h2>

        <div style={{ position: 'relative', maxWidth: '72ch' }}>
          <motion.p
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 1.4, delay: 0.35, ease: [0.65, 0, 0.35, 1] }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.15rem, 2.1vw, 1.6rem)',
              lineHeight: 1.55,
              fontWeight: 400,
              color: 'var(--color-ink)',
            }}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ left: '0%', opacity: 0 }}
            animate={inView ? { left: '100%', opacity: [0, 1, 1, 0] } : {}}
            transition={{ duration: 1.4, delay: 0.35, ease: [0.65, 0, 0.35, 1] }}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'var(--color-accent-warm)',
              boxShadow: '0 0 16px 2px rgba(168, 83, 43, 0.5)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </section>
  )
}
