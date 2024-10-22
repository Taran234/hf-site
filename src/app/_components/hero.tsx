"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { TbBellRingingFilled } from "react-icons/tb";
import { Spotlight } from "../components/ui/spotlight";
import { ContainerScroll } from "../components/ui/scroll-container";
import { TypewriterEffect } from "../components/ui/typewriter";

interface HeroProps {
    location: any;
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

    // Split the service string into individual words
    const serviceWords: string[] = service.split(' ');

    // Create words array for the TypewriterEffect, adding each service word separately
    const words = [
        ...serviceWords.map((word: string) => ({ text: word.toUpperCase() })), // Create an object for each word
        { text: "AGENCY." }, // Add "AGENCY." as the last item
    ];


    return (
        <div className="flex -z-40 overflow-x-hidden flex-col justify-end items-center px-2 mt-16 text-base font-medium leading-5 ">
            <div className="flex flex-col items-center mt-8 w-full max-w-screen gap-4 overflow-hidden">
                <Spotlight
                    className="-top-20 -left-40 md:left-36 md:-top-20 "
                    fill="gray"
                />
                <div className="flex flex-col mt-8 justify-center max-w-full p-[1px] shadow-sm bg-gradient-to-r from-gray-800 via-[#e9a43b] to-gray-800 text-md font-bold text-white uppercase rounded-md">
                    <div className="flex gap-1.5 justify-center items-start px-5 py-3 bg-neutral-900">
                        <TbBellRingingFilled size={22} />
                        <h3 className="flex-auto my-auto">
                            To maintain quality work we only accept 5 business per month — Only{' '}
                            <span id="spots-number" className="font-extrabold text-yellow-400">
                                {spots}
                            </span>{' '}
                            spots left this month!
                        </h3>
                    </div>
                </div>
                <h1 className="mt-8 md:text-6xl text-4xl text-center md:px-7  max-w-6xl bg-gradient-to-r from-[#a2783b] via-[#f1e696] to-[#a2783b] text-transparent bg-clip-text uppercase text-balance">
                    {location ?? "Toronto"}'s <span className="text-[#ff9e0c] uppercase tracking-tighter">All-In-One </span> <br /><TypewriterEffect words={words} />
                </h1>
                <h2 className="mt-7 text-lg text-white md:px-16 px-4 leading-[150%] max-w-4xl text-center">
                    Harbourfront Web Designs is {location ?? "Toronto"}'s Premier Website Design Agency for Small to Medium Businesses and Enterprises. We Help Canadian Businesses Thrive Online with Stunning, User-Friendly Websites, SEO Optimization, and E-commerce Solutions Tailored to Your Industry.
                </h2>
                <div className="flex gap-5 justify-center md:px-10 px-4 md:justify-between mt-11 capitalize leading-[100%] max-md:flex-wrap max-md:mt-10">
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
                <div className="md:flex gap-5 justify-between my-10 md:px-16 px-4 text-sm text-neutral-400 md:flex-wrap grid " >
                    <div className="flex gap-1.5 justify-center py-1">
                        <TiTick size={22} />
                        <div className="flex-auto">Free Maintenance</div>
                    </div>
                    <div className="flex gap-1.5 py-0.5">
                        <TiTick size={22} />
                        <div className="flex-auto">Improved Google Rank</div>
                    </div>
                    <div className="flex gap-1.5 py-0.5">
                        <TiTick size={22} />
                        <div className="flex-auto">Keyword research</div>
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
