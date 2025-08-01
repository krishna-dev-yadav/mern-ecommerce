import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'

const Cart = () => {
    const { products, currency, cartItem, updateQuentity,navigate } = useContext(Shopcontext)
    const [cartData, setcartData] = useState([])

    useEffect(() => {
        const temData = [];
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                if (cartItem[items][item] > 0) {
                    temData.push({
                        _id: items,
                        size: item,
                        quantity: cartItem[items][item]
                    })
                }
            }
        }
        setcartData(temData)
    }, [cartItem])

    return (
        <div className='border-t pt-14 px-4 sm:px-10'>
            <div className='text-2xl mb-6'>
                <Title text1={'YOUR'} text2={'CART'} />
            </div>

            <div className='space-y-6'>
                {
                    cartData.map((item, index) => {
                        const productdata = products.find((product) => product._id === item._id);
                        return (
                            <div key={index} className='flex items-center justify-between border-b pb-4'>
                                {/* Product Info */}
                                <div className='flex items-center gap-4 sm:gap-6'>
                                    <img src={productdata.image[0]} className='w-16 sm:w-20 rounded-md object-cover' alt={productdata.name} />
                                    <div>
                                        <p className='text-sm sm:text-lg font-medium text-gray-800'>{productdata.name}</p>
                                        <div className='flex items-center gap-3 mt-1'>
                                            <span className='text-base font-bold text-green-700'>{currency}{productdata.price}</span>
                                            <span className='px-2 sm:px-3 sm:py-1 border bg-black text-white text-sm rounded-md'>{item.size}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quantity and Delete */}
                                <div className='flex items-center gap-3'>
                                    <input
                                        onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuentity(item._id, item.size, Number(e.target.value))}
                                        type="number"
                                        min={1}
                                        defaultValue={item.quantity}
                                        className='border rounded-2xl w-14 sm:w-20 px-2 py-1 text-center'
                                    />
                                    <img onClick={() => updateQuentity(item._id, item.size, 0)} src={assets.bin_icon} className='w-5 sm:w-6 cursor-pointer' alt="Delete" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-end my-20'>
                <div className='w-full sm:w-[450px]'>
                    <CartTotal />
                    <div className='w-full text-end'>
                        <button onClick={()=>navigate('/Placeorder')} className='bg-black text-white text-sm my-8 px-8 py-3 rounded-[20px] hover:scale-110 transition'>PROCEEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart
