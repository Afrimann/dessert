'use client'
import Image from "next/image";
import ProductItems from "./components/productItems";
import { useState } from "react";


export default function Home() {

  const [showCart,setShowCart] = useState<boolean>(false)
  const cartHandler = ():void => setShowCart(true)

  return (
    <div className="w-full h-auto bg-[#F4EDEA] box-border">
      <div className="wrapper w-full flex flex-row flex-wrap gap-6 h-[100%] p-14">
        <div className="products w-[70%] flex-3 md:w-full">
          <h1
            className="font-bold text-black text-[25px] mb-4"
          >
            Desserts
          </h1>

          <div className="productItems grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
            {
              ProductItems.map((item, index) => (
                <div key={item.id} className="flex flex-col flex-1 gap-2  rounded-md cursor-pointer">
                  <div className="">
                    <Image
                      className="w-full h-[80%] rounded-md"
                      src={item.image}
                      alt="cartItem"
                    />
                    {/* button component */}
                  </div>
                  <div className="item">
                    <h3
                      className="font-semibold text-[12px] text-[#918d8c]"
                    >
                      {item.name}
                    </h3>
                    <p
                      className="font-semibold text-[15px]"
                    >
                      {item.desc}
                    </p>
                    <h2
                      className="text-red-500 text-[17px] font-semibold"
                    >
                      ${item.price}
                    </h2>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="cartList flex-1 w-[30%] md:hidden  fixed right-0 h-[70%]"

        >
          cart store
        </div>
      </div>
    </div>

  );
}
