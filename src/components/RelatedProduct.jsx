import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProduct = ({ category, subCategory }) => {
    const { products } = useContext(Shopcontext)
    const [related, setrelated] = useState([])
    useEffect(() => {
        if (products.length > 0) {
            let productscopy = products.slice();
            productscopy = productscopy.filter((item) => category === item.category)
            productscopy = productscopy.filter((item) => subCategory === item.subCategory);
            setrelated(productscopy.slice(0, 5))
        }

    }, [products])

    return (
        <div className='my-24'>
            <div className='text-center text-3xl mb-10 py-2'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
                {related.map((item, index) => (
                    <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                ))}
            </div>
        </div>
    )
}

export default RelatedProduct