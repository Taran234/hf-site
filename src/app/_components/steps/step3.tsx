import Image from "next/image";
import * as React from "react";

export function Step3() {
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
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">
            <div className="flex flex-col justify-center px-0.5  mt-10 w-full ">
                <div className="flex z-10 flex-col justify-center items-start px-7 py-8  rounded-xl bg-neutral-900 ">

                    <div className="flex md:flex-row flex-col">
                        <div className="mt-5 md:text-base text-sm font-medium md:leading-8  md:justify-start">
                            Once you approve the design, our team will start building your website. We break the project into actionable steps and keep you informed throughout the process to ensure everything aligns with your vision.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
