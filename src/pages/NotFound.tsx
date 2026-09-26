import { Link } from 'react-router-dom'
import { ShieldAlert } from 'lucide-react'

import { Seo } from '@/components/Seo'
import { Button } from '@/components/ui/button'
import { AnimatedBackground } from '@/components/sections/AnimatedBackground'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <section className="relative flex min-h-[70vh] items-center overflow-hidden py-20">
        <AnimatedBackground variant="subtle" />
        <div className="container relative flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
            <ShieldAlert className="h-8 w-8" />
          </div>
          <p className="mt-6 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Error 404
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Signal Not Found
          </h1>
          <p className="mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
            The page you are looking for has been moved, removed, or never existed.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
