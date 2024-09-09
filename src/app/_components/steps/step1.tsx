import { motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import FloatImg from "../floatImg";
import Link from "next/link";
import { RiYoutubeFill } from "react-icons/ri";
import { SiYoutube } from "react-icons/si";

export function Step1() {
    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-4xl mx-auto">
            <div className="flex flex-col justify-center px-0.5 mt-8 w-full ">
                <div className="flex z-10 flex-col justify-center px-4 py-4 rounded-xl bg-neutral-900 ">
                    <div className="flex flex-col-reverse  relative">
                        <div className="p-5 mt-2 text-lg font-medium md:leading-8 w-full ">
                            Schedule a FREE consultation where we discuss your business goals, website preferences, and digital marketing needs. We'll assess your current online presence and outline a plan tailored to your success.
                        </div>
                        <div className=" justify-center items-center">
                            <SkeletonThree />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const SkeletonOne = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
            style={{
                background:
                    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
                backgroundSize: "400% 400%",
            }}
        >
            <motion.div className=" h-[300px] z-10s w-full rounded-lg">
                <div className="hidden md:block">
                    <FloatImg />
                </div>

                <Image
                    src={'/call.jpg'}
                    alt="avatar"
                    width={200}
                    height={200}
                    className="absolute hidden -top-10 left-10 rounded-2xl object-cover z-10"
                />

            </motion.div>
        </motion.div>
    );
};

export const SkeletonThree = () => {
    return (
        <Link
            href="..."
            target="__blank"
            className="relative flex gap-10 h-full group/image"
        >
            <div className="w-full  mx-auto bg-transparent group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
                    <SiYoutube className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
                    <Image
                        src="/sales.jpg"
                        alt="header"
                        width={800}
                        height={800}
                        className="md:h-[45vh] h-[30vh] w-full  aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
                    />
                </div>
            </div>
        </Link>
    );
};