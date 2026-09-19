import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: scrolled ? '0.9rem var(--gutter)' : '1.5rem var(--gutter)',
        background: scrolled ? 'rgba(247, 243, 234, 0.86)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-line)' : '1px solid transparent',
        transition: 'padding 0.35s ease, background 0.35s ease, border-color 0.35s ease',
      }}
    >
      <a
        href="#top"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          letterSpacing: '0.04em',
          textDecoration: 'none',
          color: 'var(--color-ink)',
        }}
      >
        A.M.
      </a>
      <ul className="nav-links" style={{ display: 'flex', gap: '1.75rem', listStyle: 'none' }}>
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              className="nav-link"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                color: active === l.id ? 'var(--color-accent)' : 'var(--color-ink-soft)',
                transition: 'color 0.25s ease',
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
