interface AnimatedBackgroundProps {
  variant?: 'default' | 'subtle'
  className?: string
}

export function AnimatedBackground({ variant = 'default', className = '' }: AnimatedBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      {variant === 'default' && (
        <>
          <div className="absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[360px] w-[520px] rounded-full bg-accent/10 blur-[110px]" />
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  )
}
