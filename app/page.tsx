import Page1 from '@/components/page1'
// import Page2 from '@/components/page2'
import React from 'react'

const Home = () => {
  return (
    <div className='relative min-h-screen pb-10 px-3'>
      <div
        className='absolute inset-0'
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1756395247162-d2853aefe6ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className='absolute inset-0 bg-black/55' />
      <div className='relative z-10'>
        <Page1 />
        {/* Trust / Clients */}
        <section className='px-4 md:px-16 mt-16'>
          <div className='max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/60 text-xs'>
            <div className='border border-white/10 rounded-md p-4 text-center'>Fast delivery</div>
            <div className='border border-white/10 rounded-md p-4 text-center'>Core Web Vitals</div>
            <div className='border border-white/10 rounded-md p-4 text-center'>UX-first</div>
            <div className='border border-white/10 rounded-md p-4 text-center'>Long-term support</div>
          </div>
        </section>

        {/* Highlight Services */}
        <section className='px-4 md:px-16 mt-16'>
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white'>
            <div className='rounded-lg border border-white/10 p-6 bg-white/5'>
              <h3 className='text-lg font-semibold'>Web Apps</h3>
              <p className='mt-2 text-sm text-white/80'>Production-grade React/Next.js with TypeScript and robust testing.</p>
            </div>
            <div className='rounded-lg border border-white/10 p-6 bg-white/5'>
              <h3 className='text-lg font-semibold'>Design Systems</h3>
              <p className='mt-2 text-sm text-white/80'>Consistent UI libraries that scale across products and teams.</p>
            </div>
            <div className='rounded-lg border border-white/10 p-6 bg-white/5'>
              <h3 className='text-lg font-semibold'>Performance & SEO</h3>
              <p className='mt-2 text-sm text-white/80'>Improve Lighthouse scores and search visibility with best practices.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='px-4 md:px-16 mt-16 mb-16'>
          <div className='max-w-6xl mx-auto rounded-xl border border-white/10 p-6 md:p-8 bg-white/5 text-white'>
            <h3 className='text-xl md:text-2xl font-semibold'>Let’s build something exceptional</h3>
            <p className='mt-2 text-white/80 text-sm md:text-base'>Tell us about your goals and timeline — we’ll propose the right approach.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
