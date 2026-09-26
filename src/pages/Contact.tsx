import { motion } from 'framer-motion'
import { MapPin, Globe2, Mail, Phone, ShieldCheck } from 'lucide-react'

import { Seo } from '@/components/Seo'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { AnimatedBackground } from '@/components/sections/AnimatedBackground'
import { ContactForm } from '@/components/sections/ContactForm'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const contactDetails = [
  { icon: MapPin, label: 'Head Office', value: 'Mogadishu, Somalia' },
  { icon: Globe2, label: 'Focus Region', value: 'Somalia & the Horn of Africa' },
  { icon: Mail, label: 'Email', value: '[Company Email]' },
  { icon: Phone, label: 'Phone', value: '[Company Phone]' },
  { icon: Globe2, label: 'Website', value: '[Company Website]' },
]

const serviceList = ['24/7 SOC Monitoring', 'Incident Response', 'Threat Intelligence']

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Waaberi Security's Security Operations Center in Mogadishu, Somalia to request a security assessment or discuss 24/7 monitoring, incident response and threat intelligence services."
        path="/contact"
      />

      <section className="relative overflow-hidden py-16 sm:py-20">
        <AnimatedBackground variant="subtle" />
        <div className="container relative">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Let's Discuss Your Security Posture"
            description="Reach out to Waaberi Security to request a security assessment or learn more about our Security Operations Center."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-2"
            >
              <Card className="bg-card/60">
                <CardContent className="p-7 sm:p-8">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary">
                      Waaberi Security
                    </span>
                  </div>

                  <ul className="mt-6 space-y-5">
                    {contactDetails.map((item) => (
                      <li key={item.label} className="flex items-start gap-3">
                        <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="mt-0.5 text-sm font-medium text-foreground">
                            {item.value}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <Separator className="my-6" />

                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Services
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {serviceList.map((service) => (
                      <li
                        key={service}
                        className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-foreground/80"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <Card className="bg-card/60">
                <CardContent className="p-7 sm:p-8">
                  <h3 className="text-lg font-bold text-foreground">
                    Send a Security Inquiry
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Tell us about your organization and security needs. Our team will
                    follow up to discuss next steps.
                  </p>
                  <div className="mt-6">
                    <ContactForm />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
