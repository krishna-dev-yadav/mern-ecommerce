import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contect = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-20 border-t'>
                <Title text1={'Contect'} text2={'US'} />
            </div>
            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
                <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-semibold text-xl text-gray-600'>Our store</p>
                    <p className='text-gray-500 '>578 WILLIUM street <br /> New york, us</p>
                    <p className='text-gray-500'> Tel: (+91) 787575589 <br />alpha@Forever.com</p>
                    <p className='font-semibold text-xl text-gray-600'> Careers at forever</p>
                    <button className='bg-black text-white py-3 px-10 rounded-[20px]'>Explore job</button>

                </div>
            </div>
        </div>
    )
}

export default Contect