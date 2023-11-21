// import Price from "@/components/Price";
// import { ProductType } from "@/types/types";
// import Image from "next/image";
// import React from "react";

// const getData = async (id:string)=>{
//   const res = await fetch(`http://localhost:3000/api/products/${id}`,{
//     cache:"no-store"
//   })

//   if(!res.ok){
//     throw new Error("Failed!");
    
//   }

//   return res.json()
// }

// const brownSugarTeaPage = async ({ params }: { params: { id: string } }) => {
  
//   const brownSugarTea: ProductType = await getData(params.id);
    
//   return (
//     <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-[#EF99AA] md:flex-row md:gap-8 md:items-center">
//       {/* IMAGE CONTAINER */}
//       {brownSugarTea.img && (
//         <div className="relative w-full h-1/2 md:h-[70%]">
//           <Image
//             src={brownSugarTea.img}
//             alt=""
//             className="object-contain"
//             fill
//           />
//         </div>
//       )}
//       {/* TEXT CONTAINER */}
//       <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
//         <h1 className="text-3xl font-bold uppercase xl:text-5xl">{brownSugarTea.title}</h1>
//         <p>{brownSugarTea.desc}</p>
//         <Price price={brownSugarTea.price} id={brownSugarTea.id} options={brownSugarTea.options}/>
//       </div>
//     </div>
//   );
// };

// export default brownSugarTeaPage;

import DeleteButton from "@/components/DeleteButton";
import Price from "@/components/Price";
import { ProductType } from "@/types/types";
import Image from "next/image";
import React from "react";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const brownSugarTeaPage = async ({ params }: { params: { id: string } }) => {
  const brownSugarTea: ProductType = await getData(params.id);

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center relative">
      {/* IMAGE CONTAINER */}
      {brownSugarTea.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={brownSugarTea.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase">
          <span>{brownSugarTea.title}</span>
          <DeleteButton id={brownSugarTea.id} />
        </h1>
        <p>{brownSugarTea.desc}</p>
        <Price product={brownSugarTea} />
      </div>
    </div>
  );
};

export default brownSugarTeaPage;