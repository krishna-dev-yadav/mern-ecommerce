import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router'
import { useState } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
const Navbar = () => {

    const [veriable, setveriable] = useState(false)
    const { setshowSearch, getCartCount } = useContext(Shopcontext)
    const nevigate = useNavigate()

    return (
        <div className='flex justify-between items-center py-5 font-medium'>
            <Link to='/'> <img src={assets.logo} alt="" className='w-36' /></Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700' >
                <NavLink to='/' className='flex flex-col items-center gap-1 hover:scale-110 transition'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/Collection' className='flex flex-col items-center gap-1 hover:scale-110 transition'>
                    <p>Collection</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/About' className='flex flex-col items-center gap-1 hover:scale-110 transition'>
                    <p>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/Contect' className='flex flex-col items-center gap-1 hover:scale-110 transition'>
                    <p>Contect us</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-6'>
                <img onClick={() => setshowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer hover:scale-110 transition' alt="" />
                <div className='group relative'>
                    <img onClick={() => nevigate('/Login')} src={assets.profile_icon} className='w-5 cursor-pointer hover:scale-110 transition ' alt="" />
                    <div className='group-hover:block hidden absolute dropdown-menu rigth-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100  text-gray-500 rounded-lg'>
                            <p className='cursor-pointer hover:text-black'>My profile</p>
                            <p onClick={() => nevigate('/Order')} className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'> Log out</p>
                        </div>
                    </div>
                </div>
                <NavLink to='/Cart' className='relative'>
                    <img src={assets.cart_icon} alt="" className='w-5 cursor-pointer hover:scale-110 transition' />
                    <p className='absolute right-[-5px] w-4 text-[8px] bottom-[-5px] text-center bg-red-400 rounded-full text-white'>{getCartCount()}</p>
                </NavLink>
                <img onClick={() => { setveriable(true) }} src={assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden hover:scale-110 transition' />
            </div>
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${veriable ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-700'>
                    <div onClick={() => { setveriable(false) }} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown_icon} alt="" className='rotate-180 h-4 hover:scale-110 transition ' />
                        <p className='text-black text-[15px]'>Back</p>
                    </div >
                    <NavLink onClick={() => { setveriable(false) }} to='/' className='py-2 pl-5 border hover:scale-110 transition'>Home</NavLink>
                    <NavLink onClick={() => { setveriable(false) }} to='/Collection' className='py-2 pl-5 border hover:scale-110 transition'>Collection</NavLink>
                    <NavLink onClick={() => { setveriable(false) }} to='/About' className='py-2 pl-5 border hover:scale-110 transition'> About</NavLink>
                    <NavLink onClick={() => { setveriable(false) }} to='/Contect' className='py-2 pl-5 border hover:scale-110 transition'>Contect us</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar