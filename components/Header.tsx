import { selectBasketItems } from "@/redux/basketSlice";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";

function Header() {
  const { data: session } = useSession();
  const items = useSelector(selectBasketItems);
  return (
    <header className="sticky text-white top-0 z-30 flex w-full shadow-2xl font-Urbanist items-center justify-between bg-[#0f0f0f] p-3">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative  h-8 w-10 cursor-pointer opacity-75 transition hover:opacity-100">
            <img
              style={{ objectFit: "contain" }}
              src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1683385411/logo_bmnazd.png"
              alt="logo"
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center font-Poppins justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <AiOutlineSearch className=" headerIcon " />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <span className="absolute  -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
              {items.length}
            </span>
            <AiOutlineShoppingCart className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <Image
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => signOut()}
          />
        ) : (
          <AiOutlineUser className="headerIcon" onClick={() => signIn()} />
        )}
      </div>
    </header>
  );
}

export default Header;
