"use client"
import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";
const About = () => {
  return (
    <div className='flex relative'>
      <div className="absolute top-[2px] left-[16vw] w-72 h-64 bg-gradient-to-b blur-lg opacity-75 from-red-600 to-yellow-200 rounded-[200px]"></div>
      <div className="absolute max-sm:top-[50vh] top-[30vh] left-[59vw] w-80 h-64 bg-gradient-to-t blur-lg opacity-75 from-red-600 to-red-200 rounded-[200px]"></div>
      <div className="absolute top-[290px] left-[72vw] rounded-[50%] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[300px] border-[1px] border-black"></div>
      <div className="absolute top-[290px] left-[73vw] rounded-[50%] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[300px] border-[1px] border-black"></div>
      <div className="absolute top-[290px] left-[74vw] rounded-[50%] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[300px] border-[1px] border-black"></div>
      <div className='relative z-1 my-8 ml-8 w-[50%] pt-16 pl-12 pr-1'>
        <h1 className='ml-[84px] max-sm:text-2xl text-5xl font-[1000]'>Make The Best Financial Decisions</h1>
        <h2 className='ml-[84px] mt-7 mr-[-24px]'>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</h2>
        <div className='flex mt-6'>
        <button className='ml-[84px] bg-black text-white w-[160px] h-[50px] rounded-md flex items-center justify-center'>Get Started <FaArrowRight /> </button>
        <button className='flex justify-center items-center ml-12 gap-2'><IoPlayCircleOutline className='h-8 w-8' /> <p className=''>Watch Video</p> </button>
        </div>
        <div className='z-2 border-l-[28px] border-b-[72px] border-b-red-500 border-l-transparent  font-semibold h-[0px] w-[400px] flex justify-center items-center ml-[248px] mt-[120px] rotate-[-49deg]'>
          <p className='text-md mt-16'>Make The Best Financial Decisions</p>
        </div>
        <div className='z-3 flex items-center rotate-[-28deg] mt-[-120px] ml-[10px]'>
          <span className='text-[100px] font-extrabold '>A</span>
          <div className='bg-black h-[74px] w-[790px] ml-[-30px] items-center flex flex-row justify-evenly pr-[20px] rounded-tr-lg rounded-br-lg text-white'>
            <div className='flex-row flex'>
              <Image className='h-[44px] w-[44px] rotate-[28deg]' src='/images/Group 35907.png' height={28} width={28} alt='Hi' />
              <div className='flex-col flex'>
                <div className='font-medium text-sm'>Achievements</div>
                <div className='font-light text-sm'>Best Finance App on PlayStore</div>
              </div>
            </div>
            <div className='bg-zinc-200 h-8 w-[1px] rotate-[28deg]'></div>
            <div className='flex-row flex'>
              <Image className='h-[44px] w-[44px] rotate-[28deg]' src='/images/Group 35908.png' height={28} width={28} alt='Hi' />
              <div className='flex-col flex'>
                <div className='font-medium text-sm'>Finance</div>
                <div className='font-light text-sm'>Most Popular Accounting App</div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-red-500 rounded-md h-[65px] w-[280px] ml-[341px] mt-[42px] flex items-center'>
          <div className='h-[65px] w-[2px] bg-black ml-12'></div>
          <Image className='h-[41px] w-[41px] ml-4' src='/images/Star 1.png' height={41} width={41} alt='Hi' />
          <div className='h-[65px] w-[2px] bg-black ml-4' ></div>
          <div className='pl-6'>
            <p className='text-sm font-bold'>Uifry Premium</p>
            <p className='text-sm font-medium'>Free Trial</p>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className='relative mt-[-50px] h-[500px]'>
        <Image className='z-2 h-[600px] w-[400px] mt-[150px] ml-[170px]' alt='Hi' src='/images/iPhone-13-Pro-Front.png' height={700} width={350}/>
        <Image className='z-3 h-[600px] w-[400px] ml-[90px] mt-[-680px]' alt='Hi' src='/images/iPhone-13-Pro-Front(1).png' height={700} width={350}/>
        <Image className='z-4 h-[600px] w-[400px] mt-[-680px]' alt='Hi' src='/images/iPhone-13-Pro-Front.png' height={700} width={350}/>
      </div>
    </div>
  )
}

export default About