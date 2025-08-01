import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import Title from '../components/Title'

const Order = () => {
    const { products, currency } = useContext(Shopcontext)
    return (
        <div className=' border-t pt-16'>
            <div className='text-2xl'>
                <Title text1={'MY'} text2={'ORDERS'} />
            </div>
            <div>
                {products.slice(1, 4).map((item, index) => (
                    <div key={index} className='py-4 border-b text-gray-700 flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                        <div className='flex items-start gap-6 text-sm'>
                            <img src={item.image[0]} className='w-16 sm:w-20' />
                            <div>
                                <p className='text-base font-medium'>{item.name}</p>
                                <div className='flex items-center gap-2 mt-3 text-base text-gray-700'>
                                    <p className='text-lg'>{currency}{item.price}</p>
                                    <p> Quentity: 1</p>
                                    <p> Size: medium</p>
                                </div>
                                <p className='mt-2'>Date: <span className='text-gray-400'>25,jul,2025</span></p>
                            </div>
                        </div>
                        <div className='md:w-1/2 flex justify-between'>
                            <div className='flex items-center ' gap-2>
                                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                <p className='text-sm md:text-base'> Ready to ship</p>
                            </div>
                            <button className='border border-gray-400 hover:scale-110 transition px-4 py-2 text-sm font-medium rounded-xl'>TRACK OREDER</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Order
