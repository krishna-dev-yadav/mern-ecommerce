import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router'


const Searchbar = () => {

    const { search, setsearch, showSearch, setshowSearch } = useContext(Shopcontext)
    const [Visiable, setVisiable] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('Collection')) {
            setVisiable(true)
        }
        else {
            setVisiable(false)
        }

    }, [location])

    return showSearch && Visiable ? (
        <div className='border-t border-b bg-gray-50 text-center bg-gray-200'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input value={search} onChange={(e) => setsearch(e.target.value)} type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' />
                <img src={assets.search_icon} alt="" className='w-4' />
            </div>
            <img onClick={() => setshowSearch(false)} src={assets.cross_icon} className='inline w-3 cursor-pointer' alt="" />
        </div>
    ) : null
}

export default Searchbar