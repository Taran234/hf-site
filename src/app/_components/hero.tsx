"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { TbBellRingingFilled } from "react-icons/tb";
import { Spotlight } from "../components/ui/spotlight";
import { ContainerScroll } from "../components/ui/scroll-container";

interface HeroProps {
    location: string | undefined;
    service: string;
}

export function Hero({ location, service }: HeroProps) {


    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [spots, setSpots] = useState(4);

    useEffect(() => {
        // Randomly set the number of spots between 4 and 2 on load
        const randomSpots = Math.floor(Math.random() * 1) + 1;
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
        <div className="flex -z-40 overflow-x-hidden flex-col justify-end items-center px-2 mt-16 text-base font-medium leading-5 ">
            <div className="flex flex-col items-center mt-4 w-full max-w-screen gap-4 overflow-hidden">
                <Spotlight
                    className="-top-20 -left-40 md:left-36 md:-top-20 "
                    fill="gray"
                />
                <div className="flex flex-col mt-8 justify-center max-w-full p-[1px] shadow-sm bg-gradient-to-r from-gray-800 via-[#e9a43b] to-gray-800 text-md font-bold text-white uppercase rounded-md">
                    <div className="flex gap-1.5 justify-center items-start px-5 py-3 bg-neutral-900">
                        <TbBellRingingFilled size={24} />
                        <h3 className="flex-auto my-auto text-xs">
                            To maintain quality work, we accept 5 clients per month — Only
                            <span id="spots-number" className="font-extrabold text-amber-400">
                                {' '}{spots}{' '}spot{"(s) "}
                            </span>left!
                        </h3>
                    </div>
                </div>
                <h1 className="mt-8 md:text-5xl text-4xl text-center md:px-7 font-inknut max-w-6xl bg-gradient-to-r from-[#a2783b] via-[#f1e696] to-[#a2783b] text-transparent bg-clip-text uppercase text-balance">
                    {location ?? "Toronto"}'s <span className="text-[#ff9e0c] uppercase tracking-tighter">Top-Rated</span> <br />custom {service} Agency
                </h1>
                <h2 className="mt-7 text-lg text-white md:px-16 px-4 leading-[150%] max-w-3xl font-sans text-center">
                    We've build custom website solutions for companies all over {location ?? "Toronto"}.<br /> Ready to take your website to the next level? Let’s make it happen!                </h2>
                <div className="flex gap-5 justify-center md:px-10 px-4 md:justify-between  capitalize leading-[100%] max-md:flex-wrap md:pt-6">
                    <Link href="#how-it-works" className="flex gap-3 justify-end py-1.5 pr-1.5 pl-3 text-black bg-white rounded-md hover:scale-90 transition-transform duration-500">
                        <div className="grow my-auto font-inknut ">How do we work?</div>
                        <div className="border-[0.2px] p-1 rounded-md shadow-inner shadow-gray-400 ">
                            <BiRightArrowAlt size={32} />
                        </div>
                    </Link>
                    <div className="border-[0.2px] p-1 rounded-md shadow-inner shadow-gray-400 hover:scale-90 transition-transform duration-500">
                        <Link href="#our-work" className="flex gap-3 justify-end py-1.5 pr-1.5 pl-3 bg-black rounded-md text-stone-100">

                            <div className="grow my-auto font-inknut">See Previous Work</div>
                            <BsStack size={32} />
                        </Link>
                    </div>
                </div>
                <div className="md:flex gap-5 justify-between my-10 md:px-16 px-4 text-sm text-neutral-400 md:flex-wrap grid " >
                    <div className="flex gap-1.5 justify-center py-1">
                        <TiTick size={22} />
                        <div className="flex-auto">Responsive Design</div>
                    </div>
                    <div className="flex gap-1.5 py-0.5">
                        <TiTick size={22} />
                        <div className="flex-auto">Future Proof</div>
                    </div>
                    <div className="flex gap-1.5 py-0.5">
                        <TiTick size={22} />
                        <div className="flex-auto">Custom Websites</div>
                    </div>
                    <div className="flex gap-1.5 py-0.5">
                        <TiTick size={22} />
                        <div className="flex-auto">24/7 On-Call Support</div>
                    </div>
                    <div className="flex gap-1.5 py-0.5">
                        <TiTick size={22} />
                        <div className="flex-auto">Satisfaction Guaranteed</div>
                    </div>
                </div>
                <ContainerScroll>
                    <div className="relative inset-0 w-full h-full object-cover scale-[105%] ">
                        <video
                            ref={videoRef}
                            className="w-full h-full"
                            preload="none"
                            muted
                            autoPlay
                            autoFocus
                            loop
                        >
                            <source src="/v6.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </ContainerScroll>
            </div>
        </div >
    );
}
