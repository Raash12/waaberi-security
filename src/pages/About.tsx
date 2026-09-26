import { motion } from 'framer-motion'
import { Landmark, Banknote, Radio as RadioIcon, Building2, Compass, Eye } from 'lucide-react'

import { Seo } from '@/components/Seo'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { SocIllustration } from '@/components/sections/SocIllustration'
import { CTASection } from '@/components/sections/CTASection'
import { AnimatedBackground } from '@/components/sections/AnimatedBackground'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const customers = [
  { label: 'Government Agencies', icon: Landmark },
  { label: 'Financial Institutions', icon: Banknote },
  { label: 'Telecommunications Operators', icon: RadioIcon },
  { label: 'Enterprises', icon: Building2 },
]

const coreValues = [
  {
    title: 'Integrity',
    description: 'Operating with transparency and accountability to every client and partner.',
  },
  {
    title: 'Vigilance',
    description: "Watching Somalia's critical systems around the clock, without exception.",
  },
  {
    title: 'Local Capacity',
    description: 'Training and retaining Somali cybersecurity talent, not renting foreign teams.',
  },
  {
    title: 'Resilience',
    description: 'Delivering dependable security operations in fragile, fast-changing conditions.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Waaberi Security is a Somalia-based Security Operations Center delivering 24/7 threat monitoring, incident response and cybersecurity advisory across the Horn of Africa."
        path="/about"
      />

      <section className="relative overflow-hidden py-16 sm:py-20">
        <AnimatedBackground variant="subtle" />
        <div className="container relative">
          <SectionHeader
            eyebrow="About Waaberi"
            title="Cybersecurity Built for the Horn of Africa"
            align="left"
            className="mx-0 max-w-2xl text-left"
          />

          <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="space-y-5 text-base leading-relaxed text-muted-foreground"
            >
              <p>
                Waaberi Security is a Somalia-based Security Operations Center (SOC)
                company providing 24/7 threat monitoring, incident response,
                vulnerability management, and cybersecurity advisory services to
                government agencies, financial institutions, telecommunications
                operators, and enterprises across Somalia and the wider Horn of Africa.
              </p>
              <p>
                As Somalia&rsquo;s economy digitizes rapidly &mdash; with mobile money
                underpinning everyday transactions, banks moving core systems online,
                and government agencies digitizing citizen records &mdash; the region
                has almost no local, dedicated security monitoring capacity. Waaberi
                Security exists to close that gap with a locally-staffed,
                internationally-benchmarked SOC that keeps the region&rsquo;s critical
                systems watched around the clock.
              </p>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  We Serve
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {customers.map((c) => (
                    <div
                      key={c.label}
                      className="flex items-center gap-2.5 rounded-lg border border-border bg-card/50 px-3.5 py-3"
                    >
                      <c.icon className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-xs font-medium text-foreground/85 sm:text-sm">
                        {c.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <SocIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-primary/25 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To defend the Horn of Africa&rsquo;s digital infrastructure by
                  delivering world-class security operations, threat intelligence,
                  and incident response &mdash; making enterprise-grade cybersecurity
                  accessible to governments, banks, telecoms, and businesses across a
                  region that has been left exposed.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-accent/25 bg-accent/5">
              <CardContent className="p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A digitally secure Somalia and Horn of Africa, where critical
                  infrastructure, financial systems, and public institutions operate
                  with the same security confidence as anywhere else in the world.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container">
          <SectionHeader eyebrow="What Drives Us" title="Core Values" />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-border bg-card/60 p-6 shadow-card"
              >
                <Badge className="mb-4">{`0${i + 1}`}</Badge>
                <h3 className="text-base font-bold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
