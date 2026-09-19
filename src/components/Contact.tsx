import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import DotMatrixText from './DotMatrixText'
import { profile } from '../data/resume'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section id="contact" className="section" style={{ paddingBottom: '6rem' }}>
      <div className="section-inner" ref={ref} style={{ textAlign: 'center' }}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          06 — Contact
        </motion.p>

        <div style={{ marginTop: '1rem' }}>
          <DotMatrixText text="Let's talk" play={inView} fontSize={72} height={140} dotColor="#1b1a17" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          style={{ color: 'var(--color-ink-soft)', maxWidth: '46ch', margin: '0.5rem auto 0', fontSize: '1.05rem' }}
        >
          Open to full-stack, senior, and lead engineering roles — or a conversation about generative pipelines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.05 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.25rem', flexWrap: 'wrap' }}
        >
          <motion.a
            href={`mailto:${profile.email}`}
            whileTap={{ scale: 0.96 }}
            className="btn btn-primary"
            style={{
              padding: '0.8rem 1.75rem',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.05em',
              borderRadius: '2px',
            }}
          >
            {profile.email}
          </motion.a>
          <motion.a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 0.96 }}
            className="btn btn-secondary"
            style={{
              padding: '0.8rem 1.75rem',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.05em',
              borderRadius: '2px',
            }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 0.96 }}
            className="btn btn-secondary"
            style={{
              padding: '0.8rem 1.75rem',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.05em',
              borderRadius: '2px',
            }}
          >
            GitHub
          </motion.a>
        </motion.div>

        <p
          style={{
            marginTop: '4rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--color-ink-faint)',
            letterSpacing: '0.05em',
          }}
        >
          {profile.name} — {profile.location}
        </p>
      </div>
    </section>
  )
}
