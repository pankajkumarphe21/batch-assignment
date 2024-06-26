import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <div className='relative z-2 flex px-[2%] overflow-hidden max-sm:top-[200px] max-sm:flex-col'>
      <div className="absolute z-1 top-[40px] left-[80%] w-72 h-64 bg-gradient-to-b blur-lg opacity-75 from-red-600 to-yellow-200 rounded-[200px] max-sm:hidden"></div>
      <div className='relative z-10'>
        <div className="absolute top-[40px] left-[70px] max-sm:hidden w-72 h-64 bg-gradient-to-t blur-lg opacity-75 from-red-600 to-yellow-200 rounded-[200px]"></div>
        
        <div className="z-10 absolute top-[240px] left-[154px] rounded-[50%] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[270px] border-[1px] border-black"></div>
        <div className="z-10 absolute top-[240px] left-[184px] rounded-[50%] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[270px] border-[1px] border-black"></div>
        <div className="z-10 absolute top-[240px] left-[214px] rounded-[50%] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[270px] border-[1px] border-black"></div>
        <div className='relative z-30'>
        <Image className='max-sm:ml-[13.52%]  ml-[130px] z-20' src='/images/iPhone-13-Pro-Front(2).png' height={700} width={350} alt='Hi'/>
        </div>
      </div>
    <div className='w-[50%] max-sm:mt-[-130px] max-sm:mb-[200px] max-sm:w-[100%]'>
      <div className='p-[40px]'>
        <h1 className='text-red-500 tracking-widest font-medium mt-[50px]'>FEATURES</h1>
        <p className='font-[1000] text-4xl'>Uifry Premium</p>
        <div className='flex flex-col'>
          <div className='flex flex-col mt-[27px]'>
            <div className='flex'>
            <Image className='max-sm:h-[34px] w-[34px]' src='/images/star-05.png' alt='Hi' height={24} width={24} />
            <p className='font-bold ml-[8px]'>Budgeting Intervals</p>
            </div>
            <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt.</p>
          </div>
        </div>
        <div>
          <div className='flex flex-col mt-[27px]'>
            <div className="flex">
            <Image src='/images/cube-02.png' alt='Hi' height={24} width={24} />
            <p className='font-bold ml-[8px]'>Budgeting Intervals</p>
            </div>
            <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt.</p>
          </div>
        </div>
        <div>
          <div className='flex flex-col mt-[27px]'>
            <div className="flex">
            <Image src='/images/cube-04.png' alt='Hi' height={24} width={24} />
            <p className='font-bold ml-[8px]'>Budgeting Intervals</p>
            </div>
            <p>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Features