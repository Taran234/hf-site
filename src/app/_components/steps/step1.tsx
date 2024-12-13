import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/app/components/ui/beams";


export function Step1() {
    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-4xl mx-auto">
            <div className="flex flex-col justify-center px-0.5 mt-8 w-full ">
                <div className="flex z-10 flex-col justify-center px-4 py-4 rounded-xl bg-neutral-900 ">
                    <div className="flex flex-col-reverse  relative">
                        <div className="m-5 text-md tracking-wide font-medium md:leading-8 w-full ">
                            <div className="hidden md:block justify-center items-center ">
                                <SkeletonThree />
                                {/* <Calen /> */}
                            </div>
                            Claim your FREE consultation to see how our tailored web design, SEO, and E-commerce solutions can fuel your business growth. We'll dig into your goals, discuss your website vision, and provide a quote to create a powerful, results-driven plan for your success.                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


export const SkeletonThree = () => {
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