"use client"
import Link from "next/link";
import { useRef, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { TiTick } from "react-icons/ti";

export function Hero() {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    return (
        <div className="flex flex-col justify-end items-center px-2 mt-20 text-base font-medium leading-5 ">
            <div className="flex flex-col items-center mt-10 w-full max-w-[1040px] ">
                <div className="flex flex-col justify-center  max-w-full p-[1px] bg-gradient-to-r from-gray-800 via-amber-400 to-gray-800 text-xs font-bold text-white uppercase rounded-md ">
                    <div className="flex gap-1.5 justify-center items-start px-5 py-2.5 bg-neutral-900">
                        <CiBellOn size={32} />
                        <div className="flex-auto my-auto">
                            A FULL TEAM FOR THE SAME PRICE OF A SINGLE EMPLOYEE
                        </div>
                    </div>
                </div>
                <h1 className="mt-12 md:text-6xl text-4xl text-center md:px-12  mx-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent  bg-clip-text uppercase ">
                    Toronto's <span className="text-orange-500 uppercase tracking-tighter">All-In-One </span>Custom Website Solution
                </h1>
                <h1 className="mt-6 text-white md:px-16 px-4 leading-[150%] max-md:max-w-full">
                    Get unlimited development requests with a simple all-inclusive monthly subscription. From ideation, to design, to development... We have all you need to bring your website ideas to life.
                </h1>

                <div className="flex gap-5 justify-center md:px-16 px-4 md:justify-between mt-11 capitalize leading-[100%] max-md:flex-wrap max-md:mt-10">
                    <Link href="#how-it-works" className="flex gap-3 justify-end py-1.5 pr-1.5 pl-3 text-black bg-white rounded-md">

                        <div className="grow my-auto ">How does it work?</div>

                        <div className="border-2 p-1">
                            <BiRightArrowAlt size={32} />
                        </div>
                    </Link>
                    <Link href="#our-work" className="flex gap-3 justify-end py-1.5 pr-1.5 pl-3 bg-black rounded-md text-stone-100">
                        <div className="grow my-auto">See Previous Work</div>
                        <BsStack size={32} />
                    </Link>
                </div>
                <div className="flex gap-5 justify-between mt-10 md:px-16 px-4 text-sm text-neutral-400 max-md:flex-wrap">
                    <div className="flex gap-1.5 justify-center py-1">
                        <TiTick size={22} />
                        <div className="flex-auto">Unlimited Tasks & Revisions</div>
                    </div>
                    <div className="flex gap-1.5 py-0.5">
                        <TiTick size={22} />
                        <div className="flex-auto">Monthly Subscription</div>
                    </div>
                    <div className="flex gap-1.5 py-0.5">
                        <TiTick size={22} />
                        <div className="flex-auto">24/7 support</div>
                    </div>
                    <div className="flex gap-1.5 py-0.5">
                        <TiTick size={22} />
                        <div className="flex-auto">Dedicated Developers Team</div>
                    </div>
                </div>
                <div className="relative self-stretch mt-12 w-full aspect-[1.5]  ">
                    <video
                        ref={videoRef}
                        className="w-full h-full"
                        preload="auto"
                        muted
                        autoPlay
                        autoFocus
                        loop

                    >
                        <source src="/v6.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                </div>
            </div>
        </div>
    );
}
