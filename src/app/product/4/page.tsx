import Price from "@/components/Price";
import { butterflyTea } from "@/data";
import Image from "next/image";
import React from "react";

const butterflyTeaPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-[#EF99AA] md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {butterflyTea.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={butterflyTea.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{butterflyTea.title}</h1>
        <p>{butterflyTea.desc}</p>
        <Price price={butterflyTea.price} id={butterflyTea.id} options={butterflyTea.options}/>
      </div>
    </div>
  );
};

export default butterflyTeaPage;