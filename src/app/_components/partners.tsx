
import { DiGithubBadge, DiJsBadge, DiNpm } from "react-icons/di";
import { FaReact, FaShopify, FaWordpress } from "react-icons/fa";

import { IoLogoFirebase } from "react-icons/io5";
import { MdCss } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb, SiSanity } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

export function Partners() {
    const icons = [IoLogoFirebase, RiNextjsFill, TiHtml5, MdCss, SiSanity, SiMongodb, FaReact, DiGithubBadge, DiJsBadge, DiNpm, FaShopify, FaWordpress];

    return (
        <div className="flex justify-center items-center md:px-16 md:py-12 py-5 md:text-5xl text-2xl font-medium tracking-tighter leading-8 text-black bg-[#f6f4f2] drop-shadow-2xl max-md:px-5">
            <div className="flex flex-col items-center w-full max-w-[1194px] max-md:max-w-full uppercase font-aclonica">
                <div>Partners & Tech</div>
                <div className="relative w-full overflow-x-hidden py-4 mt-3">
                    <div className="flex space-x-8 animate-marquee w-max">
                        {icons.map((Icon, index) => (
                            <Icon key={index} className="text-black" />
                        ))}
                        {icons.map((Icon, index) => (
                            <Icon key={index + icons.length} className="text-black" />
                        ))}
                    </div>
                    {/* Fade effect */}
                    <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#f6f4f2] to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#f6f4f2] to-transparent pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
}
