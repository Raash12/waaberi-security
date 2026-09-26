import { motion } from 'framer-motion'
import { AlertOctagon, CheckCircle2 } from 'lucide-react'

const problems = [
  'Limited always-on security monitoring across Somali institutions',
  'Increasing mobile money and digital banking exposure',
  'Limited intrusion detection capabilities region-wide',
  'Limited incident response capacity when breaches occur',
  'Dependence on foreign consultants with no lasting local capacity',
  'A cybersecurity talent shortage with nowhere for graduates to train',
]

export function ProblemSolution() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="rounded-2xl border border-destructive/25 bg-destructive/5 p-7 sm:p-9"
          >
            <div className="flex items-center gap-2.5">
              <AlertOctagon className="h-5 w-5 text-destructive" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-destructive">
                The Problem
              </span>
            </div>
            <ul className="mt-6 space-y-4">
              {problems.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/70" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col justify-center rounded-2xl border border-success/25 bg-success/5 p-7 sm:p-9"
          >
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-success">
                Our Solution
              </span>
            </div>
            <p className="mt-6 text-balance text-xl font-semibold leading-relaxed text-foreground sm:text-2xl">
              A centralized Security Operations Center delivering always-on monitoring,
              rapid response and a homegrown cybersecurity talent pipeline.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Waaberi Security closes the gap directly &mdash; combining 24/7 monitoring,
              incident response, threat intelligence and structured analyst training in
              one integrated offering built for the region.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
