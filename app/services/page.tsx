import React from 'react'
import Link from 'next/link'
import { Code2, Palette, Gauge, ShieldCheck, Wrench, Brush, Megaphone, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ServicesPage = () => {
  return (
    <div className='text-white my-24 md:my-28'>
      <section className='max-w-7xl mx-auto px-4 md:px-8'>
        <h1 className='text-3xl md:text-5xl font-semibold'>Services</h1>
        <p className='mt-4 text-white/80 md:max-w-2xl'>
          We help teams design, build, and scale modern web applications with a focus on performance, accessibility, and maintainability.
        </p>
      </section>

      <section className='max-w-7xl mx-auto px-4 md:px-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='rounded-lg border border-white/10 p-6 bg-white/5'>
          <Code2 className='w-5 h-5 text-green-400' />
          <h3 className='mt-3 text-lg font-semibold'>Web App Development</h3>
          <p className='mt-2 text-sm text-white/80'>TypeScript, React, Next.js. Scalable architectures and clean code.</p>
        </div>
        <div className='rounded-lg border border-white/10 p-6 bg-white/5'>
          <Palette className='w-5 h-5 text-green-400' />
          <h3 className='mt-3 text-lg font-semibold'>UI/UX & Design Systems</h3>
          <p className='mt-2 text-sm text-white/80'>Design systems, component libraries, and accessible interfaces.</p>
        </div>
        <div className='rounded-lg border border-white/10 p-6 bg-white/5'>
          <Brush className='w-5 h-5 text-green-400' />
          <h3 className='mt-3 text-lg font-semibold'>Graphic Design</h3>
          <p className='mt-2 text-sm text-white/80'>Brand identities, social creatives, pitch decks, and marketing assets.</p>
        </div>
        <div className='rounded-lg border border-white/10 p-6 bg-white/5'>
          <Gauge className='w-5 h-5 text-green-400' />
          <h3 className='mt-3 text-lg font-semibold'>Performance & SEO</h3>
          <p className='mt-2 text-sm text-white/80'>Core Web Vitals, Lighthouse, and technical SEO best practices.</p>
        </div>
        <div className='rounded-lg border border-white/10 p-6 bg-white/5'>
          <Megaphone className='w-5 h-5 text-green-400' />
          <h3 className='mt-3 text-lg font-semibold'>Social Media Ads</h3>
          <p className='mt-2 text-sm text-white/80'>Paid campaigns, creatives, and optimization across major platforms.</p>
        </div>
        <div className='rounded-lg border border-white/10 p-6 bg-white/5'>
          <ShieldCheck className='w-5 h-5 text-green-400' />
          <h3 className='mt-3 text-lg font-semibold'>Security & Best Practices</h3>
          <p className='mt-2 text-sm text-white/80'>Hardening, secure defaults, auth, and safe data handling.</p>
        </div>
        <div className='rounded-lg border border-white/10 p-6 bg-white/5'>
          <Wrench className='w-5 h-5 text-green-400' />
          <h3 className='mt-3 text-lg font-semibold'>Maintenance & Support</h3>
          <p className='mt-2 text-sm text-white/80'>Upgrades, monitoring, and ongoing improvements.</p>
        </div>
        <div className='rounded-lg border border-white/10 p-6 bg-white/5'>
          <BarChart3 className='w-5 h-5 text-green-400' />
          <h3 className='mt-3 text-lg font-semibold'>Digital Marketing</h3>
          <p className='mt-2 text-sm text-white/80'>Content, email, analytics, and conversion rate optimization.</p>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 md:px-8 mt-12'>
        <div className='rounded-xl border border-white/10 p-6 md:p-8 bg-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5'>
          <div>
            <h3 className='text-xl md:text-2xl font-semibold'>Ready to get started?</h3>
            <p className='mt-2 text-white/80 text-sm md:text-base'>Tell us about your goals and timelines.</p>
          </div>
          <Link href='/contact'>
            <Button className='bg-rose-800 hover:bg-rose-700 rounded-sm text-xs font-semibold'>Contact us</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage


