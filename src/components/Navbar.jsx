import React from 'react'
import Image from 'next/image'
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='mt-4 ml-32 flex items-center justify-center'>
        <Image className='' alt='Hi' src='/images/Frame.png' width={32} height={32}/>
        <h1 className='text-2xl font-bold'>uifry</h1>
        <h3 className='flex mt-[-13px] font-[1000]' style={{'fontSize':'6px'}}>TM</h3>
        <a className='ml-12 text-red-400 font-extrabold max-sm:hidden' href="">Home</a>
        <a className='ml-6 font-extrabold max-sm:hidden' href="">About Us</a>
        <a className='ml-6 font-extrabold max-sm:hidden' href="">Pricing</a>
        <a className='ml-6 font-extrabold max-sm:hidden' href="">Features</a>
        <button className='lg:ml-[150px] sm:ml-[50px] md:ml-[100px] xl:ml-[200px] bg-black text-white w-[160px] h-[50px] rounded-md'>Download</button>
        <Image alt='Hi' className='ml-20 mt-8' src='/images/Star 1.png' width={66} height={66}/>
        <div className='hidden max-sm:flex mr-12'>
          <MdOutlineMenu/>
        </div>
    </div>
  )
}

export default Navbar