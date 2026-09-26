import { Seo } from '@/components/Seo'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { ApproachTimeline } from '@/components/sections/ApproachTimeline'
import { CTASection } from '@/components/sections/CTASection'
import { AnimatedBackground } from '@/components/sections/AnimatedBackground'

export default function Approach() {
  return (
    <>
      <Seo
        title="Our Approach"
        description="How Waaberi Security operates: always-on vigilance, locally staffed and globally benchmarked analysts, regional threat expertise, a talent pipeline, and compliance-ready delivery."
        path="/approach"
      />

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <AnimatedBackground variant="subtle" />
        <div className="container relative">
          <SectionHeader
            eyebrow="Operating Model"
            title="Our Approach"
            description="At Waaberi Security, how we operate is as important as the systems we protect. Our approach is built for the realities of a fast-digitizing, under-protected region."
          />

          <div className="mt-16 sm:mt-20">
            <ApproachTimeline />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
