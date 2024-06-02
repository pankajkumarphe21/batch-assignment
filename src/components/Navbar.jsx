import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='mt-4 sm:ml-10 md:ml-16 lg-:ml-20 lg:ml-32 flex items-center'>
        <Image className='' alt='Hi' src='/images/Frame.png' width={32} height={32}/>
        <h1 className='text-2xl font-bold'>uifry</h1>
        <h3 className='flex mt-[-13px] font-[1000]' style={{'fontSize':'6px'}}>TM</h3>
        <a className='ml-12 text-red-400 font-extrabold' href="">Home</a>
        <a className='ml-6 font-extrabold' href="">About Us</a>
        <a className='ml-6 font-extrabold' href="">Pricing</a>
        <a className='ml-6 font-extrabold' href="">Features</a>
        <button className='lg:ml-[250px] sm:ml-[50px] md:ml-[100px] xl:ml-[300px] bg-black text-white w-[160px] h-[50px] rounded-md'>Download</button>
        <Image alt='Hi' className='ml-20 mt-8' src='/images/Star 1.png' width={66} height={66}/>
    </div>
  )
}

export default Navbar