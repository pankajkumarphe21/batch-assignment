import React from 'react'
import Image from 'next/image'

const Start = () => {
  return (
    <div className='bg-zinc-900 max-sm:w-[370px] max-sm:h-[750px] max-sm:mx-[10px] max-sm:flex-col text-white h-[500px] mx-[150px] mt-[100px] flex  rounded-md'>
        <div className="flex flex-col justify-center gap-3">
        <h1 className='ml-[100px] max-sm:ml-[70px] font-bold text-4xl max-sm:mt-[100px]'>Ready to Get Started?</h1>
        <p className='w-[84%] ml-[100px] max-sm:ml-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam suscipit saepe ut.</p>
        <button className='mt-1 max-sm:ml-[70px] text-black gap-2 ml-[100px]  rounded-md bg-white w-[200px] flex py-[10px] justify-center items-center'>Download App 
            <Image className='' src='/images/Vector.png' height={31} width={25} />
        </button>
        </div>
        <div>
            <Image className='mt-8 max-sm:h-[300px] max-sm:w-[370px]' src='/images/iPhone 13 Pro.png' height={459} width={591} />
        </div>
    </div>
  )
}

export default Start