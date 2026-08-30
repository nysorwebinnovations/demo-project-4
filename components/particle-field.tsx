'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  z: number // depth 0..1 for parallax/size
  vx: number
  vy: number
  r: number
  tw: number // twinkle phase
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles: Particle[] = []
    let raf = 0

    // read theme colors from CSS tokens
    const styles = getComputedStyle(document.documentElement)
    const accent = styles.getPropertyValue('--accent').trim() || '#22d3ee'
    const violet = styles.getPropertyValue('--violet').trim() || '#8b5cf6'

    function seed() {
      const density = Math.min(220, Math.floor((width * height) / 6500))
      particles = Array.from({ length: density }, () => {
        const z = Math.random()
        // ~14% are larger, slower "micro-bubbles", the rest are fine tech dust
        const isBubble = Math.random() < 0.14
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          vx: (Math.random() - 0.5) * 0.1 * (0.4 + z),
          vy: -(0.05 + Math.random() * 0.14) * (0.4 + z), // gentle upward drift
          r: isBubble ? 2.2 + z * 3.2 : 0.5 + z * 1.7,
          tw: Math.random() * Math.PI * 2,
        }
      })
    }

    function resize() {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    let t = 0
    function draw() {
      ctx.clearRect(0, 0, width, height)
      t += 0.016
      // additive blending makes overlapping particles glow
      ctx.globalCompositeOperation = 'lighter'

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        // wrap around edges seamlessly
        if (p.x < -4) p.x = width + 4
        if (p.x > width + 4) p.x = -4
        if (p.y < -4) p.y = height + 4
        if (p.y > height + 4) p.y = -4

        const twinkle = 0.5 + 0.5 * Math.sin(t * 1.2 + p.tw)
        const alpha = (0.2 + p.z * 0.55) * (0.55 + 0.45 * twinkle)

        // a few particles tinted violet, most cyan/white
        const color = p.z > 0.82 ? violet : accent

        // soft radial glow halo
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4)
        glow.addColorStop(0, color)
        glow.addColorStop(1, 'transparent')
        ctx.globalAlpha = alpha * 0.5
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2)
        ctx.fill()

        // crisp bright core
        ctx.globalAlpha = alpha
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'
      raf = requestAnimationFrame(draw)
    }

    resize()
    if (prefersReduced) {
      draw()
    } else {
      raf = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"
    />
  )
}
