import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5"></div>
    </header>
  );
}

export default Header;
