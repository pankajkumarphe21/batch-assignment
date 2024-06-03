import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='flex flex-col mt-[180px] w-[100%] max-sm:ml-[5%] mx-[7%] items-center'>
      <div className="flex">
        <div className="flex flex-col max-sm:ml-[30px] max-sm:w-[180px]">
          <div className="flex uifry items-center">
            <Image src='/images/Frame.png' height={34} width={34}/>
            <p className='font-bold text-lg ml-[2px]'>uifry</p>
            <h3 className='flex mt-[-13px] font-[700]' style={{'fontSize':'6px'}}>TM</h3>
          </div>
          <div className="flex items-center mt-[10px]">
            <Image src='/images/Frame(1).png' height={24} width={24}/>
            <p className='font-[500] text-sm ml-[2px]'>Help@Frybix.Com</p>
          </div>
          <div className="flex items-center mt-[10px]">
            <Image src='/images/Frame(2).png' height={24} width={24}/>
            <p className='font-[500] text-sm ml-[2px]'>+1234 456 678 89 </p>
          </div>
        </div>
        <div className="flex flex-col max-sm:hidden mt-[2px] ml-[40px] max-sm:ml-[9vw]">
          <h1 className='text-xl font-semibold'>Links</h1>
          <a className='font-medium mt-[10px]' href="">Home</a>
          <a className='font-medium mt-[10px]'  href="">About Us</a>
          <a className='font-medium mt-[10px]'  href="">Bookings</a>
          <a className='font-medium mt-[10px]'  href="">Blog</a>
        </div>
        <div className="flex flex-col max-sm:hidden mt-[2px] ml-[40px] max-sm:ml-[9vw]">
          <h1 className='text-xl font-semibold'>Legal</h1>
          <a className='font-medium mt-[10px]' href="">Terms Of Use</a>
          <a className='font-medium mt-[10px]'  href="">Privacy Policy</a>
          <a className='font-medium mt-[10px]'  href="">Cookie Policy</a>
        </div>
        <div className="flex flex-col max-sm:hidden mt-[2px] ml-[40px] max-sm:ml-[9vw]">
          <h1 className='text-xl font-semibold'>Products</h1>
          <a className='font-medium mt-[10px]' href="">Take tour</a>
          <a className='font-medium mt-[10px]'  href="">Live Chat</a>
          <a className='font-medium mt-[10px]'  href="">Reviews</a>
        </div>
        <div className="flex flex-col mt-[2px] ml-[40px] max-sm:mr-[20px] max-sm:w-[200px] max-sm:ml-[10px]">
          <h1 className='text-xl font-semibold'>Newsletter</h1>
          <a className='font-medium mt-[10px]' href="">Stay Up to Date</a>
          <div className='mt-[10px] bg-white'>
          <form action="" method='post' className='max-sm:hidden'>
          <input className='py-[18px] pl-[20px] outline-none ' placeholder='Your email' type="email"  />
          <input className='bg-black text-white py-3 px-6' type="submit" value="Subscribe"  />
          </form>
          </div>
          <form action="" method='post' className='sm:hidden'>
          <input className='py-[18px] pl-[20px]  outline-none ' placeholder='Your email' type="email"  />
          <input className='mt-[20px] bg-black text-white py-3 px-6' type="submit" value="Subscribe"  />
          </form>
        </div>
      </div>
      <div className='h-[2px] mb-[20px] mt-[60px] mx-[5%] w-[87%] bg-gradient-to-r from-zinc-100 via-zinc-500 to-zinc-100'></div>
      <div className='flex justify-center mt-[20px] mb-[120px]'>
      <h1 className='max-sm:ml-[-30px]'>Copyright 2022 Uifry.Com All Rights Reserved</h1>
      </div>
    </div>
  )
}

export default Footer