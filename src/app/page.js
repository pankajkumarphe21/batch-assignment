import About from '@/components/About'
import Features from '@/components/Features'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Features/>
    </div>
  )
}

export default page