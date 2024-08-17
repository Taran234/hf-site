import Image from "next/image";
import * as React from "react";

export function Step3() {
    return (
        <div className="flex flex-col pt-5 text-base leading-6 text-white rounded-xl w-full md:max-w-5xl mx-auto">
            <div className="flex flex-col justify-center px-0.5  mt-10 w-full ">
                <div className="flex z-10 flex-col justify-center items-start px-7 py-8  rounded-xl bg-neutral-900 ">

                    <div className="flex md:flex-row flex-col">
                        <div className="mt-5 md:text-base text-sm font-medium md:leading-8  md:justify-start">
                            After finalizing the design concept, we break down the project into actionable tasks and kick off the development phase. Our team will start building your website or digital marketing solution, ensuring all elements are in place to meet your strategic goals.                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
