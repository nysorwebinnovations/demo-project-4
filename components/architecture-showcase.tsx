'use client'

import { useState } from 'react'
import { ScanSearch, ShieldHalf, GitBranch, Activity, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ScrollReveal } from '@/components/scroll-reveal'

const STEPS = [
  {
    icon: ScanSearch,
    title: 'Discover & Map',
    summary: 'Full-surface asset discovery',
    detail:
      'We fingerprint every endpoint, workload, and data flow across your multi-cloud estate, building a live topology of what needs defending.',
    points: ['Continuous asset inventory', 'Shadow-IT detection', 'Data-flow mapping'],
  },
  {
    icon: ShieldHalf,
    title: 'Harden & Enforce',
    summary: 'Zero-Trust policy deployment',
    detail:
      'Identity-aware micro-segmentation and least-privilege policies are pushed automatically, isolating workloads and closing lateral movement paths.',
    points: ['Micro-segmentation', 'Least-privilege IAM', 'Quantum-resistant keys'],
  },
  {
    icon: Activity,
    title: 'Detect & Respond',
    summary: 'Autonomous AI monitoring',
    detail:
      'AI threat models watch every signal in real time, correlating global intelligence to contain and remediate anomalies in milliseconds.',
    points: ['Behavioral anomaly AI', 'Automated containment', 'Global threat feeds'],
  },
  {
    icon: GitBranch,
    title: 'Optimize & Scale',
    summary: 'Performance tuning at the edge',
    detail:
      'Workloads are continuously rebalanced across edge nodes for peak performance, with self-healing failover keeping uptime near-perfect.',
    points: ['Edge load balancing', 'Self-healing failover', 'Cost-aware scaling'],
  },
]

export function ArchitectureShowcase() {
  const [active, setActive] = useState(0)
  const step = STEPS[active]

  return (
    <section id="architecture" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal variant="fade-up">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              // Interactive Architecture
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              How we secure and optimize your systems
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 lg:grid-cols-[1fr_1.3fr]">
          {/* Tabs */}
          <ScrollReveal variant="slide-left" delay={150}>
            <div className="flex flex-col gap-2">
              {STEPS.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className={cn(
                    'group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300',
                    active === i
                      ? 'border-primary/50 bg-card glow-cyan'
                      : 'border-border bg-card/40 hover:border-border hover:bg-card/70',
                  )}
                >
                  <span
                    className={cn(
                      'flex size-11 shrink-0 items-center justify-center rounded-xl border font-mono text-sm transition-colors',
                      active === i
                        ? 'border-primary/50 bg-primary/10 text-primary'
                        : 'border-border bg-secondary/50 text-muted-foreground',
                    )}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span
                      className={cn(
                        'block font-semibold',
                        active === i ? 'text-foreground' : 'text-muted-foreground',
                      )}
                    >
                      {s.title}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {s.summary}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Detail panel */}
          <ScrollReveal variant="scale-up" delay={250}>
            <div className="grid-bg relative overflow-hidden rounded-3xl border border-border bg-card p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-primary/10 blur-3xl" />
              <span className="flex size-14 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary glow-cyan">
                <step.icon className="size-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
                {step.detail}
              </p>
              <ul className="mt-6 space-y-3">
                {step.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm">
                    <span className="flex size-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/90">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

