'use client'
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { useCallback, useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
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
                <img src={`/harbourfront.png`} alt={`harbourfront`} className="rounded-lg w-56 my-2" />
                <img src={`/web-designs.png`} alt={'web designers near me'} className="rounded-lg w-48 ml-4 -mt-7" />
            </div>
            <div className={`md:flex md:flex-row md:relative md:justify-evenly gap-12 md:mx-auto hidden md:top-1 inset-x-0 md:text-lg my-4  text-white ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
                <Link href="/#how-it-works" >How We Work</Link>
                <Link href="/#our-work" >Designs</Link>
                <Link href="/#reviews" >Reviews</Link>
                <Link href="/#blogs" >Blogs</Link>
                {/* <Link href="#blogs" >Blogs</Link> */}
                <Link href="/#faq" >FAQs</Link>
                <ModalTrigger className="bg-amber-500  justify-center items-center flex  text-white  group/modal-btn">
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
