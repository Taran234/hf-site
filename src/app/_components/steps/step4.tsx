import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function Step4() {
    return (
        <div className="flex flex-col py-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">
            <div className="flex flex-col justify-center px-0.5 mt-4 w-full">
                <div className="flex z-10 flex-col justify-center items-start px-4 py-4 rounded-xl bg-neutral-900">
                    <div className="flex flex-col">
                        <div className="mt-5 text-lg font-medium text-left md:leading-8">
                            After finalizing the design, we focus on creating a top-notch website. We make sure it looks great on all devices, from phones to desktops. We use high-quality images and videos, custom graphics, and smooth animations to make your site engaging and easy to navigate. We also ensure it loads quickly, is secure, and functions perfectly. Once everything is tested and ready, we launch your site and continue to refine it to keep it performing at its best.
                        </div>
                        <div className="hidden md:flex justify-center bg-dot-white/[0.2] items-center gap-6 flex-row mt-8 w-full overflow-hidden">
                            <SkeletonFour />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const SkeletonFour = () => {
    const [isHovered, setIsHovered] = useState(false);

    const getVariants = (index: number) => ({
        initial: {
            x: index === 0 ? 20 : index === 2 ? -20 : 0,
            rotate: index === 0 ? -5 : index === 2 ? 5 : 0,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    });

    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] md:flex-row flex-col justify-center m-auto items-center space-x-2">
            {['/des11.jpeg', '/des8.jpeg', '/des12.jpeg'].map((src, index) => (
                <motion.div
                    key={src}
                    initial={getVariants(index).initial}
                    animate={isHovered ? getVariants(index).hover : getVariants(index).initial}
                    whileHover="hover"
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    className={` justify-center  md:w-1/3 w-full relative rounded-2xl  border-amber-600 border-b-2 border-r-2 flex flex-col items-center  ${index === 1 ? 'z-20' : ''}`}
                >
                    <Image
                        src={src}
                        alt="website designing agency Toronto"
                        width={1200}
                        height={1200}
                        loading="lazy"
                        className=" md:h-[350px] h-[200px] rounded-2xl object-cover z-10"
                    />
                </motion.div>
            ))}
        </div>
    );
};