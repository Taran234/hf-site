import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { SkeletonFour } from "../skeletons";

export function Step4() {
    return (
        <div className="flex flex-col py-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">
            <div className="flex flex-col justify-center px-0.5 mt-4 w-full">
                <div className="flex z-10 flex-col justify-center items-start px-4 py-4 rounded-xl bg-neutral-900">
                    <div className="flex flex-col">
                        <div className="md:p-6 p-1 text-md tracking-wide font-medium text-left md:leading-8">
                            After finalizing the design, we build a website that looks great on any device—phones, tablets, or desktops. With high-quality visuals, custom graphics, and smooth animations, we make it engaging and easy to navigate. We ensure it loads fast, stays secure, and works flawlessly. Once tested, we launch your site and keep it running at its best!                        </div>
                        <div className="hidden md:flex justify-center bg-dot-white/[0.2] items-center gap-6 flex-row mt-8 w-full overflow-hidden">
                            <SkeletonFour />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
