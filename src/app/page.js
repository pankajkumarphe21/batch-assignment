import About from '@/components/About'
import Advantages from '@/components/Advantages'
import Features from '@/components/Features'
import Navbar from '@/components/Navbar'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Features/>
      <Advantages/>
      <Testimonial/>
    </div>
  )
}

export default page