import { React, useContext, useState, useEffect } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
    const { products } = useContext(Shopcontext)
    const [latestProducts, setlatestProducts] = useState([])
    useEffect(() => {
        setlatestProducts(products.slice(0, 10));

    }, [])


    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>hello this is krishna yadav </p>
            </div>
            {/*Rendring product */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))

                }
            </div>
        </div>
    )
}

export default LatestCollection
