import React from 'react'
import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/posts'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <article className='text-white mt-24 md:mt-28'>
      <div className='max-w-3xl mx-auto px-4 md:px-8'>
        <p className='text-[10px] md:text-xs tracking-wider text-white/60'>{new Date(post.date).toLocaleDateString()}</p>
        <h1 className='text-3xl md:text-5xl font-semibold mt-1'>{post.title}</h1>
        <div className='prose prose-invert mt-6 max-w-none'>
          <p>{post.content}</p>
        </div>
      </div>
    </article>
  )
}


