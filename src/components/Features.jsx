import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <div className='relative flex sm:ml-2 md:ml-4 lg:ml-6 xl:ml-16'>
      <div className='relative z-10 overflow-hidden'>
        <div className="absolute top-[40px] left-[70px] w-72 h-64 bg-gradient-to-t blur-lg opacity-75 from-red-600 to-yellow-200 rounded-[200px]"></div>
        <div className="absolute top-[40px] sm:left-[560px] md:left-[760px] lg:left-[1020px] xl:left-[1190px] w-72 h-64 bg-gradient-to-b blur-lg opacity-75 from-red-600 to-yellow-200 rounded-[200px]"></div>
        <div className="z-10 absolute top-[240px] left-[230px] rounded-[240px] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[300px] border-[1px] border-black"></div>
        <div className="z-10 absolute top-[240px] left-[260px] rounded-[240px] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[300px] border-[1px] border-black"></div>
        <div className="z-10 absolute top-[240px] left-[290px] rounded-[240px] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[300px] border-[1px] border-black"></div>
        <div className='relative z-30'>
        <Image className='md:ml-10 lg:ml-20 xl:ml-[130px] z-20' src='/images/iPhone-13-Pro-Front(2).png' height={700} width={350} alt='Hi'/>
        </div>
      </div>
    <div className='w-[50%]'>
      <div className='p-[40px] ml-[10px]'>
        <h1 className='text-red-500 tracking-widest font-medium mt-[50px]'>FEATURES</h1>
        <p className='font-[1000] text-4xl'>Uifry Premium</p>
        <div className='flex flex-col'>
          <div className='flex flex-col mt-[27px]'>
            <div className='flex'>
            <Image src='/images/star-05.png' alt='Hi' height={24} width={24} />
            <p className='font-bold ml-[8px]'>Budgeting Intervals</p>
            </div>
            <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
          </div>
        </div>
        <div>
          <div className='flex flex-col mt-[27px]'>
            <div className="flex">
            <Image src='/images/cube-02.png' alt='Hi' height={24} width={24} />
            <p className='font-bold ml-[8px]'>Budgeting Intervals</p>
            </div>
            <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
          </div>
        </div>
        <div>
          <div className='flex flex-col mt-[27px]'>
            <div className="flex">
            <Image src='/images/cube-04.png' alt='Hi' height={24} width={24} />
            <p className='font-bold ml-[8px]'>Budgeting Intervals</p>
            </div>
            <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Features