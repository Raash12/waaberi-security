import { motion } from 'framer-motion'

import { approachSteps } from '@/data/approach'

export function ApproachTimeline() {
  return (
    <div className="relative">
      {/* Mobile / tablet: vertical timeline */}
      <div className="relative space-y-8 lg:hidden">
        <div className="absolute bottom-0 left-6 top-2 w-px bg-border" aria-hidden="true" />
        {approachSteps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            className="relative flex gap-5 pl-0"
          >
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-card text-primary shadow-glow">
              <step.icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div className="pt-1.5">
              <span className="font-mono text-xs font-bold text-primary">{step.number}</span>
              <h3 className="mt-1 text-base font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop: horizontal step layout */}
      <div className="hidden lg:block">
        <div className="relative grid grid-cols-5 gap-6">
          <div
            className="absolute left-0 right-0 top-6 h-px bg-border"
            style={{ marginInline: '10%' }}
            aria-hidden="true"
          />
          {approachSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-card text-primary shadow-glow">
                <step.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <span className="mt-4 font-mono text-xs font-bold text-primary">
                {step.number}
              </span>
              <h3 className="mt-1.5 text-base font-bold text-foreground">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
