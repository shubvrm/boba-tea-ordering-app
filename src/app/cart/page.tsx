// "use client";
// import { useCartStore } from "@/utils/store";
// import { useSession } from "next-auth/react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React, { useEffect } from "react";

// const CartPage = () => {

//   const CartPage = () => {
//     const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
//     const { data: session } = useSession();
//     const router = useRouter();
  
//     useEffect(() => {
//       useCartStore.persist.rehydrate();
//     }, []);
  
//     const handleCheckout = async () => {
//       if (!session) {
//         router.push("/login");
//       } else {
//         try {
//           const res = await fetch("http://localhost:3000/api/orders", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               price: totalPrice,
//               products,
//               status: "Not Paid!",
//               userEmail: session.user.email,
//             }),
//           });
//           const data =await res.json()
//           router.push(`/pay/${data.id}`)
//         } catch (err) {
//           console.log(err);
//         }
//       }
//     };

//   return (
//     <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-[#EF99AA] lg:flex-row">
//       {/* PRODUCTS CONTAINER */}
//       <div className="h-1/2 p-4 mb-8 flex flex-col justify-centre overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 overflow-x-hidden">
//         {/* SINGLE ITEM */}
//         <div className="flex items-center justify-between mb-4">
//           <Image src="/temporary/brown_sugar_tea.jpg" alt="" width={100} height={100} />
//           <div className="ml-4">
//             <h1 className="uppercase text-xl font-bold">Brown Sugar Tea</h1>
//             <span>Large</span>
//           </div>
//           <h2 className="font-bold mr-4">$79.90</h2>
//           <span className="cursor-pointer">X</span>
//         </div>
//         {/* SINGLE ITEM */}
//         <div className="flex items-center justify-between mb-4">
//           <Image src="/desserts/chocochip.jpeg" alt="" width={100} height={100} />
//           <div className="ml-4">
//             <h1 className="uppercase text-xl font-bold">Choco Chip Cookie</h1>
//             <span>Large</span>
//           </div>
//           <h2 className="font-bold mr-4">$79.90</h2>
//           <span className="cursor-pointer">X</span>
//         </div>
//         {/* SINGLE ITEM */}
//         <div className="flex items-center justify-between mb-4">
//           <Image src="/icecreams/chocolate.jpeg" alt="" width={100} height={100} />
//           <div className="ml-4">
//             <h1 className="uppercase text-xl font-bold">Chocolate Ice cream</h1>
//             <span>Large</span>
//           </div>
//           <h2 className="font-bold mr-4">$79.90</h2>
//           <span className="cursor-pointer">X</span>
//         </div>
//       </div>
//       {/* PAYMENT CONTAINER */}
//       <div className="h-1/2 p-4 bg-[#fcebee] flex flex-col gap-4 justify-between item lg:h-full lg:w-1/2 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
//         <div className="flex justify-between">
//           <span className="">Subtotal (3 items)</span>
//           <span className="">$81.70</span>
//         </div>
//         <div className="flex justify-between">
//           <span className="">Service Cost</span>
//           <span className="">$0.00</span>
//         </div>
//         <div className="flex justify-between">
//           <span className="">Delivery Cost</span>
//           <span className="text-green-500">FREE!</span>
//         </div>
//         <hr className="my-2" />
//         <div className="flex justify-between">
//           <span className="">TOTAL(INCL. VAT)</span>
//           <span className="font-bold">$81.70</span>
//         </div>
//         <button className="bg-[#EF99AA] text-white p-3 rounded-md w-1/2 lg:w-auto">
//           CHECKOUT
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

"use client";
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCheckout = async () => {
    if (!session) {
      router.push("/login");
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "Not Paid!",
            userEmail: session.user.email,
          }),
        });
        const data =await res.json()
        router.push(`/pay/${data.id}`)
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-[#EF99AA] lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE ITEM */}
        {products.map((item) => (
          <div className="flex items-center justify-between mb-4" key={item.id}>
            {item.img && (
              <Image src={item.img} alt="" width={100} height={100} />
            )}
            <div className="">
              <h1 className="uppercase text-xl font-bold">
                {item.title} x{item.quantity}
              </h1>
              <span>{item.optionTitle}</span>
            </div>
            <h2 className="font-bold">${item.price}</h2>
            <span
              className="cursor-pointer"
              onClick={() => removeFromCart(item)}
            >
              X
            </span>
          </div>
        ))}
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-[#fcebee] flex flex-col gap-4 justify-between item lg:h-full lg:w-1/2 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
          <div className="flex justify-between">
          <span className="">Subtotal ({totalItems} items)</span>
          <span className="">${totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">${totalPrice}</span>
        </div>
        <button
          className="bg-[#EF99AA] text-white p-3 rounded-md w-1/2 lg:w-auto"
          onClick={handleCheckout}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;