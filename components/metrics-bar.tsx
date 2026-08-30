'use client'

import { useEffect, useRef, useState } from 'react'
import { ScrollReveal } from '@/components/scroll-reveal'

const METRICS = [
  { value: '99.999', suffix: '%', label: 'Infrastructure Uptime' },
  { value: '0', suffix: 'ms', label: 'Breach Response Latency' },
  { value: '10', suffix: 'B+', label: 'Daily Data Packets Secured' },
  { value: '300', suffix: '+', label: 'Global Edge Nodes' },
]

export function MetricsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="metrics" className="relative py-8">
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-4 sm:px-6"
      >
        <ScrollReveal variant="scale-up">
          <div className="grid-bg overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur">
            <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
              {METRICS.map((m, i) => (
                <div
                  key={m.label}
                  className="relative flex flex-col items-center justify-center px-6 py-8 text-center transition-all duration-700"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(12px)',
                    transitionDelay: `${i * 120}ms`,
                  }}
                >
                  <div className="font-mono text-3xl font-bold text-primary text-glow-cyan sm:text-4xl">
                    {m.value}
                    <span className="text-accent">{m.suffix}</span>
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

