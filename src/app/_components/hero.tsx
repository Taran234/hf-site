"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { TbBellRingingFilled } from "react-icons/tb";
import { Spotlight } from "../components/ui/spotlight";
import { ContainerScroll } from "../components/ui/scroll-container";

export function Hero({ location }: any) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [spots, setSpots] = useState(4);

    useEffect(() => {
        // Randomly set the number of spots between 4 and 2 on load
        const randomSpots = Math.floor(Math.random() * 3) + 2;
        setSpots(randomSpots);

        // Make the number blink by toggling the 'blinking' class every 0.5 seconds
        const blinkInterval = setInterval(() => {
            const element = document.getElementById('spots-number');
            if (element) {
                element.classList.toggle('blinking');
            }
        }, 500);

        // Cleanup interval on component unmount
        return () => clearInterval(blinkInterval);
    }, []);

    return (
        <div className="flex -z-40 flex-col justify-end items-center px-2 mt-16 text-base font-medium leading-5 ">
            <div className="flex flex-col items-center mt-7 w-full max-w-screen gap-4 overflow-hidden">
                <Spotlight
                    className="-top-20 -left-40 md:left-36 md:-top-20 "
                    fill="white"
                />
                <div className="flex flex-col justify-center max-w-full p-[1px] shadow-sm bg-gradient-to-r from-gray-800 via-[#e9a43b] to-gray-800 text-xs font-bold text-white uppercase rounded-md">
                    <div className="flex gap-1.5 justify-center items-start px-5 py-2.5 bg-neutral-900">
                        <TbBellRingingFilled size={22} />
                        <div className="flex-auto my-auto">
                            To keep up the qualtiy we only work with 7 businesses every month — Only{' '}
                            <span id="spots-number" className="font-extrabold text-yellow-400">
                                {spots}
                            </span>{' '}
                            spots left this month!
                        </div>
                    </div>
                </div>
                <h1 className="mt-7 md:text-6xl text-5xl text-center md:px-12  max-w-6xl bg-gradient-to-r from-[#a2783b] via-[#f1e696] to-[#a2783b] text-transparent bg-clip-text uppercase text-balance">
                    {location ?? "Toronto"}'s <span className="text-[#ff9e0c] uppercase tracking-tighter">All-In-One </span> <br />Digital Growth Solution
                </h1>
                <h2 className="mt-7 text-lg text-white md:px-16 px-4 leading-[150%] max-w-3xl text-center">
                    Get your website done for just $99 then just pay for plugins you need <br />What's the Catch?<br /> nothing, we offer it because it's a great way for us to build connections with business owners who might hire us for larger paid projects as their companies grow.
                </h2>
                <div className="flex gap-5 justify-center md:px-10 px-4 md:justify-between mt-11 capitalize leading-[100%] max-md:flex-wrap max-md:mt-10">
                    <Link href="#how-it-works" className="flex gap-3 justify-end py-1.5 pr-1.5 pl-3 text-black bg-white rounded-md">
                        <div className="grow my-auto ">How is it JUST $99?</div>
                        <div className="border-2 p-1">
                            <BiRightArrowAlt size={32} />
                        </div>
                    </Link>
                    <Link href="#our-work" className="flex gap-3 justify-end py-1.5 pr-1.5 pl-3 bg-black rounded-md text-stone-100">
                        <div className="grow my-auto">See Previous Work</div>
                        <BsStack size={32} />
                    </Link>
                </div>
                <div className="md:flex hidden gap-5 justify-between my-7 md:px-16 px-4 text-sm text-neutral-400 max-md:flex-wrap">
                    <div className="flex gap-1.5 justify-center py-1">
                        <TiTick size={22} />
                        <div className="flex-auto">Unlimited Edits</div>
                    </div>
                    <div className="flex gap-1.5 py-0.5">
                        <TiTick size={22} />
                        <div className="flex-auto">Increased Visits</div>
                    </div>
                    <div className="flex gap-1.5 py-0.5">
                        <TiTick size={22} />
                        <div className="flex-auto">Guaranteed 90+ SEO Score</div>
                    </div>
                    <div className="flex gap-1.5 py-0.5">
                        <TiTick size={22} />
                        <div className="flex-auto">24/7 On-Call Support</div>
                    </div>
                    <div className="flex gap-1.5 py-0.5">
                        <TiTick size={22} />
                        <div className="flex-auto">Dedicated Team</div>
                    </div>
                </div>
                <ContainerScroll>
                    <div className="relative inset-0 w-full h-full object-cover scale-[110%] ">
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
                </ContainerScroll>
            </div>
        </div >
    );
}
