import About from '@/components/About'
import Advantages from '@/components/Advantages'
import Faq from '@/components/Faq'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Start from '@/components/Start'
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
      <Faq/>
      <Start/>
      <Footer/>
    </div>
  )
}

export default page