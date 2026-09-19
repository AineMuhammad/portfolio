import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  tx: number
  ty: number
  vx: number
  vy: number
  r: number
}

type Props = {
  text: string
  play: boolean
  fontSize?: number
  fontWeight?: number
  fontFamily?: string
  dotColor?: string
  className?: string
  height?: number
}

export default function DotMatrixText({
  text,
  play,
  fontSize = 96,
  fontWeight = 500,
  fontFamily = 'Newsreader',
  dotColor = '#1b1a17',
  className,
  height = 220,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number | undefined>(undefined)
  const mouseRef = useRef<{ x: number; y: number } | null>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const parent = canvas.parentElement
    const width = parent ? parent.clientWidth : canvas.clientWidth

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(dpr, dpr)

    // Sample target positions from offscreen text render
    const off = document.createElement('canvas')
    off.width = width
    off.height = height
    const octx = off.getContext('2d')
    if (!octx) return

    let size = fontSize
    octx.clearRect(0, 0, width, height)
    octx.fillStyle = '#000'
    octx.textBaseline = 'middle'
    octx.textAlign = 'center'
    octx.font = `${fontWeight} ${size}px ${fontFamily}`
    // shrink to fit width
    let textWidth = octx.measureText(text).width
    while (textWidth > width * 0.92 && size > 10) {
      size -= 2
      octx.font = `${fontWeight} ${size}px ${fontFamily}`
      textWidth = octx.measureText(text).width
    }
    octx.fillText(text, width / 2, height / 2)

    const imageData = octx.getImageData(0, 0, width, height)
    const step = 4
    const targets: { x: number; y: number }[] = []
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const alpha = imageData.data[(y * width + x) * 4 + 3]
        if (alpha > 120) {
          targets.push({ x, y })
        }
      }
    }

    particlesRef.current = targets.map((t) => ({
      x: Math.random() * width,
      y: Math.random() * height + (Math.random() > 0.5 ? -height : height),
      tx: t.x,
      ty: t.y,
      vx: 0,
      vy: 0,
      r: 1 + Math.random() * 0.6,
    }))

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const handleLeave = () => {
      mouseRef.current = null
    }
    canvas.addEventListener('mousemove', handleMove)
    canvas.addEventListener('mouseleave', handleLeave)

    let frame = 0
    const draw = () => {
      frame++
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = dotColor
      const particles = particlesRef.current
      const mouse = mouseRef.current

      for (const p of particles) {
        const dx = p.tx - p.x
        const dy = p.ty - p.y
        p.vx += dx * 0.02
        p.vy += dy * 0.02
        p.vx *= 0.78
        p.vy *= 0.78

        if (mouse) {
          const mdx = p.x - mouse.x
          const mdy = p.y - mouse.y
          const dist = Math.hypot(mdx, mdy)
          if (dist < 48 && dist > 0.01) {
            const force = (48 - dist) / 48
            p.vx += (mdx / dist) * force * 1.6
            p.vy += (mdy / dist) * force * 1.6
          }
        }

        p.x += p.vx
        p.y += p.vy

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    if (play && !startedRef.current) {
      startedRef.current = true
      draw()
    }

    return () => {
      canvas.removeEventListener('mousemove', handleMove)
      canvas.removeEventListener('mouseleave', handleLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, play, fontSize, fontWeight, fontFamily, dotColor, height])

  return <canvas ref={canvasRef} className={className} style={{ display: 'block', width: '100%', height }} />
}
