'use client'
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { useCallback, useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";

export function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<string | null>(null);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setScrollDirection("down");
        } else {
            setScrollDirection("up");
        }
        setLastScrollY(currentScrollY);
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
        <div className={` flex justify-between items-center px-6 font-medium leading-4 capitalize transition-transform duration-900 ${scrollDirection === 'down' ? '-translate-y-full' : 'bg-black translate-y-0'}`}>
            <div className="flex flex-row justify-start items-center md:gap-3 gap-2">
                <Image
                    alt="Logo Harbourfront web designs"
                    width={200}
                    height={200}
                    loading="lazy"
                    src="/yatch-white.png"
                    className="shrink-0 self-stretch max-w-full aspect-[1.75] md:w-[100px] w-[64px]"
                />
                <div className="flex flex-col md:text-xl text-sm justify-center items-center">
                    <h3 className="md:items-start font-medium border-b-yellow-600 text-orange-500 md:border-b-2 border-b-[0.5px] uppercase">Harbourfront </h3>
                    <h3 className="md:items-end font-extrabold bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text md:py-1">Web Designs</h3>
                </div>
            </div>

            <div className="md:hidden flex items-center">
                <button onClick={toggleDrawer} className="text-white focus:outline-none">
                    <HiMenu size={32} />
                </button>
            </div>

            <div className={`md:flex gap-5 justify-between self-stretch md:text-lg text-sm p-1.5 py-5 m-auto text-white max-md:flex-wrap ${isDrawerOpen ? 'block' : 'hidden'}`}>
                <DrawerLink href="#about" onClick={toggleDrawer}>About</DrawerLink>
                <DrawerLink href="#how-it-works" onClick={toggleDrawer}>How We Work</DrawerLink>
                <DrawerLink href="#services" onClick={toggleDrawer}>Services</DrawerLink>
                <DrawerLink href="#our-work" onClick={toggleDrawer}>Our Works</DrawerLink>
                <DrawerLink href="#pricing" onClick={toggleDrawer}>Pricing</DrawerLink>
                <DrawerLink href="#faq" onClick={toggleDrawer}>FAQ</DrawerLink>
                <Link href="#footer" className="md:hidden flex gap-3 md:justify-end self-stretch py-1 pr-1 mt-3 pl-3 m-auto bg-orange-500 rounded-md text-stone-100">
                    <div className="grow m-auto">Contact us</div>
                    <div className="border-2 md:p-1">
                        <BiRightArrowAlt size={32} />
                    </div>
                </Link>
            </div>

            <Link href="#footer" className="hidden md:flex gap-3 md:justify-end self-stretch py-1.5 pr-1.5 pl-3 m-auto bg-orange-500 rounded-md text-stone-100">
                <div className="grow m-auto">Contact us</div>
                <div className="border-2 md:p-1">
                    <BiRightArrowAlt size={32} />
                </div>
            </Link>
        </div>
    );
}

function DrawerLink({ href, onClick, children }: any) {
    return (
        <Link href={href} className="block py-2 px-4 text-white hover:text-amber-400" onClick={onClick}>
            {children}
        </Link>
    );
}
