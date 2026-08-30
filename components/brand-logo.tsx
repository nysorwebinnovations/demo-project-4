'use client'

import { cn } from '@/lib/utils'

export function BrandLogo({ className }: { className?: string }) {
  return (
    <div className={cn('group flex items-center gap-3', className)}>
      {/* High-tech geometric SVG vector mark */}
      <div className="relative flex size-9.5 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 p-2 shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:border-primary/70 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.45)]">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0"
        >
          <path
            d="M5 7L16 27L27 7"
            stroke="url(#vortex-grad-1)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 7L16 17L22 7"
            stroke="url(#vortex-grad-2)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="7" r="2" fill="#00F0FF" />
          <defs>
            <linearGradient
              id="vortex-grad-1"
              x1="5"
              y1="7"
              x2="27"
              y2="27"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00F0FF" />
              <stop offset="0.5" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient
              id="vortex-grad-2"
              x1="10"
              y1="7"
              x2="22"
              y2="17"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00FF66" />
              <stop offset="1" stopColor="#00F0FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Tracked bold typography for VORTEXIS */}
      <span className="font-sans text-base font-black tracking-[0.25em] text-foreground sm:text-lg">
        VORTEXIS
      </span>
    </div>
  )
}
