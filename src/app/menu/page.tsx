import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link href={`/menu/${category.slug}`} key={category.id}>
          <div className="relative w-full h-1/3 max-h-[350px] bg-cover p-8 md:h-1/2" style={{ backgroundImage: `url(${category.img})` }}>
            <div className="absolute inset-0 bg-gray-500 opacity-25"></div>
            <div className={`text-${category.color} w-1/2 relative z-10`}>
              <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
              <p className="text-sm my-8">{category.desc}</p>
              <button className={`hidden 2xl:block bg-${category.color} text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}>Explore</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
