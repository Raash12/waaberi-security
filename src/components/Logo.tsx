import { ShieldCheck } from 'lucide-react'

import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  iconOnly?: boolean
}

export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-glow">
        <ShieldCheck className="h-5 w-5 text-background" strokeWidth={2.5} />
      </span>
      {!iconOnly && (
        <span className="flex flex-col leading-none">
          <span className="text-base font-extrabold tracking-tight text-foreground">
            WAABERI <span className="text-primary">SECURITY</span>
          </span>
          <span className="mt-0.5 hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:block">
            Security Operations Center
          </span>
        </span>
      )}
    </div>
  )
}
