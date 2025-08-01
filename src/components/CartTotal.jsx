import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import Title from './Title'

const CartTotal = () => {
    const { getCartamount, currency, delivery_fee } = useContext(Shopcontext)

    const amount = getCartamount();
    const total = amount === 0 ? 0 : amount + delivery_fee;

    return (
        <div className='w-[30vw]'>
            <div className='text-2xl my-5'>
                <Title text1={'CART'} text2={'TOTAL'} />
            </div>
            <div className='flex flex-col gap-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p className='text-green-700'>{currency}{amount}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Shipping fee</p>
                    <p>{currency}{delivery_fee}.00</p>
                </div>
                <hr className='border border-gray-600' />
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b className='text-green-700'>{currency}{total}.00</b>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
