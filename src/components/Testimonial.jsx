import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <div className='relative pt-48 flex flex-col items-center'>
        <h6>TESTIMONIAL</h6>
        <h3 className='text-3xl font-[1000]'>What Our Users</h3>
        <h3 className='text-3xl font-[1000]'>Say About Us?</h3>
        <div className="absolute top-[580px] left-[370px] rounded-[50%] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[300px] border-[1px] border-black "></div>
        <div className="absolute top-[555px] left-[400px] rounded-[50%] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[300px] border-[1px] border-black"></div>
        <div className="absolute top-[530px] left-[430px] rounded-[50%] rotate-[58deg] transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[300px] border-[1px] border-black"></div>
        <Image className='absolute top-[430px] left-[278px]' src='/images/Ellipse 41.png' alt='Hi' height={300} width={300} />
        <Image className='absolute top-[520px] left-[435px]' src='/images/Ellipse 48.png' alt='Hi' height={48} width={48} />
        <Image className='absolute top-[300px] left-[174px]' src='/images/Ellipse 44.png' alt='Hi' height={300} width={300} />
        <Image className='absolute top-[300px] left-[399px]' src='/images/Ellipse 42.png' alt='Hi' height={290} width={290} />
        <Image className='absolute top-[590px] left-[174px]' src='/images/Ellipse 45.png' alt='Hi' height={290} width={290} />
        <Image className='absolute top-[590px] left-[406px]' src='/images/Ellipse 43.png' alt='Hi' height={290} width={290} />
        <Image className='absolute top-[534px] left-[448px]' src='/images/“.png' alt='Hi' height={23} width={23} />
        <div className='absolute  left-[50%] top-[370px] pl-16 pr-[230px] w-[50%]'>
            <h3 className='text-lg font-[900]'>The Best Financial Accounting </h3>
            <h3 className='mt-[-8px] text-lg font-[900]'>App Ever!</h3>
            <p className='mt-4'>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, blanditiis minus? Animi optio mollitia totam! Praesentium dicta magnam, rem laborum in consequatur nobis tempore vero molestiae, sit, magni similique iste culpa excepturi. Nihil? Lorem ipsum dolor sit amet consectetur, adipisicing elit."</p>
            <Image className='absolute top-[250px] left-[65px]' src='/images/Group 28.png' alt='Hi' height={38} width={38} />
            <Image className='absolute top-[253px] left-[112px] opacity-50' src='/images/Group 27.png' alt='Hi' height={30} width={30} />
            <Image className='absolute top-[253px] left-[152px] opacity-50' src='/images/Group 29.png' alt='Hi' height={30} width={30} />
            <Image className='absolute top-[253px] left-[192px] opacity-50' src='/images/Intersect.png' alt='Hi' height={25} width={25} />
            <Image className='absolute top-[253px] left-[232px] opacity-50' src='/images/Group 31.png' alt='Hi' height={30} width={30} />
            <h3 className='mt-[75px] font-bold'>Nick Jonas</h3>
        </div>
    </div>
  )
}

export default Testimonial