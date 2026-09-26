import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

import { Seo } from '@/components/Seo'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { CTASection } from '@/components/sections/CTASection'
import { AnimatedBackground } from '@/components/sections/AnimatedBackground'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { services, type Service } from '@/data/services'

export default function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null)

  return (
    <>
      <Seo
        title="Services"
        description="Explore Waaberi Security's six core service lines: 24/7 monitoring, incident response, threat intelligence, vulnerability management, compliance advisory and talent development."
        path="/services"
      />

      <section className="relative overflow-hidden py-16 sm:py-20">
        <AnimatedBackground variant="subtle" />
        <div className="container relative">
          <SectionHeader
            eyebrow="Areas of Expertise"
            title="Premium Security Services for the Region's Critical Systems"
            description="Six integrated capabilities that keep government, financial, telecom and enterprise systems watched, defended and compliant, around the clock."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={i}
                onLearnMore={setActiveService}
              />
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!activeService} onOpenChange={(open) => !open && setActiveService(null)}>
        <DialogContent className="max-w-lg">
          {activeService && (
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <activeService.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <DialogTitle className="mt-5 text-xl font-bold">
                {activeService.number} &mdash; {activeService.title}
              </DialogTitle>
              <DialogDescription className="mt-3 text-sm leading-relaxed">
                {activeService.description}
              </DialogDescription>
              <ul className="mt-5 space-y-3">
                {activeService.details.map((detail) => (
                  <li key={detail} className="flex gap-2.5 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-success mt-0.5" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <CTASection />
    </>
  )
}
