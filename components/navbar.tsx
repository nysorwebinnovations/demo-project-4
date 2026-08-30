'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BrandLogo } from '@/components/brand-logo'

const LINKS = [
  { label: 'Security', href: '#solutions' },
  { label: 'Cloud Core', href: '#architecture' },
  { label: 'AI Intelligence', href: '#metrics' },
  { label: 'Enterprise', href: '#enterprise' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ease-out',
        scrolled || open
          ? 'border-b border-white/[0.08] bg-[#0a0f19]/75 py-3.5 px-4 backdrop-blur-[16px] shadow-lg shadow-black/40 sm:px-6'
          : 'bg-transparent px-3 pt-3 sm:px-4 sm:pt-4',
      )}
      style={{
        WebkitBackdropFilter: scrolled || open ? 'blur(16px)' : undefined,
      }}
    >
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between transition-all duration-300 ease-out',
          scrolled || open
            ? 'w-full'
            : 'rounded-2xl border border-border bg-popover/40 px-4 py-3 backdrop-blur-md sm:px-6',
        )}
      >
        {/* Brand Logo & VORTEXIS Name */}
        <a href="#" className="flex items-center">
          <BrandLogo />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#enterprise"
            className="hidden items-center gap-1.5 rounded-xl bg-primary px-4.5 py-2 text-xs font-semibold text-primary-foreground glow-cyan transition-transform hover:scale-105 sm:flex"
          >
            Deploy
            <ArrowRight className="size-3.5" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className="flex size-9 items-center justify-center rounded-xl border border-border bg-secondary/50 text-foreground transition-colors hover:bg-secondary md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown Menu */}
      {open && (
        <div
          className={cn(
            'mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0f19]/95 p-4 backdrop-blur-2xl shadow-xl md:hidden',
            scrolled ? 'mt-3' : 'mt-2',
          )}
        >
          <div className="flex flex-col gap-1.5">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-mono text-sm font-medium text-foreground/90 transition-colors hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-end border-t border-border pt-3 px-2">
              <a
                href="#enterprise"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground"
              >
                Deploy <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}



