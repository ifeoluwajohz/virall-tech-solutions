import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Fingerprint } from 'lucide-react'

const NotFound = () => {
  return (
    <div className='min-h-[70vh] flex flex-col items-center justify-center text-center text-white gap-7'>
      <div className='flex items-center gap-2'>
        <Fingerprint className='w-5 h-5 text-white/90' />
        <span className='text-sm font-semibold tracking-wide'>Virall Tech Solutions</span>
      </div>
      <div className='max-w-xl px-4'>
        <p className='text-[10px] md:text-xs tracking-wider text-white/60'>ERROR 404</p>
        <h1 className='text-3xl md:text-5xl font-semibold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60'>Page not found</h1>
        <p className='mt-3 text-white/75'>The page you’re looking for doesn’t exist, has been moved, or is temporarily unavailable.</p>
      </div>
      <div className='flex items-center gap-3'>
        <Link href='/'>
          <Button className='bg-rose-800 hover:bg-rose-700 rounded-sm text-xs font-semibold'>Go home</Button>
        </Link>
        <Link href='/services' className='text-xs font-semibold underline underline-offset-4'>View services</Link>
      </div>
    </div>
  )
}

export default NotFound


