import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row  rounded-[20px] '>
            {/* Hero left side*/}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'> </p>
                        <p className='font-medium text-sm md:text-base'> Our Bestseller</p>
                    </div>
                    <h1 className='prata-regular text-red-300 text-3xl sm:py-3 lg:text-5xl leading-relaxed'>latest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                        <p className='text-semibold text-sm md:text-base'>Shop</p>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'> </p>
                    </div>
                </div>
            </div>
            {/*Hero Right side */}
            <img src={assets.hero_img} alt="" className='w-full sm:w-1/2 ' />
        </div>
    )
}

export default Hero