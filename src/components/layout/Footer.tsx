import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

import { Logo } from '@/components/Logo'
import { Separator } from '@/components/ui/separator'
import { navLinks } from '@/data/navigation'

const frameworkNames = ['NIST CSF', 'ISO/IEC 27001', 'MITRE ATT&CK', 'PCI-DSS', 'CIS Controls']

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="container grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Security Operations Center for the Horn of Africa. Locally staffed,
            internationally benchmarked.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            Mogadishu, Somalia
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Frameworks
          </h3>
          <ul className="mt-4 space-y-2.5">
            {frameworkNames.map((name) => (
              <li key={name} className="text-sm text-muted-foreground">
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Head Office
          </h3>
          <p className="mt-4 text-sm text-muted-foreground">Mogadishu, Somalia</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Focus Region: Somalia &amp; the Horn of Africa
          </p>
        </div>
      </div>

      <Separator />

      <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-center text-xs text-muted-foreground sm:text-left">
          &copy; {year} Waaberi Security. All rights reserved.
        </p>
        <p className="text-center text-xs italic text-muted-foreground/80 sm:text-right">
          &ldquo;We are the dawn of cybersecurity in Somalia&rdquo;
        </p>
      </div>
    </footer>
  )
}
