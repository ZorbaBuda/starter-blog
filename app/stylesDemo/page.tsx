
import Link from "next/link";
import React from "react";
import Image from "next/image";
import LogoCover from "@/public/biology_of_love.jpg";
import LogoPic from "@/public/biology_of_love_asset.jpg";
import ShelbyPic from "@/public/shelbyPic1.png";
import { TbLayoutGrid, TbLayoutList } from 'react-icons/tb'

export default function StylesDemo() {
  return (
    <div className="bg-black">
      <div className="text-center mx-auto flex gap-[1rem] text-[#787878] cursor-pointer">
          <TbLayoutList />
          <TbLayoutGrid />
      </div>
      <div key="blog alternating side by side wrapper">
        <Item />
        <ItemR />
        <Item />
      </div>
    </div>
  );
}

function Item() {
  return (
    <article className=" py-10 ml-32 bg-black flex flex-wrap ">
      <section>
        <Link href="/">
          <Image alt={"hello"} src={LogoPic} height={500} width={500} />
        </Link>
      </section>
      <section className="ml-40">
        <div className="text-xl  mt-16 text-white font-a_garamond_pro">
          9/26/23
        </div>
        <h1 className="mt-16 text-[#a8a6a1] text-5xl font-orpheus_pro_regular">
          Kink Shaming
        </h1>
        <div className="mt-20 ">
          <Link
            className="text-xl text-[#a8a6a1] underline font-a_garamond_pro"
            href="/"
          >
            Read More{" "}
          </Link>
          <Image 
           alt={"biology"} src={LogoCover} width={100} height={100}
          />
        </div>
      </section>
    </article>
  );
}

function ItemL() {
  return (
    <article className="py-10 ml-20 bg-black flex flex-wrap">
      <section>
        <Link href="/">
          <Image alt={"hello"} src={ShelbyPic} height={700} width={700} />
        </Link>
      </section>
      <section className="ml-14">
        <div className="text-xl  mt-16 text-white font-a_garamond_pro">
          9/26/23
        </div>
        <h1 className="mt-16 text-[#a8a6a1] text-5xl font-orpheus_pro_regular">
          Kink Shaming
        </h1>
        <div className="mt-20 ">
          <Link
            className="text-xl text-[#a8a6a1] underline font-a_garamond_pro"
            href="/"
          >
            Read More{" "}
          </Link>
        </div>
      </section>
    </article>
  );
}

function ItemR() {
  return (
    <article className="py-10 ml-20 bg-black flex flex-wrap">
     
      <section className="ml-14">
        <div className="text-xl  mt-16 text-white font-a_garamond_pro">
          9/26/23
        </div>
        <h1 className="mt-16 text-[#a8a6a1] text-5xl font-orpheus_pro_regular">
          Kink Shaming
        </h1>
        <div className="mt-20 ">
          <Link
            className="text-xl text-[#a8a6a1] underline font-a_garamond_pro"
            href="/"
          >
            Read More{" "}
          </Link>
        </div>
      </section>
      <section className="mr-14">
        <Link href="/">
          <Image alt={"hello"} src={ShelbyPic} height={700} width={700} />
        </Link>
      </section>
    </article>
  );
}
