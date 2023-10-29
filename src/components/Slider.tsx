"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const data= [
  {
    id:0,
    title: "feels like home",
    image: "/slide1.jpg"
  },
  {
    id:1,
    title: "friendships form here",
    image: "/slide2.jpg"
  },
  {
    id:2,
    title: "everything you ever wanted",
    image: "/slide3.jpg"
  }
]


const Slider = () => {
  const [currentSlide, setCurrentSlide]= useState(0)

  useEffect(()=>{
    const interval= setInterval(
      ()=> setCurrentSlide(prev=>(prev ===data.length-1 ? 0: prev+1)),
      5000
    );
    return ()=> clearInterval(interval);
  }, []);

return (
  <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-[#fcebee]">
    {/* TEXT CONTAINER */}
    <div className="flex-1 flex items-center justify-center flex-col gap-8 text-[#EF99AA] font-bold">
      <h1 className="text-5xl text-center p-4 md:p-10 md:text-6xl xl:text-7xl">
        {data[currentSlide].title}
      </h1>
      <button className="bg-[#EF99AA] text-white py-4 px-8">Order Now</button>
    </div>
    {/* IMAGE CONTAINER */}
    <div className="w-full flex-1 relative">
      <Image
        src={data[currentSlide].image}
        alt=""
        fill
        className="object-cover"
      />
    </div>
  </div>
);
};

export default Slider