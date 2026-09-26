import { motion } from 'framer-motion'
import { Activity, AlertTriangle, ShieldCheck, Wifi, Server, Radar, FileCheck2 } from 'lucide-react'

import { cn } from '@/lib/utils'

const monitors = [
  { label: 'Threat Monitoring', value: 'Active', icon: Radar, tone: 'success' as const },
  { label: 'Network Health', value: 'Stable', icon: Wifi, tone: 'success' as const },
  { label: 'Endpoint Protection', value: 'Enforced', icon: Server, tone: 'success' as const },
  { label: 'Active Alerts', value: '3 Low', icon: AlertTriangle, tone: 'warning' as const },
]

const activityBars = [38, 62, 44, 80, 55, 70, 48, 90, 60, 42, 75, 52]

const toneClasses: Record<'success' | 'warning', string> = {
  success: 'text-success bg-success/10 border-success/25',
  warning: 'text-amber-400 bg-amber-400/10 border-amber-400/25',
}

interface SocDashboardProps {
  compact?: boolean
}

export function SocDashboard({ compact = false }: SocDashboardProps) {
  return (
    <div className="relative rounded-2xl border border-border bg-card/70 p-5 shadow-card backdrop-blur-sm sm:p-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
          </span>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-success">
            Security Status: Operational
          </span>
        </div>
        <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline">
          SOC // MOGADISHU
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {monitors.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-lg border border-border bg-secondary/30 p-3.5"
          >
            <div className="flex items-center justify-between">
              <item.icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />
              <span
                className={cn(
                  'rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide',
                  toneClasses[item.tone]
                )}
              >
                {item.value}
              </span>
            </div>
            <p className="mt-2.5 text-xs font-medium text-foreground/80">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {!compact && (
        <div className="mt-5 rounded-lg border border-border bg-secondary/30 p-4">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
              <Activity className="h-4 w-4 text-primary" />
              Network Activity
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">Illustrative data</span>
          </div>
          <div className="mt-3 flex h-16 items-end gap-1.5">
            {activityBars.map((h, i) => (
              <motion.span
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.6, delay: i * 0.04, ease: 'easeOut' }}
                className="flex-1 rounded-sm bg-gradient-to-t from-primary/70 to-accent/70"
              />
            ))}
          </div>
        </div>
      )}

      <div className="mt-5 flex items-center justify-between rounded-lg border border-primary/20 bg-primary/5 p-3.5">
        <span className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
          <ShieldCheck className="h-4 w-4 text-primary" />
          Incident Response
        </span>
        <span className="font-mono text-[10px] font-semibold uppercase tracking-wide text-primary">
          Standing By
        </span>
      </div>

      {!compact && (
        <div className="mt-3 flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-3.5">
          <span className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
            <FileCheck2 className="h-4 w-4 text-accent" />
            Compliance Status
          </span>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-wide text-accent">
            On Track
          </span>
        </div>
      )}

      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
        Demo data for illustrative purposes only
      </p>
    </div>
  )
}
