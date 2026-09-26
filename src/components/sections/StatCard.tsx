import { motion } from 'framer-motion'

import type { Stat } from '@/data/stats'

interface StatCardProps {
  stat: Stat
  index?: number
}

export function StatCard({ stat, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="rounded-xl border border-border bg-card/60 p-6 text-center shadow-card sm:p-8"
    >
      <p className="text-3xl font-extrabold text-gradient sm:text-4xl">{stat.value}</p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
    </motion.div>
  )
}
