import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-[#fcebee] h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-[#EF99AA] text-5xl font-bold xl:text-6xl mt-10">Sip & Save Specials! </h1>
        <p className="text-[#EF99AA] xl:text-xl">
        Buy one of our signature boba teas, and get the second one FREE! Dive into a symphony of flavors with every sip. 
        This offer is valid for both in-store and online orders. Use code: BOGOBLISS at checkout.  
        </p>
        <CountDown/>
        <button className="bg-[#EF99AA] text-white rounded-md py-3 px-6 mb-11">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offer.svg" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;