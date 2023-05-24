import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/basketSlice";
import { urlFor } from "../sanity";

interface Props {
  product: Product;
}

function Product({ product }: Props) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket(product));

    toast.success(`${product.title} added`, {
      position: "bottom-center",
    });
  };

  return (
    <div className="slecet-none md:-w[400px] flex h-fit w-[300px] flex-col space-y-3 rounded-xl  hover:shadow-2xl border-[1px] border-[#35383C]  p-8 md:h-[400px] md:p-5">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          alt="products"
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="md:text:2xl space-y-2 text-xl text-white">
          <p className="font-Poppins">{product.title}</p>
          <p className="font-Poppins">{product.price} ₹ </p>
        </div>

        <div
          className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[50px] md:w-[50px]"
          onClick={addItemToBasket}
        >
          <ShoppingCartIcon className="h-8 w-6 text-white" />
        </div>
      </div>
    </div>
  );
}

export default Product;
