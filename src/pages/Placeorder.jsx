import React, { useCallback, useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { Shopcontext } from '../Context/Shopcontext'


const Placeorder = () => {
    const [method, setmethod] = useState('')
    const {navigate} = useContext(Shopcontext)

    return (
        <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t '>
            {/*Leftside */}
            <div className='flex flex-col gap-7 w-full sm:max-w-[480px]'>
                <div className='text-xl my-3 sm:text-2xl'>
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>
                <div className='flex gap-3'>
                    <input type="text" placeholder='FIRST NAME' className='border border-gray-300 rounded-[20px] py-1.5 px-3.5 w-full' />
                    <input type="text" placeholder='LAST NAME' className='border border-gray-300 rounded-[20px] py-1.5 px-3.5 w-full' />
                </div>
                <input type="email" placeholder='EMAIL ADDRESS' className='border border-gray-300 rounded-[20px] py-1.5 px-3.5 w-full' />
                <input type="text" placeholder='STREET' className='border border-gray-300 rounded-[20px] py-1.5 px-3.5 w-full' />
                <div className='flex gap-3'>
                    <input type="text" placeholder='CITY' className='border border-gray-300 rounded-[20px] py-1.5 px-3.5 w-full' />
                    <input type="text" placeholder='STATE' className='border border-gray-300 rounded-[20px] py-1.5 px-3.5 w-full' />
                </div>
                <div className='flex gap-3'>
                    <input type="text" placeholder='ZIPCODE' className='border border-gray-300 rounded-[20px] py-1.5 px-3.5 w-full' />
                    <input type="text" placeholder='COUNTRY' className='border border-gray-300 rounded-[20px] py-1.5 px-3.5 w-full' />
                </div>
                <input type="number" placeholder='PHONE' className='border border-gray-300 rounded-[20px] py-1.5 px-3.5 w-full' />

            </div>
            {/*tEXT RIGHT SIDE */}
            <div className='mt-8'>
                <div className='mt-8 min-w-80'>
                    <CartTotal />
                </div>
                <div className='mt-12'>
                    <Title text1={'PAYMENT'} text2={'METHOD'} />
                    {/*Payment method selection */}
                    <div className={`flex gap-6 mt-8`}>
                        <div onClick={() => setmethod('stripe')} className='flex items-center gap-3 border border-black rounded-[20px] px-3 cursor-pointer p-2 '>
                            <p className={`min-w-3.5 h-3.5 border border-gray-700 rounded-full ${method === 'stripe' ? 'bg-green-700' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                        </div>
                        <div onClick={() => setmethod('razorpay')} className='flex items-center gap-3 border border-black  rounded-[20px] px-3 cursor-pointer p-2 '>
                            <p className={`min-w-3.5 h-3.5 border border-gray-700 rounded-full  ${method === 'razorpay' ? 'bg-green-700' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
                        </div>
                        <div onClick={() => setmethod('COD')} className='flex items-center gap-3 border border-black  rounded-[20px] px-3 cursor-pointer p-2 '>
                            <p className={`min-w-3.5 h-3.5 border border-gray-700 rounded-full ${method === 'COD' ? 'bg-green-700' : ''}`}></p>
                            <p className='text-green-500 text-sm font-medium mx-4'>CASH ON DELIVARY</p>
                        </div>
                    </div>
                    <div className='w-full text-end mt-10'>
                        <button onClick={()=>navigate('/Order')} className='bg-black text-white px-16 py-3 text-sm rounded-[20px] hover:scale-110 transition '>PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placeorder
