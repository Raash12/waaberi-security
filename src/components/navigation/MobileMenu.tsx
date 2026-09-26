import { useState } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Logo } from '@/components/Logo'
import { navLinks } from '@/data/navigation'
import { cn } from '@/lib/utils'

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex w-full max-w-sm flex-col border-l border-border bg-card/98">
        <SheetHeader>
          <SheetTitle asChild>
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-8 flex flex-1 flex-col gap-1" aria-label="Mobile">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-4 py-3.5 text-base font-medium text-foreground/90 transition-colors hover:bg-white/5 hover:text-primary',
                  isActive && 'bg-primary/10 text-primary'
                )
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="mt-auto pt-6">
          <Button asChild className="w-full" size="lg" onClick={() => setOpen(false)}>
            <RouterNavLink to="/contact">Request Security Assessment</RouterNavLink>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
