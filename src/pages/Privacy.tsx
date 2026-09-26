import { Seo } from '@/components/Seo'
import { AnimatedBackground } from '@/components/sections/AnimatedBackground'

const sections = [
  {
    title: 'Overview',
    body: [
      'Waaberi Security ("Waaberi Security", "we", "us", or "our") operates a Security Operations Center serving clients across Somalia and the Horn of Africa. This Privacy Policy explains, at a general level, how information submitted through this website is handled.',
    ],
  },
  {
    title: 'Information We Collect',
    body: [
      'When you submit a security inquiry through our contact form, we collect the information you provide, which may include your full name, organization, email address, phone number, service of interest, and message content.',
    ],
  },
  {
    title: 'How We Use Information',
    body: [
      'Information submitted through this website is used solely to respond to your inquiry, evaluate your request for a security assessment or consultation, and communicate with you about our services.',
    ],
  },
  {
    title: 'Data Protection',
    body: [
      'As a cybersecurity organization, Waaberi Security takes the protection of client and prospective client information seriously and applies data protection and governance principles consistent with our own security frameworks and advisory practice.',
    ],
  },
  {
    title: 'Third-Party Disclosure',
    body: [
      'We do not sell, trade, or otherwise transfer information collected through this website to outside parties, except as necessary to respond to your inquiry or as required by law.',
    ],
  },
  {
    title: 'Contact',
    body: [
      'If you have questions about this Privacy Policy, please contact us using the details on our Contact page.',
    ],
  },
]

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Waaberi Security's Privacy Policy explaining how information submitted through this website is collected, used and protected."
        path="/privacy"
      />

      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <AnimatedBackground variant="subtle" />
        <div className="container relative max-w-3xl">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Legal
          </span>
          <h1 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: 2026</p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-bold text-foreground">{section.title}</h2>
                {section.body.map((paragraph, i) => (
                  <p key={i} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
