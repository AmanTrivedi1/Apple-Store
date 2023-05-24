import Image from "next/image";
import React from "react";
import Button from "./Button";

function Landing() {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between  bg-[#0f0f0f] px-8 font-Urbanist">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Powered
          </span>
          <span className="block">By Intellect</span>
          <span className="block">Driven By Values</span>
        </h1>

        <div className="space-x-8">
          <Button title="Buy Now" />
          <a className="link">Learn More</a>
        </div>
      </div>

      <div className="relative hidden h-[500px] w-[500px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
        <Image
          src="/iphonehero.webp"
          layout="fill"
          objectFit="contain"
          alt="hero image"
        />
      </div>
    </section>
  );
}

export default Landing;
