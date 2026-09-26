import { motion } from 'framer-motion'

import { whyPoints } from '@/data/why-waaberi'

export function WhyWaaberiGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {whyPoints.map((point, i) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
          className="group flex gap-4 rounded-xl border border-border bg-card/60 p-6 shadow-card transition-colors hover:border-primary/40"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
            <point.icon className="h-6 w-6" strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="text-base font-bold text-foreground">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {point.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
