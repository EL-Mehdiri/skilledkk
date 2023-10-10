import React from 'react'
import Image from 'next/image'

const Intro = () => {
    return (
        <section className='sm:flex justify-between items-center'>
            <div className='w-1/2'>
                <div className='w-[480px] space-y-10'>
                    <h1 className=' text-primary  text-[56px] font-extrabold'>
                        Maximize skill, <br />
                        minimize budget
                    </h1>
                    <p className='text-[18px] font-[500]  leading-7'>
                        Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.
                    </p>
                    <p className='py-4 w-fit text-[#fff] px-8 bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] hover:opacity-40 text-white rounded-full'>Get Started</p>

                </div>
            </div>
            <div className='relative  flex items-center justify-center' >
                <div className='relative px-20'>
                    <div className='z-30 right-0 bg-[#fff] rounded-md  top-0 absolute shadow-xl px-8 py-4'>
                        <p className='text-[14px]  font-bold text-[#83869A]'>Course hours</p>
                        <h1 className='text-primary text-[32px] font-extrabold'>29k</h1>
                    </div>
                    <div className='z-30 left-0 bottom-0 bg-[#fff] rounded-md absolute shadow-2xl px-8 py-4'>
                        <p className='text-[14px] font-bold text-[#83869A]'>Course hours</p>
                        <h1 className='text-primary text-[32px] font-extrabold'>1,451</h1>
                    </div>


                    <div>
                        <div className='z-20 w-fit relative bg-gradient-to-b pt-16 from-[#FF6F48] to-[#F02AA6] rounded-full'>
                            <Image className=' rounded-full' src='/image-removebg-preview(509).png' height={200} width={280} />

                        </div>
                    </div>
                </div>
            </div>
            <Image className=' hidden lg:block absolute top-0 right-0 z-0' src='/Rectangle.png' height={400} width={500} />
        </section >
    )
}

export default Intro