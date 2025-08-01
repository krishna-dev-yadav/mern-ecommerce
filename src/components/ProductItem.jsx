import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(Shopcontext)

  return (
    <Link className='text-gray-700 cursor-pointer border rounded-xl shadow-xl' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt={name} />
      </div>
      <p className='pt-3 pb-1 px-3 text-sm text-black'>{name}</p>
      <p className='text-sm px-3 font-medium text-green-700 py-2'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
