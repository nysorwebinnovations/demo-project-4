import {
  Fingerprint,
  CloudCog,
  Radar,
  Cpu,
  Lock,
  Network,
} from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

const SOLUTIONS = [
  {
    icon: Lock,
    title: 'Quantum-Resistant Encryption',
    desc: 'Post-quantum cryptographic lattices that keep data sealed against tomorrow&apos;s compute.',
    tag: 'PQC',
  },
  {
    icon: CloudCog,
    title: 'Cloud Disaster Recovery',
    desc: 'Automated failover and geo-replicated snapshots with sub-second recovery objectives.',
    tag: 'DR',
  },
  {
    icon: Radar,
    title: 'Cyber Threat Intelligence',
    desc: 'AI models correlate global signals to neutralize attacks before they reach your perimeter.',
    tag: 'CTI',
  },
  {
    icon: Network,
    title: 'Edge Computing Infrastructure',
    desc: 'Low-latency compute pushed to 300+ edge nodes for real-time, resilient workloads.',
    tag: 'EDGE',
  },
  {
    icon: Fingerprint,
    title: 'Zero-Trust Access Control',
    desc: 'Identity-verified, context-aware policies that trust nothing and validate everything.',
    tag: 'ZTA',
  },
  {
    icon: Cpu,
    title: 'Autonomous Threat Response',
    desc: 'Self-healing systems isolate, contain, and remediate breaches without human latency.',
    tag: 'SOAR',
  },
]

export function SolutionsGrid() {
  return (
    <section id="solutions" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal variant="fade-up">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              // Specialized Solutions
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Infrastructure defense, beyond the standard stack
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <ScrollReveal
              key={s.title}
              variant="scale-up"
              delay={i * 90}
            >
              <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80">
                <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/0 blur-2xl transition-all duration-300 group-hover:bg-primary/20" />
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary/50 text-primary transition-colors group-hover:border-primary/50 group-hover:text-primary">
                    <s.icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.desc.replace('&apos;', "'")}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

