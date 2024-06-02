"use client";
import React from "react";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="mt-[4vh] ml-[12.3vw] mr-[10vw] justify-around flex items-center flex-wrap">
      <div className=" flex ">
        <Image
          className=""
          alt="Hi"
          src="/images/Frame.png"
          width={32}
          height={32}
        />
        <h1 className="ml-[0.1vw] text-2xl font-bold">uifry</h1>
        <h3 className="flex mt-[1vh] font-[1000]" style={{ fontSize: "6px" }}>
          TM
        </h3>
      </div>
      <a
        className="ml-12 max-sm:hidden text-[3vh] text-red-400 font-extrabold"
        href=""
      >
        Home
      </a>
      <a className="ml-6 max-sm:hidden text-[3vh] font-extrabold" href="">
        About Us
      </a>
      <a className="ml-6 max-sm:hidden text-[3vh] font-extrabold" href="">
        Pricing
      </a>
      <a
        className="ml-6 max-sm:hidden text-[3vh] font-extrabold mr-[19vw]"
        href=""
      >
        Features
      </a>
      <button className=" max-sm:hidden bg-black text-white w-[160px] h-[50px] rounded-md">
        Download
      </button>
      <Image
        alt="Hi"
        className="ml-[3vw] mt-8"
        src="/images/Star 1.png"
        width={66}
        height={66}
      />
      <div className="sm:hidden">
        <RiMenu3Fill />
      </div>
    </div>
  );
};

export default Navbar;
