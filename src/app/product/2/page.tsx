import Price from "@/components/Price";
import { taroTea } from "@/data";
import Image from "next/image";
import React from "react";

const taroTeaPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-[#EF99AA] md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {taroTea.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={taroTea.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{taroTea.title}</h1>
        <p>{taroTea.desc}</p>
        <Price price={taroTea.price} id={taroTea.id} options={taroTea.options}/>
      </div>
    </div>
  );
};

export default taroTeaPage;