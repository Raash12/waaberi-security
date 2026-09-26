import { motion } from 'framer-motion'
import { Landmark } from 'lucide-react'

import { Seo } from '@/components/Seo'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { WhyWaaberiGrid } from '@/components/sections/WhyWaaberiGrid'
import { CTASection } from '@/components/sections/CTASection'
import { AnimatedBackground } from '@/components/sections/AnimatedBackground'

export default function WhyWaaberi() {
  return (
    <>
      <Seo
        title="Why Waaberi"
        description="Waaberi Security is the first dedicated Security Operations Center headquartered in Somalia — first-mover advantage, regional threat expertise, faster local response and a talent development model."
        path="/why-waaberi"
      />

      <section className="relative overflow-hidden py-16 sm:py-20">
        <AnimatedBackground variant="subtle" />
        <div className="container relative">
          <SectionHeader
            eyebrow="Advantage Report"
            title="Why Choose Waaberi Security"
            description="Partnering with Waaberi Security means engaging the region's first dedicated, locally-built Security Operations Center."
          />

          <div className="mx-auto mt-14 max-w-4xl">
            <WhyWaaberiGrid />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-3xl rounded-2xl border border-primary/25 bg-primary/5 p-8 text-center sm:p-10"
          >
            <Landmark className="mx-auto h-8 w-8 text-primary" />
            <h3 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">
              Positioned as the First Mover
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Somalia&rsquo;s mobile money penetration is among the highest in the
              world, its banking sector is expanding rapidly after years of reform,
              and government digitization is a stated national priority. Waaberi
              Security is a homegrown SOC that understands the local threat
              landscape, regulatory environment, and business culture better than
              any foreign provider could.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
