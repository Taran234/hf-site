import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

export function Header() {
    return (
        <div className="flex  mt-5 justify-between items-center px-6 font-medium leading-4 capitalize max-md:flex-wrap">
            <div className="flex flex-row justify-center items-center gap-3 ">
                <Image
                    alt="Logo Harbourfront web desings"
                    width={200}
                    height={200}
                    loading="lazy"
                    src="/yatch-white.png"
                    className="shrink-0 self-stretch max-w-full aspect-[1.75] w-[100px]"
                />
                <div className="flex flex-col md:text-2xl text-sm justify-center items-center">
                    <h3 className="md:items-start  font-mono border-b-yellow-600 text-orange-500  border-b-4 uppercase">Harbourfront </h3>
                    <h3 className="md:items-end font-extrabold mt-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent  bg-clip-text md:py-1">Web Designs</h3>
                </div>

            </div>



            <div className="flex md:gap-10 gap-5 justify-between self-stretch md:text-2xl text-sm p-1.5 py-5  m-auto text-white max-md:flex-wrap">
                <Link href="#about" >
                    About
                </Link>
                <Link href="#how-it-works" >
                    How It Works
                </Link>
                <Link href="#services" >
                    Services
                </Link>
                <Link href="#our-work" >
                    Our Works
                </Link>
                <Link href="#pricing" >
                    Pricing
                </Link>
                <Link href="#faq" >
                    FAQ
                </Link>
            </div>
            <Link href="#footer" className="flex gap-3 md:justify-end self-stretch py-1.5 pr-1.5 pl-3 m-auto bg-orange-500 rounded-md text-stone-100">
                <div className="grow m-auto">book a call</div>
                <div className="border-2 md:p-1">
                    <BiRightArrowAlt size={32} />
                </div>
            </Link>
        </div>
    );
}
