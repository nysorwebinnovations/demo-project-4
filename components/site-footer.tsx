import { Globe, Send, AtSign } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'

const COLUMNS = [
  {
    title: 'Platform',
    links: ['Zero-Trust Security', 'Cloud Core', 'AI Intelligence', 'Edge Network'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Security', 'Trust Center'],
  },
]

const CERTS = ['SOC 2 Type II', 'ISO 27001', 'GDPR', 'HIPAA', 'FedRAMP']

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-popover/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#">
              <BrandLogo />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Next-gen cyber security and cloud infrastructure for the
              enterprises building tomorrow.
            </p>
            <div className="mt-6 flex gap-3">
              {[Globe, Send, AtSign].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label="Social link"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-border pt-8">
          <span className="font-mono text-xs text-muted-foreground">
            Compliance:
          </span>
          {CERTS.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[11px] text-foreground/80"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} VORTEXIS Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}


