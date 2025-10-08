import React from 'react'
import Link from 'next/link'
import { Fingerprint, TrendingUp, Rocket, Users, Target, BadgeCheck, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

const AboutPage = () => {
  return (
    <div className='text-white my-24 md:my-28'>
      {/* Hero */}
      <section className='max-w-7xl mx-auto px-4 md:px-8'>
        <div className='flex flex-col md:flex-row items-center gap-10'>
          <div className='flex-1'>
            <div className='flex items-center gap-2 text-green-400 text-xs font-semibold uppercase tracking-wider'>
              <Fingerprint className='w-4 h-4' />
              About Virall Tech Solutions
            </div>
            <h1 className='mt-3 text-3xl md:text-5xl font-semibold leading-tight'>
              We craft fast, scalable, and beautiful web experiences
            </h1>
            <p className='mt-5 text-white/80 md:max-w-2xl'>
              Virall Tech Solutions is a modern web agency focused on building high-performance web applications that delight users and drive business results. We combine strategy, design, and engineering to ship reliably at speed.
            </p>
            <div className='mt-6 flex items-center gap-4'>
              <Link href='/services'>
                <Button className='bg-rose-800 hover:bg-rose-700 rounded-sm text-xs font-semibold'>Our Services</Button>
              </Link>
              <Link href='/projects' className='text-xs font-semibold underline underline-offset-4'>View Projects</Link>
            </div>
          </div>
          <div className='flex-1 grid grid-cols-2 gap-4 w-full'>
            <div className='rounded-lg border border-white/10 p-5 bg-white/5'>
              <TrendingUp className='w-5 h-5 text-green-400' />
              <p className='mt-3 text-sm text-white/70'>SEO & Performance</p>
              <p className='text-2xl font-semibold mt-1'>Core Web Vitals first</p>
            </div>
            <div className='rounded-lg border border-white/10 p-5 bg-white/5'>
              <Rocket className='w-5 h-5 text-green-400' />
              <p className='mt-3 text-sm text-white/70'>Delivery</p>
              <p className='text-2xl font-semibold mt-1'>Ship with confidence</p>
            </div>
            <div className='rounded-lg border border-white/10 p-5 bg-white/5'>
              <Users className='w-5 h-5 text-green-400' />
              <p className='mt-3 text-sm text-white/70'>Partnership</p>
              <p className='text-2xl font-semibold mt-1'>Long-term support</p>
            </div>
            <div className='rounded-lg border border-white/10 p-5 bg-white/5'>
              <Target className='w-5 h-5 text-green-400' />
              <p className='mt-3 text-sm text-white/70'>Focus</p>
              <p className='text-2xl font-semibold mt-1'>Outcomes over output</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className='max-w-7xl mx-auto px-4 md:px-8 mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='md:col-span-2'>
          <h2 className='text-2xl md:text-3xl font-semibold'>Our mission</h2>
          <p className='mt-4 text-white/80'>
            Empower businesses and teams with reliable, maintainable, and performant web software. We believe great digital products are built at the intersection of user-centered design and technical excellence.
          </p>
          <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div className='rounded-lg border border-white/10 p-5 bg-white/5'>
              <BadgeCheck className='w-5 h-5 text-green-400' />
              <p className='mt-3 text-sm text-white/70'>Quality</p>
              <p className='text-lg font-medium mt-1'>Code you can trust</p>
            </div>
            <div className='rounded-lg border border-white/10 p-5 bg-white/5'>
              <Users className='w-5 h-5 text-green-400' />
              <p className='mt-3 text-sm text-white/70'>Collaboration</p>
              <p className='text-lg font-medium mt-1'>Transparent and proactive</p>
            </div>
          </div>
        </div>
        <div className='rounded-lg border border-white/10 p-6 bg-white/5'>
          <h3 className='text-lg font-semibold'>Quick facts</h3>
          <ul className='mt-4 space-y-3 text-sm text-white/80'>
            <li>Founded: 2025</li>
            <li>HQ: Lagos, Nigeria</li>
            <li>Focus: Web Apps, UI/UX, SEO</li>
            <li>Clients: Startups, SMEs, Enterprises</li>
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section className='max-w-7xl mx-auto px-4 md:px-8 mt-16 md:mt-24'>
        <h2 className='text-2xl md:text-3xl font-semibold'>Our journey</h2>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='rounded-lg border border-white/10 p-5 bg-white/5'>
            <Calendar className='w-5 h-5 text-green-400' />
            <p className='mt-3 text-sm text-white/70'>Early work</p>
            <p className='text-lg font-medium mt-1'>Built and tested ideas at scale</p>
          </div>
          <div className='rounded-lg border border-white/10 p-5 bg-white/5'>
            <Calendar className='w-5 h-5 text-green-400' />
            <p className='mt-3 text-sm text-white/70'>Growth</p>
            <p className='text-lg font-medium mt-1'>Launched client products and systems</p>
          </div>
          <div className='rounded-lg border border-white/10 p-5 bg-white/5'>
            <Calendar className='w-5 h-5 text-green-400' />
            <p className='mt-3 text-sm text-white/70'>Today</p>
            <p className='text-lg font-medium mt-1'>Partnering for long-term impact</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='max-w-7xl mx-auto px-4 md:px-8 mt-16 md:mt-24'>
        <div className='rounded-xl border border-white/10 p-6 md:p-8 bg-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5'>
          <div>
            <h3 className='text-xl md:text-2xl font-semibold'>Let’s build something great together</h3>
            <p className='mt-2 text-white/80 text-sm md:text-base'>
              Tell us about your goals and we’ll show you how we can help.
            </p>
          </div>
          <div className='flex items-center gap-3'>
            <Link href='/services'>
              <Button className='bg-rose-800 hover:bg-rose-700 rounded-sm text-xs font-semibold'>Work with us</Button>
            </Link>
            <Link href='https://virall.netlify.app/' target='_blank' className='text-xs font-semibold underline underline-offset-4'>Our previous site</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
