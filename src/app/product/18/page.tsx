import Price from "@/components/Price";
import { rockyRoad } from "@/data";
import Image from "next/image";
import React from "react";

const rockyRoadPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-[#EF99AA] md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {rockyRoad.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={rockyRoad.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{rockyRoad.title}</h1>
        <p>{rockyRoad.desc}</p>
        <Price price={rockyRoad.price} id={rockyRoad.id} options={rockyRoad.options}/>
      </div>
    </div>
  );
};

export default rockyRoadPage;