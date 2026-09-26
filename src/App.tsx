import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Layout } from '@/components/layout/Layout'
import { ScrollToTop } from '@/components/ScrollToTop'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Services = lazy(() => import('@/pages/Services'))
const Frameworks = lazy(() => import('@/pages/Frameworks'))
const Approach = lazy(() => import('@/pages/Approach'))
const WhyWaaberi = lazy(() => import('@/pages/WhyWaaberi'))
const Contact = lazy(() => import('@/pages/Contact'))
const Privacy = lazy(() => import('@/pages/Privacy'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/frameworks" element={<Frameworks />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/why-waaberi" element={<WhyWaaberi />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}

export default App
