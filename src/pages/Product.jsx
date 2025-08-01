import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Shopcontext } from '../Context/Shopcontext'
import { assets } from '../assets/assets'
import RelatedProduct from '../components/RelatedProduct'

const Product = () => {
    const { ProductId } = useParams()
    const { products, currency,addToCart } = useContext(Shopcontext)
    const [productData, setproductData] = useState(false)
    const [image, setimage] = useState('')
    const [size, setsize] = useState('')

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === ProductId) {
                setproductData(item)
                setimage(item.image[0])
                return null;
            }
        })
    }

    useEffect(() => {
        fetchProductData()
    }, [ProductId, products])

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/*Product data */}
            <div className='flex gap-12 flex-col sm:gap-12 sm:flex-row'>
                {/*Image data */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto  sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {
                            productData.image.map((item, index) => (
                                <img onClick={() => setimage(item)} src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img src={image} alt="" className='w-full h-auto' />
                    </div>
                </div>
                {/* Product info */}
                <div className='flex-1 '>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} alt="" className='w-3.5' />
                        <img src={assets.star_icon} alt="" className='w-3.5' />
                        <img src={assets.star_icon} alt="" className='w-3.5' />
                        <img src={assets.star_icon} alt="" className='w-3.5' />
                        <img src={assets.star_dull_icon} alt="" className='w-3.5' />
                        <p className='pl-2'>(122)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>
                        {currency}{productData.price}
                    </p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select size</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((item, index) => (
                                <button onClick={() => setsize(item)} className={`border py-2 px-4 bg-gray-100 rounded-md ${item == size ? 'border-orange-500' : ''}`} key={index} >{item}</button>
                            ))}
                        </div>
                    </div>
                    <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm rounded-[20px] active:bg-gray-700 hover:scale-105 transition duration-100'>Add to Cart</button>
                    <hr className='mt-8 sm:w-4/5' />
                    <div className='text-sm text-gray-500 mt-5 flex-flex-col gap-1'>
                        <p className=''>100% Orignal Product</p>
                        <p>Cash on delivery avaiable on this product</p>
                        <p> Easy return and exchange policy within 7 days</p>
                    </div>
                </div>
            </div>
            {/* -----dibscription and review section------ */}
            <div className='mt-20'>
                <div className='flex gap-2'>
                    <b className='border bg-gray-100 rounded-[20px] px-5 py-3 text-sm'>Description</b>
                    <p className='border bg-gray-200 rounded-[20px] px-5 py-3 text-sm'> Reviews(122)</p>
                </div>
                <div className='flex flex-col border border-black rounded-[30px] mt-5 shadow-xl bg-gray-100 gap-4 px-6 py-6 text-sm text-gray-500 '>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, iure. Quisquam deleniti quod facilis nesciunt non aliquid veritatis culpa quidem, ex aperiam optio? Minima consequuntur atque labore, repellendus optio recusandae!
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laborum iusto debitis pariatur? Omnis quibusdam possimus ad debitis cumque architecto nulla sunt. Aspernatur voluptates corrupti fugit delectus atque mollitia ea.</p>
                </div>
            </div>
            {/*Display related product */}
            <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
        </div>
    ) : <div className='opacity-0'>

    </div>
}

export default Product