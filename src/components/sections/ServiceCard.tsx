import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import type { Service } from '@/data/services'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  service: Service
  index?: number
  onLearnMore?: (service: Service) => void
}

export function ServiceCard({ service, index = 0, onLearnMore }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/60 p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
    >
      <span className="absolute right-6 top-5 font-mono text-4xl font-bold text-white/5 transition-colors group-hover:text-primary/10">
        {service.number}
      </span>

      <div className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>

      <h3 className="relative mt-5 text-lg font-bold text-foreground">{service.title}</h3>
      <p className="relative mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <Button
        variant="link"
        className="relative mt-5 h-auto justify-start p-0 text-sm font-semibold"
        onClick={() => onLearnMore?.(service)}
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </motion.div>
  )
}
