import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { BackgroundBeams } from '../components/ui/beams';

const CountUpAnimation = ({ from, to, duration = 3 }: any) => {
    const [count, setCount] = useState(from);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            controls.start({
                opacity: [0, 1],
                transition: { duration: 0.5 },
            });

            let start = from;
            const increment = (to - from) / (duration * 60); // Smooth increase, assuming 60 FPS
            const updateCount = () => {
                start += increment;
                if ((increment > 0 && start < to) || (increment < 0 && start > to)) {
                    setCount(Math.round(start));
                    requestAnimationFrame(updateCount);
                } else {
                    setCount(to);
                }
            };

            updateCount();
        }
    }, [isInView, from, to, duration]);

    return (
        <motion.div ref={ref} animate={controls}>
            {count}
        </motion.div>
    );
};

export const SkeletonOne = () => {
    const floatAnimation = {
        y: [0, -2, 0], // Moves the element up and down
        x: [0, -10, 0],  // Moves the element left and right
        transition: {
            duration: 3,   // Duration of one full loop of the animation
            repeat: Infinity, // Loop animation indefinitely
            ease: "easeInOut" // Smooth easing
        }
    };
    const floatAnimation2 = {
        y: [0, 10, 0], // Moves the element up and down
        x: [0, 10, 0],  // Moves the element left and right
        transition: {
            duration: 3,   // Duration of one full loop of the animation
            repeat: Infinity, // Loop animation indefinitely
            ease: "easeInOut" // Smooth easing
        }
    };

    return (
        <div className="w-full flex flex-wrap h-full">
            <div className="h-[200px] top-28 left-20 w-[100px] rounded-2xl relative z-20">
                <motion.div animate={floatAnimation}>
                    <Image
                        src="/phone.webp"
                        alt="Affordable web page design toronto"
                        width={600}
                        loading="lazy"
                        height={600}
                        className="h-auto aspect-auto brightness-75 object-contain object-center rounded-md"
                    />
                </motion.div>
            </div>

            <div className="relative top-5 left-10 h-[350px] w-[400px] rounded-2xl z-10">

                <Image
                    src="/tablet.webp"
                    alt="Affordable web page design brampton"
                    width={600}
                    loading="lazy"
                    height={600}
                    className="h-auto aspect-auto brightness-75 object-contain object-center rounded-md"
                />

            </div>

            <div className="h-[200px] top-16 right-0 w-[100px] rounded-2xl relative z-20">
                <motion.div animate={floatAnimation2}>
                    <Image
                        src="/clock.webp"
                        alt="Affordable web page design etobicoke"
                        width={600}
                        loading="lazy"
                        height={600}
                        className="h-auto aspect-auto brightness-75 object-contain object-center rounded-md"
                    />
                </motion.div>
            </div>
            <BackgroundBeams />
        </div>
    );
};
export const SkeletonTwo = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border  border-amber-500 p-2  items-center space-x-2 w-4/5 bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
                <div className="w-full px-2 text-xs">We can totally make your website just how you want it! </div>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-amber-500 p-2 items-center space-x-2 w-3/4 ml-auto bg-black"
            >
                <div className="w-full px-2 text-right text-xs">Really? It sounds almost too good to be true!</div>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border  border-amber-500 p-2 items-center space-x-2 w-4/5 bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
                <div className="w-full px-2 text-xs">Yep! We'll take it step by step, making sure everything works for you and fits your budget. </div>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-amber-500 p-2 items-center space-x-2 w-3/4 ml-auto bg-black"
            >
                <div className="w-full px-2 text-right text-xs">That sounds perfect! Let’s do it! 🤝 </div>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
            </motion.div>
        </motion.div>
    );
};
export const SkeletonThree = () => {
    return (
        <>
            {/* stats */}
            <div className="flex flex-wrap gap-4">
                <div className="flex flex-row w-full gap-4">
                    <div className="p-6 relative w-1/2 bg-black border-r-2 border-b-2 border-r-amber-600 border-b-amber-600 shadow-lg rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 relative bottom-4 right-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                        </svg>

                        <div className="text-2xl text-gray-100 font-medium leading-8"><CountUpAnimation from={0} to={8} duration={3} /></div>
                        <div className="text-sm text-white">Keywords</div>
                    </div>


                    <div className="p-6 relative w-1/2 bg-black border-r-2 border-b-2 border-r-amber-600 border-b-amber-600 shadow-lg rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 relative bottom-4 right-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                        <div className="text-2xl text-gray-100 font-medium leading-8"><CountUpAnimation from={0} to={5} duration={3} /></div>
                        <div className="text-sm text-white">Pages</div>
                    </div>
                </div>

                <div className="p-6 relative w-full flex flex-row bg-black border-r-2 border-b-2 border-r-amber-600 border-b-amber-600 shadow-lg rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 relative bottom-0 right-3 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div className="flex flex-col mx-5">
                        <div className="text-2xl text-gray-100 font-medium leading-8"><CountUpAnimation from={0} to={20} duration={3} /></div>
                        <div className="text-sm text-white">SEO Blog</div>
                    </div>
                </div>

            </div>

        </>
    );
}
export const SkeletonFour = () => {
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
            {['/website-design-company-toronto-11.webp', '/website-design-company-toronto-8.webp', '/website-design-company-toronto-12.webp'].map((src, index) => (
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
                        alt="website designing Company Toronto"
                        width={600}
                        height={600}
                        loading="lazy"
                        className=" md:h-[350px] h-[200px] rounded-2xl object-cover object-top z-10"
                    />
                </motion.div>
            ))}
        </div>
    );
};