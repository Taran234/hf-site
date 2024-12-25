'use client'
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ModalTrigger } from "../components/ui/model";
import Drawer from "./drawer";

export function Header() {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);



    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setScrollDirection("down");
        } else {
            setScrollDirection("up");
        }
        setLastScrollY(currentScrollY);

        if (currentScrollY > 50) { // Adjust this value based on when you want the background to appear
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }, [lastScrollY]);

    useEffect(() => {
        const onScroll = () => {
            requestAnimationFrame(handleScroll);
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [handleScroll]);

    return (
        <div className={`flex flex-row justify-between z-30 md:px-4 md:py-0 p-1 font-medium leading-4 w-full capitalize transition-transform duration-500 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'} ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
            <div className="flex flex-col md:gap-3 gap-2 relative">
                <Image
                    src="/harbourfront1.png"
                    alt="harbourfront"
                    width={300} // equivalent to w-56
                    height={300} // adjust this based on the image aspect ratio
                    className="rounded-lg my-2"
                />
                {/* <Image
                    src="/website-designs.png"
                    alt="web designers near me"
                    width={192} // equivalent to w-48
                    height={192} // adjust this based on the image aspect ratio
                    className="rounded-lg ml-4 -mt-7"
                /> */}
            </div>
            <div className={`md:flex md:flex-row md:relative md:justify-evenly font-inknut flex-1 gap-12 md:mx-auto hidden md:top-2 inset-x-0 md:text-lg my-6 pl-16  text-white ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
                <Link href="/#how-it-works" className="relative group">
                    <span className="pb-1">How We Work</span>
                    <video
                        className="absolute left-0 bottom-0 w-full h-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        muted
                        playsInline
                        onMouseEnter={(e: any) => e.target.play()}
                        onMouseLeave={(e: any) => e.target.currentTime = 0}
                        onEnded={(e: any) => e.target.pause()}
                        src="/underline.webm"
                    />
                </Link>
                <Link href="/#reviews" className="relative group">
                    <span className="pb-1">Our Reviews</span>
                    <video
                        className="absolute left-0 bottom-0 w-full h-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        muted
                        playsInline
                        onMouseEnter={(e: any) => e.target.play()}
                        onMouseLeave={(e: any) => e.target.currentTime = 0}
                        onEnded={(e: any) => e.target.pause()}
                        src="/underline.webm"
                    />
                </Link>

                <Link href="/blogs" className="relative group">
                    <span className="pb-1">SEO Secrets</span>
                    <video
                        className="absolute left-0 bottom-0 w-full h-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        muted
                        playsInline
                        onMouseEnter={(e: any) => e.target.play()}
                        onMouseLeave={(e: any) => e.target.currentTime = 0}
                        onEnded={(e: any) => e.target.pause()}
                        src="/underline.webm"
                    />
                </Link>

                <Link href="/#faq" className="relative group">
                    <span className="pb-1">FAQs</span>
                    <video
                        className="absolute left-0 bottom-0 w-full h-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        muted
                        playsInline
                        onMouseEnter={(e: any) => e.target.play()}
                        onMouseLeave={(e: any) => e.target.currentTime = 0}
                        onEnded={(e: any) => e.target.pause()}
                        src="/underline.webm"
                    />
                </Link>

                <ModalTrigger className="bg-amber-600  justify-center items-center flex  text-white  group/modal-btn">
                    <span className="group-hover/modal-btn:-translate-y-40 text-center transition duration-500">
                        Book a Call!
                    </span>
                    <div className="translate-y-40 group-hover/modal-btn:translate-y-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        Contact Now!
                    </div>
                </ModalTrigger>
            </div>
            <div className="md:hidden absolute top-5 right-5"> <Drawer /></div>
        </div>
    );
}
