import { ArrowRight, ShieldCheck } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

export function EnterpriseCta() {
  return (
    <section id="enterprise" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <ScrollReveal variant="scale-up" duration={800}>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-primary/30 bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 size-[300px] translate-x-1/3 translate-y-1/3 rounded-full bg-violet/20 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5">
              <span className="size-2 rounded-full bg-accent animate-pulse-dot" />
              <span className="font-mono text-xs text-accent">
                Enterprise Onboarding Open
              </span>
            </div>

            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
              Get a complimentary{' '}
              <span className="text-primary text-glow-cyan">security audit</span>{' '}
              of your infrastructure
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Our engineers will map your attack surface, benchmark your posture,
              and deliver a Zero-Trust roadmap tailored to your enterprise — no
              commitment required.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-medium text-primary-foreground glow-cyan transition-transform hover:scale-[1.02] sm:w-auto"
              >
                <ShieldCheck className="size-4" />
                Request Security Audit
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-secondary/40 px-7 py-3.5 font-medium text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary sm:w-auto"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

