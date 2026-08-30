import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { SolutionsGrid } from '@/components/solutions-grid'
import { MetricsBar } from '@/components/metrics-bar'
import { ArchitectureShowcase } from '@/components/architecture-showcase'
import { EnterpriseCta } from '@/components/enterprise-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <SolutionsGrid />
      <MetricsBar />
      <ArchitectureShowcase />
      <EnterpriseCta />
      <SiteFooter />
    </main>
  )
}
