import Link from "next/link";
import React from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

function Header() {
  const session = false;
  return (
    <header className="sticky text-white top-0 z-30 flex w-full font-Urbanist items-center justify-between bg-[#000000] p-3">
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
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <AiOutlineSearch className=" headerIcon " />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
              5
            </span>
            <AiOutlineShoppingCart className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <img
            src={
              // session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
          />
        ) : (
          <AiOutlineUser className="headerIcon" />
        )}
      </div>
    </header>
  );
}

export default Header;
