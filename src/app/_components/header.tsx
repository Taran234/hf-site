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
        <div className={`flex flex-row justify-between z-30 md:px-6 md:py-1 p-3 font-medium leading-4 capitalize transition-transform duration-500 bg-black ${scrollDirection === 'down' ? '-translate-y-full' : ' translate-y-0'}`}>
            <div className="flex flex-row  md:gap-3 gap-2 bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
                <Image
                    alt="Logo Harbourfront web designs"
                    width={200}
                    height={200}
                    loading="lazy"
                    src="/yatch-white.png"
                    className="shrink-0 self-stretch max-w-full aspect-[1.75] md:w-[100px] w-[64px]"
                />
                <div className="flex flex-col md:text-xl text-sm justify-center items-center">
                    <h3 className="md:items-start font-bold border-b-2 border-amber-400 md:border-b-0.5 uppercase">Harbourfront</h3>
                    <h3 className="md:items-end font-extrabold py-1">Web Designs</h3>
                </div>
            </div>

            <div className="md:hidden ">
                <button onClick={toggleDrawer} className="text-white focus:outline-none">
                    <HiMenu size={32} />
                </button>
            </div>

            <div className={`md:flex md:flex-row md:relative md:justify-center md:mx-auto absolute md:top-0 top-16 inset-x-0 flex-col md:text-lg text-sm p-1.5 py-5  text-white bg-black ${isDrawerOpen ? 'block' : 'hidden'}`}>
                <DrawerLink href="#about" onClick={toggleDrawer}>About</DrawerLink>
                <DrawerLink href="#how-it-works" onClick={toggleDrawer}>How We Work</DrawerLink>
                <DrawerLink href="#detail" onClick={toggleDrawer}>Services</DrawerLink>
                <DrawerLink href="#our-work" onClick={toggleDrawer}>Our Designs</DrawerLink>
                <DrawerLink href="#pricing" onClick={toggleDrawer}>Pricing</DrawerLink>
                <DrawerLink href="#faq" onClick={toggleDrawer}>FAQ</DrawerLink>
                <Link href="#footer" className="md:hidden flex flex-row justify-center items-center mx-auto gap-1 py-1 pr-1 pl-3  bg-orange-500 rounded-md text-stone-100">
                    <div className="flex justify-center items-center">Contact us</div>
                    <div className="bg-amber-500 rounded-xl px-1 justify-center items-center flex">
                        <BiRightArrowAlt size={32} />
                    </div>
                </Link>
            </div>

            <Link href="#footer" className="hidden md:flex flex-row items-center justify-center mx-auto my-4 gap-1 py-1 pr-1 pl-3  bg-orange-500 rounded-md text-stone-100">
                <div className="flex justify-center items-center">Contact us</div>
                <div className="bg-amber-500 rounded-xl p-1 justify-center items-center flex">
                    <BiRightArrowAlt size={32} />
                </div>
            </Link>
        </div>
    );
}

function DrawerLink({ href, onClick, children }: any) {
    return (
        <Link href={href} passHref className="block py-2 px-4 text-white hover:text-amber-400" onClick={onClick}>{children}
        </Link>
    );
}
