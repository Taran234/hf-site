import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/app/components/ui/beams";


export function Step1() {
    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-4xl mx-auto">
            <div className="flex flex-col justify-center px-0.5 mt-8 w-full ">
                <div className="flex z-10 flex-col justify-center px-4 py-4 rounded-xl bg-neutral-900 ">
                    <div className="flex flex-col-reverse  relative">
                        <div className="p-5 text-lg font-medium md:leading-8 w-full ">
                            <div className="hidden md:block justify-center items-center ">
                                <SkeletonThree />
                                {/* <Calen /> */}
                            </div>
                            Book your FREE consultation now, where we will discuss your business objectives, website preferences, and digital marketing needs in detail. It will also help us assess your current budget to outline a plan tailored to your success.
                        </div>

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
                        width={1200}
                        loading="lazy"
                        height={1200}
                        className="h-auto aspect-auto brightness-75 object-contain object-center rounded-md"
                    />
                </motion.div>
            </div>

            <div className="relative top-5 left-10 h-[350px] w-[400px] rounded-2xl z-10">

                <Image
                    src="/tablet.webp"
                    alt="Affordable web page design toronto"
                    width={1200}
                    loading="lazy"
                    height={1200}
                    className="h-auto aspect-auto brightness-75 object-contain object-center rounded-md"
                />

            </div>

            <div className="h-[200px] top-16 right-0 w-[100px] rounded-2xl relative z-20">
                <motion.div animate={floatAnimation2}>
                    <Image
                        src="/clock.webp"
                        alt="Affordable web page design toronto"
                        width={1200}
                        loading="lazy"
                        height={1200}
                        className="h-auto aspect-auto brightness-75 object-contain object-center rounded-md"
                    />
                </motion.div>
            </div>
            <BackgroundBeams />
        </div>
    );
};