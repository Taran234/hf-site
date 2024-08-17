import { Globe } from "@/app/components/ui/globe";
import Image from "next/image";
import * as React from "react";

export function Step1() {
    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-4xl mx-auto">
            <div className="flex flex-col justify-center px-0.5 mt-8 w-full ">
                <div className="flex z-10 flex-col justify-center px-7 py-8 rounded-xl bg-neutral-900 ">
                    <div className="flex flex-col h-[300px] relative">
                        <div className="mt-5 md:text-base text-sm font-medium md:leading-8 w-full md:w-2/3">
                            Book a FREE consultation with us to discuss your business goals, design preferences, and digital marketing needs. During this call, we'll assess your current online presence, answer your questions, and outline the next steps to ensure your project’s success.
                        </div>
                        <div className="md:absolute md:block hidden -bottom-60 -right-44 items-end justify-end">
                            <Globe />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
