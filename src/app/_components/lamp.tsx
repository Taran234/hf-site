"use client";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { CiBellOn } from "react-icons/ci";

export const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={clsx(
                "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent w-full rounded-md z-0",
                className
            )}
        >
            <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}

                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 " />
                    <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 " />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}

                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-transparent text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20" />
                    <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 ]" />
                </motion.div>
                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
                ></motion.div>
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
                ></motion.div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-transparent "></div>
            </div>

            <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
                <div className="flex flex-col justify-center max-w-full p-[1px] bg-gradient-to-r from-gray-800 via-[#ff9900] to-gray-800 text-xs font-bold text-white uppercase rounded-md">
                    <div className="flex gap-1.5 justify-center items-start px-5 py-2.5 bg-neutral-900">
                        <CiBellOn size={32} />
                        <div className="flex-auto my-auto">
                            Your website represents your brand, Be Unique, Be You.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};