import Price from "@/components/Price";
import { blackSesameTea } from "@/data";
import Image from "next/image";
import React from "react";

const blackSesameTeaPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-[#EF99AA] md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {blackSesameTea.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={blackSesameTea.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{blackSesameTea.title}</h1>
        <p>{blackSesameTea.desc}</p>
        <Price price={blackSesameTea.price} id={blackSesameTea.id} options={blackSesameTea.options}/>
      </div>
    </div>
  );
};

export default blackSesameTeaPage;