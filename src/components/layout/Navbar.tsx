import { useEffect, useState } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Logo } from '@/components/Logo'
import { MobileMenu } from '@/components/navigation/MobileMenu'
import { navLinks } from '@/data/navigation'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled
          ? 'border-b border-border/80 bg-background/80 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between lg:h-20">
        <RouterNavLink to="/" className="shrink-0" aria-label="Waaberi Security home">
          <Logo />
        </RouterNavLink>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary',
                  isActive && 'text-primary'
                )
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="default" className="hidden lg:inline-flex">
            <RouterNavLink to="/contact">Request Security Assessment</RouterNavLink>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
