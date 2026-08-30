'use client'

import dynamic from 'next/dynamic'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { ParticleField } from '@/components/particle-field'
import { ScrollReveal } from '@/components/scroll-reveal'

const PyramidScene = dynamic(
  () => import('@/components/pyramid-scene').then((m) => m.PyramidScene),
  { ssr: false },
)

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 lg:pt-40">
      {/* ===== Background layer (z-0), spans the full section behind everything ===== */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Seamless grid canvas, faded at the edges */}
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
        {/* Dual radial glows: teal/cyan behind left text, purple/cyan behind pyramid */}
        <div className="absolute -left-20 top-1/2 h-[400px] w-[400px] sm:h-[560px] sm:w-[560px] -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute -right-16 top-1/3 h-[380px] w-[380px] sm:h-[520px] sm:w-[520px] rounded-full bg-violet/20 blur-[120px]" />
        <div className="absolute right-10 top-1/2 h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]" />
        {/* Dynamic floating particle field across the ENTIRE hero */}
        <ParticleField />
      </div>

      {/* ===== Content layer (z-1), floats above the background ===== */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:px-6 md:grid-cols-2 md:gap-6">
        {/* Spinning pyramid: Positioned prominently at top on mobile (<768px), right side on desktop */}
        <div className="order-1 flex items-center justify-center border-0 bg-transparent p-0 shadow-none outline-none md:order-2">
          <ScrollReveal variant="scale-up" duration={800} className="w-full flex justify-center">
            <div className="relative flex aspect-square w-full max-w-[300px] items-center justify-center border-0 bg-transparent p-0 shadow-none outline-none sm:max-w-[400px] md:max-w-[480px]">
              <PyramidScene />
            </div>
          </ScrollReveal>
        </div>

        {/* Text Content & CTAs: Below pyramid on mobile (<768px), left side on desktop */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 md:mx-0">
              <ShieldCheck className="size-3.5 text-accent shrink-0" />
              <span className="font-mono text-xs text-muted-foreground">
                Zero-Trust · AI Threat Intelligence · Multi-Cloud
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200}>
            <h1 className="text-balance font-sans text-3xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-5xl lg:text-6xl">
              Fortifying{' '}
              <span className="text-primary text-glow-cyan">Tomorrow&apos;s</span>{' '}
              Digital Infrastructure
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300}>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base md:mx-0 lg:text-lg">
              Enterprise-grade Zero-Trust security, autonomous threat detection,
              and high-performance multi-cloud optimization — engineered to defend
              the systems that power your business.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={400}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
              <a
                href="#enterprise"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground glow-cyan transition-transform hover:scale-[1.02] sm:w-auto"
              >
                Deploy Protection
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#architecture"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary/40 px-6 py-3.5 font-medium text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary sm:w-auto"
              >
                Explore Infrastructure
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}


