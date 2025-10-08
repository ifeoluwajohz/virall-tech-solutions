import Page1 from '@/components/page1'
// import Page2 from '@/components/page2'
import React from 'react'

const Home = () => {
  return (
    <div className='relative min-h-screen'>
      <div
        className='absolute inset-0'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1634295852474-33648d53f644?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className='absolute inset-0 bg-black/55' />
      <div className='relative z-10'>
        <Page1 />
        {/* <Page2 /> */}
      </div>
    </div>
  )
}

export default Home
