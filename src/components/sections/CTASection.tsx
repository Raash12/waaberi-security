import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { AnimatedBackground } from '@/components/sections/AnimatedBackground'

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/30 py-20 sm:py-24">
      <AnimatedBackground variant="subtle" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Is Your Organization Ready for the Next Threat?
          </h2>
          <p className="mt-4 text-balance text-base text-muted-foreground sm:text-lg">
            Let&rsquo;s strengthen your security posture before an incident happens.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/contact">
                Request Security Assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link to="/contact">
                <Mail className="h-4 w-4" />
                Contact Waaberi Security
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
