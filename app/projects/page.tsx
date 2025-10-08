import React from 'react'
import Link from 'next/link'

const ProjectsPage = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      desc: 'Headless commerce with Next.js, Stripe, and CMS integration.',
      href: '#',
    },
    {
      title: 'Design System',
      desc: 'Reusable components and tokens across multiple products.',
      href: '#',
    },
    {
      title: 'Analytics Dashboard',
      desc: 'Real-time data viz and reporting for business operations.',
      href: '#',
    },
    {
      title: 'Marketing Site',
      desc: 'SEO-first marketing site with top Core Web Vitals.',
      href: '#',
    },
    {
      title: 'Internal Tools',
      desc: 'Workflow automation and admin interfaces.',
      href: '#',
    },
    {
      title: 'Learning Platform',
      desc: 'Interactive lessons and progress tracking.',
      href: '#',
    },
  ]

  return (
    <div className='text-white mt-24 md:mt-28'>
      <section className='max-w-7xl mx-auto px-4 md:px-8'>
        <h1 className='text-3xl md:text-5xl font-semibold'>Projects</h1>
        <p className='mt-4 text-white/80 md:max-w-2xl'>A selection of work that showcases our approach to performance, UX, and delivery.</p>
      </section>

      <section className='max-w-7xl mx-auto px-4 md:px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((p) => (
          <div key={p.title} className='rounded-lg border border-white/10 p-5 bg-white/5 hover:bg-white/10 transition-colors'>
            <h3 className='text-lg font-semibold'>{p.title}</h3>
            <p className='mt-2 text-sm text-white/80'>{p.desc}</p>
            <Link href={p.href} className='text-xs font-semibold underline underline-offset-4 mt-4 inline-block'>View case study</Link>
          </div>
        ))}
      </section>
    </div>
  )
}

export default ProjectsPage
