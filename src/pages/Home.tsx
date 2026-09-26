import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Radio } from 'lucide-react'

import { Seo } from '@/components/Seo'
import { Hero } from '@/components/sections/Hero'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { StatCard } from '@/components/sections/StatCard'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { ProblemSolution } from '@/components/sections/ProblemSolution'
import { SocDashboard } from '@/components/sections/SocDashboard'
import { CTASection } from '@/components/sections/CTASection'
import { Button } from '@/components/ui/button'
import { stats } from '@/data/stats'
import { services } from '@/data/services'

export default function Home() {
  return (
    <>
      <Seo
        title="Waaberi Security | Cybersecurity & Security Operations Center in Somalia"
        description="Waaberi Security is a Somalia-based Security Operations Center providing 24/7 security monitoring, incident response, threat intelligence, vulnerability management and cybersecurity advisory services across Somalia and the Horn of Africa."
        path="/"
      />

      <Hero />

      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.id} stat={stat} index={i} />
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-muted-foreground/80">
            Company and operating-profile facts, not customer-derived statistics.
          </p>
        </div>
      </section>

      <section className="py-4 sm:py-6">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                About Waaberi
              </span>
              <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Cybersecurity Built for the Horn of Africa
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Waaberi Security provides 24/7 threat monitoring, incident response,
                vulnerability management, cybersecurity advisory and threat intelligence
                to government agencies, financial institutions, telecommunications
                operators and enterprises across Somalia and the wider Horn of Africa.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                As the region&rsquo;s economy digitizes rapidly, Waaberi exists to close
                the security monitoring gap with a locally-staffed, internationally
                benchmarked SOC that keeps critical systems watched around the clock.
              </p>
              <Button asChild variant="outline" size="lg" className="mt-7">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <SocDashboard compact />
            </motion.div>
          </div>
        </div>
      </section>

      <ProblemSolution />

      <section className="py-20 sm:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Areas of Expertise"
            title="A Complete Security Operations Capability"
            description="Six integrated service lines that keep Somalia and the Horn of Africa's critical systems watched, defended and compliant."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Live Operations View"
            title="Inside the Security Operations Center"
            description="A look at how Waaberi's SOC surfaces monitoring, alerts and response status to our team around the clock."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto mt-14 max-w-2xl"
          >
            <SocDashboard />
          </motion.div>

          <p className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-2 text-center text-xs text-muted-foreground">
            <Radio className="h-3.5 w-3.5" />
            Dashboard reflects simulated / illustrative data for presentation purposes only.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
