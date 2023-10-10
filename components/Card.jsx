import React from 'react'
import Image from 'next/image'

const Card = () => {
    return (
        <section className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 px-10'>
            <div className='px-[32px] py-20  bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] rounded-2xl '>
                <p className='text-[#fff] text-[32px] font-extrabold'>Check out our most popular courses!</p>
            </div>
            <Cardmin title={'Animation'} description={'Learn the latest animation techniques to create stunning motion design and captivate your audience.'}
                icon={'/Group 8.svg'} />
            <Cardmin title={'Design'} description={'Create beautiful, usable interfaces to help shape the future of how the web looks.'}
                icon={'/Group 16.svg'} />
            <Cardmin title={'Photography'} description={'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.'}
                icon={'/Group 17.svg'} />
            <Cardmin title={'Crypto'} description={'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.'}
                icon={'/Group 20.svg'} />
            <Cardmin title={'Business'} description={'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.'}
                icon={'/Group 18.svg'} />

        </section>
    )
}

export default Card


const Cardmin = ({ title, description, icon }) => {
    return (

        <div className=' relative space-y-6 p-8 shadow-2xl rounded-2xl'>
            <div className=' absolute -top-4'>
                <Image src={icon} height={56} width={56} alt='icon' />
            </div>
            <h1 className=' text-primary text-[24px] font-extrabold'>{title}</h1>
            <p className='text-[#83869A] font-medium text-[18px]'>
                {description}
            </p>
            <p className='py-4  text-[#F74780] rounded-full font-bold '>Get Started</p>
        </div>
    )
}