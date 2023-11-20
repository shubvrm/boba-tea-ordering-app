import React from 'react';
import Image from 'next/image';
import { featuredProducts } from '@/data';

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-[#EF99AA]'>
      {/* WRAPPER */}
      <div className='w-max flex'>
        {/* SINGLE ITEMS */}
        {featuredProducts.map(item => {
          return (
            <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-[#fcebee] tranistion-all duration-300 md:w-[50vw] xl:w-[30vw] xl:h-[90vh]'> 
              {/* IMAGE CONTAINER */}
              {item.img && (
                <div className='relative flex-1 w-full'>
                  <Image 
                    src={item.img}
                    alt="" 
                    fill 
                    className='object-contain'
                  />
                </div>
              )}
              {/* TEXT CONTAINER */}
              <div className='flex-1 flex-col items-center justify-center text-center gap-4'>
                <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
                <p className='p-4 2xl:p-8'>{item.desc}</p>
                <span className='text-xl font-bold'>${item.price}</span>
                <div>
                  <button className='bg-[#EF99AA] text-white p-2 rounded-md'>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
