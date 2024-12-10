import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { RiMenu4Line } from "react-icons/ri";
import { BiRightArrowAlt } from "react-icons/bi";
import { ModalTrigger } from "../components/ui/model";
import Link from "next/link";
import Image from "next/image";


interface PathProps {
    d: string;
    className?: string;
    variants?: {
        closed: { d: string };
        open: { d: string };
    };
    opacity?: string;
}

const Path: React.FC<PathProps> = (props) => (
    <path
        fill="transparent"
        strokeWidth="3"
        stroke="var(--background)"
        strokeLinecap="round"
        {...props}
    />
);

type Segment = [string, any, any];

function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const menuAnimations: Segment[] = isOpen
            ? [
                [
                    "nav",
                    { transform: "translateX(0%)" },
                    { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
                ],
                [
                    "li",
                    { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
                    { delay: stagger(0.05), at: "-0.1" }
                ]
            ]
            : [
                [
                    "li",
                    { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
                    { delay: stagger(0.05, { from: "last" }), at: "<" }
                ],
                ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
            ];

        animate([
            [
                "path.top",
                { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
                { at: "<" }
            ],
            ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
            [
                "path.bottom",
                { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
                { at: "<" }
            ],
            ...menuAnimations
        ]);
    }, [isOpen]);

    return scope;
}

const Drawer: React.FC = () => {
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);
    return (
        <div
            ref={scope}
            className="relative bg-transparent z-50 overflow-hidden pb-24"
        >
            <nav className="fixed top-0 -left-10 h-screen w-11/12 bg-stone-950 transform -translate-x-full will-change-transform">
                <div className="flex flex-col relative z-40 pt-4 pl-10 font-oswald text-center  text-stone-400 ">
                    <div className="flex flex-col md:gap-3 gap-2 relative">
                        <Image
                            src="/harbourfront1.png"
                            alt="harbourfront web design agency"
                            fill
                            className="rounded-lg my-2"
                        />
                        {/* <Image
                            src="/web-designs.png"
                            alt="web designers near me"
                            width={192} // equivalent to w-48
                            height={192} // adjust this based on the image aspect ratio
                            className="rounded-lg ml-4 -mt-7"
                        /> */}
                    </div>
                </div>
                <ul className="flex flex-col gap-5 pt-10 pl-10 text-white font-bold text-2xl border-l-[0.5px] m-5 ">
                    <li className="p-2.5 transform-origin-left-5 will-change-transform-opacity-filter">
                        <a href="tel:+11234567890" className="text-white hover:underline">+1 (647) 556-6986</a>
                    </li>

                    <li className="p-2.5 transform-origin-left-5 will-change-transform-opacity-filter">
                        <Link aria-label="link to how it works section" href="/#how-it-works" onClick={toggleDrawer}>How we Work</Link>
                    </li>
                    <li className="p-2.5 transform-origin-left-5 will-change-transform-opacity-filter">
                        <Link aria-label="check designs" href="/#our-work" onClick={toggleDrawer}>Designs</Link>
                    </li>
                    <li className="p-2.5 transform-origin-left-5 will-change-transform-opacity-filter">
                        <Link aria-label="check our reviews" href="/#reviews" onClick={toggleDrawer}>Reviews</Link>
                    </li>
                    <li className="p-2.5 transform-origin-left-5 will-change-transform-opacity-filter">
                        <Link aria-label="Check out our blogs" href="/blogs" onClick={toggleDrawer}>Blogs</Link>
                    </li>
                    <li className="p-2.5 transform-origin-left-5 will-change-transform-opacity-filter">
                        <Link aria-label="Frequently asked Questions" href="/#faq" onClick={toggleDrawer}>FAQs</Link>
                    </li>
                    <li className="p-2.5 transform-origin-left-5 will-change-transform-opacity-filter">
                        <ModalTrigger className="bg-amber-500  justify-center items-center flex text-white  group/modal-btn">
                            <span className="group-hover/modal-btn:-translate-y-40 text-center transition duration-500">
                                Contact Now!
                            </span>
                            <div className="translate-y-40 group-hover/modal-btn:translate-y-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                                <BiRightArrowAlt size={32} />
                            </div>
                        </ModalTrigger>
                    </li>

                </ul>

            </nav>
            <button
                aria-label="toggle drawer"
                onClick={() => setIsOpen(!isOpen)}
                className=" w-12 h-12 rounded-full bg-transparent p-2.5"
            >
                <RiMenu4Line size={40} />
            </button>
        </div>
    );
}

export default Drawer;
