import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

    const { products, search, showSearch } = useContext(Shopcontext);
    const [showfilter, setshowfilter] = useState(false);
    const [filterProduct, setfilterProduct] = useState([]);
    const [category, setcategory] = useState([]);
    const [subCategory, setsubCategory] = useState([])
    const [shortType, setshortType] = useState([])

    const toggelCategory = (e) => {
        if (category.includes(e.target.value)) {
            setcategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setcategory(prev => [...prev, e.target.value])
        }
    }

    const toggelsubcategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setsubCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setsubCategory(prev => [...prev, e.target.value])
        }
    }

    const applyfilter = () => {
        let productscopy = products.slice()

        if (showSearch && search) {
            productscopy = productscopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }

        if (category.length > 0) {
            productscopy = productscopy.filter(item => category.includes(item.category))

        }
        if (subCategory.length > 0) {
            productscopy = productscopy.filter(item => subCategory.includes(item.subCategory))
        }
        setfilterProduct(productscopy)
    }
    const shortProduct = () => {
        let fpCopy = filterProduct.slice();
        switch (shortType) {
            case 'lowhigh':
                setfilterProduct(fpCopy.sort((a, b) => (a.price - b.price)));
                break;

            case 'highlow':
                setfilterProduct(fpCopy.sort((a, b) => (b.price - a.price)));
                break;

            default:
                applyfilter();
                break;
        }
    }

    useEffect(() => {
        applyfilter();
    }, [category, subCategory, search, showSearch])

    useEffect(() => {
        shortProduct()
    }, [shortType])



    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* Filter section */}
            <div className='min-w-60'>
                <p onClick={() => setshowfilter(!showfilter)}
                    className='my-2 text-xl flex items-center cursor-pointer gap-2' >
                    FILTERS
                </p>
                <img className={`h-3 sm:hidden ${showfilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
                {/* Categories filter */}
                <div
                    className={`shadow-2xl hover:scale-105 bg-gray-200 transition rounded-2xl pl-5 py-3 mt-6 ${showfilter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2  hover:scale-110 cursor-pointer transition'>
                            <input onChange={toggelCategory} type="checkbox" className='w-3 ' value={'Men'} /> Men
                        </p>
                        <p className='flex gap-2  hover:scale-110 cursor-pointer transition'>
                            <input onChange={toggelCategory} type="checkbox" className='w-3' value={'Women'} /> Women
                        </p>
                        <p className='flex gap-2  hover:scale-110 cursor-pointer transition'>
                            <input onChange={toggelCategory} type="checkbox" className='w-3' value={'Kids'} /> Kids
                        </p>
                    </div>
                </div>
                {/* Subcategory filter */}
                <div
                    className={`shadow-2xl hover:scale-105 bg-gray-200 transition rounded-2xl pl-5 py-3 my-5 ${showfilter ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-sm font-medium">TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2 hover:scale-110 cursor-pointer transition'>
                            <input type="checkbox" className='w-3' onChange={toggelsubcategory} value={'Topwear'} /> Topwear
                        </p>
                        <p className='flex gap-2  hover:scale-110 cursor-pointer transition'>
                            <input type="checkbox" className='w-3' onChange={toggelsubcategory} value={'Bottomwear'} /> Bottomwar
                        </p>
                        <p className='flex gap-2  hover:scale-110 cursor-pointer transition'>
                            <input type="checkbox" className='w-3' onChange={toggelsubcategory} value={'Winterwear'} /> Winterwear
                        </p>
                    </div>
                </div>
            </div>
            {/* Right side  */}
            <div className='flex-1 '>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={'COLLECTION'} />
                    {/* Product Short */}
                    <select onChange={(e) => setshortType(e.target.value)} className='border-l hover:scale-110 transition border-r border-gray-400 bg-gray-200 shadow-2xl rounded-2xl text-sm px-5 '>
                        <option value="relavent">Short by: Relavent</option>
                        <option value="lowhigh"> Short by: Low to High</option>
                        <option value="highlow"> Short by: High to Low</option>
                    </select>
                </div>
                {/* map product */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {filterProduct.map((item, index) => (
                        <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Collection
