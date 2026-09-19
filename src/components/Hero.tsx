import { motion } from 'framer-motion'
import DotMatrixText from './DotMatrixText'
import { profile } from '../data/resume'

const facts = [
  { label: 'Location', value: 'Albany, NY' },
  { label: 'Experience', value: '6+ years' },
  { label: 'Focus', value: 'Full-Stack · Generative 3D' },
  { label: 'Currently', value: 'M.S. CS (AI) — SUNY Albany' },
  { label: 'Status', value: 'Open to Senior / Lead roles' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '7rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(var(--color-line-strong) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 75% 30%, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 75% 30%, black 0%, transparent 70%)',
          opacity: 0.55,
          pointerEvents: 'none',
        }}
      />

      <div
        className="section-inner hero-grid"
        style={{
          width: '100%',
          position: 'relative',
        }}
      >
        <div>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ marginBottom: '0.25rem' }}
          >
            Senior Software Engineer
          </motion.p>

          <DotMatrixText
            text={profile.name}
            play={true}
            fontSize={98}
            height={190}
            dotColor="#1b1a17"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
              color: 'var(--color-ink-soft)',
              marginTop: '0.75rem',
              maxWidth: '52ch',
              lineHeight: 1.5,
            }}
          >
            I build full-stack products and generative 3D pipelines — from serverless
            backends to real-time, WebGL-driven front-ends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', gap: '1rem', marginTop: '2.25rem', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#projects"
              whileTap={{ scale: 0.96 }}
              className="btn btn-primary"
              style={{
                padding: '0.8rem 1.6rem',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.05em',
                borderRadius: '2px',
              }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.96 }}
              className="btn btn-secondary"
              style={{
                padding: '0.8rem 1.6rem',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.05em',
                borderRadius: '2px',
              }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            border: '1px solid var(--color-line-strong)',
            borderRadius: '4px',
            padding: '1.4rem 1.5rem',
            background: 'var(--color-paper)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <p
            className="eyebrow"
            style={{ marginBottom: '1rem', color: 'var(--color-ink-faint)', letterSpacing: '0.14em' }}
          >
            At a glance
          </p>
          <dl style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {facts.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.15 + i * 0.08 }}
              >
                <dt
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-ink-faint)',
                    marginBottom: '0.15rem',
                  }}
                >
                  {f.label}
                </dt>
                <dd style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-ink)' }}>{f.value}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-ink-faint)',
        }}
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          Scroll
        </motion.span>
      </motion.div>
    </section>
  )
}
