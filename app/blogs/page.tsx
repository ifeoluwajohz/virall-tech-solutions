import React from 'react'
import Link from 'next/link'
import { posts } from '@/lib/posts'

const BlogsPage = () => {
  return (
    <div className='text-white mt-24 md:mt-28'>
      <section className='max-w-7xl mx-auto px-4 md:px-8'>
        <h1 className='text-3xl md:text-5xl font-semibold'>Blog</h1>
        <p className='mt-4 text-white/80 md:max-w-2xl'>Insights on web performance, design systems, and shipping modern apps.</p>
      </section>

      <section className='max-w-7xl mx-auto px-4 md:px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts.map((post) => (
          <article key={post.slug} className='rounded-lg border border-white/10 p-5 bg-white/5 hover:cursor-pointer hover:bg-white/10 transition-colors'>
            <p className='text-[10px] md:text-xs tracking-wider text-white/60'>{new Date(post.date).toLocaleDateString()}</p>
            <h2 className='text-lg font-semibold mt-1'>{post.title}</h2>
            <p className='mt-2 text-sm text-white/80'>{post.excerpt}</p>
            <Link href={`/blogs/${post.slug}`} className='text-xs font-semibold underline underline-offset-4 mt-4 inline-block'>Read more</Link>
          </article>
        ))}
      </section>
    </div>
  )
}

export default BlogsPage


