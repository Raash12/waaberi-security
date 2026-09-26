import { motion } from 'framer-motion'

import type { Framework } from '@/data/frameworks'
import { Badge } from '@/components/ui/badge'

interface FrameworkCardProps {
  framework: Framework
  index?: number
}

export function FrameworkCard({ framework, index = 0 }: FrameworkCardProps) {
  const Icon = framework.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: 'easeOut' }}
      className="group relative flex h-full flex-col rounded-xl border border-border bg-gradient-to-b from-card to-card/40 p-7 shadow-card transition-all duration-300 hover:border-accent/50"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <Badge variant="accent" className="shrink-0">
          {framework.tag}
        </Badge>
      </div>

      <h3 className="mt-5 text-lg font-bold text-foreground">{framework.name}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
        {framework.description}
      </p>
      <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-foreground/70">
        {framework.application}
      </p>
    </motion.div>
  )
}
