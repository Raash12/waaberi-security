import { Seo } from '@/components/Seo'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { FrameworkCard } from '@/components/sections/FrameworkCard'
import { CTASection } from '@/components/sections/CTASection'
import { AnimatedBackground } from '@/components/sections/AnimatedBackground'
import { frameworks } from '@/data/frameworks'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const runbook = [
  {
    id: 'nist',
    question: 'How does NIST CSF shape our monitoring?',
    answer:
      'SOC monitoring and detection playbooks are organized around the NIST CSF functions, so every alert maps to Identify, Protect, Detect, Respond, or Recover.',
  },
  {
    id: 'mitre',
    question: 'How is MITRE ATT&CK used in incident response?',
    answer:
      'Incident response procedures reference MITRE ATT&CK tactics and techniques to classify and communicate threats in a common, internationally recognized language.',
  },
  {
    id: 'compliance',
    question: 'How do we support PCI-DSS and ISO/IEC 27001 compliance?',
    answer:
      'Compliance and advisory engagements help banks and telecoms document evidence for PCI-DSS and ISO/IEC 27001 audits, rather than starting from a blank page.',
  },
  {
    id: 'cis',
    question: 'What role do CIS Controls play?',
    answer:
      'Baseline hardening recommendations for client infrastructure follow CIS Controls, giving even first-time clients a concrete, prioritized starting point.',
  },
]

export default function Frameworks() {
  return (
    <>
      <Seo
        title="Security Frameworks"
        description="Waaberi Security's SOC operations, controls and reporting map directly onto NIST CSF, ISO/IEC 27001, MITRE ATT&CK, PCI-DSS and CIS Controls."
        path="/frameworks"
      />

      <section className="relative overflow-hidden py-16 sm:py-20">
        <AnimatedBackground variant="subtle" />
        <div className="container relative">
          <SectionHeader
            eyebrow="Compliance Map"
            title="Cybersecurity Framework Alignment"
            description="Waaberi Security's SOC operations, controls, and reporting are built to map directly onto the frameworks our clients — regulators, banks, telecoms, and government partners — are already measured against."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((framework, i) => (
              <FrameworkCard key={framework.id} framework={framework} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container max-w-3xl">
          <SectionHeader
            eyebrow="Runbook"
            title="How We Apply Them"
            className="mx-0 max-w-2xl text-left"
          />

          <div className="mt-10 rounded-xl border border-border bg-card/50 px-6 shadow-card sm:px-8">
            <Accordion type="single" collapsible>
              {runbook.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
