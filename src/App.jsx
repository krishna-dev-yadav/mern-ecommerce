import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contect from './pages/Contect'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Placeorder from './pages/Placeorder'
import Order from './pages/Order'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Searchbar from './components/searchbar'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-gray-200'>
      <ToastContainer />
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Collection' element={<Collection />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contect' element={<Contect />} />
        <Route path='/Product/:ProductId' element={<Product />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Placeorder' element={<Placeorder />} />
        <Route path='/Order' element={<Order/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
