const frameworkNames = ['NIST CSF', 'ISO/IEC 27001', 'MITRE ATT&CK', 'PCI-DSS', 'CIS Controls']

export function TrustRow() {
  return (
    <div className="border-t border-border/60 pt-6">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground lg:text-left">
        Operating in alignment with
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
        {frameworkNames.map((name) => (
          <span
            key={name}
            className="font-mono text-xs font-semibold tracking-wide text-foreground/60 sm:text-sm"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
