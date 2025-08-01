import React, { useContext, useState, useEffect } from 'react';
import { Shopcontext } from '../Context/Shopcontext';
import Title from './Title';
import ProductItem from './ProductItem';

const Beastseller = () => {
  const { products } = useContext(Shopcontext);
  const [beastseller, setbeastseller] = useState([]);

  useEffect(() => {
    const bestproduct = products.filter(item => item.bestseller);
    setbeastseller(bestproduct.slice(0, 5));
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLER'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700'>
          this is the second text for this website
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {beastseller.map((item, index) => (
          <ProductItem
            key={item._id || index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Beastseller;
